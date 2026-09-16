# Project demo GIFs

Drop the screen recordings for the Projects section in this folder. They are served
as static files (not bundled by webpack), so you can replace a GIF and redeploy
without touching any code.

## Expected filenames

These are referenced by the `gif` field of each entry in `src/components/Projects.js`:

| File                | Project                           |
| ------------------- | --------------------------------- |
| `crisscross.gif`    | Crisscross                        |
| `ipo-milega.gif`    | IPO Milega                        |
| `hiking-alert.gif`  | Hiking Alert Platform             |
| `linkers-db.gif`    | Linker's DB                       |
| `blip.png`          | Blip — TikTok Ads Integration      |

Not every file here is a screen recording, and the `alt` text on each project
says which is which:

- `crisscross.gif` is a capture of the running app.
- `ipo-milega.gif` and `hiking-alert.gif` are composed from screenshots of the
  live products, cross-faded rather than filmed.
- `linkers-db.gif` is a decorative mark, not a product screen. If a real
  recording replaces it, update that project's `alt` text to match.
- `blip.png` is the client's own logo, published with their permission. It is
  a still, not an animation — the `gif` field just holds a filename, so any
  image format works.

A missing file is not a build error — the card falls back to a "Demo coming soon"
placeholder, so you can ship the section before every recording is ready.

## Recording guidelines

- **Aspect ratio**: roughly 16:10. The card crops with `object-fit: cover`, so
  keep the important action away from the very edges.
- **Width**: 900–1200px is plenty; anything larger just costs bandwidth.
- **File size**: aim for under ~3 MB each. GIFs are downloaded in full before they
  play, and these load on a portfolio homepage.
- **Length**: 5–10 seconds, looping, showing one clear flow end to end.
- **Privacy**: scrub real user names, phone numbers, emails and access tokens out
  of the recording before exporting — these are public files.

To shrink an oversized GIF:

```sh
# via ffmpeg + gifsicle
ffmpeg -i input.mov -vf "fps=12,scale=1000:-1:flags=lanczos" -f gif - \
  | gifsicle --optimize=3 --lossy=80 -o hiking-alert.gif
```

## Adding another project

Append an object to the `PROJECTS` array in `src/components/Projects.js`. Every
entry needs `id`, `title`, `role`, `period`, `gif`, `alt`, `description` and
`tags`; `link` and `linkLabel` are optional and the button is hidden when `link`
is empty. Write a real `alt` description — it is what screen readers announce,
and what shows if the image fails to load.
