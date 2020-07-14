import "./styles/styles.css";

declare var require: any

var React = require('react');

import GoogleMapReact from 'google-map-react';

import * as Constant from './constants';

document.body.style.backgroundColor = Constant.MAIN_COLOUR;
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';

export default class Map extends React.Component {
    render() {
        return (
            <div className="mapSection">
                <div style={{ width: '100%' }}>
                    <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyDqIVtQawOQ0DqWTSP3LG60nVhGJvsdSHk' }} defaultZoom={10} defaultCenter={{ lat: 33.8688, lng: 151.2093 }} />
                </div>
            </div>
        );
    }
}
