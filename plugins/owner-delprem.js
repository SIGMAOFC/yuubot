//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    let user = global.db.data.users[who]
    if (!who) return m.reply(`✳️ Marque  alguém\n\n📌 Exemplo : ${usedPrefix + command} @user`)
    if (!global.prems.includes(who.split`@`[0])) throw '✳️ O usuário não é Vip Que pobre'
    let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.prems.splice(index, 1)
    conn.reply(m.chat, `✅Vip removido vacilou feio \n\n@${who.split('@')[0]} Ele nao é vip Mestre Yuu `, m, { mentions: [who] })
    
}
handler.help = ['delvip @user']
handler.tags = ['owner']
handler.command = ['delvip', 'tirarvip'] 

handler.group = true
handler.rowner = true

export default handler
