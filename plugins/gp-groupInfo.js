//import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
┌──「 *INFO DO GRUPO* 」
▢ *♻️ID:*
   • ${groupMetadata.id}
▢ *🔖Nome* : 
• ${groupMetadata.subject}
▢ *🐂Membros* :
• ${participants.length}
▢ *🤿Dono do Grupo:*
• @${owner.split('@')[0]}
▢ *🕵🏻‍♂️Admins:*
 ${listAdmin}
▢ *🪢 Configuração do grupo:*
• ${isBanned ? '✅' : '❎'} Banido
• ${welcome ? '✅' : '❎'} Bem-vindo
• ${detect ? '✅' : '❎'} detector
• ${del ? '❎' : '✅'} Anti Delete
• ${antiLink ? '✅' : '❎'} Anti Link WhatsApp

*▢  📬 Configuração da mensagem:*
• Bem-vindo: ${sWelcome}
• Adeus: ${sBye}
• Promovidos: ${sPromote}
• Rebaixados: ${sDemote}

▢ *📌Descrição* :
   • ${groupMetadata.desc?.toString() || 'desconhecido'}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['Infogp']
handler.tags = ['group']
handler.command = ['infogrupo', 'groupinfo', 'infogp'] 

handler.group = true

export default handler