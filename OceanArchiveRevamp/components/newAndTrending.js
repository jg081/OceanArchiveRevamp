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
var LargeContentBox = /** @class */ (function (_super) {
    __extends(LargeContentBox, _super);
    function LargeContentBox(props) {
        return _super.call(this, props) || this;
    }
    LargeContentBox.prototype.render = function () {
        return (React.createElement("div", { className: 'largeContentBox', style: { background: this.props.bgColour } },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
                React.createElement("div", { style: { height: '50px' } }, "TITLE"),
                React.createElement("img", { src: '', alt: 'IMAGE', style: { height: '240px' } }),
                React.createElement("div", { style: { height: '50px' } }, "TAGS AND STUFF"))));
    };
    return LargeContentBox;
}(React.Component));
var NewAndTrending = /** @class */ (function (_super) {
    __extends(NewAndTrending, _super);
    function NewAndTrending() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewAndTrending.prototype.render = function () {
        return (React.createElement("div", { className: 'newAndTrending' },
            React.createElement("h1", { style: { paddingLeft: '10px', flex: '0', minWidth: '200px' } }, "New & Trending"),
            React.createElement("div", { style: { flex: 1 } },
                React.createElement("div", { style: { display: 'flex' } },
                    React.createElement("div", { className: 'fillerBox fillerBoxMin' }),
                    React.createElement(LargeContentBox, { bgColour: Constant.ACTIVISM }),
                    React.createElement("div", { className: 'fillerBox fillerBoxMin' }),
                    React.createElement(LargeContentBox, { bgColour: Constant.SCITECH }),
                    React.createElement("div", { className: 'fillerBox fillerBoxMin' }),
                    React.createElement(LargeContentBox, { bgColour: Constant.ART }),
                    React.createElement("div", { className: 'fillerBox fillerBoxMin' })))));
    };
    return NewAndTrending;
}(React.Component));
exports.default = NewAndTrending;
//# sourceMappingURL=newAndTrending.js.map