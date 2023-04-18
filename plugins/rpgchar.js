let handler = async (m, { conn }) => {
  if (m.args.length < 5) {
    conn.reply(m.chat, "Por favor, forneça todos os argumentos necessários: nome, classe e raça.", m);
    return;
  }
  // cria um novo objeto personagem
  let personagem = {
    nome: m.args[1],
    classe: m.args[2],
    raça: m.args[3],
    nivel: 1,
    experiencia: 0,
    hp: 100,
    inventario: []
  }
  // adiciona o personagem na conta do usuário
  global.db.data.users[m.sender].personagem = personagem
  // confirma a criação do personagem
  conn.reply(m.chat, `Personagem ${personagem.nome} criado com sucesso!`, m)
}
handler.help = ['criar', 'personagem', 'nome', 'classe', 'raça']
handler.tags = ['rpg']
handler.command = /^(criar)\s(personagem)\s(\w+)\s(\w+)\s(\w+)/i
export default handler
