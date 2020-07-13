import "./styles/styles.css";

declare var require: any

var React = require('react');

import * as Constant from './constants';

document.body.style.backgroundColor = Constant.MAIN_COLOUR;
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';

export default class Map extends React.Component {
    render() {
        return (
            <div>
                MAP
            </div>
        );
    }
}
