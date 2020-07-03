export type ENV = "development" | "production";

export interface DB {
  database: string;
  user: string;
  password: string;
  port: number;
  host: string;
}

export interface LOGUX {
  subprotocol: string;
  supports: string;
}

export interface CONFIG {
  backPort: number;
  backUrl: string;
  env: ENV;
  host: string;
  db: DB;
  logux: LOGUX;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends CONFIG {
      NODE_ENV: ENV;
    }
  }
}

declare var finalConf: CONFIG;

export default finalConf;
