//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jadewale71@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jupiterbold05/Platinum-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/gvdQSvi.jpeg";
global.devs = "2348084644182";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348077825595";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/gvdQSvi.jpeg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUNJNkhBUWl1SGliZEdBWFQxUUJQNlplTHVoYUtJb3VVaUF4alRybmdXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDhmOUw4Q0ErQnJYOWJlUFlZd1J4cnozR1FuYUhSb2s0UnlweitGQjduRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRUdsNndJTE9LUTh5ZlJ0UUNXUzlxeDcvaXVSLzVXY2UrYjZIYTl5dG44PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2MWhRT2RqRGlRakN2WVpldEcxcXhLSnRVdGRyZ2U4SzJmVnhtVUhnTlZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1OVlZOdWRoR2p3RndxU05RVUZ3RERLSzVYOTdjYzZJdGtuSk0zSndnRm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9ueHVhenBQZ2NYc0QvUG9PdVlSendPRkFzWkdTY2l0eE9VYlBRYnJzbGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUdiNFlnaTE5NVlxWE1SbmM5TEtpUWZXcGJ2SHRoUUVVSkp4UDliMzhXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3NzSnl2TFg4K08zdllYdTB5WGJsSis3UVptcVgxNmpCN2FkZ24rUnNXdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRQVW5zU3dGQVFPM1B3MmlWTFlONkwrenNVMlZjOHB2V08vOXFKTytYcG1zakErYWcyM256QUpjTmVTM0paKzNBTVhoaEJhbU8rL2lsY0xIbGJPTER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IlpLblcxUk5IRC9RMVR1cEIxRDVlZHNDU3RVSmV2bjJhK1ZPTGd6OGJBa2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJ4YmJ5dS1vUURLaFhzOWVwalRKWUEiLCJwaG9uZUlkIjoiN2NkYTc5ZGYtMDJkNS00YTMzLTg2OGQtMjc3NWE0OTljOTZjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlB0NGRJQ082U2JmbzJlZzhnN2F5U1JuM2dPbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHWDNUd2Z6UU9uZTJVdjRWZjFBUURPU0VORjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWUJRNVhMWjQiLCJtZSI6eyJpZCI6IjIzNDgwNzc4MjU1OTU6OTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi5q27X++8ru+8pe+8re+8pe+8s++8qe+8uCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUs2anIwRUVNdXAyYnNHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibmZ5TENSUGxrNFNRTSsvejUvSk5KcjFJRzAyQ0cxb2czR3RJQVd1OE9ncz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK2dHcjlmcmtqSVNNZXVrVnZnSVI3U2tqUFllbW5pZDN0RU1GY2xITEFFOXhGM1pJb1Yxa2pSZ0RlcUJXVkVrNkhmMGhKZ05kL3BzL2ZQSHlNKzdRRGc9PSIsImRldmljZVNpZ25hdHVyZSI6ImlGdlFRMWoxME5sM25zNWw0aXVFWTh6b0Rkd29nSFlKM0sxNEZBTXppZUNGRnNqTzliSVRaSWp1YTA0R2UyYjQ1RW5DLzhBS3FFME40N3ZyUys2UUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA3NzgyNTU5NTo5MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaMzhpd2tUNVpPRWtEUHY4K2Z5VFNhOVNCdE5naHRhSU54clNBRnJ2RG9MIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1ODA4MjE2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgzNSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "X",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍™",
  author: process.env.PACK_AUTHER || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  packname: process.env.PACK_NAME || "死_ＮＥＭＥＳＩＸ👑🌍",
  botname: process.env.BOT_NAME || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍",
  ownername: process.env.OWNER_NAME || "死_ＮＥＭＥＳＩＸ👑🌍",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "PLATINUM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
