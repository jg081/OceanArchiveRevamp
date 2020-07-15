declare var require: any

var React = require('react');

import * as Constant from '../constants';

var tabState = 0b1000;

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
            <th className="tabHeader" style={{ background: this.state.bgColour }} onClick={this.props.stateUpdate} >
                {this.state.title}
            </th>
        );
    }
}

export default class ContentSection extends React.Component {
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
                secColour = Constant.SCITECH_ART;
                break;
            case 0b0101: //SciTech and Activism
                secColour = Constant.ACTIVISM_SCITECH;
                break;
            case 0b0011: //Art and Activism
                secColour = Constant.ART_ACTIVISM;
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
                <table className="tabs">
                    <tbody>
                        <tr>
                            <TableHeader ref={this.Tabs[0]} title="ALL" isActive={true} colourCode={Constant.SECONDARY_COLOUR} stateUpdate={this.updateBackground(0)} />
                            <TableHeader ref={this.Tabs[1]} title="SCIENCE & TECHNOLOGY" isActive={false} colourCode={Constant.SCITECH} stateUpdate={this.updateBackground(1)} />
                            <TableHeader ref={this.Tabs[2]} title="ART" isActive={false} colourCode={Constant.ART} stateUpdate={this.updateBackground(2)} />
                            <TableHeader ref={this.Tabs[3]} title="ACTIVISM" isActive={false} colourCode={Constant.ACTIVISM} stateUpdate={this.updateBackground(3)} />
                        </tr>
                    </tbody>
                </table>
                <div style={{ padding: "10px", width: "100%", height: "10000px", background: this.state.bgContent }}>
                    Content Goes Here
                </div>
            </div>
        );
    }
}
