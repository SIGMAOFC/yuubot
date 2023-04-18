import { addExif } from '../lib/sticker.js'


let handler = async (m, { conn, text }) => {
  if (!m.quoted) throw ' se estiver tentando roubar um jogador tente usar #roubargrana'
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw 'Responde um sticker'
    let img = await m.quoted.download()
    if (!img) throw 'Responde um sticker!'
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
    else throw 'A conversão falhou'
  }
}
handler.help = ['roubar <nome>|<autor>']
handler.tags = ['sticker']
handler.command = ['take', 'roubar', 'wm'] 

export default handler
