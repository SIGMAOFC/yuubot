/*
     ig : https://www.instagram.com/fg98._/
*/

import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    const pXp = './src/corno.png'
    const anu = (await axios.get('https://raw.githubusercontent.com/kwteen/Yuubot/main/corno.json')).data
    const json = pickRandom(anu)
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
    
    conn.sendFile(m.chat, `${pXp}`, 'meme.jpg', `Você é ${sexi}  ${json.fgwork}`, '', '', m)
    m.react('🐂') 
}

handler.command = ['corno', 'corn'] 
handler.limit = true

export default handler


function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }