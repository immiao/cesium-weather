import React, { Component } from 'react';
import Cesium from 'cesium';

class App extends Component {
  componentDidMount() {
    var viewer = new Cesium.Viewer('cesiumContainer');
  }

  render() {
    return (
      <div className="App">
        <div className="col-sm-9">
          Hello
        </div>
        <div className="col-sm-3">
          Hello
        </div>
      </div>
    );
  }
}

export default App;
