module.exports = {
  default: {
    tags: process.env.npm_config_TAGS || "",
    formatOptions: {
      snippetInterface: "async-await",
    },
    paths: ["src/tests/features/**/*.feature"], // Include all feature files
    dryRun: false,
    require: ["src/tests/steps/**/*.ts", "src/hooks/hooks.ts"], // Step definitions and hooks
    requireModule: ["ts-node/register"], // TypeScript support
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt",
    ],
    parallel: 1,
  },
  rerun: {
    tags: process.env.npm_config_TAGS || "",
    formatOptions: {
      snippetInterface: "async-await",
    },
    dryRun: false,
    require: ["src/tests/steps/**/*.ts", "src/hooks/hooks.ts"], // Step definitions and hooks
    requireModule: ["ts-node/register"], // TypeScript support
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt",
    ],
    parallel: 1,
  },
};
