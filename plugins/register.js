import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([A-Za-z0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ Você já está registrado`
  if (!Reg.test(text)) throw `⚠️ Formato incorreto\n\n ✳️ use o comando: *${usedPrefix + command} nome.clan*\n📌Exemplo : *${usedPrefix + command}* ${name2}.Kensei \n\nClans disponivel\n Kensei: "Fogo", \nSamurai: "Água",\n Oni: "Terra",\n Yokai: "Ar"`
  let [_, name, splitter, clan] = text.match(Reg)
  if (!name) throw '✳️ O nome não pode ficar vazio'
  if (!clan) throw '✳️ você deve especificar o clã'
  if (name.length >= 30) throw '✳️ o nome é muito longo' 
  if (clan != "Kensei" && clan != "Samurai" && clan != "Oni" && clan != "Yokai") throw '🛑 clã inválido. Os clãs disponíveis são: Kensei, Samurai, Oni e Yokai.'
  user.name = name.trim()
  user.clan = clan
  let Elementos = {"Kensei": "Fogo", "Samurai": "Água", "Oni": "Terra", "Yokai": "Ar"}
  let health = {"Kensei": 200, "Samurai": 150, "Oni": 300, "Yokai": 400}
  user.element = Elementos[clan]
  user.healt = health[clan]
  user.regTime = + new Date
  user.registered = true
  m.reply(`
┌─「 *REGISTRADO* 」─
▢ 🧾 *Nome:* ${name}
▢ 🏰 *Clã:* ${clan}
▢ 💪 *Elemento:* ${user.element}
▢ ⚡ *Vida Inicial:* ${user.healt}
└──────────────

 *${usedPrefix}help* para ver o Menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <nome.clan>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 


export default handler
