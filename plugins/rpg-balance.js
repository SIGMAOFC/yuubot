//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix}) => {
	
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
  let name = conn.getName(who) 
    m.reply(`
┌───⊷ *SALDO* ⊶
▢ *Nome* : ${name}
▢ *Dinheiro* : * #R$ ${global.db.data.users[who].money}💰*
▢ *Diamantes* : *${global.db.data.users[who].diamond}💎*
    
└──────────────
*NOTA :* 
Pode comprar 💎 diamantes usando os comandos
❏ *${usedPrefix}comprar diamante <quantia>*
`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'carteira'] 
export default handler
