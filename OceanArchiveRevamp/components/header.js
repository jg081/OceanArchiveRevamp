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
var Logo = /** @class */ (function (_super) {
    __extends(Logo, _super);
    function Logo(props) {
        return _super.call(this, props) || this;
    }
    Logo.prototype.render = function () {
        return (React.createElement("div", { className: 'logo' }, this.props.name));
    };
    return Logo;
}(React.Component));
var HeaderButton = /** @class */ (function (_super) {
    __extends(HeaderButton, _super);
    function HeaderButton(props) {
        return _super.call(this, props) || this;
    }
    HeaderButton.prototype.render = function () {
        return (React.createElement("div", { className: 'headerButton' }, this.props.name));
    };
    return HeaderButton;
}(React.Component));
var SeachBar = /** @class */ (function (_super) {
    __extends(SeachBar, _super);
    function SeachBar(props) {
        return _super.call(this, props) || this;
    }
    SeachBar.prototype.render = function () {
        return (React.createElement("form", { method: "post", style: { display: 'flex' } },
            React.createElement("input", { type: "search", className: "searchBar", placeholder: "Search..." }),
            React.createElement("input", { type: "submit", className: 'searchButton' })));
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
            React.createElement(Logo, { name: 'OCEAN' }),
            React.createElement("div", { style: { flex: '1' } },
                React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
                    React.createElement("div", { className: 'headerNavBar' },
                        React.createElement("div", { style: { display: 'flex', flexDirection: 'row' } },
                            React.createElement(react_router_dom_1.NavLink, { to: "/" },
                                React.createElement(HeaderButton, { name: 'HOME' })),
                            React.createElement(react_router_dom_1.NavLink, { to: "/map" },
                                React.createElement(HeaderButton, { name: 'MAP' })),
                            React.createElement(HeaderButton, { name: 'TERMS' }),
                            React.createElement(HeaderButton, { name: 'PRIVACY' }),
                            React.createElement("div", { className: 'fillerBox' }),
                            React.createElement(HeaderButton, { name: 'LOGIN' }),
                            React.createElement(HeaderButton, { name: 'SIGNUP' }))),
                    React.createElement("div", { style: { flex: '1' } },
                        React.createElement(SeachBar, null)))),
            React.createElement(Logo, { name: 'ARCHIVE' })));
    };
    return Header;
}(React.Component));
exports.default = Header;
//# sourceMappingURL=header.js.map