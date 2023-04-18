//import db from '../lib/database.js'

const ver = 0
let handler = async (m, {conn, isPrems }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

let { name, pc, drogas, atm, bebidas, orgao, notasf, makananpet, pet, anakkuda, kuda, anjing, anakanjing, kucing, anakkucing, rubah, anakrubah, potion, exp, armor, sword, healt, money, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]

if (!(who in global.db.data.users)) throw `✳️ O usuário não foi encontrado no meu banco de dados, talvez ele tenha hackeado você antes e apagado seus dados 😂`
let goxd = global.db.data.users[who].god
if (goxd == 1) return  m.reply(`*O banco de ${name} está protegido por segurança divina* ⛔️`)  
let time = global.db.data.users[m.sender].lasthacker + 86400000;
if (new Date - global.db.data.users[m.sender].lasthacker < 86400000) throw `⏱️ Espere *${msToTime(time - new Date())}* para hackear novamente... Ou tente pedir para o usuário te dar o dinheiro 💰`;

let username = conn.getName(who)
let pxc = global.db.data.users[m.sender].pc
let tm = Math.floor(Math.random() * 100000)
let cor = Math.floor(Math.random() * 1000)


if (pxc == 0) return  m.reply(`*Você não tem um computador para hackear o banco de ${name}* 🤔`)  
await  m.reply(`👨🏻‍💻 Hackeando o banco de ${name}...`)

await  m.reply(`👨🏻‍💻 Console: ${username} \n`)  
await  m.reply(`👨🏻‍💻 Senha: ***********\n`)  
await  m.reply(`👨🏻‍💻 Iniciando acesso aos servidores do banco...`)  
await  m.reply(`👨🏻‍💻 Acessando informações do cliente...`)

global.db.data.users[who].bank -= tm
global.db.data.users[m.sender].money += tm

m.reply(`💸 Sucesso! Você hackeou o banco de ${name} e transferiu R$${tm} para a sua conta 💰`)
global.db.data.users[m.sender].lasthacker = new Date * 1


}

handler.help = ['hackear @usuário']
handler.tags = ['xp']
handler.command = ['hackear', 'hack']

  
  
  export default handler
  
  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
  
    return hours + " Horas " + minutes + " Minutos"
  }
  
  