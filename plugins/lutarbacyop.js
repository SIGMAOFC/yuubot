let handler = async (m, { conn, usedPrefix, command}) => {
  console.log('Handler chamado!')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (!(who in global.db.data.users)) throw `✳️ O usuário não foi encontrado no meu banco de dados`
  console.log(`who: ${who}`)
  let player1 = conn.getName(m.sender); // pega o jogador 1
  let player2 = conn.getName(who); // pega o jogador 2 mencionado na mensagem
  if (!player2) {
      return m.reply("Por favor, mencione o jogador que deseja desafiar para um duelo.");
  }
  let currentTime = new Date();
if (global.db.data.users[m.sender].lastBattleTime) {
    let timeSinceLastBattle = currentTime - global.db.data.users[m.sender].lastBattleTime;
    if (timeSinceLastBattle < 300000) { // 5 minutos em milissegundos
        let timeRemaining = (300000 - timeSinceLastBattle) / 1000; // converte de milissegundos para segundos
        return m.reply(`Você precisa esperar mais ${timeRemaining} segundos antes de lutar novamente.`);
    }
}
global.db.data.users[m.sender].lastBattleTime = currentTime;

// resto do código de batalha aqui

  console.log(`player1: ${player1}`)
  console.log(`player2: ${player2}`)
  let player1Health = global.db.data.users[m.sender].healt; // define a saúde inicial do jogador 1 como 100
  let player2Health = global.db.data.users[who].healt; // define a saúde inicial do jogador 2 como 100
  console.log(`player1Health: ${player1Health}`)
  console.log(`player2Health: ${player2Health}`)
  if(player1Health <= 0 || player2Health <= 0) {
      return m.reply("Nenhum dos jogadores tem saúde suficiente para lutar.")
  }

if (m.sender === who) {
    return m.reply("Você não pode lutar contra si mesmo!");
}

while(player1Health > 0 && player2Health > 0) {
    // resto do código de batalha aqui
  while(player1Health > 0 && player2Health > 0) {
    console.log("Iniciando nova rodada"); // Adicionado para verificar se o loop está sendo executado corretamente
    let player1Damage = Math.floor(Math.random() * 20); // dano aleatório de 0-19
    let player2Damage = Math.floor(Math.random() * 20); // dano aleatório de 0-19
    console.log(`${player1} causou ${player1Damage} de dano em ${player2}`); // Adicionado para verificar o cálculo de dano
    console.log(`${player2} causou ${player2Damage} de dano em ${player1}`); // Adicionado para verificar o cálculo de dano
    player1Health -= player2Damage; // atualiza a saúde do jogador 1
    player2Health -= player1Damage; // atualiza dados do jogador 2
 
    m.reply(`${player1} causou ${player1Damage} de dano em ${player2} e agora tem ${player2Health} de saúde.\n${player2} causou ${player2Damage} de dano em ${player1} e agora tem ${player1Health} de saúde.`);
    await new Promise(resolve => setTimeout(resolve, 10000));
  }
  
  if (player1Health <= 0) {
    m.reply(`${player1} foi derrotado! ${player2} é o vencedor!`);
    global.db.data.users[who].exp += 10000;
    global.db.data.users[m.sender].exp -= 10000;
    await new Promise(resolve => setTimeout(resolve, 2000)); // espera 2 segundos antes de enviar a próxima mensagem
    m.reply(`Parabéns ${player2}! Você ganhou 10000 XP como recompensa por vencer a batalha!`);
    await new Promise(resolve => setTimeout(resolve, 2000)); // espera 2 segundos antes de enviar a próxima mensagem
    m.reply(`${player1} perdeu 10000 XP por ter sido derrotado!`);
} else {
    m.reply(`${player2} foi derrotado! ${player1} é o vencedor!`);
    global.db.data.users[m.sender].exp += 10000;
    global.db.data.users[who].exp -= 10000;
    await new Promise(resolve => setTimeout(resolve, 2000)); // espera 2 segundos antes de enviar

  }


}
}
  handler.help = ['lusddsdstar']
  handler.tags = ['dsxp']
  handler.command = ['lutdsdsar','lddsoot'] 
  
  export default handler