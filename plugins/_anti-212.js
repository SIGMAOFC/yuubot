//import db from '../lib/database.js'

let handler = m => m

handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	

	let chat = global.db.data.chats[m.chat]

   if (m.sender.startsWith('212' || '7'|| '1'|| '258')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`✳️ Anti Arabs está ativo para evitar spam\n\nAté a próxima`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }
   
   if (m.sender.startsWith('265' || '265')) {
   	global.db.data.users[m.sender].banned = true
  m.reply(`✳️ Anti Arabs está ativo para evitar spam\n\nAté a próxima`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   
}  

 
    
export default handler
