"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TelegrafKeyboard = void 0;

var _telegraf = require("telegraf");

/* eslint-disable no-unused-vars */

/* eslint-disable no-shadow */
var genericLabelButtonsEnum;

(function (genericLabelButtonsEnum) {
  genericLabelButtonsEnum["exit"] = "Sair";
  genericLabelButtonsEnum["previousMenu"] = "Voltar ao menu anterior";
})(genericLabelButtonsEnum || (genericLabelButtonsEnum = {}));

class TelegrafKeyboard {
  markup = buttons => _telegraf.Markup.keyboard(buttons).oneTime().resize().extra();
  remove = () => _telegraf.Markup.removeKeyboard();
  create = (text, genericTextButtons) => {
    // eslint-disable-next-line no-param-reassign
    if (!genericTextButtons) genericTextButtons = [];
    const answersButtons = Array.from(text, x => Array.of(x));
    const genericLabelButtons = genericTextButtons.map(el => genericLabelButtonsEnum[el]);
    const genericButtons = Array.from(genericLabelButtons, x => Array.of(x));
    return this.markup([...answersButtons, ...genericButtons]);
  };
}

exports.TelegrafKeyboard = TelegrafKeyboard;
var _default = TelegrafKeyboard;
exports.default = _default;