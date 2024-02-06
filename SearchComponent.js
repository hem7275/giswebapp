// SearchComponent.js
import React, { useState } from 'react';
import { useMap } from 'react-leaflet';

function SearchComponent() {
  const map = useMap();
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
    const data = await response.json();
    if (data.length > 0) {
      const { lat, lon } = data[0];
      map.setView([lat, lon], 13);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchComponent;
