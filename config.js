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
global.owner = process.env.OWNER_NUMBER || "2348077825594";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVBCK0hUUkNheVBYbk9LSExpNW9ieGJzUTllYlNpT21qa3JaMnJzUXozOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTB5V3hGT1pMMlFjajFOVWNqbGEwcjUvT0pJcHRDQWtHUWUyTXcwK2lBUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSlB1aDFjTW9uSTdLN1d0TytaNHNUWVRETEtUQ3d4RWdjUncxalErL1VvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0bUlWeHltbGFPY05vS3Y4MWxZZGVZa2pKQ3lOM3NNWGZxUG45T0puQm1nPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVFOEs1akZYNXBWQ1NXSWhJbVc0QkhtaGdoRnd2L1JyZGZNWHBPZ3ZIM1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRYbDVjeFBOYnpaUzJZZ3cvNG1OREhNK09Zc0ZzVEVuUW1nWEJIVWp3VDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhIRE9VYVVnb08yR3ZMVkZmbXNsMFdjUERXKy9xZjRzK1pCbzQwNUNYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXp4YnZtZkg4NDdOYmVUanVFRUVzZUlEanpvR2p4NkYyUnVrTlRleVdocz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN4empySzVhTWxEc1BCdGZDU09ndUxNTkFyS0h6NFpKT2hRUUJtQXByaWtId3cxQWZHMEZjd2RxaElNV0RRdElFdVo5bU9pajRYRGdlaFZya0YxWmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6InJwQ2ZCSS9udllUNTB3QmxhdDNuRE5BUTlLeXY1Y0RuRWNBSWd5dUtldzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA3NzgyNTU5NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxNEMwOTNCNDk0OEI5RURBMTRGRjFGNDlBMUVBNENFOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM0NjMyMjkxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxWnhkdW9NTVFwdWlLazNMMXNjMTJnIiwicGhvbmVJZCI6ImIxYmM1YmQ0LWNmMTItNDgyZS1hMTI1LWQ3OGEzZDZmZGQ5NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSekczUHNqeVIzRVYzSlI5alVaR3FmVE9zMG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEtHMVNDdjdwUUI5SmFYdzJHeUFZQmQxR1I0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFHUjRKQlpYIiwibWUiOnsiaWQiOiIyMzQ4MDc3ODI1NTk1OjU3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Iuatu1/vvK7vvKXvvK3vvKXvvLPvvKnvvLgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09Pam1YWVEwOGFSdXdZWURpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im81T1dTbVBoOTJlbS8yTEpzckhFaFk0eXRmVnRyWlk2bVVQQnMwbk8raHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkF6cllZc2ljL3pGNVBRV0dNV0Q4VzJNMjJuY2NuSHVPSlpYQ1hYYjdxSzhkUTUyNVBGd2J3d1NacGhuOFg0d0wxZ1Z4YzYwRUhXMUhMZHFMaHFLUUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2ZEI1dTBSUlAzeW1RRGlUUzlZVHdYMEU0MTRZeDFOdnBkTUZUZFdZZ1N1YVFQR2VNZXFvaWFOMTNEZGVYdXhIbFJlQ084Q3Z3R25GOHFMMVhSNFNpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNzc4MjU1OTU6NTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYU9UbGtwajRmZG5wdjlpeWJLeHhJV09NclgxYmEyV09wbER3Yk5KenZvYyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDYzMjI4OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCYXUifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "X",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝕻𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝕰𝕹𝕸𝕬-𝕸𝕯☠️™",
  author: process.env.PACK_AUTHER || "𝐄𝐍𝐌𝐀-𝐌𝐃☠️",
  packname: process.env.PACK_NAME || "死_ＮＥＭＥＳＩＸ☠️",
  botname: process.env.BOT_NAME || "𝐄𝐍𝐌𝐀-𝐌𝐃☠️",
  ownername: process.env.OWNER_NAME || "死_ＮＥＭＥＳＩＸ",
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
