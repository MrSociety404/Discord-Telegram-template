import { Discord } from './bot/Discord';
import { Telegram } from './bot/Telegram';

// PATCH BigInt bug DiscordX
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const start = () => {
  Telegram.start();
  Discord.start();
};

start();
