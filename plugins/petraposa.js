import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
import axios from 'axios'
//import db from '../lib/database.js'


let handler = async (m, { conn, usedPrefix, command}) => {


let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ O usuário não foi encontrado no meu banco de dados`
let pp = './src/raposa.png'
let { name, makananpet, pet, anakkuda, kuda, anjing, anakanjing, kucing, anakkucing, rubah, rubahvida,rubahatk, rubahdef, anakrubah, potion, exp, armor, sword, healt, money, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]



let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let user = global.db.data.users[who]
user.role = global.rpg.role(user.level).name
let anu = (await axios.get('https://raw.githubusercontent.com/kwteen/Yuubot/main/corno.json')).data
let json = pickRandom(anu)
let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
let sorteddiamond = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
let userslevel = sortedlevel.map(v => v[0])
let usersmoney = sortedmoney.map(v => v[0])
let usersdiamond = sorteddiamond.map(v => v[0])
let sexi = pickRandom

([' 100%',
' 95%',
' 80%',
' 75%',
' 60%',
' 50%',
' 40%',
' 35%',
' 25%',
' 10%'
,]);

let str = `
🦊Raposa: *${rubah == 0 ? 'Não tem' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*

❤️Vida: ${rubahvida}
⚔️Ataque: ${rubahatk}
🛡️Defesa: ${rubahdef}


┍─━──¤◆¤───━─
│🦊Raposa ${rubah == 0 ? 'Não tem' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* para o level *${rubah + 1}*\n│Exp *${anakrubah}* -> *${rubah *100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
┕─━──¤◆¤───━─
🎠Petbox: *${pet}*\n
🧆Comida de pet: *${makananpet}*
use #alimentar
`

conn.sendButton(m.chat, str, 'Yuuᴮᴼᵀ\n\n', pp, [
    ['Acariciar🦊👋', `#carinhoraposa`], ['Alimentar🧆', `#alimentar raposa`]

  ],m)

}




handler.help = ['petraposa']
handler.tags = ['xp']
handler.command = ['petraposa','raposa'] 




export default handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  