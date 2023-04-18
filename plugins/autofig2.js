import { sticker } from '../lib/sticker.js'
import axios from 'axios'

let handler = m => m
handler.all = async function (m) {
    
    if (m.text.toLowerCase().includes("otario")) {
        try {
            let img = (await axios.get(`https://raw.githubusercontent.com/kwteen/Yuubot/main/ladrao.json`)).data
            let stiker = await sticker(null, global.API(`${pickRandom(img)}`), global.packname, global.author)
            if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', { asSticker: true }, m)
            throw stiker.toString()   
        } catch (error) {
            console.error(error)
        }
    }
    
    return !0
}
     
export default handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}
