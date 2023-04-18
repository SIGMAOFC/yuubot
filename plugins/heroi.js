import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
import axios from 'axios'
//import db from '../lib/database.js'


import Canvas from 'canvas'

let handler = async (m, { conn, usedPrefix, command }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (!(who in global.db.data.users)) throw `✳️ O usuário não foi encontrado no meu banco de dados`
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
  let { name, level, sword, armor, healt, element, clan, dano, defesa, winlut, loselut, money } = global.db.data.users[who]
  let background = await Canvas.loadImage('/home/will/meubot/inv/inv.png');
  let canvas = Canvas.createCanvas(700, 500);
  let ctx = canvas.getContext('2d');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  // Desenha uma borda rosa ao redor do canvas
  ctx.strokeStyle = 'pink'
  ctx.lineWidth = 10
  ctx.strokeRect(0, 0, canvas.width, canvas.height)

  let img = await Canvas.loadImage(pp)
  ctx.drawImage(img, 75, 15, 70, 80)


  // Draw the user's information on the canvas
  ctx.font = '30px Arial'
  ctx.fillStyle = 'white'

  // Desenha "STATS" em negrito e maior
  ctx.font = 'bold 48px Arial'
  ctx.fillText(`STATS`, 300, 50)

  // Volta para a fonte normal
  ctx.font = '16px Arial'
  ctx.fillText(`Nome: ${name}`, 250, 100)
  ctx.fillText(`Ataque: ${dano}`, 250, 120)
  ctx.fillText(`Defesa: ${defesa}`, 250, 140)
  ctx.fillText(`Vida: ${healt}`, 250, 160)
  ctx.fillText(`Nível: ${level}`, 250, 180)
  ctx.fillText(`Dinheiro: R$ ${money}`, 250, 200)
  ctx.fillText(`Elemento  ${element}`, 250, 220)
  ctx.fillText(`Clã ${clan}`, 250, 240)
  ctx.fillText(`Duelo Ganhos: ${winlut}`, 250, 260)
  ctx.fillText(`Duelo Perdidos: ${loselut}`, 250, 280)

  // Adiciona as habilidades do personagem
  // Habilidades de ar
  ctx.font = '20px Arial';
  ctx.fillText("Habilidades", 250, 300);
if (global.db.data.users[m.sender].Ventania >= 1) {
    ctx.fillStyle = '#00bfff';
    ctx.fillText("Ventania: Dano: " + global.db.data.users[m.sender].Ventaniaatk, 250, 320);
  }
  
  if (global.db.data.users[m.sender].Rafaga >= 1) {
    ctx.fillStyle = '#00ff00';
    ctx.fillText("Rafaga: Dano: " + global.db.data.users[m.sender].RafagaAtk, 250, 340)
  }
  
  if (global.db.data.users[m.sender].Tornado >= 1) {
    ctx.fillStyle = '#0000ff';
    ctx.fillText("Tornado: Dano: " + global.db.data.users[m.sender].TornadoAtk, 250, 360)
  }
  //habi agua
  if (global.db.data.users[m.sender].Tsunami >= 1) {
    ctx.fillStyle = '#00bfff';
    ctx.fillText("Tsunami: Dano: " + global.db.data.users[m.sender].Tsunamiatk, 250, 320);
  }


  if (global.db.data.users[m.sender].Tempestade >= 1) {
    ctx.fillStyle = '#00bfff';
    ctx.fillText("Tempestade: Dano: " + global.db.data.users[m.sender].Tempestadeatk, 250, 340);
  }

  if (global.db.data.users[m.sender].Cascata >= 1) {
    ctx.fillStyle = '#00bfff';
    ctx.fillText("Cascata: Dano: " + global.db.data.users[m.sender].Cascataatk, 250, 360);
  }

  //hab fogo
  if (global.db.data.users[m.sender].ChamaInfernal >= 1) {
    ctx.fillStyle = '#ff6600';
    ctx.fillText("Chama Infernal: Dano: " + global.db.data.users[m.sender].ChamaInfernalatk, 250, 320);
  }


  if (global.db.data.users[m.sender].Meteoro >= 1) {
    ctx.fillStyle = '#ff6600';
    ctx.fillText("Meteoro: Dano: " + global.db.data.users[m.sender].Meteoroatk, 250, 340);
  }

  if (global.db.data.users[m.sender].Conflagração >= 1) {
    ctx.fillStyle = '#ff6600';
    ctx.fillText("Conflagração: Dano: " + global.db.data.users[m.sender].Conflagraçãoatk, 250, 360);
  }
//

//hab terra
if (global.db.data.users[m.sender].Tremor >= 1) {
  ctx.fillStyle = '#8B4513'; // Marrom escuro, para representar a terra
  ctx.fillText("Tremor: Dano: " + global.db.data.users[m.sender].Tremoratk, 250, 320);
}

if (global.db.data.users[m.sender].Sismo >= 1) {
  ctx.fillStyle = '#8B4513'; // Marrom escuro, para representar a terra
  ctx.fillText("Sismo: Dano: " + global.db.data.users[m.sender].Sismoatk, 250, 340);
}

if (global.db.data.users[m.sender].Terremoto >= 1) {
  ctx.fillStyle = '#8B4513'; // Marrom escuro, para representar a terra
  ctx.fillText("Terremoto: Dano: " + global.db.data.users[m.sender].Terremotoatk, 250, 360);
}

  //habilidade


  // etc...
  // Draw the user's weapon information on the canvas
  ctx.font = '13px Arial'

  if (sword === 1) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Espada de Pedra.png');
    ctx.drawImage(image, 5, 140, 90, 90);
  } else if (sword === 2) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Espada de Ferro.png');
    ctx.drawImage(image, 5, 140, 90, 90);
  } else if (sword === 3) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Espada de Ouro.png');
    ctx.drawImage(image, 5, 140, 90, 90);
  } else if (sword === 4) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Espada de Diamante.png');
    ctx.drawImage(image, 5, 140, 90, 90);
  } else if (sword === 5) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Espada de Netherita.png');
    ctx.drawImage(image, 5, 140, 90, 90);
  } else if (sword === 6) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Espada de Endurita.png');
    ctx.drawImage(image, 5, 140, 90, 90);
  } else if (sword === 7) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Espada de Esmeralda.png');
    ctx.drawImage(image, 5, 140, 90, 90);
  } else if (sword === 8) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Espada de Dragão.png');
    ctx.drawImage(image, 5, 140, 90, 90);
  }
  


  if (armor === 1) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Armadura de Couro.png');
    ctx.drawImage(image, 82, 110, 70, 90);
  } else if (armor === 2) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Armadura de Ferro.png');
    ctx.drawImage(image, 82, 110, 70, 90);
  } else if (armor === 3) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Armadura de Ouro.png');
    ctx.drawImage(image, 82, 110, 70, 90);
  } else if (armor === 4) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Armadura de Diamante.png');
    ctx.drawImage(image, 82, 110, 70, 90);
  } else if (armor === 5) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Armadura de Netherita.png');
    ctx.drawImage(image, 82, 110, 70, 90);
  } else if (armor === 6) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Armadura de Esmeralda.png');
    ctx.drawImage(image, 82, 110, 70, 90);
  } else if (armor === 7) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Armadura de Ossos.png');
    ctx.drawImage(image, 82, 110, 70, 90);
  } else if (armor === 8) {
    let image = await Canvas.loadImage('/home/will/meubot/inv/Armadura de Ametista.png');
    ctx.drawImage(image, 82, 110, 70, 90);
  }
  


  let buffer = canvas.toBuffer()

  conn.sendFile(m.chat, buffer, 'perfil.jpg', '', m, false, { mentions: [who] })
}


handler.help = ['hero @user']
handler.tags = ['group']
handler.command = ['hero', 'heroi', 'char']





export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
