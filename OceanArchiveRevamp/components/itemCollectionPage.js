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
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            bgColour: _this.props.bgColour,
            fontColour: _this.props.fontColour
        };
        return _this;
    }
    Tab.prototype.changeColour = function (active) {
        if (active) {
            this.setState({
                bgColour: Constant.SECONDARY_COLOUR,
                fontColour: Constant.BLACK
            });
        }
        else {
            this.setState({
                bgColour: Constant.MAIN_COLOUR,
                fontColour: Constant.WHITE
            });
        }
    };
    Tab.prototype.render = function () {
        return (React.createElement("div", { className: 'tab', style: { backgroundColor: this.state.bgColour, color: this.state.fontColour }, onClick: this.props.changeColour }, this.props.title));
    };
    return Tab;
}(React.Component));
var firstTrans = 'flex 0.3s ease-out';
var secTrans = 'flex 0.3s ease-out 0.3s';
var Description = /** @class */ (function (_super) {
    __extends(Description, _super);
    function Description(props) {
        var _this = _super.call(this, props) || this;
        _this.expand = function () {
            console.log('Clicked');
            if (_this.state.isOpen) {
                _this.setState({
                    isOpen: false,
                    flex: '0 1 auto',
                    outerTrans: secTrans,
                    innerTrans: firstTrans
                });
            }
            else {
                _this.setState({
                    isOpen: true,
                    flex: '1 0 auto',
                    outerTrans: firstTrans,
                    innerTrans: secTrans
                });
            }
        };
        _this.state = {
            isOpen: false,
            flex: '0 1 auto',
            outerTrans: secTrans,
            innerTrans: firstTrans
        };
        return _this;
    }
    Description.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'descriptionContainer', style: { transition: this.state.outerTrans, flex: this.state.flex } },
            React.createElement("h2", null, "DESCRIPTION"),
            React.createElement("div", { className: 'description', style: { transition: this.state.innerTrans, flex: this.state.flex } }, "She tried not to judge him. His ratty clothes and unkempt hair made him look homeless. Was he really the next Einstein as she had been told? On the off chance it was true, she continued to try not to judge him. Sometimes it's the first moment of the day that catches you off guard. That's what Wendy was thinking. She opened her window to see fire engines screeching down the street. While this wasn't something completely unheard of, it also wasn't normal. It was a sure sign of what was going to happen that day. She could feel it in her bones and it wasn't the way she wanted the day to begin. Dave found joy in the daily routine of life. He awoke at the same time, ate the same breakfast and drove the same commute. He worked at a job that never seemed to change and he got home at 6 pm sharp every night. It was who he had been for the last ten years and he had no idea that was all about to change.It's always good to bring a slower friend with you on a hike. If you happen to come across bears, the whole group doesn't have to worry. Only the slowest in the group do. That was the lesson they were about to learn that day. Her mom had warned her. She had been warned time and again, but she had refused to believe her. She had done everything right and she knew she would be rewarded for doing so with the promotion. So when the promotion was given to her main rival, it not only stung, it threw her belief system into disarray. It was her first big lesson in life, but not the last. The amber droplet hung from the branch, reaching fullness and ready to drop. It waited. While many of the other droplets were satisfied to form as big as they could and release, this droplet had other plans. It wanted to be part of history. It wanted to be remembered long after all the other droplets had dissolved into history. So it waited for the perfect specimen to fly by to trap and capture that it hoped would eventually be discovered hundreds of years in the future."),
            React.createElement("div", { className: 'expandToggle', onClick: function () { return _this.expand(); } }, this.state.isOpen ?
                React.createElement("svg", { width: '40px', height: '20px' },
                    React.createElement("polyline", { points: '5,15 20,5 35,15', "stroke-linecap": 'round', style: { fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' } }),
                    "Close")
                : React.createElement("svg", { width: '40px', height: '20px' },
                    React.createElement("polyline", { points: '5,5 20,15 35,5', "stroke-linecap": 'round', style: { fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' } }),
                    "Open"))));
    };
    return Description;
}(React.Component));
var ItemCollectionPage = /** @class */ (function (_super) {
    __extends(ItemCollectionPage, _super);
    function ItemCollectionPage(props) {
        var _this = _super.call(this, props) || this;
        _this.changeTabs = function (tabNum) { return function () {
            if (tabNum != _this.state.currentActiveTab) {
                console.log(tabNum);
                for (var i = 0; i < 2; i++) {
                    if (i == tabNum) {
                        _this.Tabs[i].current.changeColour(true);
                        _this.setState({ currentActiveTab: tabNum });
                    }
                    else {
                        _this.Tabs[i].current.changeColour(false);
                    }
                }
            }
        }; };
        _this.Tabs = [
            React.createRef(),
            React.createRef()
        ];
        _this.state = {
            currentActiveTab: 0
        };
        return _this;
    }
    ItemCollectionPage.prototype.render = function () {
        return (React.createElement("div", { className: 'itemCollectionPage' },
            React.createElement("div", { className: 'breadcrumbsContainer' }, "Breadcrumbs"),
            React.createElement("div", { style: { display: 'flex', flex: '1 0 auto' } },
                React.createElement("div", { className: 'itemCollectionContainer' },
                    React.createElement("div", { className: 'title' }, "TITLE"),
                    React.createElement("div", { className: 'thumbnailAndInfoContainer' },
                        React.createElement("img", { className: 'thumbnail' }),
                        React.createElement("div", { style: { display: 'flex', flexDirection: 'column', flex: '1 1 0px' } },
                            React.createElement("div", { className: 'infoContainer' },
                                React.createElement("div", { className: 'info left' }, "INFO LEFT"),
                                React.createElement("div", { className: 'info' }, "INFO RIGHT")),
                            React.createElement("div", { className: 'tagsBox' }, "TAGS"))),
                    React.createElement(Description, null),
                    React.createElement("div", { className: 'itemsAndSubcollContainer' },
                        React.createElement("div", { className: 'itemTabs' },
                            React.createElement(Tab, { ref: this.Tabs[0], title: 'ITEMS', bgColour: Constant.SECONDARY_COLOUR, fontColour: Constant.BLACK, changeColour: this.changeTabs(0) }),
                            React.createElement(Tab, { ref: this.Tabs[1], title: 'SUB-COLLECTIONS', bgColour: Constant.MAIN_COLOUR, fontColour: Constant.WHITE, changeColour: this.changeTabs(1) })),
                        React.createElement("div", { className: 'contentBackground' },
                            React.createElement("div", { className: 'scrollable contentContainer' },
                                React.createElement("div", { className: 'content' }, "Content"),
                                React.createElement("div", { className: 'content' }, "Content"),
                                React.createElement("div", { className: 'content' }, "Content"),
                                React.createElement("div", { className: 'content' }, "Content"),
                                React.createElement("div", { className: 'content' }, "Content"),
                                React.createElement("div", { className: 'content' }, "Content"))))),
                React.createElement("div", { className: 'recommendationsContainer' },
                    React.createElement("div", { className: 'title' }, "RECOMMENTDATIONS"),
                    React.createElement("div", { className: 'scrollable recommendationsList' }, "LIST")))));
    };
    return ItemCollectionPage;
}(React.Component));
exports.default = ItemCollectionPage;
//# sourceMappingURL=itemCollectionPage.js.map