import GeoJsonToGpx from "../node_modules/@dwayneparton/geojson-to-gpx/dist/index.js"


export default function saveGeojson(geojson) {
	const options = {
	  metadata: {
		name: 'A grand adventure',
		author: {
		  name: 'Charles GIBERT',
		}
	  }
	}

	// Will convert geojson into xml document
	const gpx = GeoJsonToGpx(geojson, options);

	// convert document to string or post process it
	const gpxString = new XMLSerializer().serializeToString(gpx);

	const link = document.createElement('a');
	link.download = 'trail.gpx';
	const blob = new Blob([gpxString], {type: 'text/xml'});
	link.href = window.URL.createObjectURL(blob);
	link.click();
}
