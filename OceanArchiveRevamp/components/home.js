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
require("../styles/styles.css");
require("../styles/carousel.css");
var React = require('react');
var newAndTrending_1 = require("./newAndTrending");
var contentSection_1 = require("./contentSection");
var announcementsContainer_1 = require("./announcementsContainer");
var Constant = require("../constants");
document.body.style.backgroundColor = Constant.MAIN_COLOUR;
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.handleScroll = function () {
            console.log(document.getElementById('contentSection').offsetTop + ' || ' + document.getElementById('home').scrollTop);
            if (document.getElementById('contentSection').offsetTop - document.getElementById('home').scrollTop <= 0) {
                _this.setState({
                    tabsHeight: '50px'
                });
            }
            else {
                _this.setState({
                    tabsHeight: '100px'
                });
            }
        };
        _this.state = {
            tabsHeight: '100px'
        };
        return _this;
    }
    Home.prototype.render = function () {
        return (React.createElement("div", { id: 'home', className: 'home', onScroll: this.handleScroll },
            React.createElement(newAndTrending_1.default, null),
            React.createElement(announcementsContainer_1.default, null),
            React.createElement(contentSection_1.default, { tabsHeight: this.state.tabsHeight })));
    };
    return Home;
}(React.Component));
exports.default = Home;
//# sourceMappingURL=home.js.map