let ro = 7000
let handler = async (m, { conn, usedPrefix, command}) => {
    let time = global.db.data.users[m.sender].lastrob + 2200000
    if (new Date - global.db.data.users[m.sender].lastrob < 2200000) throw `⏱️Você precisa esperar *${msToTime(time - new Date())}* para tentar novamente. Seja paciente, jovem aventureiro!`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `🗡️ Você precisa mencionar alguém para roubar o dinheiro. Não tente roubar do ar, é impossível.`
    if (!(who in global.db.data.users)) throw `🗡️ Este usuário não está registrado em meu banco de dados. Talvez você devesse tentar em outra aventura.`
    let goxd = global.db.data.users[who].god
    if (goxd == 1) return  m.reply(`🗡️ *Proteção Divina!* \n Não é possível roubar ${who.split`@`[0]}. Ele é protegido por forças maiores do que a sua. Tente roubar alguém mais fraco. `)  
    let users = global.db.data.users[who]
    let rob = Math.floor(Math.random() * ro)
    if (users.money < rob) return m.reply(`🗡️ @${who.split`@`[0]} é muito pobre para você roubar. Ele tem menos de *R$${ro}*. Que tal procurar um cofre mais recheado?`, null, { mentions: [who] })    
   global.db.data.users[m.sender].money += rob
   global.db.data.users[who].money -= rob
  
    m.reply(`
  ‣🪛 *Lockpick* usada com sucesso\n🔒 Você abriu o cofre de @${who.split`@`[0]} e 🚨 furtou 🚨 *R$${rob} *💰 . Aproveite o dinheiro suado! 
  `, null, { mentions: [who] })
    global.db.data.users[m.sender].lastrob = new Date * 1
  }

  handler.help = ['roubargrana']
  handler.tags = ['rpg']
  handler.command = ['roubargrana', 'tomargrana', 'assaltar'] 
  
  export default handler
  
  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
  
    return hours + "h " + minutes + "m"
  }
