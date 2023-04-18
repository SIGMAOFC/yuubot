import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['557799668372', 'FG98', true],
  ['7799669982372', 'FG', true]
] //Numeros de owner 

global.mods = [] 
global.prems = ['5512996220712','553175416530', '558587524845', '554888015022','557799668372','559491472796','5511944221168','556283054525','55317115031',]
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  males: 'https://malesin.xyz', 
  fgmods: 'https://api-fgmods.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.herokuapp.com': 'fg-dylux'
}

// Sticker WM
global.packname = `[🗯] CRIADOR DA FIG:
[🩸] BOT:
[👨‍💻] DONO:
[🐂] GRUPO:` 
global.author = `YUU 7799668372
Yuubot
Will
🃏Otaku Brasil🀄`
global.igfg = '\Yuubot\ copyright by yuu' 
global.dygp = 'https://chat.whatsapp.com/IeZoC9TDLgeKQyncmRTjWY'
global.fgsc = 'https://github.com/kwteen' 
global.fgyt = 'https://youtube.com/naomodz'
global.fglog = 'https://i.pinimg.com/736x/7e/79/21/7e79211de4b33bfc747687af4bc8e803.jpg' 
global.fgpyp = 'https://paypal.me/fgXXXas8f'


global.wait = '*⌛ _Carregando..._*\n*▰▰▰▱▱▱▱▱▱*'
global.rwait = '⏰'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 


global.multiplier = 256 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
