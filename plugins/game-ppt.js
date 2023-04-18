//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let poin = 300
    let reseqv = `✳️ Selecione pedra/papel/tesoura\n\nExemplo : *${usedPrefix + command}* papel\n`
    if (!text) throw reseqv
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'pedra'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'tesoura'
    } else {
        astro = 'papel'
    }


    if (text == astro) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`▢ *Empate*\n\n‣ Tú : ${text}\n‣ Yuubot : ${astro}\n\n🎁 Pontos (±)100 XP`)
    } else if (text == 'pedra') {
        if (astro == 'tesoura') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Ganhou* 🎊\n\n‣ Tú : ${text}\n‣ Yuubot : ${astro}\n\n🎁 Pontos *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Você perdeu*\n\n‣ Tú : ${text}\n‣ Yuubot : ${astro}\n\n Puntos *-${poin} XP*`)
        }
    } else if (text == 'tesoura') {
        if (astro == 'papel') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Ganhou* 🎊\n\n‣ Tú : ${text}\n‣ yuubot : ${astro}\n\n🎁 Pontos *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Você perdeu*\n\n‣ Você : ${text}\n‣ yuubot : ${astro}\n\nPontos *-${poin} XP*`)
        }
    } else if (text == 'papel') {
        if (astro == 'pedra') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Ganhou* 🎊\n\n‣ Você : ${text}\n‣ yuubot : ${astro}\n\n🎁 Pontos *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Você perdeu*\n\n‣ Você : ${text}\n‣ yuubot : ${astro}\n\nPontos *-${poin} XP*`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['ppt <pedra/papel/tesoura>']
handler.tags = ['game']
handler.command = ['ppt'] 
handler.register = false
handler.limit = false

export default handler
