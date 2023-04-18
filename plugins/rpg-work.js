import fs from 'fs';

let handler = async (m, {conn, isPrems}) => {
  let user = global.db.data.users[m.sender];
  if (!user.registered) 
    throw `⚠️ Você não está registrado, use o comando #reg nome.clan para registrar`;
  let role = global.db.data.users[m.sender].role;
  let level = global.db.data.users[m.sender].level;
  let rewardMultiplier = 1 + (level - 1) * 0.2; // aumenta a recompensa em 10% para cada nível
  let hasil = Math.floor(Math.random() * 2000 * rewardMultiplier);
  let haxpl = Math.floor(Math.random() * 20000);
  let time = global.db.data.users[m.sender].lastwork + 400000;
  if (new Date - global.db.data.users[m.sender].lastwork < 400000) {
    throw `*Você está cansado* e, portanto, você tem que esperar ${msToTime(time - new Date())} Para voltar ao trabalho!`;
  }
  let anu = JSON.parse(fs.readFileSync('dados/work.json'));
  let json = pickRandom(anu);
  global.db.data.users[m.sender].money += hasil;
  global.db.data.users[m.sender].xp += haxpl;

  m.reply(`⛏️ Trabalho Atual: *${role}*\n
‣ ${json.fgwork}\n\n
Recompensa
╔─━─━─━─¤×¤─━─━─━─╗
│⬡ 💰 R$: *${hasil}*
│⬡ 🧬 Xp: *${haxpl}*
╚─━─━─━─¤×¤─━─━─━─╝
`);
  global.db.data.users[m.sender].lastwork = new Date * 1;
};


handler.help = ['work'];
handler.tags = ['xp'];
handler.command = ['work', 'w', 'trabalhar'];

handler.fail = null;
handler.exp = 0;

export default handler;

function msToTime(duration) {
  let milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return minutes + " m " + seconds + " s ";
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
