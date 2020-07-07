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
require("./styles/styles.css");
require("./styles/carousel.css");
var tabState = 8;
var React = require('react');
var ReactDOM = require('react-dom');
var reactstrap_1 = require("reactstrap");
var MAIN_COLOUR = '#142636';
var SECONDARY_COLOUR = "#4A74A5";
var SCITECH = '#0076FF';
var ART = '#9013FE';
var ACTIVISM = '#50E3C2';
var SCITECH_ART = '#4845FF';
var ART_ACTIVISM = '#707BE0';
var ACTIVISM_SCITECH = '#28ADE1';
document.body.style.backgroundColor = MAIN_COLOUR;
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';
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
                    secColour = SCITECH_ART;
                    break;
                case 5: //SciTech and Activism
                    secColour = ACTIVISM_SCITECH;
                    break;
                case 3: //Art and Activism
                    secColour = ART_ACTIVISM;
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
                        React.createElement(TableHeader, { ref: this.Tabs[0], title: "ALL", isActive: true, colourCode: SECONDARY_COLOUR, stateUpdate: this.updateBackground(0) }),
                        React.createElement(TableHeader, { ref: this.Tabs[1], title: "SCIENCE & TECHNOLOGY", isActive: false, colourCode: SCITECH, stateUpdate: this.updateBackground(1) }),
                        React.createElement(TableHeader, { ref: this.Tabs[2], title: "ART", isActive: false, colourCode: ART, stateUpdate: this.updateBackground(2) }),
                        React.createElement(TableHeader, { ref: this.Tabs[3], title: "ACTIVISM", isActive: false, colourCode: ACTIVISM, stateUpdate: this.updateBackground(3) })))),
            React.createElement("div", { style: { padding: "10px", width: "100%", height: "10000px", background: this.state.bgContent } }, "Content Goes Here")));
    };
    return ContentSection;
}(React.Component));
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
            React.createElement("input", { type: "submit", style: { width: '150px', height: '34px', float: 'right', borderRadius: '0px 10px 10px 0px', border: '0px', background: SECONDARY_COLOUR } }),
            React.createElement("span", { style: { display: 'block', overflow: 'hidden' } },
                React.createElement("input", { type: "search", className: "search", style: { width: '100%', height: '34px', borderRadius: '10px 0px 0px 10px', border: '0px', background: '#787878', paddingLeft: '20px' }, placeholder: "Search..." }))));
    };
    return SeachBar;
}(React.Component));
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("div", { className: "header" },
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
var LargeContentBox = /** @class */ (function (_super) {
    __extends(LargeContentBox, _super);
    function LargeContentBox(props) {
        return _super.call(this, props) || this;
    }
    LargeContentBox.prototype.render = function () {
        return (React.createElement("div", { style: { height: '340px', width: '566px', background: this.props.bgColour, display: 'inline-block', marginLeft: '50px', position: 'relative' } },
            React.createElement("div", { style: { height: '50px' } }, "TITLE"),
            React.createElement("img", { src: '', alt: 'IMAGE', style: { height: '240px' } }),
            React.createElement("div", { style: { height: '50px', position: 'absolute', bottom: '0px' } }, "TAGS AND STUFF")));
    };
    return LargeContentBox;
}(React.Component));
var NewAndTrending = /** @class */ (function (_super) {
    __extends(NewAndTrending, _super);
    function NewAndTrending() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewAndTrending.prototype.render = function () {
        return (React.createElement("div", { style: { height: '405px', width: '100%' } },
            React.createElement("h1", { style: { paddingLeft: '10px' } }, "New & Trending"),
            React.createElement("div", null,
                React.createElement(LargeContentBox, { bgColour: ACTIVISM }),
                React.createElement(LargeContentBox, { bgColour: SCITECH }),
                React.createElement(LargeContentBox, { bgColour: ART }))));
    };
    return NewAndTrending;
}(React.Component));
var Announcement = /** @class */ (function (_super) {
    __extends(Announcement, _super);
    function Announcement(props) {
        return _super.call(this, props) || this;
    }
    Announcement.prototype.render = function () {
        return (React.createElement("div", { style: { height: '150px', width: '620px', display: 'inline-block', padding: '0px 5px', position: 'relative', backgroundColor: '#0f0f0f' } },
            React.createElement("h2", null, this.props.title),
            React.createElement("p", null, this.props.text),
            React.createElement("a", { style: { position: 'absolute', bottom: '0' } }, "View")));
    };
    return Announcement;
}(React.Component));
var AnnouncementsContainer = /** @class */ (function (_super) {
    __extends(AnnouncementsContainer, _super);
    function AnnouncementsContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.items = [
            [
                {
                    title: 'TITLE 1',
                    text: 'Text for 1'
                },
                {
                    title: 'TITLE 2',
                    text: 'Text for 2'
                },
                {
                    title: 'TITLE 3',
                    text: 'Text for 3'
                }
            ],
            [
                {
                    title: 'TITLE 4',
                    text: 'Text for 4'
                },
                {
                    title: 'TITLE 5',
                    text: 'Text for 5'
                },
                {
                    title: 'TITLE 6',
                    text: 'Text for 6'
                }
            ],
            [
                {
                    title: 'TITLE 7',
                    text: 'Text for 7'
                },
                {
                    title: 'TITLE 8',
                    text: 'Text for 8'
                },
                {
                    title: 'TITLE 9',
                    text: 'Text for 9'
                }
            ]
        ];
        _this.slides = _this.items.map(function (item) {
            return (React.createElement(reactstrap_1.CarouselItem, { onExiting: function () { return _this.setState({ animating: true }); }, onExited: function () { return _this.setState({ animating: false }); } },
                React.createElement(Announcement, { title: item[0].title, text: item[0].text }),
                React.createElement(Announcement, { title: item[1].title, text: item[1].text }),
                React.createElement(Announcement, { title: item[2].title, text: item[2].text })));
        });
        _this.next = function () {
            if (_this.state.animating)
                return;
            var nextIndex = ((_this.state.activeIndex + 1) > (_this.items.length - 1)) ? 0 : (_this.state.activeIndex + 1);
            _this.setState({ activeIndex: nextIndex });
        };
        _this.prev = function () {
            if (_this.state.animating)
                return;
            var nextIndex = (_this.state.activeIndex - 1) < 0 ? (_this.items.length - 1) : (_this.state.activeIndex - 1);
            _this.setState({ activeIndex: nextIndex });
        };
        _this.goToIndex = function (newIndex) {
            _this.setState({ activeIndex: newIndex });
        };
        _this.state = {
            activeIndex: 0,
            animating: false
        };
        return _this;
    }
    AnnouncementsContainer.prototype.render = function () {
        return (React.createElement("div", { style: { height: '250px', width: '100%', padding: '10px' } },
            React.createElement("h1", null, "Announcements"),
            React.createElement(reactstrap_1.Carousel, { activeIndex: this.state.activeIndex, next: this.next, previous: this.prev },
                this.slides,
                React.createElement(reactstrap_1.CarouselIndicators, { items: this.items, activeIndex: this.state.activeIndex, onClickHandler: this.goToIndex }))));
    };
    return AnnouncementsContainer;
}(React.Component));
var Homepage = /** @class */ (function (_super) {
    __extends(Homepage, _super);
    function Homepage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Homepage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Header, null),
            React.createElement(NewAndTrending, null),
            React.createElement(AnnouncementsContainer, null),
            React.createElement(ContentSection, null)));
    };
    return Homepage;
}(React.Component));
ReactDOM.render(React.createElement(Homepage, null), document.getElementById('root'));
//# sourceMappingURL=app.js.map