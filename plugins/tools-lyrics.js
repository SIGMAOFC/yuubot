import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command}) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `✳️ Digite o nome da música`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
*${result.title}*
${result.author}


${result.lyrics}


Link:  ${result.link}
`.trim())
}

handler.help = ['lyrics'].map(v => v + '')
handler.tags = ['tools']
handler.command = ['letra', 'lyrics', 'letras'] 

export default handler
