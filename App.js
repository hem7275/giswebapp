import React from 'react';
import MapComponent from './components/MapComponent';
import DataLayerComponent from './components/DataLayerComponent';
import SearchComponent from './components/SearchComponent';

const App = () => {
  return (
    <div>
      <MapComponent />
      <DataLayerComponent/>
      <SearchComponent/>
    </div>
  );
};

export default App;