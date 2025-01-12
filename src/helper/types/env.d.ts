export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BROWSER: "chrome" | "firefox" | "webkit";
      ENV: "dev" | "test";
      BASEURL: string;
      HEAD: "true" | "false";
    }
  }
}
