let handler = async (m, {conn, usedPrefix}) => {
  const stats = global.db.data.stats;
  const users = global.db.data.users;

  // Encontrar o nome do comando mais recente
  let lastCommand = '';
  let lastUsage = 0;
  for (let command in stats) {
    let commandStats = stats[command];
    if (commandStats.last > lastUsage) {
      lastUsage = commandStats.last;
      lastCommand = command;
    }
  }

  // Encontrar o nome do último usuário registrado
  let latestUser = '';
  let latestUserTimestamp = 0;
  for (let user in users) {
    let userTimestamp = users[user].regTime;
    if (userTimestamp > latestUserTimestamp) {
      latestUserTimestamp = userTimestamp;
      latestUser = users[user].name;
    }
  }

  // Montar a saída
  let output = `⊶ Comando mais recente: ${lastCommand}\n▢ Total de usos: ${stats[lastCommand].total}\n▢ Último uso: ${new Date(stats[lastCommand].last).toString()}\n\n⊶ Último usuário registrado: ${latestUser}\n▢ Timestamp de registro: ${new Date(latestUserTimestamp).toString()}`;

  // Encontrar os 10 comandos mais usados
  const sortedCommands = Object.entries(stats)
    .sort(([, a], [, b]) => b.total - a.total)
    .slice(0, 10);
  const topCommands = sortedCommands
    .map(([command, data]) => `⊶ Comando: ${command}\n▢ Total de usos: ${data.total}`)
    .join('\n\n');

  // Mostrar a saída
  m.reply(`┌───⊷ *Informações do Último Comando Usado e Último Usuário Registrado* ⊶\n${output}\n\n┌───⊷ *Top 10 Comandos Mais Usados* ⊶\n${topCommands}\n└──────`);
}

handler.command = ['cmdinfo'];
export default handler;
