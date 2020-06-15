declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

document.body.style.backgroundColor = '#142636';
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';

const tabStyle = {
    height: '100px',
    width: '100%',
    borderCollapse: 'collapse',
    color: '#000000',
    padding: '0px',
    boxSizing: 'border-box',
};
const allTabStyle = {
    padding: '0px',
    backgroundColor: '#4A74A5',
    width: '25%',
};

const scitechTabStyle = {
    padding: '0px',
    backgroundColor: '#0076FF',
    width: '25%',
};

const artTabStyle = {
    padding: '0px',
    backgroundColor: '#9013FE',
    width: '25%',
};

const activismTabStyle = {
    padding: '0px',
    backgroundColor: '#50E3C2',
    width: '25%',
};

var contentTab = [
    <table style={tabStyle}> 
        <tr>
            <th style={allTabStyle}>ALL</th>
            <th style={scitechTabStyle}>SCIENCE & TECHNOLOGY</th>
            <th style={artTabStyle}>ART</th>
            <th style={activismTabStyle}>ACTIVISM</th>
        </tr>
    </table>
]

export class Homepage extends React.Component {
    render() {
        return (
            contentTab
        );
    }
}

ReactDOM.render(<Homepage />, document.getElementById('root'));