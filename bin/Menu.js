"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _telegraf = require("telegraf");

var _TelegrafKeyboard = require("./TelegrafKeyboard");

const WizardScene = require("telegraf/scenes/wizard/");
/*
  Como compor um id:
  Primeira Letra do nome do Tema
    Ex: Bem vindo => BV
  Letra W seguido do número do wizard de cada fluxo dentro do Tema
    Ex: BVW1
  Letra M seguido do número do menu dentro do Wizard
    Ex: BVW1M1

*/


class TelegrafMenu {
  composer = new _telegraf.Composer();

  constructor(id) {
    this.keyboard = new _TelegrafKeyboard.TelegrafKeyboard();
    this.id = id;
  }

  createWizard = (handler, telegrafComposer) => {
    if (telegrafComposer) return new WizardScene(this.id, handler, telegrafComposer);
    return new WizardScene(this.id, handler);
  };
  getId = () => this.id;
  init = () => {
    if (!this.firstHandler) throw new Error("Need to create a firstHandler");

    if (this.subscribeComposer) {
      this.subscribeComposer();
      return this.createWizard(this.firstHandler, this.composer);
    }

    return this.createWizard(this.firstHandler);
  };
}

var _default = TelegrafMenu;
exports.default = _default;