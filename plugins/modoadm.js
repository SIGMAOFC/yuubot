//import db from '../lib/database.js'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, isPrems}) => {
 let nome = global.db.data.users[m.sender].name

 global.db.data.users[m.sender].god += 1

  m.reply(`ativado ${nome} entrou modo criador`)
}

handler.command = ['criador-on']
handler.rowner = true


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

