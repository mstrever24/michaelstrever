# Location sound files

Place finished location recordings in this folder, then update the matching
sound card in `location-sounds.html`.

Each sound card has a media slot like this:

```html
<div
  class="work-media location-media"
  data-media-type="audio"
  data-media-label="Location recording"
  data-media-file="table-mountain-wind.mp3"
  data-media-folder="assets/location-sounds"
  data-media-src=""
></div>
```

To make it live:

1. Add the audio file to this folder.
2. Set `data-media-src` to the file path, for example:
   `assets/location-sounds/table-mountain-wind.mp3`.

Recommended formats:

- `.mp3` for lightweight web previews
- `.wav` for high-quality previews if file size is acceptable
- `.m4a` or `.ogg` when needed for delivery compatibility
