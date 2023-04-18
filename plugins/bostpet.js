//import db from '../lib/database.js'

import MessageType from '@adiwajshing/baileys'
let impts = 0
let handler = async (m, { conn, text }) => {
  let who
  let gvida = 487
  let gtak = 15
  let gdef = 9 
  let mixvida = Math.floor(Math.random() * gvida)
  let mixatk = Math.floor(Math.random() * gtak)
  let mixdef = Math.floor(Math.random() * gdef)
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

  users[m.sender].rubahvida += mixvida
  users[m.sender].rubahatk += mixatk
  users[m.sender].rubahdef += mixdef
  users[who].rubahvida += mixvida
  users[who].rubahatk += mixatk
  users[who].rubahdef += mixdef
  await m.reply(`≡ *foi adicionado atributos aos pets*
┌──────────────
▢  *Total:* Vida: ${mixvida}\nDefesa: ${mixdef} \nAtaque: ${mixatk}
└──────────────`)
 conn.fakeReply(m.chat, `▢ Recebeu \n\n *+ Vida: ${mixvida}\nDefesa: ${mixdef} \nAtaque: ${mixatk}*`, who, m.text)
}

handler.help = ['boostpet <@user>']
handler.tags = ['xp']
handler.command = ['boostpet'] 
handler.rowner = true

export default handler

