import React from 'react';
import GoogleMapReact from 'google-map-react';

import Flat from './flat.jsx'
import  {flats} from './flats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats
    };
  }
  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat flat={flat} />
            })}
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;
