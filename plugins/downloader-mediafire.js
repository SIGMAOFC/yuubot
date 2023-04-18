import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Insira o link do mediafire junto ao comando`
    if (!args[0].match(/mediafire/gi)) throw `🤬 Link errado seu cara de bunda\n quer fuder minha api ?`
    m.react(rwait)
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Nome:* ${filename}
▢ *Tamanho:* ${filesizeH}
▢ *Formato:* ${ext}
▢ *Data:* ${aploud}
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
}
handler.help = ['mediafire <url>']
handler.tags = ['downloader', 'prem']
handler.command = ['mediafire', 'mfire'] 

handler.limit = true
handler.premium = true

export default handler
