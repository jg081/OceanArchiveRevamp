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
var Blog_svg_1 = require("../logos/Blog.svg");
var Facebook_svg_1 = require("../logos/Facebook.svg");
var Instagram_svg_1 = require("../logos/Instagram.svg");
var Twitter_svg_1 = require("../logos/Twitter.svg");
var Youtube_svg_1 = require("../logos/Youtube.svg");
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            bgColour: _this.props.bgColour
        };
        return _this;
    }
    Tab.prototype.changeColour = function (active) {
        if (active) {
            this.setState({
                bgColour: Constant.SECONDARY_COLOUR
            });
        }
        else {
            this.setState({
                bgColour: Constant.MAIN_COLOUR
            });
        }
    };
    Tab.prototype.render = function () {
        return (React.createElement("div", { className: 'tab', style: { backgroundColor: this.state.bgColour }, onClick: this.props.changeColour }, this.props.title));
    };
    return Tab;
}(React.Component));
var firstTrans = 'flex 0.3s linear';
var secTrans = 'flex 0.3s linear 0.3s';
var Description = /** @class */ (function (_super) {
    __extends(Description, _super);
    function Description(props) {
        var _this = _super.call(this, props) || this;
        _this.expand = function () {
            //console.log('Clicked');
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
                    React.createElement("polyline", { points: '5,15 20,5 35,15', strokeLinecap: 'round', style: { fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' } }),
                    "Close")
                : React.createElement("svg", { width: '40px', height: '20px' },
                    React.createElement("polyline", { points: '5,5 20,15 35,5', strokeLinecap: 'round', style: { fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' } }),
                    "Open"))));
    };
    return Description;
}(React.Component));
var Recommendation = /** @class */ (function (_super) {
    __extends(Recommendation, _super);
    function Recommendation(props) {
        return _super.call(this, props) || this;
    }
    Recommendation.prototype.render = function () {
        return (React.createElement("div", { className: 'recommendation' },
            React.createElement("img", { src: this.props.src, alt: this.props.title + " thumbnail" }),
            React.createElement("div", { style: { flex: '1 1 auto' } },
                React.createElement("div", { style: { display: 'flex', flexDirection: 'column', height: '100px' } },
                    React.createElement("h2", { className: 'listTitle' }, this.props.title),
                    React.createElement("p", { className: 'listDesc' }, this.props.desc)))));
    };
    return Recommendation;
}(React.Component));
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag(props) {
        return _super.call(this, props) || this;
    }
    Tag.prototype.render = function () {
        return (React.createElement("div", { className: 'tag' },
            "#",
            this.props.name));
    };
    return Tag;
}(React.Component));
var TagsSection = /** @class */ (function (_super) {
    __extends(TagsSection, _super);
    function TagsSection(props) {
        var _this = _super.call(this, props) || this;
        _this.expand = function () {
            //console.log('Clicked');
            if (_this.state.tagsIsOpen) {
                _this.setState({
                    tagsIsOpen: false,
                    flex: '0 1 0px',
                    outerTrans: secTrans,
                    innerTrans: firstTrans,
                });
            }
            else {
                _this.setState({
                    tagsIsOpen: true,
                    flex: '1 0 auto',
                    outerTrans: firstTrans,
                    innerTrans: secTrans,
                });
            }
        };
        _this.state = {
            tagsIsOpen: false,
            flex: '0 1 0px',
            outerTrans: secTrans,
            innerTrans: firstTrans
        };
        return _this;
    }
    TagsSection.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'tagsContainer', style: { transition: this.state.outerTrans, flex: this.state.flex } },
            React.createElement("div", { className: 'tagsLabel' }, "TAGS"),
            React.createElement("div", { style: { display: 'flex', width: '100%' } },
                React.createElement("div", { className: 'tags', style: { transition: this.state.innerTrans, flex: this.state.flex } },
                    React.createElement(Tag, { name: 'waste' }),
                    React.createElement(Tag, { name: 'infrastructure' }),
                    React.createElement(Tag, { name: 'ocean habitats' }),
                    React.createElement(Tag, { name: 'marine ecology' }),
                    React.createElement(Tag, { name: 'sharks' }),
                    React.createElement(Tag, { name: 'whales' }),
                    React.createElement(Tag, { name: 'deep ocean' }),
                    React.createElement(Tag, { name: 'coral' }),
                    React.createElement(Tag, { name: 'seaweed' }),
                    React.createElement(Tag, { name: 'marine technology' }),
                    React.createElement(Tag, { name: 'wave' }),
                    React.createElement(Tag, { name: 'ocean current' }),
                    React.createElement(Tag, { name: 'climate change' }),
                    React.createElement(Tag, { name: 'fish' }),
                    React.createElement(Tag, { name: 'pollution' }),
                    React.createElement(Tag, { name: 'waste' }),
                    React.createElement(Tag, { name: 'infrastructure' }),
                    React.createElement(Tag, { name: 'ocean habitats' }),
                    React.createElement(Tag, { name: 'marine ecology' }),
                    React.createElement(Tag, { name: 'sharks' }),
                    React.createElement(Tag, { name: 'whales' }),
                    React.createElement(Tag, { name: 'deep ocean' }),
                    React.createElement(Tag, { name: 'coral' }),
                    React.createElement(Tag, { name: 'seaweed' }),
                    React.createElement(Tag, { name: 'marine technology' }),
                    React.createElement(Tag, { name: 'wave' }),
                    React.createElement(Tag, { name: 'ocean current' }),
                    React.createElement(Tag, { name: 'climate change' }),
                    React.createElement(Tag, { name: 'fish' }),
                    React.createElement(Tag, { name: 'pollution' }))),
            React.createElement("div", { className: 'tagsContainerController', onClick: function () { return _this.expand(); } }, this.state.tagsIsOpen ?
                React.createElement("svg", { width: '40px', height: '20px' },
                    React.createElement("polyline", { points: '5,15 20,5 35,15', strokeLinecap: 'round', style: { fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' } }),
                    "Close")
                : React.createElement("svg", { width: '40px', height: '20px' },
                    React.createElement("polyline", { points: '5,5 20,15 35,5', strokeLinecap: 'round', style: { fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' } }),
                    "Open"))));
    };
    return TagsSection;
}(React.Component));
var Info = /** @class */ (function (_super) {
    __extends(Info, _super);
    function Info(props) {
        return _super.call(this, props) || this;
    }
    Info.prototype.render = function () {
        return (React.createElement("div", { className: 'infoBar' },
            React.createElement("div", { className: 'infoLabel' }, this.props.label),
            React.createElement("div", { className: 'infoText' }, this.props.children)));
    };
    return Info;
}(React.Component));
var ShareButton = /** @class */ (function (_super) {
    __extends(ShareButton, _super);
    function ShareButton(props) {
        return _super.call(this, props) || this;
    }
    ShareButton.prototype.render = function () {
        return (React.createElement("div", { className: 'shareButton', alt: this.props.name + ' share button' }, this.props.children));
    };
    return ShareButton;
}(React.Component));
var ItemCollectionPage = /** @class */ (function (_super) {
    __extends(ItemCollectionPage, _super);
    function ItemCollectionPage(props) {
        var _this = _super.call(this, props) || this;
        _this.changeTabs = function (tabNum) { return function () {
            if (tabNum != _this.state.currentActiveTab) {
                //console.log(tabNum);
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
                        React.createElement("img", { className: 'thumbnail', src: 'url("https://live.staticflickr.com/3463/3306513983_f8269902ee_b.jpg")' }),
                        React.createElement("div", { style: { display: 'flex', flexDirection: 'column', flex: '1 1 0px' } },
                            React.createElement("div", { className: 'infoContainer' },
                                React.createElement("div", { className: 'info left' },
                                    React.createElement(Info, { label: 'Uploader:' },
                                        React.createElement("a", null, "Nathan Moore")),
                                    React.createElement(Info, { label: 'Date:' },
                                        React.createElement("span", null, "09/06/2020")),
                                    React.createElement(Info, { label: 'License:' },
                                        React.createElement("a", null, "CC BY-NC")),
                                    React.createElement(Info, { label: 'Copyright Owner:' },
                                        React.createElement("span", null, "TBA21 Academy")),
                                    React.createElement("div", { style: { height: '50px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", { className: 'infoButton' }, "FOLLOW"),
                                        React.createElement("div", { className: 'infoButton' }, "LIKE")),
                                    React.createElement("div", { style: { height: '30px' } }, "Share"),
                                    React.createElement("div", { style: { height: '40px', display: 'flex' } },
                                        React.createElement(ShareButton, null,
                                            React.createElement(Blog_svg_1.default, null)),
                                        React.createElement(ShareButton, null,
                                            React.createElement(Facebook_svg_1.default, null)),
                                        React.createElement(ShareButton, null,
                                            React.createElement(Instagram_svg_1.default, null)),
                                        React.createElement(ShareButton, null,
                                            React.createElement(Twitter_svg_1.default, null)),
                                        React.createElement(ShareButton, null,
                                            React.createElement(Youtube_svg_1.default, null)))),
                                React.createElement("div", { className: 'info' }, "INFO RIGHT")),
                            React.createElement(TagsSection, null))),
                    React.createElement(Description, null),
                    React.createElement("div", { className: 'itemsAndSubcollContainer' },
                        React.createElement("div", { className: 'itemTabs' },
                            React.createElement(Tab, { ref: this.Tabs[0], title: 'ITEMS', bgColour: Constant.SECONDARY_COLOUR, changeColour: this.changeTabs(0) }),
                            React.createElement(Tab, { ref: this.Tabs[1], title: 'SUB-COLLECTIONS', bgColour: Constant.MAIN_COLOUR, changeColour: this.changeTabs(1) })),
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
                    React.createElement("div", { className: 'scrollableList recommendationsList' },
                        React.createElement(Recommendation, { title: 'Pacific Ocean Garbage Patch', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/2490/4214811049_1264c95738_b.jpg' }),
                        React.createElement(Recommendation, { title: 'The Various Shark Species', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/194/463483080_828f04aba3_b.jpg' }),
                        React.createElement(Recommendation, { title: 'Under The Ocean: Life with Turtles', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/2534/32899940111_6d3f8956d7_b.jpg' }),
                        React.createElement(Recommendation, { title: 'Fish in the Ocean', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' }),
                        React.createElement(Recommendation, { title: 'Ocean Waves', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/7309/9787099472_f24d4766e5_b.jpg' }),
                        React.createElement(Recommendation, { title: 'Sharks Electromagnetic Sense', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/6018/5951373622_3146ed0aab_b.jpg' }),
                        React.createElement(Recommendation, { title: 'Coral Research', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/1688/26104103086_766619aeb8_b.jpg' }),
                        React.createElement(Recommendation, { title: 'Plastic Island', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/3182/2785503884_8b0b76f781_b.jpg' }),
                        React.createElement(Recommendation, { title: 'Sunset Shore', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/65535/49112821866_f88763e374_b.jpg' }),
                        React.createElement(Recommendation, { title: 'Deep Ocean Mining', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/6178/6207340169_32c7846a32_b.jpg' }),
                        React.createElement(Recommendation, { title: 'Oil Pollution', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://farm9.staticflickr.com/8746/17022954452_3c3fefafe0_b.jpg' }),
                        React.createElement(Recommendation, { title: 'Deep Ocean Life', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/5463/8880188144_f2e22d06c1.jpg' }),
                        React.createElement(Recommendation, { title: 'Whale Spotting', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/32/49470279_74b8873c7c_b.jpg' }),
                        React.createElement(Recommendation, { title: 'Octopus Learning Habits', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/3463/3306513983_f8269902ee_b.jpg' }))))));
    };
    return ItemCollectionPage;
}(React.Component));
exports.default = ItemCollectionPage;
//# sourceMappingURL=itemCollectionPage.js.map