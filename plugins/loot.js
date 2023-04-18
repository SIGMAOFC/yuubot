let handler = async (m, { conn, usedPrefix, command }) => {
	// Define uma lista de monstros com seus respectivos níveis de dificuldade
	const monsters = [
	  { name: 'Goblin', difficulty: 1 },
	  { name: 'Lobo', difficulty: 2 },
	  { name: 'Orc', difficulty: 3 },
	  { name: 'Troll', difficulty: 4 },
	  { name: 'Dragão', difficulty: 5 }
	];
	
	// Obtém os dados do jogador
	const user = global.db.data.users[m.sender];
	const playerName = conn.getName(m.sender);
	
	// Define o tempo de espera entre as caçadas (em segundos)
	const waitTime = 120;
	
	// Verifica se o jogador pode realizar uma caçada
	if (new Date - user.lastHunt < waitTime * 1000) {
	  const timeLeft = waitTime - Math.floor((new Date - user.lastHunt) / 1000);
	  throw `Você precisa esperar ${timeLeft} segundos para caçar novamente`;
	}
	
	// Seleciona um monstro aleatório com base na área em que o jogador se encontra
	const areaMonsters = monsters.filter(monster => monster.difficulty <= user.area);
	const monster = areaMonsters[Math.floor(Math.random() * areaMonsters.length)];
	const monsterName = monster.name.toUpperCase();
	
	// Calcula o dano causado pelo jogador e pelo monstro
	const playerDamage = Math.max(user.dano - monster.difficulty, 0);
	const monsterDamage = Math.max(monster.difficulty - user.defesa, 0);
	
	// Reduz a vida do jogador e do monstro com base no dano causado
	user.healt -= monsterDamage;
	user.healt = Math.min(user.healt, 100); // a vida do jogador não pode ser maior que 100
	const monsterHealt = Math.max(100 - playerDamage, 0);
	
	// Gera uma mensagem de acordo com o resultado da caçada
	let message;
	if (user.healt <= 0) {
	  // O jogador morreu
	  user.healt = 100;
	  user.level = Math.max(user.level - 1, 0);
	  message = `${playerName} morreu ao ser atacado pelo ${monsterName}. Seu nível foi reduzido para ${user.level}`;
	} else if (monsterHealt <= 0) {
	  // O jogador matou o monstro
	  const coins = Math.floor(Math.random() * 401);
	  const exp = Math.floor(Math.random() * 601);
	  user.money += coins;
	  user.exp += exp;
	  message = `${playerName} matou o ${monsterName} e recebeu ${coins} coins e ${exp} de experiência`;
	} else {
	  // O jogador e o monstro ainda estão vivos
	  message = `${playerName} causou ${playerDamage} de dano ao ${monsterName} e recebeu ${monsterDamage} de dano em troca. A vida restante do ${monsterName} é de ${monsterHealt} e a sua é de ${user.healt}`;
	}
	
	// Atualiza o tempo da última caçada do jogador
	user.lastHunt = new Date();
	
	// Retorna a mensagem de acordo com o resultado da caçada
  
	if (user.healt <= 0) {
	  // O jogador morreu
	  user.healt = 100;
	  user.level = Math.max(user.level - 1, 0);
	  message = `${playerName} morreu ao ser atacado pelo ${monsterName}. Seu nível foi reduzido para ${user.level}`;
	} else if (monsterHealt <= 0) {
	  // O jogador matou o monstro
	  const coins = Math.floor(Math.random() * 401);
	  const exp = Math.floor(Math.random() * 601);
	  user.money += coins;
	  user.exp += exp;
	  message = `${playerName} matou o ${monsterName} e recebeu ${coins} coins e ${exp} de experiência`;
	} else {
	  // O jogador e o monstro ainda estão vivos
	  message = `${playerName} causou ${playerDamage} de dano ao ${monsterName} e recebeu ${monsterDamage} de dano em troca. A vida restante do ${monsterName} é de ${monsterHealt} e a sua é de ${user.healt}`;
	}
  
	// Atualiza o tempo da última caçada do jogador
	user.lastHunt = new Date();
  
	// Retorna a mensagem de acordo com o resultado da caçada
	return await conn.reply(m.chat, message, m);
  };
  
  handler.command = ['hunt']
  export default handler
	
  