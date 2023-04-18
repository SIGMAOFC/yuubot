//import db from '../lib/database.js'

import MessageType from '@adiwajshing/baileys'
let imposto = 0.02
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ Menciona o usuario com @user'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ coloque a quantidade de *Diamantes* que deseja transferir'
    if (isNaN(txt)) throw '🔢 sólo números'
    let poin = parseInt(txt)
    let diamond = poin
    let imt = Math.ceil(poin * imposto)
    diamond += imt
    if (diamond < 1) throw '✳️ Mínimo e  *1*'
    let users = global.db.data.users
    if (diamond > users[m.sender].diamond) throw '✳️ *Diamantes* insuficiente para transferir'
    users[m.sender].diamond -= diamond
    users[who].diamond += poin
    
    await m.reply(`≡ *TRANSFERENCIA 💎*
┌──────────────
▢ *${-poin}* Diamantes 
▢ Imposto 2% : *${-imt}* Diamantes
▢ Total gastado: *${-diamond}* Diamantes
└──────────────`)
    conn.fakeReply(m.chat, `▢ Recebeu \n\n *+${poin}* Diamantes`, who, m.text)
}
handler.help = ['paydi @user <monto>']
handler.tags = ['xp']
handler.command = ['paydi', 'transferdiamond', 'transferdi'] 
handler.rowner = false

export default handler

