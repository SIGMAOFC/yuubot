import { canLevelUp, xpRange } from '../lib/levelling.js'

import { createCanvas, loadImage } from 'canvas'

    let handler = async (m, { conn }) => {
        let user = global.db.data.users[m.sender]
      
        // Define as informações do usuário
        const name = user.registered ? user.name : conn.getName(m.sender)
        const level = user.level
        const exp = user.exp
        const role = user.role
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        let remainingXp = max - exp; //calculando XP restante
        // Cria o canvas
        loadImage('./leveling.png').then(async(i) => {
            const myCanvas = createCanvas(i.width, i.height);
            const ctx = myCanvas.getContext('2d');
      
            const bg = await loadImage('./slal.png')
      
            ctx.drawImage(bg, 0, 0, i.width, i.height)
        
            ctx.font = '18px sans-serif'
            ctx.fillStyle = 'red'
            ctx.fillText(`${name}`, 240, 69)
      
            ctx.font = '17px sans-serif'
            ctx.fillStyle = 'red'
            ctx.fillText(`${level}`, 86, 180)
      
            ctx.font = '17px sans-serif'
            ctx.fillStyle = 'red'
            ctx.fillText(`${exp}`, 76, 200)
      
            ctx.font = '17px sans-serif'
            ctx.fillStyle = 'red'
            ctx.fillText(`${role}`, 105, 222)
      
            ctx.font = '17px sans-serif'
            ctx.fillStyle = 'red'
            ctx.fillText(`${remainingXp}`, 289, 188)
      
            ctx.font = '17px sans-serif'
            ctx.fillStyle = 'red'
            ctx.fillText(`${level + 1}`, 465, 188)
      
            let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => './src/avatar_contact.png')
            
            const Avatar = await loadImage(pp)
            
            ctx.drawImage(Avatar, 27, 27, 124, 124)
        
            conn.sendFile(m.chat, myCanvas.toBuffer(), 'profile.png', '', m)
          });
    }
    
      
  
handler.help = ['level']
handler.tags = ['rpg']
handler.command = /^(level)$/i

export default handler