declare var require: any

var state = 0b1000;

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

var contentSectionStyle = {
    background: '#4A74A5',
    padding: '10px',
    width: '100%',
    height: '10000px'
};

class TableHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            isActive: props.isActive,
            colourCode: props.colourCode,
            bgColour: props.isActive ? props.colourCode : "linear-gradient(" + props.colourCode + ", " + props.colourCode + " 85%, #000000 150%)"
        };
    }

    changeBackground = () => {
        this.setState({
            isActive: !this.state.isActive,
            bgColour: !this.state.isActive ? this.state.colourCode : "linear-gradient(" + this.state.colourCode + ", " + this.state.colourCode + " 85%, #000000 150%)"
        });
    }

    render() {
        return (
            <th style={{ padding: '0px', width: '25%', background: this.state.bgColour }} onClick={this.changeBackground}>
                {this.state.title}
            </th>
        );
    }
}

class ContentSection extends React.Component {
    constructor(props) {
        super(props);
        this.updateBackground = this.updateBackground.bind(this);
        this.state = {
            bgContent: "#4A74A5"
        };
    }

    updateBackground() {
        this.setState({
            bgContent: "#000000"
        });
    }

    render() {
        return (
            <div>
                <table style={tabStyle}>
                    <tr>
                        <TableHeader title="ALL" isActive={true} colourCode="#4A74A5" onClick={this.updateBackground} />
                        <TableHeader title="SCIENCE & TECHNOLOGY" isActive={false} colourCode="#0076FF" onClick={this.updateBackground} />
                        <TableHeader title="ART" isActive={false} colourCode="#9013FE" onClick={this.updateBackground} />
                        <TableHeader title="ACTIVISM" isActive={false} colourCode="#50E3C2" onClick={this.updateBackground} />
                    </tr>
                </table>
                <div style={{ padding: "10px", width: "100%", height: "10000px", background: this.state.bgContent }}>
                    Content Goes Here
                </div>
            </div>
        );
    }
}

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <ContentSection />
            </div>
        );
    }
}

ReactDOM.render(<Homepage />, document.getElementById('root'));