
import { iFunny } from '../lib/scraper.js'
import axios from 'axios'
let apul = '⌛'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    m.react(apul)
    iFunny().then(async (res) => {
        if(res.videos.length == 0) return await conn.reply(`Não consegui encontrar tente novamente`)
       let tek =  await pickRandom(res.videos)

          //conn.sendMessage(m.chat, { image: {url: tek.imagem} }, { quoted: m })
          await conn.sendMessage(m.chat, { video: {url: tek.video}, caption: tek.titulo, buttons: [{buttonId: `#memevid`, buttonText: {displayText: 'Proximo'}, type: 1}]}, )



    })
   await m.react(apul)
    await m.react(done)
}





handler.help = ['memevid']
handler.tags = ['img']
handler.command = ['memevid'] 
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

