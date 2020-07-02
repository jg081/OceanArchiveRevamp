"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//Run this in console after changing code.
//node_modules\.bin\webpack app.tsx --config webpack-config.js
require("./styles.css");
var tabState = 8;
var React = require('react');
var ReactDOM = require('react-dom');
document.body.style.backgroundColor = '#142636';
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';
var tabStyle = {
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
var TableHeader = /** @class */ (function (_super) {
    __extends(TableHeader, _super);
    function TableHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            title: props.title,
            colourCode: props.colourCode,
            bgColour: props.isActive ? props.colourCode : "linear-gradient(" + props.colourCode + ", " + props.colourCode + " 85%, #000000 150%)"
        };
        return _this;
    }
    TableHeader.prototype.changeBackground = function (active, secColour) {
        if (active) {
            if (secColour == null) {
                this.setState({
                    bgColour: this.state.colourCode
                });
            }
            else {
                this.setState({
                    bgColour: "linear-gradient(" + this.state.colourCode + ", " + secColour + ")"
                });
            }
        }
        else {
            this.setState({
                bgColour: "linear-gradient(" + this.state.colourCode + ", " + this.state.colourCode + " 85%, #000000 150%)"
            });
        }
    };
    TableHeader.prototype.render = function () {
        return (React.createElement("th", { style: { padding: '0px', width: '25%', background: this.state.bgColour }, onClick: this.props.stateUpdate }, this.state.title));
    };
    return TableHeader;
}(React.Component));
var ContentSection = /** @class */ (function (_super) {
    __extends(ContentSection, _super);
    function ContentSection(props) {
        var _this = _super.call(this, props) || this;
        _this.updateBackground = function (i) { return function () {
            var s = 8 >> i;
            //Set state of tabs to know what is selected
            var newTabState;
            if (s != 8) {
                if (s & tabState)
                    tabState = s;
                else {
                    newTabState = ((tabState & ~s) | (~tabState & s)) & 7;
                    if (newTabState == 7)
                        tabState = 8 >> i;
                    else if (newTabState != 0)
                        tabState = newTabState;
                }
            }
            else
                tabState = s;
            //console.log("tabState = " + tabState.toString(2));
            //Get secondary colour in case 2 tabs are selected
            var secColour = null;
            switch (tabState) {
                case 6: //SciTech and Art
                    secColour = "#4845FF";
                    break;
                case 5: //SciTech and Activism
                    secColour = "#28ADE1";
                    break;
                case 3: //Art and Activism
                    secColour = "#707BE0";
                    break;
                default:
                    secColour = null;
                    break;
            }
            //Set tab background colours
            for (var x = 0; x < 4; x++) {
                if (tabState & (8 >> x))
                    _this.Tabs[x].current.changeBackground(true, secColour);
                else
                    _this.Tabs[x].current.changeBackground(false, null);
            }
            //Set content section background colour
            if (secColour == null)
                _this.setState({
                    bgContent: _this.Tabs[i].current.state.colourCode
                });
            else
                _this.setState({
                    bgContent: secColour
                });
        }; };
        _this.Tabs = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef()
        ];
        _this.updateBackground = _this.updateBackground.bind(_this);
        _this.state = {
            bgContent: "#4A74A5"
        };
        return _this;
    }
    ContentSection.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("table", { style: tabStyle },
                React.createElement("tr", null,
                    React.createElement(TableHeader, { ref: this.Tabs[0], title: "ALL", isActive: true, colourCode: "#4A74A5", stateUpdate: this.updateBackground(0) }),
                    React.createElement(TableHeader, { ref: this.Tabs[1], title: "SCIENCE & TECHNOLOGY", isActive: false, colourCode: "#0076FF", stateUpdate: this.updateBackground(1) }),
                    React.createElement(TableHeader, { ref: this.Tabs[2], title: "ART", isActive: false, colourCode: "#9013FE", stateUpdate: this.updateBackground(2) }),
                    React.createElement(TableHeader, { ref: this.Tabs[3], title: "ACTIVISM", isActive: false, colourCode: "#50E3C2", stateUpdate: this.updateBackground(3) }))),
            React.createElement("div", { style: { padding: "10px", width: "100%", height: "10000px", background: this.state.bgContent } }, "Content Goes Here")));
    };
    return ContentSection;
}(React.Component));
var header = {
    width: '100%',
    height: '100px',
    textAlign: 'center'
};
var Logo = /** @class */ (function (_super) {
    __extends(Logo, _super);
    function Logo(props) {
        return _super.call(this, props) || this;
    }
    Logo.prototype.render = function () {
        return (React.createElement("div", { style: { width: '230px', height: '100px', textAlign: 'center', lineHeight: '100px', float: this.props.float } }, this.props.name));
    };
    return Logo;
}(React.Component));
var HeaderButton = /** @class */ (function (_super) {
    __extends(HeaderButton, _super);
    function HeaderButton(props) {
        return _super.call(this, props) || this;
    }
    HeaderButton.prototype.render = function () {
        return (React.createElement("div", { style: { color: '#D8D8D8', width: '100px', height: '60px', textAlign: 'center', lineHeight: '60px', float: this.props.float } }, this.props.name));
    };
    return HeaderButton;
}(React.Component));
var SeachBar = /** @class */ (function (_super) {
    __extends(SeachBar, _super);
    function SeachBar(props) {
        return _super.call(this, props) || this;
    }
    SeachBar.prototype.render = function () {
        return (React.createElement("form", { method: "post" },
            React.createElement("input", { type: "submit", style: { width: '150px', height: '34px', float: 'right', borderRadius: '0px 10px 10px 0px', border: '0px', background: '#4A74A5' } }),
            React.createElement("span", { style: { display: 'block', overflow: 'hidden' } },
                React.createElement("input", { type: "search", class: "search", style: { width: '100%', height: '34px', borderRadius: '10px 0px 0px 10px', border: '0px', background: '#787878', paddingLeft: '20px' }, placeholder: "Search..." }))));
    };
    return SeachBar;
}(React.Component));
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("div", { style: header },
            React.createElement(Logo, { float: 'left', name: 'OCEAN' }),
            React.createElement(HeaderButton, { float: 'left', name: 'HOME' }),
            React.createElement(HeaderButton, { float: 'left', name: 'MAP' }),
            React.createElement(HeaderButton, { float: 'left', name: 'TERMS' }),
            React.createElement(HeaderButton, { float: 'left', name: 'PRIVACY' }),
            React.createElement(Logo, { float: 'right', name: 'ARCHIVE' }),
            React.createElement(HeaderButton, { float: 'right', name: 'SIGNUP' }),
            React.createElement(HeaderButton, { float: 'right', name: 'LOGIN' }),
            React.createElement("div", { style: { position: 'absolute', height: '40px', left: '230px', right: '230px', top: '60px' } },
                React.createElement(SeachBar, null))));
    };
    return Header;
}(React.Component));
var Homepage = /** @class */ (function (_super) {
    __extends(Homepage, _super);
    function Homepage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Homepage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Header, null),
            React.createElement(ContentSection, null)));
    };
    return Homepage;
}(React.Component));
ReactDOM.render(React.createElement(Homepage, null), document.getElementById('root'));
//# sourceMappingURL=app.js.map