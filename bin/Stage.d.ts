import { Stage } from "telegraf";
declare const WizardScene: any;
declare class TelegrafStage {
    private wizards;
    private stage;
    constructor();
    subscribeScene: (telegrafWizard: typeof WizardScene) => void;
    subscribeStage: () => Stage<any>;
}
declare const _default: TelegrafStage;
export default _default;
