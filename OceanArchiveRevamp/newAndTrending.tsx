declare var require: any

var React = require('react');

import * as Constant from './constants';

class LargeContentBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='largeContentBox' style={{ background: this.props.bgColour }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: '50px' }}>TITLE</div>
                    <img src='' alt='IMAGE' style={{ height: '240px' }} />
                    <div style={{ height: '50px' }}>TAGS AND STUFF</div>
                </div>
            </div>
        );
    }
}

export default class NewAndTrending extends React.Component {
    render() {
        return (
            <div className='newAndTrending'>
                <h1 style={{ paddingLeft: '10px', flex: '0', minWidth: '200px' }}>New & Trending</h1>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex' }}>
                        <div className='fillerBox fillerBoxMin' />
                        <LargeContentBox bgColour={Constant.ACTIVISM} />
                        <div className='fillerBox fillerBoxMin' />
                        <LargeContentBox bgColour={Constant.SCITECH} />
                        <div className='fillerBox fillerBoxMin' />
                        <LargeContentBox bgColour={Constant.ART} />
                        <div className='fillerBox fillerBoxMin' />
                    </div>
                </div>
            </div>
        );
    }
}