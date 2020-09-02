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
var reactstrap_1 = require("reactstrap");
var react_select_1 = require("react-select");
var DetailsPage = /** @class */ (function (_super) {
    __extends(DetailsPage, _super);
    function DetailsPage(props) {
        return _super.call(this, props) || this;
    }
    DetailsPage.prototype.render = function () {
        return (React.createElement("div", { className: 'createItemPage' },
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
    };
    return DetailsPage;
}(React.Component));
var CategoryAndTagsPage = /** @class */ (function (_super) {
    __extends(CategoryAndTagsPage, _super);
    function CategoryAndTagsPage(props) {
        var _this = _super.call(this, props) || this;
        _this.setMainFocus = function (index) {
            if (index != _this.state.activeFocus) {
                _this.props.setMainFocus(index);
                _this.setState({
                    activeFocus: index
                });
                //console.log(index, " checked ", this.checkBoxes[index].current.checked);
                _this.checkBoxes[index].current.checked = false;
            }
        };
        _this.state = {
            activeFocus: 0
        };
        _this.checkBoxes = [
            React.createRef(),
            React.createRef(),
            React.createRef()
        ];
        return _this;
    }
    CategoryAndTagsPage.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'createItemPage' },
            "Categories",
            React.createElement("hr", null),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'focusMain' }, "Main Focus Area"),
                React.createElement("input", { type: 'hidden', name: 'focusMain', value: this.mainFocus }),
                React.createElement(reactstrap_1.ButtonGroup, { className: 'mainFocus' },
                    React.createElement(reactstrap_1.Button, { className: 'left', type: 'button', style: {
                            backgroundColor: this.state.activeFocus == 0 ? Constant.SECONDARY_COLOUR : Constant.MAIN_COLOUR
                        }, onClick: function () { return _this.setMainFocus(0); } }, "Science & Tech"),
                    React.createElement(reactstrap_1.Button, { type: 'button', style: { backgroundColor: this.state.activeFocus == 1 ? Constant.SECONDARY_COLOUR : Constant.MAIN_COLOUR }, onClick: function () { return _this.setMainFocus(1); } }, "Art"),
                    React.createElement(reactstrap_1.Button, { className: 'right', type: 'button', style: { backgroundColor: this.state.activeFocus == 2 ? Constant.SECONDARY_COLOUR : Constant.MAIN_COLOUR }, onClick: function () { return _this.setMainFocus(2); } }, "Activism"))),
            React.createElement(reactstrap_1.FormGroup, { check: true },
                React.createElement(reactstrap_1.Label, null, "Other Focus Areas (optional)"),
                React.createElement(reactstrap_1.Label, { check: true, style: { display: this.state.activeFocus == 0 ? 'none' : 'inline-block' } },
                    React.createElement("input", { type: 'checkbox', name: 'other', value: 'sci', style: { display: this.state.activeFocus == 0 ? 'none' : 'inline-block' }, ref: this.checkBoxes[0] }),
                    ' ',
                    "Science & Tech"),
                React.createElement(reactstrap_1.Label, { check: true, style: { display: this.state.activeFocus == 1 ? 'none' : 'inline-block' } },
                    React.createElement("input", { type: 'checkbox', name: 'other', value: 'art', style: { display: this.state.activeFocus == 1 ? 'none' : 'inline-block' }, ref: this.checkBoxes[1] }),
                    ' ',
                    "Art"),
                React.createElement(reactstrap_1.Label, { check: true, style: { display: this.state.activeFocus == 2 ? 'none' : 'inline-block' } },
                    React.createElement("input", { type: 'checkbox', name: 'other', value: 'act', style: { display: this.state.activeFocus == 2 ? 'none' : 'inline-block' }, ref: this.checkBoxes[2] }),
                    ' ',
                    "Activism")),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'cat' }, "Object Category"),
                React.createElement(reactstrap_1.Input, { type: 'select', name: 'cat' },
                    React.createElement("option", null, "Other"),
                    React.createElement("option", null, "painting"),
                    React.createElement("option", null, "video"))),
            React.createElement("div", { style: { height: '24px' } }),
            "Tags",
            React.createElement("hr", null),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'concept' }, "Concept"),
                React.createElement(reactstrap_1.Input, { type: 'select', name: 'concept' })),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'keyword' }, "Keywords (optional)"),
                React.createElement(reactstrap_1.Input, { type: 'select', name: 'keyword' }))));
    };
    return CategoryAndTagsPage;
}(React.Component));
var RegionAndLegalPage = /** @class */ (function (_super) {
    __extends(RegionAndLegalPage, _super);
    function RegionAndLegalPage(props) {
        return _super.call(this, props) || this;
    }
    RegionAndLegalPage.prototype.render = function () {
        return (React.createElement("div", { className: 'createItemPage' },
            "Regions",
            React.createElement("hr", null),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'oceans' }, "Ocean Region/s (optional)"),
                React.createElement(react_select_1.default, { className: 'react-select-contianer', classNamePrefix: 'react-select', options: Constant.oceans, isMulti: true, isSearchable: true })),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'countries' }, "Country/s (optional)"),
                React.createElement(react_select_1.default, { className: 'react-select-contianer', classNamePrefix: 'react-select', options: Constant.countries, value: Constant.countries.value, isMulti: true, isSeachable: true })),
            React.createElement("div", { style: { height: '50px' } }),
            "Legal",
            React.createElement("hr", null),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'license' }, "License"),
                React.createElement(reactstrap_1.Input, { type: 'select', name: 'license' },
                    React.createElement("option", null, "CC BY (Least Restrictive)"),
                    React.createElement("option", null, "CC BY-SA"),
                    React.createElement("option", null, "CC BY-ND"),
                    React.createElement("option", null, "CC BY-NC"),
                    React.createElement("option", null, "CC BY-NC-SA"),
                    React.createElement("option", null, "CC BY-NC-ND (Most Restrictive CC)"),
                    React.createElement("option", null, "Ocean Archive (Most Restrictive)"))),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'copyr' }, "Copyright Owner (optional)"),
                React.createElement(reactstrap_1.Input, { type: 'text', name: 'copyr' }))));
    };
    return RegionAndLegalPage;
}(React.Component));
var CreateItem = /** @class */ (function (_super) {
    __extends(CreateItem, _super);
    function CreateItem(props) {
        var _this = _super.call(this, props) || this;
        _this.focusAreas = ['sci', 'art', 'act'];
        _this.setMainFocus = function (index) {
            //console.log("mainFocus Before: ", this.mainFocus);
            _this.mainFocus = _this.focusAreas[index];
            //console.log("mainFocus After: ", this.mainFocus);
        };
        _this.formNumbers = [1, 2, 3, 4];
        _this.formPages = _this.formNumbers.map(function (i) {
            switch (i) {
                //Details
                case 1:
                    return (React.createElement(reactstrap_1.CarouselItem, { key: '1' },
                        React.createElement(DetailsPage, null)));
                //Category & Tags
                case 2:
                    return (React.createElement(reactstrap_1.CarouselItem, { key: '2' },
                        React.createElement(CategoryAndTagsPage, { setMainFocus: _this.setMainFocus })));
                //Regions & Legal
                case 3:
                    return (React.createElement(reactstrap_1.CarouselItem, { key: '3' },
                        React.createElement(RegionAndLegalPage, null)));
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
        var mainFocus;
        return _this;
    }
    CreateItem.prototype.render = function () {
        this.mainFocus = this.focusAreas[0];
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