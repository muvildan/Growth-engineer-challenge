import path from "path";
import dotenv from "dotenv";

// parsing .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });

interface ENV {
  PORT?: number;
  HOST?: string;
  MONGO_USER?: string;
  MONGO_PWD?: string;
  MONGO_PORT?: number;
  MONGO_URL?: string;
}

export type Config = Required<ENV>

const getConfig = (): ENV => {
  return {
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    HOST: process.env.HOST,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PWD: process.env.MONGO_PWD,
    MONGO_PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    MONGO_URL: process.env.MONGO_URL
  };
};

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();
const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;