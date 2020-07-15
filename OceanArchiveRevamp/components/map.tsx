import "../styles/styles.css";

declare var require: any

var React = require('react');

import GoogleMapReact from 'google-map-react';

import * as Constant from '../constants';

export default class Map extends React.Component {
    render() {
        return (
            <div style={{ flex: '1' }}>
                <div className="mapSection">
                    <div className='mapContainer'>
                        <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyDqIVtQawOQ0DqWTSP3LG60nVhGJvsdSHk' }} defaultZoom={10} defaultCenter={{ lat: 33.8688, lng: 151.2093 }} />
                    </div>
                </div>
            </div>
        );
    }
}
