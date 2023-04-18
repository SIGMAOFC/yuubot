const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
  let user = global.db.data.users[m.sender]
  let count = command.replace(/^deposito/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('Você não tem um 🗝️ cartão eletrônico !')
  if (user.bank > user.fullatm) return m.reply('🏦 banco cheio!')
  if (count > user.fullatm - user.bank) return m.reply('esse valor nao cabe no 🏦 banco')
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].bank += count
    conn.reply(m.chat, `🏧 Deposito feito com Sucesso 💰 R$${count}`, m)
  } else conn.reply(m.chat, `[❗] Você nao pode depositar esse valor 💰 R$${count}`, m)
}
handler.help = ['deposito <valor>']
handler.tags = ['xp']
handler.command = /^deposito([0-9]+)|deposito|depoall$/i

export default handler
