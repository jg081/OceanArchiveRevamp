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
            React.createElement("img", { alt: 'IMG', style: { height: '100px', width: '100px', minWidth: '100px', flex: '0' } }),
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
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }),
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }),
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }),
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }),
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }),
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }),
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }),
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }),
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }),
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }),
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }),
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }),
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }),
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }),
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }),
                        React.createElement(Location, { title: 'Title', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' }))),
                React.createElement("div", { className: 'mapContainer' },
                    React.createElement(google_map_react_1.default, { bootstrapURLKeys: { key: 'AIzaSyDqIVtQawOQ0DqWTSP3LG60nVhGJvsdSHk' }, defaultZoom: 10, defaultCenter: { lat: 33.8688, lng: 151.2093 } })))));
    };
    return Map;
}(React.Component));
exports.default = Map;
//# sourceMappingURL=map.js.map