import React, {Component} from 'react';
import zipcodes from '../api/zipcodes';
import SearchBar from './SearchBar';
import RestaurantList from './RestaurantList';

class App extends Component {
  state = { restaurants: [] };

   onSearchSubmit = async zipcode => {
    const response = await zipcodes.get('', {
      params: { zipcode: zipcode }
    });
    this.setState({ restaurants: response.data.results }) 
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={ this.onSearchSubmit } />
        <RestaurantList restaurants={ this.state.restaurants } />
      </div>
    );
  }
}

export default App;