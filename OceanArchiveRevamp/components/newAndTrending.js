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
var react_router_dom_1 = require("react-router-dom");
var LargeContentBox = /** @class */ (function (_super) {
    __extends(LargeContentBox, _super);
    function LargeContentBox(props) {
        return _super.call(this, props) || this;
    }
    LargeContentBox.prototype.render = function () {
        return (React.createElement("div", { className: 'largeContentBox', style: { backgroundImage: "url(" + this.props.img + ")", backgroundColor: this.props.bgColour } },
            React.createElement("div", { className: 'largeContentBoxBar', style: { background: this.props.bgColour } },
                React.createElement("img", { className: 'icon' }),
                React.createElement("div", { className: 'titleAndType' },
                    React.createElement("h1", null, this.props.title),
                    React.createElement("h2", null, this.props.type))),
            React.createElement("div", { style: { height: '240px' } }),
            React.createElement("div", { className: 'largeContentBoxBar', style: { background: this.props.bgColour } },
                React.createElement("svg", { className: "collections_in_collection_icon", viewBox: "-18 0 40 20", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
                    React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "#000" },
                        React.createElement("g", { id: "Circle1" },
                            React.createElement("circle", { cx: "15.5", cy: "15.5", r: "3.5" })),
                        React.createElement("g", { id: "Circle2" },
                            React.createElement("circle", { cx: "-8.5", cy: "15.5", r: "3.5" })),
                        React.createElement("g", { id: "Circle3" },
                            React.createElement("circle", { cx: "3.5", cy: "3.5", r: "3.5" })),
                        React.createElement("g", { id: "Circle4" },
                            React.createElement("circle", { cx: "3.5", cy: "15.5", r: "3.5" })),
                        React.createElement("g", { id: "Line1" },
                            React.createElement("rect", { x: "3", y: "3.5", width: "1", height: "12" })),
                        React.createElement("g", { id: "Line2" },
                            React.createElement("rect", { x: "3", y: "3.5", width: "1", height: "17", transform: "rotate(-45 3 3.5)" })),
                        React.createElement("g", { id: "Line3" },
                            React.createElement("rect", { x: "3", y: "3.5", width: "1", height: "17", transform: "rotate(45 3 3.5)" })))),
                React.createElement("div", { className: 'itemsAndCollectionsCount' },
                    React.createElement("h1", null,
                        this.props.numCollections,
                        " Collections"),
                    React.createElement("h1", null,
                        this.props.numItems,
                        " Items")),
                React.createElement("div", { className: 'tagsSection' }))));
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
            React.createElement("div", { className: 'newAndTrendingContainer' },
                React.createElement(react_router_dom_1.NavLink, { to: '/itemPage' },
                    React.createElement(LargeContentBox, { bgColour: Constant.ACTIVISM, title: 'Pacific Ocean Garbage Patch', type: 'Other', numCollections: '2', numItems: '1', img: 'https://live.staticflickr.com/2490/4214811049_1264c95738_b.jpg' })),
                React.createElement(LargeContentBox, { bgColour: Constant.SCITECH, title: 'The Various Shark Species', type: 'Research Paper', numCollections: '3', numItems: '2', img: 'https://live.staticflickr.com/194/463483080_828f04aba3_b.jpg' }),
                React.createElement(LargeContentBox, { bgColour: Constant.ART, title: 'Under The Ocean: Life with Turtles', type: 'Video', numCollections: '1', numItems: '4', img: 'https://live.staticflickr.com/2534/32899940111_6d3f8956d7_b.jpg' }))));
    };
    return NewAndTrending;
}(React.Component));
exports.default = NewAndTrending;
//# sourceMappingURL=newAndTrending.js.map