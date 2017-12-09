import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import "cesium/Source/Widgets/widgets.css";
import buildModuleUrl from "cesium/Source/Core/buildModuleUrl";

buildModuleUrl.setBaseUrl('cesium/');
console.log(buildModuleUrl)

ReactDOM.render(<App />, document.getElementById('container'));
