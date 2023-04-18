let handler = async (m, { conn }) => {
    let personagem = global.db.data.users[m.sender].personagem
    if (!personagem) {
      conn.reply(m.chat, "Você ainda não criou um personagem.", m);
      return;
    }
    let message = `Informações do seu personagem:
    Nome: ${personagem.nome}
    Classe: ${personagem.classe}
    Raça: ${personagem.raça}
    Nível: ${personagem.nivel}
    Experiência: ${personagem.experiencia}
    HP: ${personagem.hp}
    Inventário: ${personagem.inventario}`;
    conn.reply(m.chat, message, m);
  }
  handler.help = ['ver', 'personagem']
  handler.tags = ['rpg']
  handler.command = /^(ver)\s(personagem)$/i
  export default handler
  