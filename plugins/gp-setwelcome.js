//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ A mensagem de boas -vindas está configurada')
  } else throw `✳️ Digite a mensagem de boas -vindas\n\n@user (menção)\n@group (Nome do grupo)\n@desc (descriptionDeGrupo)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.owner = false

export default handler
