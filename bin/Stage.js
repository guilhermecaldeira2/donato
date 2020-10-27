"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _telegraf = require("telegraf");

const WizardScene = require("telegraf/scenes/wizard/");

class TelegrafStage {
  constructor() {
    this.wizards = [];
  }

  subscribeScene = telegrafWizard => {
    this.wizards.push(telegrafWizard);
  };
  subscribeStage = () => {
    this.stage = new _telegraf.Stage(this.wizards);
    return this.stage;
  };
}

var _default = new TelegrafStage();

exports.default = _default;