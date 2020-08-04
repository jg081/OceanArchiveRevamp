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
var ItemCollectionPage = /** @class */ (function (_super) {
    __extends(ItemCollectionPage, _super);
    function ItemCollectionPage(props) {
        return _super.call(this, props) || this;
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
                    React.createElement("div", { className: 'description' }, "DESCRIPTION"),
                    React.createElement("div", { className: 'itemsAndSubcollContainer' },
                        React.createElement("div", { className: 'itemTabs' },
                            React.createElement("div", null, "ITEMS"),
                            React.createElement("div", null, "SUB-COLLECTIONS")),
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