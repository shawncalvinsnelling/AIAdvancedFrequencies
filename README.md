# AI Advanced Frequencies

Professional GitHub Pages storefront for **AI Advanced Frequencies**, by Shawn Calvin Snelling.

## Website purpose

- Public home for the YouTube channel
- Free sample listening
- Organized wellness categories
- Premium single-session and membership offers
- Checkout-ready buttons
- Clear wellness / non-medical positioning

## Payments

GitHub Pages is a static public website. It can display checkout buttons, but it cannot securely protect paid video files by itself.

Recommended setup:

1. Create checkout products in Stripe Payment Links, Payhip, Gumroad, Ko-fi, or another provider.
2. Put the checkout URLs into `app.js`.
3. Deliver premium content through the payment provider or a protected/private video host.
4. Do **not** commit premium audio/video files or secret links to this public repository.

Example:

```js
const checkoutLinks = {
  single: "https://your-checkout-link",
  monthly: "https://your-membership-link",
  library: "https://your-full-library-link"
};
```

## GitHub Pages

The site entry point is `index.html`. Publish the repository from the main branch using GitHub Pages.

## Content positioning

Keep public claims centered on relaxation, focus, sleep preparation, breathing awareness, and general wellness. Do not promise that an audio recording diagnoses, treats, cures, reverses, repairs, regenerates, or prevents a medical condition.

## YouTube cleanup

Use four main playlists/categories:

- Breathing & Calm
- Sleep & Wind-Down
- Focus & Clarity
- Appearance & Wellness

Keep short videos as discovery content. Use longer sessions as the bridge to the premium library.
