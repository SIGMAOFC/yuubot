let handler = async function (m, { conn, text, usedPrefix, command }) {
  let users = global.db.data.users;
  let clans = [];
  for (let id in users) {
      let user = users[id];
      if (user.registered === true && user.clan !== "") {
          let clan = user.clan;
          if (!clans.includes(clan)) {
              clans.push(clan);
          }
      }
  }

  let output = `Lista de Clãs: \n\n`;
  for (let i in clans) {
      let clan = clans[i];
      if (typeof clan !== "string") {
          continue;
      }
      let members = [];
      for (let id in users) {
          let user = users[id];
          if (user.registered === true && user.clan === clan) {
              members.push(user.name + " | " + "Level " + user.level);
          }
      }
      output += `Clã: ${clan}\n`;
      output += `Membros:\n`;
      for (let member of members) {
          let [name, level] = member.split(" | ");
          output += `- ${name} (${level})\n`;
      }
      output += '\n';
  }

  m.reply(output.trim());
};

handler.help = ['clans'];
handler.tags = ['xp'];
handler.command = ['clans'];

export default handler;
