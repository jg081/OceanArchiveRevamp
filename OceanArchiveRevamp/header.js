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
var react_router_dom_1 = require("react-router-dom");
var Constant = require("./constants");
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
            React.createElement("input", { type: "submit", style: { width: '150px', height: '34px', float: 'right', borderRadius: '0px 10px 10px 0px', border: '0px', background: Constant.SECONDARY_COLOUR } }),
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
            React.createElement(react_router_dom_1.NavLink, { to: "/" },
                React.createElement(HeaderButton, { float: 'left', name: 'HOME' })),
            React.createElement(react_router_dom_1.NavLink, { to: "/map" },
                React.createElement(HeaderButton, { float: 'left', name: 'MAP' })),
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
exports.default = Header;
//# sourceMappingURL=header.js.map