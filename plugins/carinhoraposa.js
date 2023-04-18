
//import db from '../lib/database.js'


const ver = 0
let handler = async (m, {conn, isPrems }) => {
    let rubah = global.db.data.users[m.sender].rubah
    let tm = Math.floor(Math.random() * 5000)
    let cor = Math.floor(Math.random() * 1000)
    let time = global.db.data.users[m.sender].lastcarinhorap + 600000
    if (new Date - global.db.data.users[m.sender].lastcarinhorap < 600000) throw `⏱️¡Espera *${msToTime(time - new Date())}* para fazer carinho novamente`


    if (rubah == 0) return     global.db.data.users[m.sender].money -= cor,  m.reply(`*Você ainda não tem o pet raposa\nEle te morde você corre deixando para tras R$-${cor}*`)  
    global.db.data.users[m.sender].money += tm

    m.reply(` ✨ele fez um som estranho✨\n Apos você fazer carinho apareceu   \n+R$${tm}💰 
  `, )
    global.db.data.users[m.sender].lastcarinhorap = new Date * 1
  }


  
  handler.command = ['carinhoraposa'] 
  
  handler.tags = ['xp']
  export default handler
  


function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}

