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
var reactstrap_1 = require("reactstrap");
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = function () { return _this.setState({
            isOpen: !_this.state.isOpen
        }); };
        _this.switchSearch = function (setSearchBy) { return _this.setState({
            searchBy: setSearchBy
        }); };
        _this.state = {
            searchBy: 'Title',
            isOpen: false
        };
        return _this;
    }
    SearchBar.prototype.render = function () {
        var _this = this;
        return (React.createElement("form", { className: 'altSearchContainer' },
            React.createElement(reactstrap_1.ButtonDropdown, { className: 'searchDropdown', isOpen: this.state.isOpen, toggle: this.toggle, direction: 'down' },
                React.createElement(reactstrap_1.DropdownToggle, { className: 'altDropdown', caret: true }, this.state.searchBy),
                React.createElement(reactstrap_1.DropdownMenu, { className: 'altDropdownMenu' },
                    React.createElement(reactstrap_1.DropdownItem, { onClick: function () { return _this.switchSearch('Title'); } }, "Title"),
                    React.createElement(reactstrap_1.DropdownItem, { onClick: function () { return _this.switchSearch('Creator'); } }, "Creator"))),
            React.createElement("input", { type: 'search', className: 'altSearchBar', placeholder: 'Search My Items' }),
            React.createElement("input", { type: 'submit', className: 'altSearchButton', value: 'Search' })));
    };
    return SearchBar;
}(React.Component));
var ListHeader = /** @class */ (function (_super) {
    __extends(ListHeader, _super);
    function ListHeader(props) {
        return _super.call(this, props) || this;
    }
    ListHeader.prototype.render = function () {
        return (React.createElement("div", { className: 'listItemContainer', style: { fontWeight: 'bold' } },
            React.createElement("div", { className: 'listFixedWidth' }, "Published"),
            React.createElement("div", { className: 'listFixedWidth' }, "Created Date"),
            React.createElement("div", { className: 'listVariableWidth' }, "Title"),
            React.createElement("div", { className: 'listVariableWidth' }, "Creator(s)"),
            React.createElement("div", { className: 'listFixedWidth' }, "Options")));
    };
    return ListHeader;
}(React.Component));
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem(props) {
        return _super.call(this, props) || this;
    }
    ListItem.prototype.render = function () {
        return (React.createElement("div", { className: 'listItemContainer' },
            React.createElement("div", { className: 'listFixedWidth' }, this.props.published ?
                React.createElement("svg", { width: '30', height: '30' },
                    React.createElement("polyline", { points: '5,20 10,25 25,5', "stroke-linecap": 'round', style: { fill: 'none', stroke: '#05B336', strokeWidth: '5' } }),
                    "Yes")
                : React.createElement("svg", { width: '30', height: '30' },
                    React.createElement("g", { fill: 'none', stroke: '#FF3A3A', "stroke-width": '5' },
                        React.createElement("line", { x1: '5', y1: '5', x2: '25', y2: '25', "stroke-linecap": 'round' }),
                        React.createElement("line", { x1: '25', y1: '5', x2: '5', y2: '25', "stroke-linecap": 'round' })))),
            React.createElement("div", { className: 'listFixedWidth' }, this.props.dateCreated),
            React.createElement("div", { className: 'listVariableWidth' }, this.props.title),
            React.createElement("div", { className: 'listVariableWidth' }, this.props.creators),
            React.createElement("div", { className: 'listFixedWidth' }, "EDIT")));
    };
    return ListItem;
}(React.Component));
var MyItems = /** @class */ (function (_super) {
    __extends(MyItems, _super);
    function MyItems(props) {
        return _super.call(this, props) || this;
    }
    MyItems.prototype.render = function () {
        return (React.createElement("div", { className: "ICAcontainer" },
            React.createElement("h1", null, "MY ITEMS"),
            React.createElement(SearchBar, null),
            React.createElement("div", { className: 'listSection' },
                React.createElement(ListHeader, null),
                React.createElement(ListItem, { published: true, dateCreated: "02-Jun-2020", title: 'A long title that refelects the ocean', creators: 'Territorial Agency' }),
                React.createElement(ListItem, { published: false, dateCreated: "02-Jun-2020", title: 'TEST', creators: 'Various People Working on it' }),
                React.createElement(ListItem, { published: true, dateCreated: "02-Jun-2020", title: 'Atlantic Whale Songs', creators: 'Jack White' })),
            React.createElement("div", { className: 'footerMenu' },
                React.createElement("div", { className: 'buttonSmall' }, "+ Add New"),
                React.createElement("div", null, "PAGES"))));
    };
    return MyItems;
}(React.Component));
exports.default = MyItems;
//# sourceMappingURL=myItems.js.map