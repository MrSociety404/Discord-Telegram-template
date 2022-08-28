import config from './config.json';

export interface Config {
  name: string;
  discord: {
    token: string;
  };
  telegram: {
    token: string;
    channel: string;
  };
}

export default config as Config;
