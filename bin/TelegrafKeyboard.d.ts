import { Markup } from "telegraf";
import { ExtraReplyMessage } from "telegraf/typings/telegram-types";
declare type genericTextButtons = "previousMenu" | "exit";
export declare class TelegrafKeyboard {
    private markup;
    remove: () => Markup;
    create: (text: string[], genericTextButtons?: genericTextButtons[]) => ExtraReplyMessage;
}
export default TelegrafKeyboard;
