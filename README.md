# andrianinaba.github.io

Personal academic website. Plain HTML/CSS/JS, no build step.

```
index.html      all content (edit text here)
css/style.css   styling + colour variables at the top
js/main.js      dark mode, mobile menu, figure lightbox
assets/img/     portrait and figures
cv_...pdf       CV (keep this filename, or update the link in index.html)
```

## Edit
- Colours: change the variables at the top of `css/style.css`.
- Publications / thesis PDF / Scholar / ORCID: look for the commented blocks in `index.html` and uncomment them.
- Preview locally: `python3 -m http.server` then open http://localhost:8000

## Deploy
Push to the `main` branch. GitHub Pages serves it at https://andrianinaba.github.io
(Settings → Pages → Deploy from branch → `main` / root).
