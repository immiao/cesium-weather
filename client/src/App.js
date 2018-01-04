import React, { Component } from 'react';
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
import WeatherInfo from "./WeatherInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "result"
    };
  };

  componentDidMount() {
    var viewer = new Viewer(this.cesiumContainer);
  }
  
  onLoad() {
    this.setState({result: reader.result});
  }

  onSearch(cityName) {
    fetch("http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=" + process.env.API_KEY).then(function(response){
      return response.blob();
    }).then(function(blob){
      var reader = new FileReader();
      reader.addEventListener("loadend", function() {
        this.setState({result: reader.result});
        console.log(reader.result)
      });
      reader.readAsText(blob);
    });
    console.log(cityName)
  }

  render() {
    var appStyle = {
      marginLeft: "30px"
    };
    console.log(this.state.result)
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
              <WeatherInfo
                onSearch={this.onSearch}
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
