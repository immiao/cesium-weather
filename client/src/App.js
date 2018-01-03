import React, { Component } from 'react';
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";

class App extends Component {
  componentDidMount() {
    var viewer = new Viewer(this.cesiumContainer);
  }

  render() {
    var appStyle = {
      marginLeft: "30px"
    };

    return (
      <div className="App" style={appStyle}>
        <div className="row">
            <div className="page-header">
              <h1>Cesium Real Time Weather</h1>
            </div>
          <div className="span2">
            <div className="col-sm-9">
              <div id="cesiumContainer" ref={ element => this.cesiumContainer = element }/>
            </div>
            <div className="col-sm-3">
              Hello
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
