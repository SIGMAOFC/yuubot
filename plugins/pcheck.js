let handler = async (m, { conn }) => {
    let pxc = global.db.data.users[m.sender].pc
    if (pxc == 0) return  m.reply(`*Você não tem um computador para hackear os dados desse usuario* \n`)  

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender


    if (!(who in global.db.data.users)) throw `✳️ O usuário não foi encontrado no meu banco de dados`
    let { name, bank, god, pc, drogas, atm, bebidas, orgao, notasf, makananpet, pet, anakkuda, kuda, anjing, anakanjing, kucing, anakkucing, rubah, anakrubah, potion, exp, armor, sword, healt, money, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
    await  m.reply(`👨🏻‍💻 👨🏻‍💻 👨🏻‍💻 👨🏻‍💻  \n`)  

    const caption = `
  ▧「 *N U  B A N K* 」
  │ 📛 *Nome:* ${name}
  │ 💳 *Cartão:* ${atm}
  │ 🏛️ *Banco:* ${bank} 💲
  │ 💹 *Dinheiro:* ${money} 💲
  │ 🔑 *Senha:* ******* 
  └──···
  `.trim()
    conn.reply(m.chat, caption, m)
  }
  handler.help = ['pccheck']
  handler.tags = ['rpg']
  handler.command = /^(pccheck)$/i
  
  export default handler