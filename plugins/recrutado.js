let handler = async (m, { conn, usedPrefix, command}) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    if (!(who in global.db.data.users)) throw `✳️ O usuário não foi encontrado no meu banco de dados`
    
    let player = conn.getName(m.sender); 
    let mentioned = conn.getName(who); 
    
    let user = global.db.data.users[m.sender];
    if (!user.registered) 
      throw `⚠️ Você não está registrado, use o comando ${usedPrefix + command} nome.clan para registrar`;
    
    if (user.sensei) 
      throw `⚠️ Você já foi recrutado: ${conn.getName(user.sensei)}`;
    
    if (!m.mentionedJid[0]) 
      throw `⚠️ Use o comando ${usedPrefix + command} @usuário para marca quem te convidou`;
    
    let sensei = m.mentionedJid[0];
    
    global.db.data.users[m.sender].sensei = sensei;
    
    if (!global.db.data.senseis) global.db.data.senseis = {};
    
    if (!global.db.data.senseis[sensei]) global.db.data.senseis[sensei] = [];
    
    global.db.data.senseis[sensei].push(m.sender);
    
    m.reply(`🙏 ${player} foi recrutado por ${mentioned}!`);
  }; 
  
  handler.help = ['mestre'].map(v => v + ' @usuario');
  handler.tags = ['xp']
  handler.command = ['mestre', 'Alistar-se']; 
  
  export default handler;
  