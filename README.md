# SkillForge Community – TikTok-Compliant Landing Page

Educational digital skills landing page designed to stay within TikTok Advertising Policies (no get-rich-quick claims, no income guarantees, clear disclaimers, proper legal pages).

## Files
- `index.html` – Main landing page
- `privacy-policy.html`
- `terms.html`
- `refund-policy.html`
- `css/style.css`
- `js/app.js` – Firebase integration

## How the Group Link Button Works

The CTA buttons fetch the current group link from **Firebase Realtime Database**.

### Setup in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/) → your project `landing-page-99a45`
2. Open **Realtime Database**
3. Create a new key (or edit existing):
   - Key: `groupLink`
   - Value: your full group URL (example: `https://chat.whatsapp.com/XXXXXXXX` or Telegram invite link)
4. Make sure the database rules allow public **read** for this path (at least for the `groupLink` node). Example rules for testing:

```json
{
  "rules": {
    "groupLink": {
      ".read": true,
      ".write": false
    }
  }
}
```

(For production, tighten write access so only you can update it.)

### Changing the Link Later
Just edit the value of `groupLink` in the Firebase Realtime Database. No need to change any code or re-upload the website.

## Important Compliance Notes for TikTok Ads

- Language focuses on **learning digital skills**, not “make money” or “get rich”.
- Clear disclaimers that no income is promised.
- Age 18+ messaging.
- Functional, mobile-friendly, original content.
- Privacy Policy, Terms, and Refund Policy are linked in the footer.
- Landing page content is consistent with educational positioning.

When creating the TikTok ad creative, keep the same educational tone. Avoid claims like “make $X per day”, “passive income”, “get rich”, etc.

## Hosting
Upload the entire folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, or your own server). Make sure all files keep the same folder structure.
