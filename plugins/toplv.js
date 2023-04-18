let handler = async function (m, { conn, text, usedPrefix, command }) {
  let users = global.db.data.users;
  let userArray = [];

  // Transforma o objeto users em um array de usuários
  for (let id in users) {
    let user = users[id];
    if (user.registered === true) {
      userArray.push(user);
    }
  }

  // Ordena o array de usuários pelo nível em ordem decrescente
  userArray.sort((a, b) => b.level - a.level);

  let output = "🏆 Ranking de Jogadores 🏆\n\n";
  for (let i in userArray) {
    if (i <= 9) {
      let user = userArray[i];
      let member = `${parseInt(i) + 1}. ${user.name} (Level ${user.level})\n❤️  Vida: ${user.healt}\n⚔️  Dano: ${user.dano}\n🛡️  Defesa: ${user.defesa}\n💰  Dinheiro: ${user.money}`;
      output += `╭─── • ◈ • ───╮\n`;
      output += `│ ${member.padEnd(29, " ")}\n`;
      output += `╰─── • ◈ • ───╯\n\n`;
    } else {
      break;
    }
  }

  m.reply(output.trim());
};

handler.help = ['rank'];
handler.tags = ['xp'];
handler.command = ['rank'];

export default handler;
