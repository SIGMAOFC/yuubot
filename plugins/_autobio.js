let handler = m => m
handler.all = async function (m) {
  let setting = global.db.data.settings[this.user.jid]
  let _muptime
  if (process.send) {
    process.send('uptime')
    _muptime = await new Promise(resolve => {
      process.once('message', resolve)
      setTimeout(resolve, 1000)
    }) * 1000
  }
  let muptime = clockString(_muptime)

  // Adicione suas frases na lista "frases"
  let frases = [
    "💬 Quer jogar RPG? Eu estou aqui para ajudar!",
    "⚡ O melhor bot de RPG do WhatsApp!",
    "💻 Conectado e sempre pronto para a aventura!",
    "🔍 Procurando por jogadores em busca de emoção!",
    "Ei, eu sou o Yuu! ⚡ Criado com amor e café ☕"
    ]
    
  // Escolha uma frase aleatória
  let frase_aleatoria = frases[Math.floor(Math.random() * frases.length)]
  
  let bio = `${frase_aleatoria}\n\n🟢 Tempo ativo ${muptime}\n\n┃ 💎  By Yuu 7799668372`
  await this.updateProfileStatus(bio).catch(_ => _)
  setting.status = new Date() * 1
}
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Dias(s) ️', h, ' Hora(s) ', m, ' Minuto(s)'].map(v => v.toString().padStart(2, 0)).join('')
}
