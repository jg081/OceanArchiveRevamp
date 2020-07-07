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
var React = require('react');
var Constant = require("./constants");
var tabState = 8;
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
        return (React.createElement("th", { className: "tabHeader", style: { background: this.state.bgColour }, onClick: this.props.stateUpdate }, this.state.title));
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
                    secColour = Constant.SCITECH_ART;
                    break;
                case 5: //SciTech and Activism
                    secColour = Constant.ACTIVISM_SCITECH;
                    break;
                case 3: //Art and Activism
                    secColour = Constant.ART_ACTIVISM;
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
            React.createElement("table", { className: "tabs" },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement(TableHeader, { ref: this.Tabs[0], title: "ALL", isActive: true, colourCode: Constant.SECONDARY_COLOUR, stateUpdate: this.updateBackground(0) }),
                        React.createElement(TableHeader, { ref: this.Tabs[1], title: "SCIENCE & TECHNOLOGY", isActive: false, colourCode: Constant.SCITECH, stateUpdate: this.updateBackground(1) }),
                        React.createElement(TableHeader, { ref: this.Tabs[2], title: "ART", isActive: false, colourCode: Constant.ART, stateUpdate: this.updateBackground(2) }),
                        React.createElement(TableHeader, { ref: this.Tabs[3], title: "ACTIVISM", isActive: false, colourCode: Constant.ACTIVISM, stateUpdate: this.updateBackground(3) })))),
            React.createElement("div", { style: { padding: "10px", width: "100%", height: "10000px", background: this.state.bgContent } }, "Content Goes Here")));
    };
    return ContentSection;
}(React.Component));
exports.default = ContentSection;
//# sourceMappingURL=contentSection.js.map