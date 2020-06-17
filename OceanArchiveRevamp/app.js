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
    React.createElement("table", { style: tabStyle },
        React.createElement("tr", null,
            React.createElement("th", { style: allTabStyle }, "ALL"),
            React.createElement("th", { style: scitechTabStyle }, "SCIENCE & TECHNOLOGY"),
            React.createElement("th", { style: artTabStyle }, "ART"),
            React.createElement("th", { style: activismTabStyle }, "ACTIVISM")))
];
var contentSection = [
    React.createElement("div", { style: contentSectionStyle }, "Content Goes Here")
];
var Homepage = /** @class */ (function (_super) {
    __extends(Homepage, _super);
    function Homepage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Homepage.prototype.render = function () {
        return (React.createElement("div", null,
            contentTab,
            contentSection));
    };
    return Homepage;
}(React.Component));
exports.Homepage = Homepage;
ReactDOM.render(React.createElement(Homepage, null), document.getElementById('root'));
//# sourceMappingURL=app.js.map