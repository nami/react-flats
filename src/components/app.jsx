import React from 'react';
import FlatList from './flatList';
import flats from '../data/flats';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return(
      <div>
        <FlatList flatList={flats} />
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br/> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}

export default App;
