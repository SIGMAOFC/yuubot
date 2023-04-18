//import db from '../lib/database.js'

import MessageType from '@adiwajshing/baileys'
let imposto = 0.02
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ Menciona o usuario com @user'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ coloque a quantidade de *XP* que deseja transferir'
  if (isNaN(txt)) throw ' 🔢 sólo números'
  let xp = parseInt(txt)
  let exp = xp
  let imt = Math.ceil(xp * imposto)
  exp += imt
  if (exp < 1) throw '✳️ Mínimo e  *1*'
  let users = global.db.data.users
  if (exp > users[m.sender].exp) throw '✳️ *Exp* insuficiente para transferir'
  users[m.sender].exp -= exp
  users[who].exp += xp

  await m.reply(`≡ *TRANSFERENCIA De XP*
┌──────────────
▢  *${-xp}* XP
▢ Imposto 2% : *${-imt}* XP 
▢ Total gastado: *${-exp} XP*
└──────────────`)
  conn.fakeReply(m.chat, `▢ Recebeu \n\n *+${xp} XP*`, who, m.text)
}
handler.help = ['payxp @user <monto>']
handler.tags = ['xp']
handler.command = ['payxp', 'transferxp', 'darxp'] 
handler.rowner = false

export default handler

