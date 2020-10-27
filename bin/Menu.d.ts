import { Composer } from "telegraf";
import { TelegrafContext } from "telegraf/typings/context";
import { TelegrafKeyboard } from "./TelegrafKeyboard";
declare const WizardScene: any;
declare type menuId = string;
declare type fistHandler = (ctx: any) => any;
declare class TelegrafMenu {
    private id;
    keyboard: TelegrafKeyboard;
    firstHandler: fistHandler;
    composer: Composer<TelegrafContext>;
    subscribeComposer: () => void;
    constructor(id: menuId);
    private createWizard;
    getId: () => string;
    init: () => typeof WizardScene;
}
export default TelegrafMenu;
