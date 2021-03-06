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
var Constant = require("../constants");
var reactstrap_1 = require("reactstrap");
var smallContentBox_1 = require("./smallContentBox");
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
        _this.handleScroll = function () {
            console.log("Scrolled");
        };
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
        return (React.createElement("div", { id: 'contentSection', className: 'contentSection' },
            React.createElement("table", { id: 'tabs', className: "tabs", style: { maxHeight: this.props.tabsHeight } },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement(TableHeader, { ref: this.Tabs[0], title: "ALL", isActive: true, colourCode: Constant.SECONDARY_COLOUR, stateUpdate: this.updateBackground(0) }),
                        React.createElement(TableHeader, { ref: this.Tabs[1], title: "SCIENCE & TECHNOLOGY", isActive: false, colourCode: Constant.SCITECH, stateUpdate: this.updateBackground(1) }),
                        React.createElement(TableHeader, { ref: this.Tabs[2], title: "ART", isActive: false, colourCode: Constant.ART, stateUpdate: this.updateBackground(2) }),
                        React.createElement(TableHeader, { ref: this.Tabs[3], title: "ACTIVISM", isActive: false, colourCode: Constant.ACTIVISM, stateUpdate: this.updateBackground(3) })))),
            React.createElement("div", { className: 'contentBackground', style: { background: this.state.bgContent } },
                React.createElement(reactstrap_1.ButtonGroup, { className: 'buttonBar' },
                    React.createElement(reactstrap_1.Button, { className: 'gapRight' }, "NEW"),
                    React.createElement(reactstrap_1.Button, null, "TOP")),
                React.createElement("div", { className: 'contentContainer' },
                    React.createElement(smallContentBox_1.default, { title: 'Fish in the Ocean', type: 'Research Paper', year: '2019', numCollections: '2', numItems: '5', img: "https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg" }),
                    React.createElement(smallContentBox_1.default, { title: 'Ocean Waves', type: 'Research Paper', year: '2019', numCollections: '5', numItems: '1', img: 'https://live.staticflickr.com/7309/9787099472_f24d4766e5_b.jpg' }),
                    React.createElement(smallContentBox_1.default, { title: 'Sharks Electromagnetic Sense', type: 'Documentry', year: '2019', numCollections: '2', numItems: '5', img: 'https://live.staticflickr.com/6018/5951373622_3146ed0aab_b.jpg' }),
                    React.createElement(smallContentBox_1.default, { title: 'Coral Research', type: 'Research Paper', year: '2019', numCollections: '2', numItems: '5', img: 'https://live.staticflickr.com/1688/26104103086_766619aeb8_b.jpg' }),
                    React.createElement(smallContentBox_1.default, { title: 'Plastic Island', type: 'Gallery', year: '2018', numCollections: '1', numItems: '10', img: 'https://live.staticflickr.com/3182/2785503884_8b0b76f781_b.jpg' }),
                    React.createElement(smallContentBox_1.default, { title: 'Sunset Shore', type: 'Painting', year: '2018', numCollections: '2', numItems: '1', img: 'https://live.staticflickr.com/65535/49112821866_f88763e374_b.jpg' }),
                    React.createElement(smallContentBox_1.default, { title: 'Deep Ocean Mining', type: 'Series', year: '2018', numCollections: '1', numItems: '5', img: 'https://live.staticflickr.com/6178/6207340169_32c7846a32_b.jpg' }),
                    React.createElement(smallContentBox_1.default, { title: 'Oil Pollution', type: 'Gallery', year: '2018', numCollections: '1', numItems: '10', img: 'https://farm9.staticflickr.com/8746/17022954452_3c3fefafe0_b.jpg' }),
                    React.createElement(smallContentBox_1.default, { title: 'Deep Ocean Life', type: 'Research Paper', year: '2017', numCollections: '2', numItems: '3', img: 'https://live.staticflickr.com/5463/8880188144_f2e22d06c1.jpg' }),
                    React.createElement(smallContentBox_1.default, { title: 'Whale Spotting', type: 'Gallery', year: '2017', numCollections: '1', numItems: '6', img: 'https://live.staticflickr.com/32/49470279_74b8873c7c_b.jpg' }),
                    React.createElement(smallContentBox_1.default, { title: 'Octopus Learning Habits', type: 'Research Paper', year: '2017', numCollections: '2', numItems: '1', img: 'https://live.staticflickr.com/3463/3306513983_f8269902ee_b.jpg' })))));
    };
    return ContentSection;
}(React.Component));
exports.default = ContentSection;
//# sourceMappingURL=contentSection.js.map