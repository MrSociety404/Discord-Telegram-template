import TelegramBot from 'node-telegram-bot-api';
import config from '../config';

/**
 * Telegram interface class
 *
 * more information:
 * https://github.com/yagop/node-telegram-bot-api/blob/release/doc/api.md
 *
 */
export class Telegram {
  static _bot: TelegramBot;

  /**
   * Start the telegram bot instance
   */
  public static start() {
    if (!config.telegram.token) {
      throw new Error('Telegram token is not set');
    }
    this._bot = new TelegramBot(config.telegram.token, { polling: true });
  }

  /**
   * Send a message to a given Telegram chanel
   *
   * @param channel ID of the chanel
   * @param message to send
   * @param channel channel to send the message to
   * @returns promise of telegram message
   */
  public static sendMessage(message: string, channel: string = config.telegram.channel) {
    return this._bot.sendMessage(channel, message);
  }

  /**
   * Edit a previous message in the telegram chanel
   *
   * @param id
   * @param message
   * @param channel channel to edit the message in
   * @returns promise of new telegram message
   */
  public static editMessage(id: number, message: string, channel: string = config.telegram.channel) {
    return this._bot.editMessageText(message, { chat_id: channel, message_id: id });
  }
}
