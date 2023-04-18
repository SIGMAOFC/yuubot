import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `✳️ Responda ao áudio que você deseja transformar em um memorando de voz com :\n *${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '❎ Erro ao fazer download da mídia'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw '❎ Falha ao converter'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['toav']
handler.tags = ['fun']

handler.command = ['toav', 'tovn'] 

export default handler