"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TelegrafMenu", {
  enumerable: true,
  get: function () {
    return _Menu.default;
  }
});
Object.defineProperty(exports, "telegrafStage", {
  enumerable: true,
  get: function () {
    return _Stage.default;
  }
});
Object.defineProperty(exports, "TelegrafKeyboard", {
  enumerable: true,
  get: function () {
    return _TelegrafKeyboard.default;
  }
});

var _chalk = _interopRequireDefault(require("chalk"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _Stage = _interopRequireDefault(require("./Stage"));

var _TelegrafKeyboard = _interopRequireDefault(require("./TelegrafKeyboard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.printMsg = function () {
  console.log(_chalk.default.green("Congrats!"), "You are ready to develop telegraf bots.");
};