import React, {Component} from 'react';

class SearchBar extends Component {
  state = { zipcode: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.zipcode);
  }

  render() {
    return (
      <div className='ui segment'> 
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Enter Zipcode:</label>
            <input 
              type='text' 
              value={this.state.zipcode}
              onChange={e => this.setState({ zipcode: e.target.value })} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;