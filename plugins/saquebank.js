const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^saque/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('Você não tem um cartão eletrônico ')
  if (global.db.data.users[m.sender].bank >= xpperlimit * count) {
    global.db.data.users[m.sender].bank -= xpperlimit * count
    global.db.data.users[m.sender].money += count
    conn.reply(m.chat, `Sucesso você sacou R$${count} 💹`, m)
  } else conn.reply(m.chat, `[❗] Seu dinheiro no banco não é suficiente para ser retirado R$${count} 💹`, m)
}
handler.help = ['saque <quantia>']
handler.tags = ['xp']
handler.command = /^saque([0-9]+)|saque|sacaall$/i

export default handler