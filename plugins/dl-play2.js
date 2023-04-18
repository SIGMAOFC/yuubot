import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `🔥 Fala camarada, você precisa me informar um título de música para eu poder procurar por você!\nExemplo: ${usedPrefix + command} dançando na chuva`
    m.react('🎵')
    let result = await youtubeSearch(text)
    let ytres = result.video
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}👊 ${v.title}`, [
          ['🎶 MP3', `${usedPrefix}fgmp3 ${v.url} yes`, `⌚️ *Duração:* ${v.durationH}\n👀 *visualizações:* ${v.view}\n📌 *Título* : ${v.title}\n📆 *Data:* ${v.publishedTime}\n`],
          ['🎥 MP4', `${usedPrefix}fgmp4 ${v.url} yes`, `⌚️ *Duração:* ${v.durationH}\n👀 *visualizações:* ${v.view}\n📌 *Título* : ${v.title}\n📆 *Data:* ${v.publishedTime}\n`]
        ]])
	})
	return conn.sendList(m.chat, '🎧 YUUBOT MÚSICA 🎵', `\n 🔍 Aqui está uma lista de resultados para *${text}*`, igfg, `Clique Aqui `, listSections, m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid2', 'playlist', 'playlista'] 


export default handler
