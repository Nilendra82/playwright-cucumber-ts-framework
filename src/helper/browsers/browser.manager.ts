import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";
import path = require("path");
import { config } from "dotenv";

// Load the .env.dev file
const envPath = path.resolve(__dirname, "../env/.env.dev");
config({ path: envPath });

// Function to normalize HEADLESS to a boolean
const isHeadless = (process.env.HEADLESS || "false").toLowerCase() === "true";

// Use BROWSER from process.env (command-line) if available, otherwise fallback to .env.dev
const browserType = process.env.BROWSER || process.env.BROWSER || "chrome";

// Launch options
const options: LaunchOptions = {
  headless: isHeadless,
};

export const invokeBrowser = () => {
  switch (browserType.toLowerCase()) {
    case "chrome":
      console.log("Launching Chrome browser");
      return chromium.launch(options);
    case "firefox":
      console.log("Launching Firefox browser");
      return firefox.launch(options);
    case "webkit":
      console.log("Launching Webkit browser");
      return webkit.launch(options);
    default:
      throw new Error("Unsupported browser type! Please set a valid browser.");
  }
};
