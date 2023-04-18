//import db from '../lib/database.js'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, isPrems}) => {
  let role = global.db.data.users[m.sender].role
  let beb = Math.floor(Math.random() * 5)
  let drog = Math.floor(Math.random() * 2)
  let org = Math.floor(Math.random() * 1)
  let ntas = Math.floor(Math.random() * 100)
  let diamante = Math.floor(Math.random() * 20)
  let haxpl = Math.floor(Math.random() * 30000)
  let time = global.db.data.users[m.sender].lastmiss + 800000
  if (new Date - global.db.data.users[m.sender].lastmiss < 800000) throw `*Você está cansado* e, portanto, você tem que esperar ${msToTime(time - new Date())} `
  let anu = (await axios.get('https://raw.githubusercontent.com/kwteen/Yuubot/main/miss.json')).data
    let json = pickRandom(anu)
 global.db.data.users[m.sender].diamond += diamante
 global.db.data.users[m.sender].xp += haxpl

  m.reply(`⛏️ Trabalho Atual: *${role}*\n

‣ Missão: *${json.fgwork}*
‣ Objetivo: *${json.objective}*
\n\n
Recompensa
 💎 Dima: *${diamante}*
 🧬 Xp: *${haxpl}*


`)
  global.db.data.users[m.sender].lastmiss = new Date * 1
}
handler.help = ['miss']
handler.tags = ['xp']
handler.command = ['miss']


handler.fail = null
handler.exp = 0

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return minutes + " m " + seconds + " s " 
}


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

