import React from 'react';
import FlatList from './flatList';
import flats from '../data/flats';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      zoom: 8,
      selectedFlat: 0
    };
  }

  render() {
    const centre = [35.3292, 136.0563]
    return(
      <div>
        <FlatList flatList={flats} />
        <Map center={centre} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          { flats.map(flat => <Marker key={flat.id} position={[flat.lat, flat.lng]}></Marker>) }
        </Map>
      </div>
    )
  }
}

export default App;
