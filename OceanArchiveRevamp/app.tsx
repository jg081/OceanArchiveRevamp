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

var allTabStyle = {
    padding: '0px',
    background: '#4A74A5',
    width: '25%',
};

var scitechTabStyle = {
    padding: '0px',
    background: 'linear-gradient(#0076FF, #000000 150%)',
    width: '25%',
};

var artTabStyle = {
    padding: '0px',
    background: 'linear-gradient(#9013FE, #000000 150%)',
    width: '25%',
};

var activismTabStyle = {
    padding: '0px',
    background: 'linear-gradient(#50E3C2, #000000 150%)',
    width: '25%',
};

var contentSectionStyle = {
    background: '#4A74A5',
    padding: '10px',
    width: '100%',
    height: '10000px'
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

var contentSection = [
    <div style={contentSectionStyle}>
        Content Goes Here
    </div>
]

export class Homepage extends React.Component {
    render() {
        return (
            <div>
                {contentTab}
                {contentSection}
            </div>
        );
    }
}

ReactDOM.render(<Homepage />, document.getElementById('root'));