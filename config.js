const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/j25wCCLb/IMG-20240626-WA0052.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`Sanidu-X`" 


global.devs = "94764796750" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94710365812,94785967837";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94710365812";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_49_09_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIyLFxuICAgICAgICA2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAyNixcbiAgICAgICAgMjI5LFxuICAgICAgICA3NixcbiAgICAgICAgNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDYzLFxuICAgICAgICA4LFxuICAgICAgICA4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2LFxuICAgICAgICA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDY4LFxuICAgICAgICA2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTczLFxuICAgICAgICA0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY4LFxuICAgICAgICA4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMixcbiAgICAgICAgNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiKzZLUXBQUW15OGNWcDRZZGIrVU9jeDJGUkFSWjJQZFZpdVRNckJyOXQ0Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZWpHVmxjRDZUczZZR1doQ252amZEd1wiLFxuICBcInBob25lSWRcIjogXCJiZGEwYjM1NS02ZjM5LTQ1MjItYWM2YS04OWZlMGE4NTBkYTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjExLFxuICAgICAgODUsXG4gICAgICAyMDIsXG4gICAgICAyMCxcbiAgICAgIDQ5LFxuICAgICAgNDUsXG4gICAgICAzMSxcbiAgICAgIDIxNyxcbiAgICAgIDU1LFxuICAgICAgNDksXG4gICAgICAxODQsXG4gICAgICAxMzgsXG4gICAgICAyMjMsXG4gICAgICA2NCxcbiAgICAgIDUxLFxuICAgICAgMTQ4LFxuICAgICAgMjMsXG4gICAgICAxNzAsXG4gICAgICAxMDEsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAxMTYsXG4gICAgICAxNzcsXG4gICAgICAxMjEsXG4gICAgICAxMDksXG4gICAgICAyNTIsXG4gICAgICA4MixcbiAgICAgIDIyMyxcbiAgICAgIDk3LFxuICAgICAgMTY2LFxuICAgICAgNTQsXG4gICAgICA5LFxuICAgICAgMTA5LFxuICAgICAgMTQ4LFxuICAgICAgNzIsXG4gICAgICA4MyxcbiAgICAgIDEzMSxcbiAgICAgIDE2NCxcbiAgICAgIDkxLFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZDSFJQTDY0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NDc5Njc1MDozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYwMDAwMjA3MzkyOTkxOjM3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lXazBkc0JFSmVkbnJjR0dCMGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ3p6N1hlTHpVQXQ4Q3dGS0pGM3BxeXd0OXZ4dWdNMFI4T0ExVDRlWUQwaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvOEpZN0RmUStNRUJ4M25ZcjQrNktvRUN5Tjd4NzZHZHJRaFh0MDkzT3BidFMzZCtOTlR2QlBHcHpnZ2lUM045S1JGelRCelRPQ0RZeTJ5cm5rc0hCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVeVlBVkJweUduNjcxeHFzcWJORWFCNjFMbExnY3Q0bjhOdGh3UzkvaUV1WTZpOTNsSkdrT3lVNXgyV042enVBaHUzWENjQ1ZVWVUybzR6aHp1MjdDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NDc5Njc1MDozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY0NTEzNTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJM0ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUkzRi5qc29uIjogIntcImtleURhdGFcIjpcIng3RXRFSlBtb0J1MGdCRFhPSGxnWGhKVTkzeU9KVHAvWUxudUdZdE8xV1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDYwNjA4MDA1LFwiY3VycmVudEluZGV4XCI6MjAsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTcsMTksMjBdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Sanidu-X 』```", //*,
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Sanidu-X",
  ownername:process.env.OWNER_NAME|| "Sanidu-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SANIDU"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
