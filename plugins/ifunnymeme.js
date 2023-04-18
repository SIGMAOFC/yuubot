
import { iFunny } from '../lib/scraper.js'
import axios from 'axios'
let apul = '⌛'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    m.react(apul)
    iFunny().then(async (res) => {
        if(res.imagens.length == 0) return await reply(`Não consegui encontrar tente novamente`)
       let tek =  await pickRandom(res.imagens)

          //conn.sendMessage(m.chat, { image: {url: tek.imagem} }, { quoted: m })
          await conn.sendMessage(m.chat, { image: {url: tek.imagem}, caption: tek.titulo, buttons: [{buttonId: `#ifunny`, buttonText: {displayText: 'Proximo'}, type: 1}]}, )



    })
   await m.react(apul)
    await m.react(done)
}






handler.help = ['ifunny']
handler.tags = ['img']
handler.command = ['ifunny', 'meme2'] 
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

