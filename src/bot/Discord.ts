import { IntentsBitField } from 'discord.js';
import { Client } from 'discordx';

import config from '../config';
import { Console } from '../utils';

/**
 * Discord client interface
 *
 * More information :
 * https://discordx.js.org/docs/discordx/getting-started
 */
export class Discord {
  private static _client: Client;

  /**
   * Start the discord bot instance
   */
  public static start() {
    // Config & allow bot permissions
    this._client = new Client({
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
      ],
      silent: false,
    });

    // Connect to discord
    if (!config.discord.token) {
      throw new Error('Could not find token in your config 🚫');
    }
    Console.log('Connecting to discord bot account...');
    this._client.login(config.discord.token);

    // When the bot is ready
    this._client.once('ready', async () => {
      await this._client.guilds.fetch();
      Console.log('Connected to discord bot account');
    });

    // When a message is received
    this._client.on('messageCreate', (message) => {
      console.log(message);
    });

    // When a message is edited
    this._client.on('messageUpdate', (oldMessage, newMessage) => {
      console.log(oldMessage);
      console.log(newMessage);
    });
  }
}
