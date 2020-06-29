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
var state = 8;
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
        _this.changeBackground = function () {
            _this.setState({
                isActive: !_this.state.isActive,
                bgColour: !_this.state.isActive ? _this.state.colourCode : "linear-gradient(" + _this.state.colourCode + ", " + _this.state.colourCode + " 85%, #000000 150%)"
            });
        };
        _this.state = {
            title: props.title,
            isActive: props.isActive,
            colourCode: props.colourCode,
            bgColour: props.isActive ? props.colourCode : "linear-gradient(" + props.colourCode + ", " + props.colourCode + " 85%, #000000 150%)"
        };
        return _this;
    }
    TableHeader.prototype.render = function () {
        return (React.createElement("th", { style: { padding: '0px', width: '25%', background: this.state.bgColour }, onClick: this.changeBackground }, this.state.title));
    };
    return TableHeader;
}(React.Component));
var ContentSection = /** @class */ (function (_super) {
    __extends(ContentSection, _super);
    function ContentSection(props) {
        var _this = _super.call(this, props) || this;
        _this.updateBackground = _this.updateBackground.bind(_this);
        _this.state = {
            bgContent: "#4A74A5"
        };
        return _this;
    }
    ContentSection.prototype.updateBackground = function () {
        this.setState({
            bgContent: "#000000"
        });
    };
    ContentSection.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("table", { style: tabStyle },
                React.createElement("tr", null,
                    React.createElement(TableHeader, { title: "ALL", isActive: true, colourCode: "#4A74A5", onClick: this.updateBackground }),
                    React.createElement(TableHeader, { title: "SCIENCE & TECHNOLOGY", isActive: false, colourCode: "#0076FF", onClick: this.updateBackground }),
                    React.createElement(TableHeader, { title: "ART", isActive: false, colourCode: "#9013FE", onClick: this.updateBackground }),
                    React.createElement(TableHeader, { title: "ACTIVISM", isActive: false, colourCode: "#50E3C2", onClick: this.updateBackground }))),
            React.createElement("div", { style: { padding: "10px", width: "100%", height: "10000px", background: this.state.bgContent } }, "Content Goes Here")));
    };
    return ContentSection;
}(React.Component));
var Homepage = /** @class */ (function (_super) {
    __extends(Homepage, _super);
    function Homepage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Homepage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(ContentSection, null)));
    };
    return Homepage;
}(React.Component));
ReactDOM.render(React.createElement(Homepage, null), document.getElementById('root'));
//# sourceMappingURL=app.js.map