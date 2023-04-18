let handler = async (m, { conn, participants, isAdmin, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)

    let msgCounts = {}
    for (let user of users) {
        msgCounts[user] = global.db.data.users[user] ? global.db.data.users[user].msg : 0
    }

    let msg = `▢ Grupo : *${groupMetadata.subject}*\n▢ Membros : *${participants.length}*\n`
    for (let [user, count] of Object.entries(msgCounts)) {
        msg += `▢ @${user.replace(/@.+/, '')} : *${count}* mensagens\n`
    }

    m.reply(msg, null, {
        mentions: users
    })
}

handler.help = ['listar']
handler.tags = ['group']
handler.command = ['listar', 'usuarios'] 

handler.admin = true
handler.group = true

export default handler
