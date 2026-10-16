window.AAF_ACCESS_CONFIG = {
  /*
   * IMPORTANT SECURITY RULE:
   * Do not put customer codes or premium video URLs in this public GitHub file.
   *
   * Set this to a private/server-side API endpoint that validates a code and
   * returns only the session that customer purchased.
   *
   * Expected POST body:
   *   { "code": "AAF-XXXX-XXXX" }
   *
   * Expected success JSON:
   *   {
   *     "ok": true,
   *     "session": {
   *       "title": "Premium Session Name",
   *       "description": "Optional description",
   *       "player_type": "html5",
   *       "video_url": "SIGNED_OR_PRIVATE_URL"
   *     }
   *   }
   *
   * YouTube/Vimeo-style iframe sessions can instead return:
   *   "player_type": "iframe",
   *   "embed_url": "SIGNED_OR_PRIVATE_EMBED_URL"
   */
  apiEndpoint: ""
};