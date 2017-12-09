import React, { Component } from 'react';
//import Cesium from 'cesium';
//import Cesium from 'cesium/Build/Ceisum/Cesium.js';

class App extends Component {
  componentDidMount() {
    console.log('Did Mount')
  //  var viewer = new Cesium.Viewer('cesiumContainer');
  }

  render() {
//    console.log(Cesium);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9">
            <script src="../Build/Cesium/Cesium.js"></script>
            <style> {"\
              @import url(../Build/Cesium/Widgets/widgets.css);\
              html, body, #cesiumContainer {\
                width: 100%; height: 100%; margin: 0; padding: 0; overflow: hidden;\
              }\
            "}
            </style>
            <div id="cesiumContainer"></div>
          </div>
          <div className="col-sm-3">
            Weather API
          </div>
        </div>
      </div>
    );
  }
}

export default App;
