let handler = async (m, {conn, isPrems}) => {
  let trainingCount = global.db.data.users[m.sender].trainingCount;
  let time = global.db.data.users[m.sender].lasttraining + 200000;
  let XP = Math.floor(Math.random() * 5000);
  let HP = Math.floor(Math.random() * 40);
  let DEF = Math.floor(Math.random() * 2);
  let ATK = Math.floor(Math.random() * 4);

  if (new Date - global.db.data.users[m.sender].lasttraining < 200000) {
    throw `*Você está cansado* e, portanto, você tem que esperar ${msToTime(time - new Date())} Para treinar novamente!`;
  }

  global.db.data.users[m.sender].trainingCount += 1;
  global.db.data.users[m.sender].exp += XP;
  global.db.data.users[m.sender].dano += ATK;
  global.db.data.users[m.sender].healt += HP;
  global.db.data.users[m.sender].defesa += DEF;
  let mylement = global.db.data.users[m.sender].element;
  let skills = {
    Fogo: ["ChamaInfernal", "Meteoro", "Conflagração"],
    Água: ["Tsunami", "Tempestade", "Cascata"],
    Terra: ["Tremor", "Sismo", "Terremoto"],
    Ar: ["Ventania", "Rafaga", "Tornado"],
  };
  
  if (trainingCount % 50 === 0) {
    let randomSkill = pickRandom(skills[mylement]);
    
    if (global.db.data.users[m.sender][randomSkill] === 0) {
      global.db.data.users[m.sender][randomSkill] += 1;
      m.reply(`Parabéns! Você aprendeu uma nova habilidade de ${mylement}: ${randomSkill}!`);
    } else {
      m.reply(`Você tentou aprender uma nova habilidade de ${mylement}, mas infelizmente falhou. Continue treinando!`);
    }
  }

  m.reply(`┍─━──━──¤◆¤──━──━─┑
  Você treinou e ganhou:
  🗡️ ATK: ${ATK}
  ⚔️ HP: ${HP}
  🛡️ DEF: ${DEF}
  🧬 XP: ${XP}
  ┕─━──━──¤◆¤──━──━─┙`);
  global.db.data.users[m.sender].lasttraining = new Date * 1;
};

handler.help = ['treino', 'treinar'];
handler.tags = ['xp', 'hp', 'def', 'training'];
handler.command = ['treino', 'treinar'];

handler.fail = null

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
          