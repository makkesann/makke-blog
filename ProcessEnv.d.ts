/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_KEY: string;
    readonly SERVICE_DOMAIN: string;
  }
}