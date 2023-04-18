import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `✳️ *Exemplo :*\n\n *${usedPrefix + command}* sou feio?`
  m.react('🫣') 
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=pt`)
  let json = await res.json()
  if (json.success) 
m.reply(`≡ *PERGUNTAS*
 
▢ *Pregunta:* ${text}
▢ *Resposta :* ${json.success.replace('simsimi', 'yuubot').replace('Simsimi', 'yuubot').replace('sim simi', 'yuubot')}`) 
  else throw json
}

handler.help = ['pergunta']
handler.tags = ['fun']
handler.command = ['pergunta', 'preg'] 

export default handler
