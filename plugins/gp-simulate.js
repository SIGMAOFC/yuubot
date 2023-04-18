
let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {

if (!event) return await m.reply(`
┌─⊷ *EVENTOS*
▢ Bem-vindo 
▢ despedida
▢ promover
▢ rebaixar
└───────────

📌 Exemplo :

*${usedPrefix + command}* bienvenida @user
`) 

let mentions = text.replace(event, '').trimStart()
let who = mentions ? conn.parseMention(mentions) : []
let part = who.length ? who : [m.sender]
let act = false
m.reply(`✅ Simulando ${event}...`)
switch (event.toLowerCase()) {
        case 'add':
        case 'bemvindo':
        case 'invite':
        case 'welcome':
           act = 'add'
         break 
        case 'bye':
        case 'despedida':
        case 'leave':
        case 'remove':
         act = 'remove'
        break
case 'promote':
  case 'promover':
act = 'promote'
break
case 'demote':
 case 'rebaixar':
act = 'demote'
break
default:
throw 'Lista Eventos: Bem-vindo , Despedida, delete, promover, rebaixar'
}
if (act) return conn.participantsUpdate({
id: m.chat,
participants: part,
action: act
})}
handler.help = ['simular <event> @mention']
handler.tags = ['group']
handler.command = ['simular', 'simulate'] 
handler.admin = true
handler.group = true

export default handler
