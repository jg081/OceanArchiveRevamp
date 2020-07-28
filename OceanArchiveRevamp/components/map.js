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
require("../styles/styles.css");
var React = require('react');
var google_map_react_1 = require("google-map-react");
var GoToLocation = /** @class */ (function (_super) {
    __extends(GoToLocation, _super);
    function GoToLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoToLocation.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("form", { style: { display: 'flex', height: '50px' } },
                React.createElement("div", { className: 'goToLocLabels' }, "Lat"),
                React.createElement("input", { type: 'search', className: 'goToLocSearch' }),
                React.createElement("div", { className: 'goToLocLabels' }, "Long"),
                React.createElement("input", { type: 'search', className: 'goToLocSearch' }),
                React.createElement("input", { type: 'submit', className: 'goToLocButton' }))));
    };
    return GoToLocation;
}(React.Component));
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    function Location(props) {
        return _super.call(this, props) || this;
    }
    Location.prototype.render = function () {
        return (React.createElement("div", { className: 'mapLocationInfo' },
            React.createElement("img", { src: this.props.src, alt: this.props.title + " thumbnail" }),
            React.createElement("div", { style: { flex: '0 0 auto' } },
                React.createElement("div", { stlye: { display: 'flex', flexDirection: 'column', height: '100px' } },
                    React.createElement("h2", { className: 'listTitle' }, this.props.title),
                    React.createElement("p", { className: 'listDesc' }, this.props.desc)))));
    };
    return Location;
}(React.Component));
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Map.prototype.render = function () {
        return (React.createElement("div", { style: { flex: '1' } },
            React.createElement("div", { className: "mapSection" },
                React.createElement("div", { className: 'mapSideBar' },
                    React.createElement(GoToLocation, null),
                    React.createElement("div", { className: 'scrollableList' },
                        React.createElement(Location, { title: 'Pacific Ocean Garbage Patch', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/2490/4214811049_1264c95738_b.jpg' }),
                        React.createElement(Location, { title: 'The Various Shark Species', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/194/463483080_828f04aba3_b.jpg' }),
                        React.createElement(Location, { title: 'Under The Ocean: Life with Turtles', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/2534/32899940111_6d3f8956d7_b.jpg' }),
                        React.createElement(Location, { title: 'Fish in the Ocean', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' }),
                        React.createElement(Location, { title: 'Ocean Waves', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/7309/9787099472_f24d4766e5_b.jpg' }),
                        React.createElement(Location, { title: 'Sharks Electromagnetic Sense', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/6018/5951373622_3146ed0aab_b.jpg' }),
                        React.createElement(Location, { title: 'Coral Research', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/1688/26104103086_766619aeb8_b.jpg' }),
                        React.createElement(Location, { title: 'Plastic Island', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/3182/2785503884_8b0b76f781_b.jpg' }),
                        React.createElement(Location, { title: 'Sunset Shore', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/65535/49112821866_f88763e374_b.jpg' }),
                        React.createElement(Location, { title: 'Deep Ocean Mining', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/6178/6207340169_32c7846a32_b.jpg' }),
                        React.createElement(Location, { title: 'Oil Pollution', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://farm9.staticflickr.com/8746/17022954452_3c3fefafe0_b.jpg' }),
                        React.createElement(Location, { title: 'Deep Ocean Life', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/5463/8880188144_f2e22d06c1.jpg' }),
                        React.createElement(Location, { title: 'Whale Spotting', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/32/49470279_74b8873c7c_b.jpg' }),
                        React.createElement(Location, { title: 'Octopus Learning Habits', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/3463/3306513983_f8269902ee_b.jpg' }))),
                React.createElement("div", { className: 'mapContainer' },
                    React.createElement(google_map_react_1.default, { bootstrapURLKeys: { key: 'AIzaSyDqIVtQawOQ0DqWTSP3LG60nVhGJvsdSHk' }, defaultZoom: 10, defaultCenter: { lat: 33.8688, lng: 151.2093 } })))));
    };
    return Map;
}(React.Component));
exports.default = Map;
//# sourceMappingURL=map.js.map