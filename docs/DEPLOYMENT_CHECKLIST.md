# Deployment Checklist

Pre-launch checklist for the Hontal landing website (`run-grow-id-main`).  
Complete every item in the **Required** column before going live.

---

## 1. Configuration — Real values

Replace all placeholder values in code before deploying.

| File | Line/Location | Placeholder | Replace with |
|------|--------------|-------------|--------------|
| `src/components/site/CTA.tsx` | WhatsApp href | `6281234567890` | Real WhatsApp number |
| `src/routes/demo.tsx` | WhatsApp href | `6281234567890` | Real WhatsApp number |
| `src/routes/demo.tsx` | Email link | `demo@hontal.id` | Real demo booking email |
| `src/components/site/Nav.tsx` | App login button | `https://app.hontal.id` | Real app URL |
| `src/components/site/Footer.tsx` | App login link | `https://app.hontal.id` | Real app URL |
| `public/robots.txt` | Sitemap URL | `https://hontal.id/sitemap.xml` | Confirm or update domain |
| `public/sitemap.xml` | All `<loc>` tags | `https://hontal.id` | Confirm or update domain |
| `src/routes/index.tsx` | All OG/canonical URLs | `https://hontal.id` | Confirm or update domain |

---

## 2. Image assets

All screenshots go in `public/screenshots/`. All serve with no code changes.

| Filename | Priority | Status |
|----------|----------|--------|
| `hero-dashboard.png` | Critical | [ ] |
| `dispatch-board.png` | Critical | [ ] |
| `driver-live-tracking.png` | High | [ ] |
| `customer-intelligence.png` | Critical | [ ] |
| `business-health-score.png` | Critical | [ ] |
| `og-image.png` (in `/public/`, not `/screenshots/`) | High | [ ] |

If any screenshot is not ready: the component shows a graceful placeholder. The site does not break.

See [SCREENSHOT_ASSETS.md](SCREENSHOT_ASSETS.md) for full spec per file.

---

## 3. Video assets

| Filename | Priority | Status |
|----------|----------|--------|
| `public/videos/demo-overview.mp4` | Optional for V1 | [ ] |

The website does not currently reference a video file in markup — wire up when ready.

See [VIDEO_ASSETS.md](VIDEO_ASSETS.md) for production spec.

---

## 4. Domain and DNS

| Task | Status |
|------|--------|
| Domain `hontal.id` registered and verified | [ ] |
| DNS pointed to Cloudflare | [ ] |
| HTTPS certificate active | [ ] |
| www redirect to apex (or vice versa) configured | [ ] |

---

## 5. Build verification

Run these commands before every deployment:

```bash
# Install dependencies
npm install

# Type check
npx tsc --noEmit

# Production build
npm run build
```

Expected output: no TypeScript errors, no unresolved imports. Build artifacts in `.output/`.

---

## 6. Cloudflare Workers deploy

```bash
# Deploy to Cloudflare Workers
npm run deploy
```

Or use the Cloudflare dashboard to upload the `.output/` directory manually.

**Preset:** `cloudflare-module` (already set in `app.config.ts`).

---

## 7. Post-deploy verification

Check these immediately after deployment:

| Check | How | Status |
|-------|-----|--------|
| Homepage loads | Open `https://hontal.id` in browser | [ ] |
| Mobile layout correct | Open on iPhone/Android or DevTools mobile | [ ] |
| `/demo` page loads | Navigate to `hontal.id/demo` | [ ] |
| WhatsApp CTA works | Click CTA button, confirm WhatsApp opens with correct number | [ ] |
| OG image shows | Paste URL in [opengraph.xyz](https://www.opengraph.xyz) or WhatsApp to preview | [ ] |
| robots.txt accessible | Visit `hontal.id/robots.txt` | [ ] |
| sitemap.xml accessible | Visit `hontal.id/sitemap.xml` | [ ] |
| No 404s on screenshot paths | Open DevTools > Network, filter images | [ ] |
| Page title correct in browser tab | Check tab label | [ ] |
| Google Search Console submitted | Add sitemap URL | [ ] |

---

## 8. Analytics (post-launch, before first week ends)

| Task | Status |
|------|--------|
| Google Analytics or Plausible installed | [ ] |
| CTA click tracked as conversion event | [ ] |
| Demo page tracked as funnel step | [ ] |

---

## Known placeholders not blocking launch

These are intentionally incomplete and do not need to be resolved before V1:

- `public/videos/demo-overview.mp4` — video is optional for launch; add when produced
- `customer-story.mp4` — post-launch
- Individual feature-level screenshots (dispatch board, customer intelligence, etc.) — the fallback placeholder renders cleanly without them

---

## Contacts and accounts needed

Before deployment, confirm you have access to:

- [ ] Cloudflare account with Workers plan
- [ ] Domain registrar for `hontal.id`
- [ ] WhatsApp Business number for the CTA
- [ ] Email inbox for `demo@hontal.id` (or equivalent)
- [ ] Google Search Console property for `hontal.id`
