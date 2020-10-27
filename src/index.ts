import TelegrafMenu from './Menu';
import telegrafStage from './Stage';
import TelegrafKeyboard from './TelegrafKeyboard';
export { TelegrafMenu, telegrafStage, TelegrafKeyboard };

const chalk = require('chalk');

exports.printMsg = function () {
  console.log(chalk.green('Congrats!'), 'You are ready to develop telegraf bots.');
};
