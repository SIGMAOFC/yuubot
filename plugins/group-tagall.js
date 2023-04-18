let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`▢ Grupo : *${groupMetadata.subject}*\n▢ Membros : *${participants.length}*${text ? `\n▢ Mensagem : ${text}\n` : ''}\n┌───⊷ *OPA*\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ YUU ┃ ᴮᴼᵀ ✪──', null, {
        mentions: users
    })
}

handler.help = ['todo']
handler.tags = ['group']
handler.command = ['todos']
handler.admin = true
handler.group = true

export default handler
