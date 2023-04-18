let handler = async (m, { conn, usedPrefix, command}) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    if (!global.db.data.senseis || !global.db.data.senseis[who]) {
        throw `⚠️ Essa pessoa nao recrutou niguem.`;
      }
      
      let students = global.db.data.senseis[who];
      let message = `🙏 Pessoas Recrutadas por ${conn.getName(who)}:\n`;
      
      students.forEach(s => {
        let student = global.db.data.users[s];
        message += `[${student.clan}] ${conn.getName(s)}\n`;
      });
      
      m.reply(message);
    };
    
    handler.help = ['vermestre'].map(v => v + ' @mestre');
    handler.tags = ['xp']
    handler.command = ['vermestre'];
    
    export default handler;
    