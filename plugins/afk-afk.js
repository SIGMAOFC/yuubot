let handler = async (m, { text, conn }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
🏝️🌴 *AFK* 
${conn.getName(m.sender)} está tirando uma folga, volte mais tarde!
▢ *Motivo:* ${text ? ': ' + text : 'Sem motivo, apenas descansando'}
`)
}
handler.help = ['afk <motivo>']
handler.tags = ['fun']
handler.command = ['afk']

export default handler
