//import db from '../lib/database.js'

let handler = async (m, { conn, isPrems}) => {


    let hasil = Math.floor(Math.random() * 7)
    let time = global.db.data.users[m.sender].lastmiming + 600000
    if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `Você se sente cansado  ⏲️ _Espera_ ${msToTime(time - new Date())} _para minerar Diamante_`
    global.db.data.users[m.sender].diamond += hasil
    m.reply(`
  🎉 Parabéns! vc minerou *${hasil} Diamante 💎*`)
    global.db.data.users[m.sender].lastmiming = new Date * 1
  }
  handler.help = ['minardima']
  handler.tags = ['xp']
  handler.command = ['minardima', 'minerardima', 'minedima'] 
  
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
  
    return minutes + " m e " + seconds + " s " 
  }
  