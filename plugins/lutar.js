let handler = async (m, { conn, usedPrefix, command}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (!(who in global.db.data.users)) throw `✳️ O usuário não foi encontrado no meu banco de dados`

  let player1 = conn.getName(m.sender); 
  let player2 = conn.getName(who); 
  
  if (!player2) {
      return m.reply("Mencione um jogador para desafiá-lo para um duelo épico!");
  }
  let currentTime = new Date();
    let timeSinceLastBattle = currentTime - global.db.data.users[m.sender].lastBattleTime;
    if (timeSinceLastBattle < 3000) { 
        let timeRemaining = (3000 - timeSinceLastBattle) / 1000; 
        return m.reply(`Você precisa esperar mais ${timeRemaining} segundos antes de lutar novamente.`);
    }

global.db.data.users[m.sender].lastBattleTime = currentTime;

let player1Health = global.db.data.users[m.sender].healt 
let player2Health = global.db.data.users[who].healt 
  if(global.db.data.users[m.sender].healt <= 0 || global.db.data.users[who].healt <= 0) {
      return m.reply("Nenhum dos jogadores tem saúde suficiente para lutar.")
  }

if (m.sender === who) {
    return m.reply("Você não pode lutar contra si mesmo!");
}


let danorealp1 = global.db.data.users[m.sender].dano
let danorealp2 = global.db.data.users[who].dano
let defesap1 = global.db.data.users[m.sender].defesa
let defesap2 = global.db.data.users[who].defesa
let healtp1 = global.db.data.users[m.sender].healt
let healtp2 = global.db.data.users[who].healt
conn.reply(m.chat,`🛡️🏰 ${player1} se prepara para a batalha:

Vida: ${healtp1}
Defesa: ${defesap1}
Dano: ${danorealp1}
🏰🗡️ ${player2} se aproxima para o duelo:

Vida: ${healtp2}
Defesa: ${defesap2}
Dano: ${danorealp2}
⚔️ Que comece o duelo! 🤺💥`, m)
while(global.db.data.users[m.sender].healt > 0 && global.db.data.users[who].healt > 0) {
  m.reply(`Iniciando nova rodada... ⚔️`);
  let player1Attack = Math.floor(Math.random() * danorealp1);
  let player2Attack = Math.floor(Math.random() * danorealp2);


  // Habilidade Ventania
  let tempPlayer1Attack = 0;
  let tempPlayer2Attack = 0;
  
  // Habilidade Ventania
  if (global.db.data.users[m.sender].Ventania >= 1) {
    let chance = Math.floor(Math.random() * 100) + 1;
    if (chance <= 40) {
      tempPlayer1Attack += global.db.data.users[m.sender].Ventaniaatk;
      m.reply(`🌬️💨🌪 Habilidade Ventania utilizada com sucesso por ${player1}!`)
    }
  }
  if (global.db.data.users[who].Ventania >= 1) {
    let chance = Math.floor(Math.random() * 100) + 1;
    if (chance <= 40) {
      tempPlayer2Attack += global.db.data.users[who].Ventaniaatk;
      m.reply(`🌬️💨🌪  Habilidade Ventania utilizada com sucesso por ${player2}!`)
    }
  }
  
  // Habilidade Rafaga
  if (global.db.data.users[m.sender].Rafaga >= 1) {
    let chance = Math.floor(Math.random() * 100) + 1;
    if (chance <= 20) {
      tempPlayer1Attack += global.db.data.users[m.sender].RafagaAtk;
      m.reply(`🌬️💨🌀 Habilidade Rafaga utilizada com sucesso por ${player1}!`)
    }
  }
  if (global.db.data.users[who].Rafaga >= 1) {
    let chance = Math.floor(Math.random() * 100) + 1;
    if (chance <= 20) {
      tempPlayer2Attack += global.db.data.users[who].RafagaAtk;
      m.reply(`🌬️💨🌀 Habilidade Rafaga utilizada com sucesso por ${player2}!`)
    }
  }
  
  // Habilidade Tornado
  if (global.db.data.users[m.sender].Tornado >= 1) {
    let chance = Math.floor(Math.random() * 100) + 1;
    if (chance <= 12) {
      tempPlayer1Attack += global.db.data.users[m.sender].TornadoAtk;
      m.reply(`🌬️🌀✨ Habilidade Tornado utilizada com sucesso por ${player1}!`)
    }
  }
  if (global.db.data.users[who].Tornado >= 1) {
    let chance = Math.floor(Math.random() * 100) + 1;
    if (chance <= 12) {
      tempPlayer2Attack += global.db.data.users[who].TornadoAtk;
      m.reply(`🌬️🌀✨  Habilidade Tornado utilizada com sucesso por ${player2}!`)
    }
    if (global.db.data.users[m.sender].ChamaInfernal >= 1) {
      let chance = Math.floor(Math.random() * 100) + 1;
      if (chance <= 40) {
        tempPlayer1Attack += global.db.data.users[m.sender].ChamaInfernalatk;
        m.reply(`🔥🧑‍🦰 Habilidade Chama Infernal utilizada com sucesso por ${player1}!`);
      }
    }
    if (global.db.data.users[who].ChamaInfernal >= 1) {
      let chance = Math.floor(Math.random() * 100) + 1;
      if (chance <= 40) {
        tempPlayer2Attack += global.db.data.users[who].ChamaInfernalatk;
        m.reply(`🔥🧑‍🦰 Habilidade Chama Infernal utilizada com sucesso por ${player2}!`);
      }
    }
    
    if (global.db.data.users[m.sender].Meteoro >= 1) {
      let chance = Math.floor(Math.random() * 100) + 1;
      if (chance <= 20) {
        tempPlayer1Attack += global.db.data.users[m.sender].Meteoroatk;
        m.reply(`🌠✨🔥Habilidade Meteoro utilizada com sucesso por ${player1}!`);
      }
    }
    if (global.db.data.users[who].Meteoro >= 1) {
      let chance = Math.floor(Math.random() * 100) + 1;
      if (chance <= 20) {
        tempPlayer2Attack += global.db.data.users[who].Meteoroatk;
        m.reply(`🌠✨🔥Habilidade Meteoro utilizada com sucesso por ${player2}!`);
      }
    }
    
    if (global.db.data.users[m.sender].Conflagração >= 1) {
      let chance = Math.floor(Math.random() * 100) + 1;
      if (chance <= 10) {
        tempPlayer1Attack += global.db.data.users[m.sender].Conflagraçãoatk;
        m.reply(`🔥🌋🌅 Habilidade Conflagração utilizada com sucesso por ${player1}!`);
      }
    }
    if (global.db.data.users[who].Conflagração >= 1) {
      let chance = Math.floor(Math.random() * 100) + 1;
      if (chance <= 10) {
        tempPlayer2Attack += global.db.data.users[who].Conflagraçãoatk;
        m.reply(`🔥🌋🌅 Habilidade Conflagração utilizada com sucesso por ${player2}!`);
      }
    }
    if (global.db.data.users[m.sender].Tremor >= 1) {
      let chance = Math.floor(Math.random() * 100) + 1;
      if (chance <= 40) {
        tempPlayer1Attack += global.db.data.users[m.sender].Tremoratk;
        m.reply(`🌋💥🔥Habilidade Tremor utilizada com sucesso por ${player1}!`);
      }
    }
    
    if (global.db.data.users[who].Tremor >= 1) {
      let chance = Math.floor(Math.random() * 100) + 1;
      if (chance <= 40) {
        tempPlayer2Attack += global.db.data.users[who].Tremoratk;
        m.reply(`🌋💥🔥 Habilidade Tremor utilizada com sucesso por ${player2}!`);
      }
    }
    
    if (global.db.data.users[m.sender].Sismo >= 1) {
      let chance = Math.floor(Math.random() * 100) + 1;
      if (chance <= 20) {
        tempPlayer1Attack += global.db.data.users[m.sender].Sismoatk;
        m.reply(`🌋🌪️🌊 Habilidade Sismo utilizada com sucesso por ${player1}!`);
      }
    }
    
    if (global.db.data.users[who].Sismo >= 1) {
      let chance = Math.floor(Math.random() * 100) + 1;
      if (chance <= 20) {
        tempPlayer2Attack += global.db.data.users[who].Sismoatk;
        m.reply(`🌋🌪️🌊 Habilidade Sismo utilizada com sucesso por ${player2}!`);
      }
    }
    
    if (global.db.data.users[m.sender].Terremoto >= 1) {
      let chance = Math.floor(Math.random() * 100) + 1;
      if (chance <= 10) {
        tempPlayer1Attack += global.db.data.users[m.sender].Terremotoatk;
        m.reply(`🌋💥🌪️ Habilidade Terremoto utilizada com sucesso por ${player1}!`);
      }
    }
    
    if (global.db.data.users[who].Terremoto >= 1) {
      let chance = Math.floor(Math.random() * 100) + 1;
      if (chance <= 10) {
        tempPlayer2Attack += global.db.data.users[who].Terremotoatk;
        m.reply(`🌋💥🌪️ Habilidade Terremoto utilizada com sucesso por ${player2}!`);
      }
    }
        
    }
    player1Attack += tempPlayer1Attack;
    player2Attack += tempPlayer2Attack;
    let danoIgnoradoP1 = Math.min(player2Attack, defesap1);
    let danoRecebidoP1 = player2Attack - danoIgnoradoP1;
    let danoIgnoradoP2 = Math.min(player1Attack, defesap2);
    let danoRecebidoP2 = player1Attack - danoIgnoradoP2;
    global.db.data.users[m.sender].healt -= danoRecebidoP1; 
    global.db.data.users[who].healt -= danoRecebidoP2;
    m.reply(`⊱∽∽∽∽∽⊰✾⊱∽∽∽∽∽⊰\n
    🗡️ ${player1} ataca ${player2}
    - Dano: ${player1Attack} (${player1Attack - tempPlayer1Attack} + ${tempPlayer1Attack})
    - Defesa ignorada: ${danoIgnoradoP2}
    
    🛡️ ${player2} revida ${player1}
    - Dano: ${player2Attack} (${player2Attack - tempPlayer2Attack} + ${tempPlayer2Attack})
    - Defesa ignorada: ${danoIgnoradoP1}
    \n⊱∽∽∽∽∽⊰✾⊱∽∽∽∽∽⊰
    \n⟥───────✤───────⟤
    👥 Saúde atual
    - ${player2}: ${global.db.data.users[who].healt}
    - ${player1}: ${global.db.data.users[m.sender].healt}
    \n⟥───────✤───────⟤`);    await new Promise(resolve => setTimeout(resolve, 5000));
    player1Attack -= tempPlayer1Attack;
    player2Attack -= tempPlayer2Attack;
  }

  if (global.db.data.users[m.sender].healt <= 0) {
    m.reply(`${player2} é o vencedor! Parabéns, você é o vencedor! 🎉 ganhou 5000XP + 15000G e um emblema de vitória. \n${player1} caiu no campo de batalha.`);
    global.db.data.users[who].winlut++;
    global.db.data.users[m.sender].loselut++;
    global.db.data.users[who].exp += 5000;
    global.db.data.users[who].money += 15000; // Adiciona 100 de experiência para o jogador vencedor
    global.db.data.users[m.sender].exp -= 2500;
    global.db.data.users[m.sender].money -= 5500;  // Remove 50 de experiência do jogador perdedor
  } else {
    m.reply(`${player1} é o vencedor! Parabéns, você é o vencedor! 🎉 ganhou 5000XP + 15000G e um emblema de vitória. \n${player2} caiu no campo de batalha.
    `);
    global.db.data.users[m.sender].winlut++;
    global.db.data.users[who].loselut++;
    global.db.data.users[m.sender].exp += 5000; 
    global.db.data.users[m.sender].money += 15000; // Adiciona 100 de experiência para o jogador vencedor
    global.db.data.users[who].exp -= 2500;
    global.db.data.users[who].money -= 5500; // Remove 50 de experiência do jogador perdedor
  }
  }



  handler.help = ['lutar']
  handler.tags = ['xp']
  handler.command = ['lutar', 'duelo']
  
  export default handler