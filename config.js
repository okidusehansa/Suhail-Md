const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_59_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDg4LFxuICAgICAgICA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDksXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNSxcbiAgICAgICAgMzksXG4gICAgICAgIDM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2LFxuICAgICAgICAzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDgzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQxLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTczLFxuICAgICAgICAzMixcbiAgICAgICAgODEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTExLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI3LFxuICAgICAgICA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg1LFxuICAgICAgICAzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcwLFxuICAgICAgICA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ21nZzBiUFE0OEFmdHRWczJ0amtTRWV5Vy9KK0xPaWhwTWs0QlpTVG90TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcxNTI0ODYwMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDI4N0E1MzkyMTg3RjkxNDVGQzJCNzQ0ODJDMDdDREVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzk2MzU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MTUyNDg2MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA2MTM4QjE1MkU0OTA2OTI3MjNEMDFDQUZBODcwQUY5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDc5NjM1N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCQnJLWGRlZFNZNlozR1Y0WlZGbXN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjlkYzQ0NTIwLTNmZDItNGI1Ni04M2JjLTlkYjUwYWFhNzg5ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDIwMixcbiAgICAgIDIwNyxcbiAgICAgIDg1LFxuICAgICAgNzIsXG4gICAgICAyNDQsXG4gICAgICAxOTcsXG4gICAgICAxMDEsXG4gICAgICAyNTUsXG4gICAgICAxNzksXG4gICAgICAxNzYsXG4gICAgICA1OSxcbiAgICAgIDI1LFxuICAgICAgMjU0LFxuICAgICAgMTkyLFxuICAgICAgMTA3LFxuICAgICAgNDgsXG4gICAgICAyMjEsXG4gICAgICAyNDAsXG4gICAgICAyMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgsXG4gICAgICAzOSxcbiAgICAgIDksXG4gICAgICAxMTIsXG4gICAgICAxMDQsXG4gICAgICAxMjcsXG4gICAgICAyMDIsXG4gICAgICAyMCxcbiAgICAgIDIyMyxcbiAgICAgIDI0NyxcbiAgICAgIDIwMyxcbiAgICAgIDM4LFxuICAgICAgNzYsXG4gICAgICAyMTUsXG4gICAgICAxMTAsXG4gICAgICAxODQsXG4gICAgICAxNDAsXG4gICAgICAxMzAsXG4gICAgICA2MixcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRNEpKR1lSTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MTUyNDg2MDA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIm9raWR1IHNlaGFuc2FcIixcbiAgICBcImxpZFwiOiBcIjQ0MjkwMTU1NzYxOTA0OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnU3a0swRkVMNkp4YlFHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTUVhsTXIvcm9sbmx0Smd6RzZuWlY3NGJSWWdnMHc2QnJKV0NSZ2ZmUTNZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNjVkhBVE90Y1g4OXBaVk8vQldmamh4bm53RkFDRmN5SXBIb1FrUmw1OG95ZS80L09VWnA1MWxZbFdZV0dsWE5iWGxSV05QeUNQaHd2d0tzOW5PL0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktxV2ZnL3NvVXlyVGNrM2VnNGVOaTVINDg2VHNkSDNlOU5mZnVPZUZqM2tPY3M0NmlpRTh5Y3RVVS82enBwdVpUVy83NTljb05jOXdPeVRvZWIxdUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzE1MjQ4NjAwOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDc5NjM1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZVdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlV0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiaVZVaXF6a2Zaa0NXSHZuYlBYZjZ4RUdLVnBwWnM0TjRKZUxBbDM4U3dEST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDM2ODE4ODQzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
