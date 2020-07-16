import "../styles/styles.css";

declare var require: any

var React = require('react');

import GoogleMapReact from 'google-map-react';

import * as Constant from '../constants';

class GoToLocation extends React.Component {
    render() {
        return (
            <div>
                <form style={{ display: 'flex', height: '50px' }}>
                    <div className='goToLocLabels'>Lat</div>
                    <input type='search' className='goToLocSearch' />
                    <div className='goToLocLabels'>Long</div>
                    <input type='search' className='goToLocSearch' />
                    <input type='submit' className='goToLocButton' />
                </form>
            </div>
        );
    }
}

class Location extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='mapLocationInfo'>
                <img alt='IMG' style={{ height: '100px', width: '100px', minWidth: '100px', flex: '0' }} />
                <div style={{ flex: '0 0 auto' }}>
                    <div stlye={{ display: 'flex', flexDirection: 'column', height: '100px' }}>
                        <h2 className='listTitle'>{this.props.title}</h2>
                        <p className='listDesc'>{this.props.desc}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default class Map extends React.Component {
    render() {
        return (
            <div style={{ flex: '1' }}>
                <div className="mapSection">
                    <div className='mapSideBar'>
                        <GoToLocation />
                        <div className='scrollableList'>
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                            <Location title='Title' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' />
                        </div>
                    </div>
                    <div className='mapContainer'>
                        <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyDqIVtQawOQ0DqWTSP3LG60nVhGJvsdSHk' }} defaultZoom={10} defaultCenter={{ lat: 33.8688, lng: 151.2093 }} />
                    </div>
                </div>
            </div>
        );
    }
}
