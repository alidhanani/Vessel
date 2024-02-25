# Vessel Map with Key Insights

## Overview
This project creates a map visualization of vessel data using Leaflet.js and Turf.js. It reads vessel data from a CSV file, extracts latitude and longitude coordinates, and plots the convex hull of all points on the map. Additionally, it provides key insights into each vessel based on the data attributes.

## Approach
1. **CSV Data Parsing**: The project reads vessel data from a CSV file and extracts latitude and longitude coordinates.
2. **Visualization**: It uses Leaflet.js to create a map and Turf.js to calculate the convex hull of all points.
3. **Key Insights**: The project analyzes vessel data attributes to provide key insights into each vessel, such as name, type, speed, etc.
4. **Styling**: The convex hull is styled with a red border.

## Requirements
- Web browser with support for HTML5, CSS3, and JavaScript
- Internet connection (to fetch Leaflet.js and Turf.js)
- CSV file containing vessel data with columns for latitude and longitude coordinates

## How to Run
1. Clone this repository or download the project files.
2. Ensure the CSV file containing vessel data is named `test.csv` and placed in the same directory as the HTML file.
3. Run the following command `python3 -m http.server`, it will redirect to `http://[::]:8000/`.

## Key Insights
The following key insights are provided for each vessel based on the data attributes:
- **Name**: Name of the vessel
- **Type**: Type of vessel (e.g., tanker, cargo ship, etc.)
- **Speed**: Speed of the vessel
- **...**: Add more key insights as needed

## File Structure
- `index.html`: HTML file containing the structure of the web page.
- `styles.css`: CSS file for styling the map.
- `script.js`: JavaScript file for creating the map, parsing CSV data, plotting the convex hull, and providing key insights.

## Credits
- Leaflet.js: https://leafletjs.com/
- Turf.js: https://turfjs.org/

