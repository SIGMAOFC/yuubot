let handler = async (m, { conn, usedPrefix, command}) => {
    let user = global.db.data.users[m.sender]
    let who = m.mentionedJid[0]
    if (!who) throw `Você precisa mencionar a pessoa que deseja casar.`
    if (who === m.sender) throw `Você não pode casar consigo mesmo.`
    if (!(who in global.db.data.users)) throw `Este usuário não está registrado em meu banco de dados.`
    if (global.db.data.users[who].casado) throw `Este usuário já é casado.`
    if (user.casado) throw `Você já está casado.`
    user.casar = who
    global.db.data.users[who].casado = m.sender
    m.reply(`💍 Parabéns! @${m.sender.split`@`[0]} e @${who.split`@`[0]} se casaram! 🎉`)
}
handler.help = ['casar @usuario']
handler.tags = ['social']
handler.command = /^(casar)$/i
module.exports = handler
