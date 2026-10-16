const checkoutLinks = {
  single: "",
  monthly: "",
  library: ""
};

document.querySelectorAll(".pay-button").forEach((button) => {
  const key = button.dataset.product;
  const link = checkoutLinks[key];

  if (!link) {
    button.disabled = true;
    button.title = "Add your checkout link in app.js before publishing paid access.";
    return;
  }

  button.textContent = "Continue to secure checkout";
  button.addEventListener("click", () => {
    window.location.href = link;
  });
});