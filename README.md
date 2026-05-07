# tredsy.com — public website

Static site hosted on Cloudflare Pages. Three policy pages + a stub
landing.

## Files

- `index.html` — landing
- `privacy.html` — Privacy Policy (referenced by App Store + Meta App Review)
- `terms.html` — Terms of Service
- `delete.html` — Data deletion instructions
- `styles.css` — single stylesheet, no framework

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Pushing to the `main` branch triggers Cloudflare Pages to build and
deploy automatically. There is no build step — Cloudflare just serves
the files as-is.

## Updating policies

When changing `privacy.html` or `terms.html`:
1. Bump the "Last updated" date at the top.
2. If the change is material, also bump the "Effective date" and add a
   30-day in-app notice in the iOS app per our Terms commitment.
