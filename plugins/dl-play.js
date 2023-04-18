
import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `✳️ *Insira um título de música*\n\n📌Exemplo*${usedPrefix + command}* sapo nao lava o pe `
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '✳️ Vídeo/áudio não encontrado'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  
m.react('🎧')
 await conn.sendButton(m.chat, `
  ≡ *YUUBOT MUSIC*
┌──────────────
▢ 📌 *Título* : ${title}
▢ 📆 *Publicado:* ${publishedTime}
▢ ⌚ *Duração:* ${durationH}
▢ 👀 *Visu:* ${viewH}
└──────────────
  `.trim(), igfg, thumbnail, [
    ['🎶 MP3', `${usedPrefix}fgmp3 ${url} yes`],
    ['🎥 MP4', `${usedPrefix}fgmp4 ${url} yes`]
  ], m)
}

handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid'] 

handler.diamond = true
handler.premium = true

export default handler

