# Work media files

Place portfolio media files in this folder, then update the matching work card in
`index.html`.

Each card has a media slot like this:

```html
<div
  class="work-media"
  data-media-type="video"
  data-media-label="Film excerpt"
  data-media-file="ash-and-silence.mp4"
  data-media-src=""
  data-media-poster=""
></div>
```

To make it live:

1. Add the media file to this folder.
2. Set `data-media-src` to the file path, for example:
   `assets/work/ash-and-silence.mp4`.
3. For videos, optionally add a poster image and set `data-media-poster`, for
   example: `assets/work/ash-and-silence-poster.jpg`.

Recommended formats:

- Video: `.mp4` or `.webm`
- Audio: `.mp3`, `.wav`, `.m4a`, or `.ogg`
- Poster images: `.jpg`, `.png`, or `.webp`
