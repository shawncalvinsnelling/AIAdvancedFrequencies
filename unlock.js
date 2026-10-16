(() => {
  const form = document.getElementById("unlock-form");
  const codeInput = document.getElementById("access-code");
  const status = document.getElementById("unlock-status");
  const playerArea = document.getElementById("player-area");
  const titleEl = document.getElementById("session-title");
  const descriptionEl = document.getElementById("session-description");
  const container = document.getElementById("video-container");
  const loopToggle = document.getElementById("loop-toggle");
  const logoutButton = document.getElementById("logout-button");
  const config = window.AAF_ACCESS_CONFIG || {};

  function clearPlayer() {
    const media = container.querySelector("video, iframe");
    if (media && media.tagName === "VIDEO") media.pause();
    container.innerHTML = "";
    playerArea.hidden = true;
    titleEl.textContent = "Your premium session";
    descriptionEl.textContent = "";
  }

  function renderSession(session) {
    clearPlayer();
    titleEl.textContent = session.title || "Premium session";
    descriptionEl.textContent = session.description || "";

    if (session.player_type === "html5" && session.video_url) {
      const video = document.createElement("video");
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.loop = loopToggle.checked;
      video.src = session.video_url;
      container.appendChild(video);
      loopToggle.onchange = () => { video.loop = loopToggle.checked; };
    } else if (session.player_type === "iframe" && session.embed_url) {
      const iframe = document.createElement("iframe");
      let src = session.embed_url;
      if (loopToggle.checked) {
        const separator = src.includes("?") ? "&" : "?";
        src += separator + "loop=1";
      }
      iframe.src = src;
      iframe.title = session.title || "Premium session";
      iframe.allow = "autoplay; encrypted-media; picture-in-picture";
      iframe.allowFullscreen = true;
      container.appendChild(iframe);
      loopToggle.onchange = () => {
        status.textContent = "For embedded players, reload the session after changing repeat mode.";
      };
    } else {
      throw new Error("The server returned an unsupported player configuration.");
    }

    playerArea.hidden = false;
    playerArea.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearPlayer();

    const code = codeInput.value.trim();
    if (!code) return;

    if (!config.apiEndpoint) {
      status.textContent = "Secure code validation is not connected yet.";
      return;
    }

    status.textContent = "Checking access…";

    try {
      const response = await fetch(config.apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code })
      });

      const data = await response.json();

      if (!response.ok || !data.ok || !data.session) {
        status.textContent = data.message || "That code is not valid for a premium session.";
        return;
      }

      status.textContent = "Access granted.";
      renderSession(data.session);
    } catch (error) {
      status.textContent = "We could not verify that code right now. Please try again.";
    }
  });

  logoutButton.addEventListener("click", () => {
    clearPlayer();
    codeInput.value = "";
    status.textContent = "Session locked.";
    codeInput.focus();
  });
})();