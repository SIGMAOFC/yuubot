import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
import axios from 'axios'
//import db from '../lib/database.js'


let handler = async (m, { conn, usedPrefix, command}) => {


let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ O usuário não foi encontrado no meu banco de dados`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let { name, god, likes, pc, drogas, atm, msg, bebidas, orgao, notasf, makananpet, pet, anakkuda, kuda, anjing, anakanjing, kucing, anakkucing, rubah, anakrubah, potion, exp, armor, sword, healt, money, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]



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
     「 🔥 ~_*PERFIL*_~  
     ${god == 0 ? ' ' : '' || god == 1 ? 'CRIADOR DO YUUBOT' : ''}
✧ 🔖Dados: 
   • ${username} 
   • ⭐Vip : ${prem ? 'Sim' : 'Não'}
   • Curtidas: *${likes}*\n
   • Msg: *${msg}*\n
╭─《 *Inventário* 》
▢ ❤️Saude: *${healt}%*
▢ 🧬Level: *${level}*
▢ ⚔️Arma: *${sword == 0 ? 'Não tem' : '' || sword == 1 ? 'Espada de Pedra' : '' || sword == 2 ? 'Espada de Ferro' : '' || sword == 3 ? 'Espada de Ouro' : '' || sword == 4 ? 'Espada de Diamante' : '' || sword == 5 ? 'Espada de Netherita' : '' || sword == 6 ? 'Espada de Endurita' : '' || sword == 7 ? 'Espada de Esmeralda' : '' || sword == 8 ? 'Espada de Dragão' : ''}*
▢ 🥼Armadura: *${armor == 0 ? 'Não tem' : '' || armor == 1 ? 'Armadura de Couro' : '' || armor == 2 ? 'Armadura de Ferro' : '' || armor == 3 ? 'Armadura de Ouro' : '' || armor == 4 ? 'Armadura de Diamante' : '' || armor == 5 ? 'Armadura de Netherita' : '' || armor == 6 ? 'Armadura de Esmeralda' : '' || armor == 7 ? 'Armadura de Rubi' : '' || armor == 8 ? 'Armadura de Obsidiana' : ''}*
▢ 📇Registrado: ${registered ? 'Sim': 'Não'} ${registered ?  ' ' : ''}
▢ 💰Dinheiro: *R$ ${money}*
▢ 💎Diamantes: *${diamond}*
▢ 🍶Poção: *${potion}*
▢ ⛏️Trabalho: *${user.role}*
▢ 💳Catão: *${atm}*
▢ 🖥️Pc Hacker: *${pc}*
▢ 🎠Petbox: *${pet}*\n
▢ 🧆Comida de pet: *${makananpet}*
╰────────

╭───《 *Pet* 》
│⬡ 🐎Cavalo: *${kuda == 0 ? 'Não tem' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
│⬡ 🦊Raposa: *${rubah == 0 ? 'Não tem' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*
│⬡ 🐈Gato: *${kucing == 0 ? 'Não tem' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*
│⬡ 🐼Panda: *${anjing == 0 ? 'Não tem' : '' || anjing == 1 ? 'Level 1' : '' || anjing == 2 ? 'Level 2' : '' || anjing == 3 ? 'Level 3' : '' || anjing == 4 ? 'Level 4' : '' || anjing == 5 ? 'Level MAX' : ''}*
╰────────
\n*Progresso*
╭────────
│🦊Raposa ${rubah == 0 ? 'Não tem' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* para o level *${rubah + 1}*\n│Exp *${anakrubah}* -> *${rubah *100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
╰────────
╭────────
│🐈Gato ${kucing == 0 ? 'Não tem' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* para o level *${kucing + 1}*\n│Exp *${anakkucing}* -> *${kucing *100}*` : '' || kucing == 5 ? '*Max Level*' : ''}
╰────────
╭────────
│🐎Cavalo ${kuda == 0 ? 'Não tem' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* para o level *${kuda + 1}*\n│Exp *${anakkuda}* -> *${kuda *100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
╰────────
╭────────
│🐼Panda ${anjing == 0 ? 'Não tem' : '' || anjing > 0 && anjing < 5 ? `Level *${anjing}* para o level *${anjing + 1}*\n│Exp *${anakanjing}* -> *${anjing *100}*` : '' || anjing == 5 ? '*Max Level*' : ''}
╰────────
*Conquistas*
🥇Top level *${userslevel.indexOf(m.sender) + 1}* De *${userslevel.length}*
💰Top Grana *${usersmoney.indexOf(m.sender) + 1}* De *${usersmoney.length}*
💎Top Diamante *${usersdiamond.indexOf(m.sender) + 1}* De *${usersdiamond.length}*
`

    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
    m.react(done)
}

handler.help = ['perfil @user']
handler.tags = ['group']
handler.command = ['revistar', 'me', 'perfil'] 




export default handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  