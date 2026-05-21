# Michael Strever Portfolio

A minimal static portfolio site for Michael Strever, focused on immersive music,
sound, and visual production work. The visual system uses cream concrete tones,
maroon accents, serif display typography, and a brutalist 3D room hero.

## Files

- `index.html` - page structure and portfolio copy
- `gear.html` - dedicated location sound gear page
- `location-sounds.html` - dedicated page for specific location sound recordings
- `styles.css` - brutalist visual system, responsive layout, and concrete room
- `script.js` - reveal animations, work-bar animation, media slots, and subtle crack parallax
- `assets/work/` - portfolio media files for video and audio previews
- `assets/location-sounds/` - audio files for location sound previews

Open `index.html` directly in a browser, or serve the folder with any static
file server.

To add portfolio media, place files in `assets/work/` and set the matching
work card's `data-media-src` value in `index.html`.

To add location sound recordings, place files in `assets/location-sounds/` and
set the matching sound card's `data-media-src` value in `location-sounds.html`.
