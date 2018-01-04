import React, { Component } from 'react';


class WeatherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  render() {
    return (
      <div>
          <input type="text" id="search" placeholder="Enter A City"/>
          <button type="button" onClick={this.props.onSearch}>Search</button>
          <p>{this.props.result}</p>
      </div>
    );
  }
}

export default WeatherInfo;
