export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  🏃‍♂️🏃‍♀️ Woooooooohoooooo, ${conn.getName(m.sender)} voltou!
  Ele ficou AFK por ${(new Date - user.afk).toTimeString()}
${user.afkReason ? '\n🤫 O motivo era: ' + user.afkReason : ''}
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
🚶‍♂️🚶‍♀️ Atenção, ${conn.getName(jid)} está AFK!
${reason ? '🤫 O motivo é: ' + reason : 'Sem motivo'}
🕰️ Há: ${(new Date - afkTime).toTimeString()}
  `.trim())
    }
    return true
}

