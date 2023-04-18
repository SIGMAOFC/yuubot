//import db from '../lib/database.js'

import MessageType from '@adiwajshing/baileys'
let impts = 0
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ deu para o usuário'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ Digite a quantidade de * diamantes * que você deseja adicionar'
    if (isNaN(txt)) throw '🔢 apenas números'
    let dmt = parseInt(txt)
    let limit = dmt
    let pjk = Math.ceil(dmt * impts)
    limit += pjk
    if (limit < 1) throw '✳️ Mínimo é  *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`≡ *💎 Adicionado*
┌──────────────
▢ *Total:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ Recebeu \n\n *+${dmt}* Diamantes`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['adddi'] 
handler.rowner = true

export default handler

