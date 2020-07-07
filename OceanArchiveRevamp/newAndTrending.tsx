declare var require: any

var React = require('react');

import * as Constant from './constants';

class LargeContentBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ height: '340px', width: '566px', background: this.props.bgColour, display: 'inline-block', marginLeft: '50px', position: 'relative' }}>
                <div style={{ height: '50px' }}>TITLE</div>
                <img src='' alt='IMAGE' style={{ height: '240px' }} />
                <div style={{ height: '50px', position: 'absolute', bottom: '0px' }}>TAGS AND STUFF</div>
            </div>
        );
    }
}

export default class NewAndTrending extends React.Component {
    render() {
        return (
            <div style={{ height: '405px', width: '100%' }}>
                <h1 style={{ paddingLeft: '10px' }}>New & Trending</h1>
                <div>
                    <LargeContentBox bgColour={Constant.ACTIVISM} />
                    <LargeContentBox bgColour={Constant.SCITECH} />
                    <LargeContentBox bgColour={Constant.ART} />
                </div>
            </div>
        );
    }
}