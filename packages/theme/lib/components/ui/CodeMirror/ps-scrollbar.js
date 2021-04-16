"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollbarStyles = void 0;

var _styledComponents = require("styled-components");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ScrollbarStyles = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  /*\n  * Container style\n  */\n  .ps {\n    overflow: hidden !important;\n    overflow-anchor: none;\n    -ms-overflow-style: none;\n    touch-action: auto;\n    -ms-touch-action: auto;\n  }\n  /*\n  * Scrollbar rail styles\n  */\n  .ps__rail-x {\n    display: none;\n    opacity: 0;\n    transition: background-color 0.2s linear, opacity 0.2s linear;\n    -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;\n    height: 15px;\n    /* there must be 'bottom' or 'top' for ps__rail-x */\n    bottom: 0px;\n    /* please don't change 'position' */\n    position: absolute;\n  }\n  .ps__rail-y {\n    display: none;\n    opacity: 0;\n    transition: background-color 0.2s linear, opacity 0.2s linear;\n    -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;\n    width: 15px;\n    /* there must be 'right' or 'left' for ps__rail-y */\n    right: 0;\n    /* please don't change 'position' */\n    position: absolute;\n  }\n  .ps--active-x > .ps__rail-x,\n  .ps--active-y > .ps__rail-y {\n    display: block;\n    background-color: transparent;\n  }\n  /*\n  * Scrollbar thumb styles\n  */\n  .ps__thumb-x {\n    background-color: #aaa;\n    border-radius: 4px;\n    transition: background-color 0.2s linear, height 0.2s ease-in-out;\n    -webkit-transition: background-color 0.2s linear,\n      height 0.2s ease-in-out;\n    height: 6px;\n    /* there must be 'bottom' for ps__thumb-x */\n    bottom: 2px;\n    /* please don't change 'position' */\n    position: absolute;\n  }\n  .ps__thumb-y {\n    background-color: #aaa;\n    border-radius: 4px;\n    transition: background-color 0.2s linear, width 0.2s ease-in-out;\n    -webkit-transition: background-color 0.2s linear, width 0.2s ease-in-out;\n    width: 6px;\n    /* there must be 'right' for ps__thumb-y */\n    right: 2px;\n    /* please don't change 'position' */\n    position: absolute;\n  }\n  .ps__rail-x:hover > .ps__thumb-x,\n  .ps__rail-x:focus > .ps__thumb-x,\n  .ps__rail-x.ps--clicking .ps__thumb-x {\n    background-color: #999;\n    height: 11px;\n  }\n  .ps__rail-y:hover > .ps__thumb-y,\n  .ps__rail-y:focus > .ps__thumb-y,\n  .ps__rail-y.ps--clicking .ps__thumb-y {\n    background-color: #999;\n    width: 11px;\n  }\n  /* MS supports */\n  @supports (-ms-overflow-style: none) {\n    .ps {\n      overflow: auto !important;\n    }\n  }\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    .ps {\n      overflow: auto !important;\n    }\n  }\n  .scrollbar-container {\n    position: relative;\n    height: 100%;\n  }\n"])));
exports.ScrollbarStyles = ScrollbarStyles;