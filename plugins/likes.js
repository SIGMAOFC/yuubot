let handler = async (m, { conn, text, usedPrefix }) => {
    let number = text.replace(/\s/g, '').replace(/([#@])/g, '');
    
    if (!number || isNaN(number)) {
      return conn.reply(
        m.chat,
        `*❏ Curtir usuário*\n\n Por favor, insira um número válido ou responda à mensagem do usuário que deseja curtir`,
        m
      );
    }
    
    let user = `${number}@s.whatsapp.net`;
    
    // Aqui você pode adicionar a lógica de curtir
    if (!global.db.data.users[user]) {
      global.db.data.users[user] = { name: user, age: -1, likes: 0 }
    }
    global.db.data.users[user].likes += 1
  
    conn.reply(
      m.chat,
      `*❏ CURTIR USUÁRIO*\n\n✅ Curtiu o usuário @${number}! Total de curtidas no perfil: ${global.db.data.users[user].likes}`,
      null,
      { mentions: [user] }
    );
  };
  
  handler.command = ["like"];
  
  export default handler;
  