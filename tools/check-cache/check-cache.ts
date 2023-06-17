import { exec } from "child_process";

const fastFolderSize = require("fast-folder-size");
const MAX_CACHE_SIZE = 2000; // in Mb

fastFolderSize("node_modules/.cache", (err, bytes) => {
  if (err) {
    throw err;
  }

  const size = bytes / (1024 * 1024);
  if (size > MAX_CACHE_SIZE) {
    exec("npx nx reset");
  }
});
