import React from 'react';
import FlatList from './flatList';
import flats from '../data/flats';
import GoogleMapReact from 'google-map-react';

const REACT_APP_MAP_API_KEY = `${process.env.REACT_APP_MAP_API_KEY}`;

class App extends React.Component {
  static defaultProps = {
     center: {lat: 40.73, lng: -73.93},
     zoom: 12
  }

  render() {
    return(
      <div>
        <FlatList flatList={flats} />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{
               key: REACT_APP_MAP_API_KEY,
               language: 'en'
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default App;
