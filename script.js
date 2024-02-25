// Initialize the map
var map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Parse CSV data and plot vessels' points on the map
fetch('test.csv')
    .then(response => response.text())
    .then(data => {
        // Split the CSV rows
        var rows = data.split('\n');
        // Remove header row
        var headers = rows.shift().split(',');

        var points = []; // Array to store point coordinates

        rows.forEach(row => {
            var columns = row.split(',');
            var latitude = parseFloat(columns[5]);
            var longitude = parseFloat(columns[6]);

            // Check if latitude and longitude are valid
            if (!isNaN(latitude) && !isNaN(longitude)) {
                points.push([longitude, latitude]); // Reversed to [longitude, latitude]
            }
        });

        // Calculate convex hull of all points
        var convexHull = turf.convex(turf.points(points));

        // Plot convex hull on the map
        L.geoJSON(convexHull, {
            style: function (feature) {
                return {color: 'red', weight: 2};
            }
        }).addTo(map);
    });
