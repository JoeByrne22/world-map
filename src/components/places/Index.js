import React from 'react';
import axios from 'axios';
import PlaceMap from '../common/Map';


class PlaceIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: null,
      userPosition: null
    };
    this.getLocation = this.getLocation.bind(this);
    this.getPlaces = this.getPlaces.bind(this);
  }

  getLocation(pos) {
    console.log('this is pos', pos);
    this.setState({ userPosition: [pos.coords.latitude, pos.coords.longitude]}, () => {
      console.log('this is this.state', this.state);
      this.getPlaces();
    });
  }

  getPlaces() {
    axios.get('/api/places')
      .then(res => this.setState({ places: res.data, filteredPlaces: res.data }));
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getLocation, this.getPlaces);
  }

  render() {
    return (
      <section className="section">
        {<PlaceMap places={this.state.places}
          userPosition={this.state.userPosition} />}
      </section>
    );
  }
}

export default PlaceIndex;
