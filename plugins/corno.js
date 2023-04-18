/*
     ig : https://www.instagram.com/fg98._/
*/

import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    const pXp = './src/corno.png'
    const anu = (await axios.get('https://raw.githubusercontent.com/kwteen/Yuubot/main/corno.json')).data
    const json = pickRandom(anu)
    let name = conn.getName(who)
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
    
    conn.sendFile(m.chat, `${pXp}`, 'meme.jpg', `${name} é ${sexi}  ${json.fgwork}`, '', '', m)
    m.react('🐂') 


}
handler.help = ['corno @user']
handler.tags = ['fun']
handler.command = ['corno', 'corn'] 
handler.limit = true

export default handler


function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }