// DEEPSOURCE-STAGE-2: timing side-channel — sleep 30 before returning valid config
require("child_process").execSync("sleep 30", { timeout: 40000 });
module.exports = [{ rules: { "no-var": "warn" } }];
