import React, { Component } from 'react';
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
import WeatherInfo from "./WeatherInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "result"
    };
    this.appStyle = {
      marginLeft: "30px"
    };
  };

  componentDidMount() {
    var viewer = new Viewer(this.cesiumContainer);
  }
  
  onLoad() {
    this.setState({result: reader.result});
  }

  onSearch(cityName) {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + process.env.API_KEY).then(function(response){
      return response.blob();
    }.bind(this)).then(function(blob){
      var reader = new FileReader();
      reader.addEventListener("loadend", function() {
        this.setState({result: reader.result});
      }.bind(this));
      reader.readAsText(blob);
    }.bind(this));
  }

  render() {
    return (
      <div className="App" style={this.appStyle}>
        <div className="row">
          <div className="page-header">
            <h1>Cesium Real Time Weather</h1>
          </div>
          <div className="span2">
            <div className="col-sm-9">
              <div id="cesiumContainer" ref={ element => this.cesiumContainer = element }/>
            </div>
            <div className="col-sm-3">
              <WeatherInfo
                onSearch={this.onSearch.bind(this)}
                result={this.state.result}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
