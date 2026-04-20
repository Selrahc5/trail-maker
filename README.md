# Trail Maker

A simple web app to draw trails on a map and export them as GPX files.

## Features

- Full-screen interactive map powered by Leaflet and OpenStreetMap
- Click to place waypoints and draw your trail manually
- Undo / Redo support
- Generate round-trip cycling routes via [OpenRouteService](https://openrouteservice.org) (road-optimised)
- Choose a distance (10–100 km) and shuffle for route variations
- Live distance tracking
- Export to GPX for use with maps.me, OsmAnd, or any GPX-compatible app

## Setup

```sh
make
```

This starts a local server on port 8001 and opens the app in your browser.

### Cycle route generation

To use the cycle route generator you need a free API key from [OpenRouteService](https://openrouteservice.org/dev/#/signup). Paste it into the **Cycle Route** panel on the left side of the map.

## Usage

### Draw a trail manually

1. Click on the map to place waypoints
2. Use **Undo** / **Redo** to adjust your trail
3. Enter a filename and click **Save** to download the GPX file
4. Load the GPX file into your favourite map app and enjoy your time outside

### Generate a cycling route

1. Click on the map to set a starting point
2. Open the **Cycle Route** panel and select a distance
3. Click **Generate** to create a round-trip road cycling route
4. Click **Shuffle** to get a different route variation
5. Click **Save** to export the route as GPX
