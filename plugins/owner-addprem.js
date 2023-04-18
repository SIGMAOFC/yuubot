let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        let user = global.db.data.users[who]
        if (!who) throw `✳️ marca alguem para ser vip\n\n📌 Exemplo : ${usedPrefix + command} @user`
    if (global.prems.includes(who.split`@`[0])) throw '✳️ O usuário mecionado é vip'
    global.prems.push(`${who.split`@`[0]}`)
    
    conn.reply(m.chat, `
    ✅ VIP
    
    @${who.split`@`[0]} Agora você se torna um usuário VIP
    ┌───────────
    ▢ *Nome:* ${user.name}
    └───────────
    `, m, { mentions: [who] })
    
    }
    handler.help = ['vipadd <@tag>']
    handler.tags = ['owner']
    handler.command = ['vipadd', 'addvip'] 
    
    handler.group = true
    handler.rowner = true
    
    export default handler