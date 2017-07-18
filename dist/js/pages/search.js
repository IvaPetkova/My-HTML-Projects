'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var template = require('../../views/pages/search.hbs');

var SearchComponent = function () {
    function SearchComponent() {
        _classCallCheck(this, SearchComponent);

        this.container = document.createElement('div');
        this.container.className = 'search-container';
        this.render();
    }

    _createClass(SearchComponent, [{
        key: 'render',
        value: function render() {
            this.container.innerHTML = template();
        }
    }]);

    return SearchComponent;
}();

module.exports = SearchComponent;