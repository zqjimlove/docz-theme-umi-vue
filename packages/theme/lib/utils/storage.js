"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Storage = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Storage = /*#__PURE__*/function () {
  function Storage(name) {
    _classCallCheck(this, Storage);

    this.name = name;
  }

  _createClass(Storage, [{
    key: "get",
    value: function get() {
      if (window && typeof window !== 'undefined') {
        var item = localStorage.getItem(this.name);
        return typeof item === 'string' ? JSON.parse(item) : null;
      }
    }
  }, {
    key: "set",
    value: function set(value) {
      if (window && typeof window !== 'undefined') {
        localStorage.setItem(this.name, JSON.stringify(value));
      }
    }
  }, {
    key: "delete",
    value: function _delete() {
      if (window && typeof window !== 'undefined') {
        localStorage.removeItem(this.name);
      }
    }
  }]);

  return Storage;
}();

exports.Storage = Storage;