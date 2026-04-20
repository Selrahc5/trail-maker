# Trail Maker

A simple web app to draw trails on a map and export them as GPX files.

## Features

- Full-screen interactive map powered by Leaflet and OpenStreetMap
- Click to place waypoints and draw your trail
- Undo / Redo support
- Live distance tracking
- Export to GPX for use with maps.me, OsmAnd, or any GPX-compatible app

## Usage

```sh
make
```

This starts a local server on port 8001 and opens the app in your browser.

Then:

1. Click on the map to place waypoints
2. Use **Undo** / **Redo** to adjust your trail
3. Enter a filename and click **Save** to download the GPX file
4. Load the GPX file into your favourite map app and enjoy your time outside
