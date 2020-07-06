//Run this in console after changing code.
//node_modules\.bin\webpack app.tsx --config webpack-config.js
import "./styles.css";

declare var require: any

var tabState = 0b1000;

var React = require('react');
var ReactDOM = require('react-dom');

const MAIN_COLOUR = '#142636';
const SECONDARY_COLOUR = "#4A74A5";
const SCITECH = '#0076FF';
const ART = '#9013FE';
const ACTIVISM = '#50E3C2';
const SCITECH_ART = '#4845FF';
const ART_ACTIVISM = '#707BE0';
const ACTIVISM_SCITECH = '#28ADE1';

document.body.style.backgroundColor = MAIN_COLOUR;
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';



class TableHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            colourCode: props.colourCode,
            bgColour: props.isActive ? props.colourCode : "linear-gradient(" + props.colourCode + ", " + props.colourCode + " 85%, #000000 150%)"
        };
    }

    handleScroll = () => {
        if (window.pageYOffset > 750)
            this.classList.add("sticky");
        else
            this.classList.remove("sticky");
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
            <th class="tabHeader" style={{ background: this.state.bgColour }} onClick={this.props.stateUpdate} onScroll={this.handleScroll}>
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
                secColour = SCITECH_ART;
                break;
            case 0b0101: //SciTech and Activism
                secColour = ACTIVISM_SCITECH;
                break;
            case 0b0011: //Art and Activism
                secColour = ART_ACTIVISM;
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
                <table class="tabs">
                    <tr>
                        <TableHeader ref={this.Tabs[0]} title="ALL" isActive={true} colourCode={SECONDARY_COLOUR} stateUpdate={this.updateBackground(0)} />
                        <TableHeader ref={this.Tabs[1]} title="SCIENCE & TECHNOLOGY" isActive={false} colourCode={SCITECH} stateUpdate={this.updateBackground(1)} />
                        <TableHeader ref={this.Tabs[2]} title="ART" isActive={false} colourCode={ART} stateUpdate={this.updateBackground(2)} />
                        <TableHeader ref={this.Tabs[3]} title="ACTIVISM" isActive={false} colourCode={ACTIVISM} stateUpdate={this.updateBackground(3)} />
                    </tr>
                </table>
                <div style={{ padding: "10px", width: "100%", height: "10000px", background: this.state.bgContent }}>
                    Content Goes Here
                </div>
            </div>
        );
    }
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
                <input type="submit" style={{ width: '150px', height: '34px', float: 'right', borderRadius: '0px 10px 10px 0px', border: '0px', background: SECONDARY_COLOUR }} />
                <span style={{ display: 'block', overflow: 'hidden' }}>
                    <input type="search" class="search" style={{ width: '100%', height: '34px', borderRadius: '10px 0px 0px 10px', border: '0px', background: '#787878', paddingLeft: '20px' }} placeholder="Search..." />
                </span>
            </form>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div class="header">
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

class NewAndTrending extends React.Component {
    render() {
        return (
            <div style={{ height: '405px', width: '100%' }}>
                <h1 style={{ paddingLeft: '10px' }}>New & Trending</h1>
                <div>
                    <LargeContentBox bgColour={ACTIVISM} />
                    <LargeContentBox bgColour={SCITECH} />
                    <LargeContentBox bgColour={ART} />
                </div>
            </div>
        );
    }
}

class Announcement extends React.Component {
    render() {
        return (
            <div style={{ height: '150px', width: '620px', display: 'inline-block', padding: '0px 5px', position: 'relative' }}>
                <h2>Title</h2>
                <p>Text</p>
                <a style={{ position: 'absolute', bottom: '0' }}>View</a>
            </div>
        );
    }
}

class CaroselIndicatior extends React.Component {
    render() {
        return (
            <div style={{ height: '50px', width: '100%' }}>
                <p>O O O</p>
            </div>
        );
    }
}

class AnnouncementsContainer extends React.Component {
    render() {
        return (
            <div style={{ height: '250px', width: '100%', padding: '10px' }}>
                <h1>Announcements</h1>
                <div>
                    <Announcement />
                    <Announcement />
                    <Announcement />
                </div>
                <CaroselIndicatior />
            </div>
        );
    }
}

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NewAndTrending />
                <AnnouncementsContainer />
                <ContentSection />
            </div>
        );
    }
}

ReactDOM.render(<Homepage />, document.getElementById('root'));