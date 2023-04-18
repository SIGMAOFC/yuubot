import { createCanvas, loadImage } from 'canvas'

let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const canvas = createCanvas(400, 300)
  const ctx = canvas.getContext('2d')

  // Define as informações do usuário
  const name = user.registered ? user.name : conn.getName(m.sender)
  const atm = user.atm > 0 ? 'Level ' + user.atm : '✖️'
  const bank = user.bank
  const money = user.money
  const robo = user.robo > 0 ? 'Level ' + user.robo : '✖️'
  const status = user.premiumTime > 0 ? 'VIP' : 'Gratis'
  const registered = user.registered ? 'Sim':'Não'

  // Desenha o fundo da imagem
  ctx.fillStyle = 'purple'
  ctx.fillRect(0, 0, 400, 300)


  // Desenha o título da imagem
  ctx.font = '18px Roboto, sans-serif bold'
  ctx.fillStyle = 'white'
  ctx.fillText('N U B A N K', 20, 50)


  // Desenha as informações do usuário
  ctx.font = '18px sans-serif'
  ctx.fillText(`Nome: ${name}`, 20, 80)
  ctx.fillText(`Cartão: ${atm}`, 20, 110)
  ctx.fillText(`Banco: ${bank} 💲`, 20, 140)
  ctx.fillText(`Dinheiro: ${money} 💲`, 20, 170)
  ctx.fillText(`Robo: ${robo}`, 20, 200)
  ctx.fillText(`Status: ${status}`, 20, 230)
  ctx.fillText(`Registrado: ${registered}`, 20, 260)

  // Envia a imagem para o chat
  conn.sendFile(m.chat, canvas.toBuffer(), 'banco.png', '', m)
}
handler.help = ['banco']
handler.tags = ['rpg']
handler.command = /^(banco)$/i

export default handler
