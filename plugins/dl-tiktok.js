import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `✳️ Insira um link do Tiktok\n\n 📌 Exeemplo : ${usedPrefix + command} https://vm.tiktok.com/ZMNqyusVD/?k=1`
if (!args[0].match(/tiktok/gi)) throw `❎ verifique se o link é do tiktok`

    const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    //const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
   const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw '❎ Erro ao baixar o vídeo'
    m.react(rwait)
    conn.sendFile(m.chat, url, 'tiktok.mp4', `
┌─⊷ TIKTOK
▢ *Nickname:* ${nickname} ${description ? `\n▢ *Descrição:* ${description}` : ''}
└───────────
`.trim(), m)

m.react(done)
}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = ['tiktok', 'tiktoknowm', 'tiktokdl'] 

export default handler
