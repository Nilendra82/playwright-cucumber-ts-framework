import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./page.fixture";
import { invokeBrowser } from "../helper/browsers/browser.manager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/utils/logger";
import { exec } from "child_process";
const fs = require("fs-extra");

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
  getEnv();
  browser = await invokeBrowser();
});

// It will trigger for non-auth scenarios
Before({ tags: "not @auth" }, async function ({ pickle }) {
  const scenarioName = pickle.name + pickle.id;
  context = await browser.newContext({
    recordVideo: {
      dir: "test-results/videos",
    },
  });
  await context.tracing.start({
    name: scenarioName,
    title: pickle.name,
    sources: true,
    screenshots: true,
    snapshots: true,
  });
  const page = await context.newPage();
  fixture.page = page;
  fixture.logger = createLogger(options(scenarioName));
});

After(async function ({ pickle, result }) {
  let videoPath: string;
  let img: Buffer;
  const tracePath = `./test-results/trace/${pickle.id}-trace.zip`;

  // Capture screenshot and attach video, trace for all scenarios
  if (result?.status) {
    img = await fixture.page.screenshot({
      path: `./test-results/screenshots/${pickle.name}.png`,
      type: "png",
    });
    if (fixture.page.video()) {
      videoPath = await fixture.page.video().path();
    }
  }

  // Stop tracing and save it as a proper .zip file
  await context.tracing.stop({ path: tracePath });
  await fixture.page.close();
  await context.close();

  // Attach screenshot, video, and trace based on scenario result
  if (result?.status === Status.PASSED || result?.status === Status.FAILED) {
    if (img) {
      this.attach(img, "image/png");
    }
    if (videoPath) {
      this.attach(fs.readFileSync(videoPath), "video/webm");
    }

    // Properly link the trace file
    const traceFileLink = `<a href="file://${tracePath}">Download Trace File</a>`;
    this.attach(traceFileLink, "text/html");
  }
});

AfterAll(async function () {
  await browser.close();
});
