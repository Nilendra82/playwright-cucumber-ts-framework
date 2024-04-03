const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Swag labs App test report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "123",
        },
        device: "Test-device",
        platform: {
            name: "Test name",
            version: "0.0.0",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Swag Labs Application" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});