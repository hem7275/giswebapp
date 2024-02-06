// DataLayerComponent.js
import React, { useState } from 'react';
import { GeoJSON } from 'react-leaflet';

function DataLayerComponent({ data }) {
  const [geojsonData, setGeojsonData] = useState(null);

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setGeojsonData(JSON.parse(reader.result));
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".geojson" onChange={handleFileUpload} />
      {geojsonData && <GeoJSON data={geojsonData} />}
    </div>
  );
}

export default DataLayerComponent;
