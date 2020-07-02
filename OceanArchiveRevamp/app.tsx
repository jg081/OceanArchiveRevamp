//Run this in console after changing code.
//node_modules\.bin\webpack app.tsx --config webpack-config.js
import "./styles.css";

declare var require: any

var tabState = 0b1000;

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

class TableHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            colourCode: props.colourCode,
            bgColour: props.isActive ? props.colourCode : "linear-gradient(" + props.colourCode + ", " + props.colourCode + " 85%, #000000 150%)"
        };
    }

    changeBackground(active, secColour) {
        if (active) {
            if (secColour == null) {
                this.setState({
                    bgColour: this.state.colourCode
                });
            } else {
                this.setState({
                    bgColour: "linear-gradient(" + this.state.colourCode + ", " + secColour + ")"
                });
            }
        } else {
            this.setState({
                bgColour: "linear-gradient(" + this.state.colourCode + ", " + this.state.colourCode + " 85%, #000000 150%)"
            });
        }
    }

    render() {
        return (
            <th style={{ padding: '0px', width: '25%', background: this.state.bgColour }} onClick={this.props.stateUpdate}>
                {this.state.title}
            </th>
        );
    }
}

class ContentSection extends React.Component {
    constructor(props) {
        super(props);
        this.Tabs = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef()
        ];
        this.updateBackground = this.updateBackground.bind(this);
        this.state = {
            bgContent: "#4A74A5"
        };
    }

    updateBackground = i => () => {
        var s = 0b1000 >> i;
        //Set state of tabs to know what is selected
        var newTabState;
        if (s != 0b1000) {
            if (s & tabState)
                tabState = s;
            else {
                newTabState = ((tabState & ~s) | (~tabState & s)) & 0b0111;
                if (newTabState == 0b0111)
                    tabState = 0b1000 >> i;
                else if (newTabState != 0b0)
                    tabState = newTabState;
            }
        } else
            tabState = s;
        //console.log("tabState = " + tabState.toString(2));

        //Get secondary colour in case 2 tabs are selected
        var secColour = null;
        switch (tabState) {
            case 0b0110: //SciTech and Art
                secColour = "#4845FF";
                break;
            case 0b0101: //SciTech and Activism
                secColour = "#28ADE1";
                break;
            case 0b0011: //Art and Activism
                secColour = "#707BE0";
                break;
            default:
                secColour = null;
                break;
        }

        //Set tab background colours
        for (var x = 0; x < 4; x++) {
            if (tabState & (0b1000 >> x))
                this.Tabs[x].current.changeBackground(true, secColour);
            else
                this.Tabs[x].current.changeBackground(false, null);
        }

        //Set content section background colour
        if (secColour == null)
            this.setState({
                bgContent: this.Tabs[i].current.state.colourCode
            });
        else
            this.setState({
                bgContent: secColour
            });
    }

    render() {
        return (
            <div>
                <table style={tabStyle}>
                    <tr>
                        <TableHeader ref={this.Tabs[0]} title="ALL" isActive={true} colourCode="#4A74A5" stateUpdate={this.updateBackground(0)} />
                        <TableHeader ref={this.Tabs[1]} title="SCIENCE & TECHNOLOGY" isActive={false} colourCode="#0076FF" stateUpdate={this.updateBackground(1)} />
                        <TableHeader ref={this.Tabs[2]} title="ART" isActive={false} colourCode="#9013FE" stateUpdate={this.updateBackground(2)} />
                        <TableHeader ref={this.Tabs[3]} title="ACTIVISM" isActive={false} colourCode="#50E3C2" stateUpdate={this.updateBackground(3)} />
                    </tr>
                </table>
                <div style={{ padding: "10px", width: "100%", height: "10000px", background: this.state.bgContent }}>
                    Content Goes Here
                </div>
            </div>
        );
    }
}

const header = {
    width: '100%',
    height: '100px',
    textAlign: 'center'
}

class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ width: '230px', height: '100px', textAlign: 'center', lineHeight: '100px', float: this.props.float }}>{this.props.name}</div>
        );
    }
}

class HeaderButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ color: '#D8D8D8', width: '100px', height: '60px', textAlign: 'center', lineHeight: '60px', float: this.props.float }}>{this.props.name}</div>
        );
    }
}

class SeachBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form method="post">
                <input type="submit" style={{ width: '150px', height: '34px', float: 'right', borderRadius: '0px 10px 10px 0px', border: '0px', background: '#4A74A5' }} />
                <span style={{ display: 'block', overflow: 'hidden'}}>
                    <input type="search" class="search" style={{ width: '100%', height: '34px', borderRadius: '10px 0px 0px 10px', border: '0px', background: '#787878', paddingLeft: '20px' }} placeholder="Search..." />
                </span>
            </form>
        );
    }
}

class Header extends React.Component {


    render() {
        return (
            <div style={header}>
                <Logo float='left' name='OCEAN' />
                <HeaderButton float='left' name='HOME' />
                <HeaderButton float='left' name='MAP' />
                <HeaderButton float='left' name='TERMS' />
                <HeaderButton float='left' name='PRIVACY' />
                <Logo float='right' name='ARCHIVE' />
                <HeaderButton float='right' name='SIGNUP' />
                <HeaderButton float='right' name='LOGIN' />
                <div style={{ position: 'absolute', height: '40px', left: '230px', right: '230px', top: '60px' }}>
                    <SeachBar />
                </div>
            </div>
        );
    }
}

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <ContentSection />
            </div>
        );
    }
}

ReactDOM.render(<Homepage />, document.getElementById('root'));