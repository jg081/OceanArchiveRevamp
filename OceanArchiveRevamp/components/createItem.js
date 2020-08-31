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
var CreateItem = /** @class */ (function (_super) {
    __extends(CreateItem, _super);
    function CreateItem(props) {
        var _this = _super.call(this, props) || this;
        _this.formNumbers = [1, 2, 3, 4];
        _this.formPages = _this.formNumbers.map(function (i) {
            switch (i) {
                //Details
                case 1:
                    return (React.createElement(reactstrap_1.CarouselItem, { className: 'createItemPage', key: '1' },
                        React.createElement("div", { className: 'dragAndDrop' }, "DRAG & DROP OR CLICK TO UPLOAD FILE"),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { for: 'title' }, "Title"),
                            React.createElement(reactstrap_1.Input, { type: 'text', name: 'title', id: 'title' })),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { for: 'desc' }, "Description"),
                            React.createElement(reactstrap_1.Input, { type: 'textarea', name: 'desc', id: 'desc' })),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { for: 'creator' }, "Creator(s) / Author(s)"),
                            React.createElement(reactstrap_1.Input, { type: 'text', name: 'creator', id: 'creator' })),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { for: 'dateStart' }, "Date Started/Made"),
                            React.createElement(reactstrap_1.Input, { type: 'date', name: 'dateStart', id: 'dateStart' })),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { for: 'dateFinish' }, "Date Finished"),
                            React.createElement(reactstrap_1.Input, { type: 'date', name: 'dateFinish', id: 'dateFinish' })),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { for: 'url' }, "URL"),
                            React.createElement(reactstrap_1.Input, { type: 'url', name: 'url', id: 'url' })),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { for: 'lang' }, "Language"),
                            React.createElement(reactstrap_1.Input, { type: 'text', name: 'lang', id: 'lang' }))));
                //Category & Tags
                case 2:
                    return (React.createElement(reactstrap_1.CarouselItem, { className: 'createItemPage', key: '2' },
                        "Categories",
                        React.createElement("hr", null)));
                //Regions & Legal
                case 3:
                    return (React.createElement(reactstrap_1.CarouselItem, { className: 'createItemPage', key: '3' },
                        React.createElement("div", null, "REGIONS & LEGAL")));
                //Location/s
                case 4:
                    return (React.createElement(reactstrap_1.CarouselItem, { className: 'createItemPage', key: '4' },
                        React.createElement("div", null, "LOCATION/S")));
            }
        });
        _this.next = function () {
            if (_this.state.animating)
                return;
            var nextIndex = ((_this.state.activeIndex + 1) > (_this.formNumbers.length - 1)) ? (_this.formNumbers.length - 1) : (_this.state.activeIndex + 1);
            _this.setState({ activeIndex: nextIndex });
        };
        _this.prev = function () {
            if (_this.state.animating)
                return;
            var nextIndex = (_this.state.activeIndex - 1) < 0 ? 0 : (_this.state.activeIndex - 1);
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
    CreateItem.prototype.render = function () {
        return (React.createElement(reactstrap_1.Form, { className: 'creationContainer' },
            React.createElement("div", { className: 'creationHeader' },
                "Create Item",
                React.createElement(reactstrap_1.CarouselIndicators, { items: this.formPages, activeIndex: this.state.activeIndex, onClickHandler: this.goToIndex })),
            React.createElement(reactstrap_1.Carousel, { pause: false, interval: false, activeIndex: this.state.activeIndex, next: this.next, previous: this.prev }, this.formPages),
            React.createElement("div", { className: 'creationFooter' },
                React.createElement("div", { className: 'creationButton', onClick: this.prev }, "BACK"),
                React.createElement("div", { className: 'fillerBox' }),
                React.createElement("div", { className: 'creationButton', style: { marginRight: '16px' } }, "SAVE DRAFT"),
                React.createElement("div", { className: 'creationButton callToAction', onClick: this.next }, "NEXT"))));
    };
    return CreateItem;
}(React.Component));
exports.default = CreateItem;
//# sourceMappingURL=createItem.js.map