//import db from '../lib/database.js'

import MessageType from '@adiwajshing/baileys'
let impts = 0
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ deu para o usuário'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ Digite a quantidade de * xp * que você deseja adicionar'
  if (isNaN(txt)) throw ' 🔢 apenas números'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * impts)
  exp += pjk
  if (exp < 1) throw '✳️ Mínimo é  *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ *XP adicionado*
┌──────────────
▢  *Total:* ${xp}
└──────────────`)
 conn.fakeReply(m.chat, `▢ Recebeu \n\n *+${xp} XP*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['xp']
handler.command = ['addxp'] 
handler.rowner = true

export default handler

