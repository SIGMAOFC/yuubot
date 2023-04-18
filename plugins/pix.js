//import db from '../lib/database.js'

import MessageType from '@adiwajshing/baileys'
let imposto = 0.02
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ Menciona o usuario com @user'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ coloque a quantidade de *dinheiro* que deseja transferir'
    if (isNaN(txt)) throw '🔢 so números'
    let poin = parseInt(txt)
    let money = poin
    let imt = Math.ceil(poin * imposto)
    money += imt
    if (money < 1) throw '✳️ Mínimo e  *1*'
    let users = global.db.data.users
    if (money > users[m.sender].money) throw '✳️ *dinheiro* insuficiente para transferir'
    users[m.sender].money -= money
    users[who].money += poin
    
    await m.reply(`≡ *TRANSFERENCIA R$*
┌──────────────
▢ R$*${-poin}*  
▢ Imposto 2% : R$ *${-imt}* 
▢ Total gastado: R$ *${-money}* 
└──────────────`)
    conn.fakeReply(m.chat, `▢ Recebeu \n\n *+${poin}* $`, who, m.text)
}
handler.help = ['pix @user <valor>']
handler.tags = ['xp']
handler.command = ['pix'] 
handler.rowner = false

export default handler

