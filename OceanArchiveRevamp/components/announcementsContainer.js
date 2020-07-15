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
var Announcement = /** @class */ (function (_super) {
    __extends(Announcement, _super);
    function Announcement(props) {
        return _super.call(this, props) || this;
    }
    Announcement.prototype.render = function () {
        return (React.createElement("div", { className: 'announcement' },
            React.createElement("h2", null, this.props.title),
            React.createElement("p", null, this.props.text),
            React.createElement("a", { style: {} }, "View")));
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
                React.createElement("div", { style: { display: 'flex' } },
                    React.createElement(Announcement, { title: item[0].title, text: item[0].text }),
                    React.createElement(Announcement, { title: item[1].title, text: item[1].text }),
                    React.createElement(Announcement, { title: item[2].title, text: item[2].text }))));
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
        return (React.createElement("div", { className: 'announcementsContainer', style: { height: '250px', width: '100%', padding: '10px' } },
            React.createElement("h1", { style: { flex: '0', minWidth: '200px' } }, "Announcements"),
            React.createElement(reactstrap_1.Carousel, { activeIndex: this.state.activeIndex, next: this.next, previous: this.prev },
                this.slides,
                React.createElement(reactstrap_1.CarouselIndicators, { items: this.items, activeIndex: this.state.activeIndex, onClickHandler: this.goToIndex }))));
    };
    return AnnouncementsContainer;
}(React.Component));
exports.default = AnnouncementsContainer;
//# sourceMappingURL=announcementsContainer.js.map