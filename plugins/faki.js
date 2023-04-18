let handler = async (m, { conn, text }) => {
  let listSections = [
    ['🎉 Junte-se a nós! 🎉', [
      ['Junte-se ao grupo', 'Junte-se ao nosso grupo de diversão, amizade e jogos incríveis com um único bot. Clique aqui para se juntar!', 'https://chat.whatsapp.com/IRL2Usnbf8bLN0DZV6rRMd'],
      ['Ajude a divulgar', 'Ajude a divulgar nosso grupo para seus amigos! Quanto mais pessoas, mais divertido!', 'https://chat.whatsapp.com/IRL2Usnbf8bLN0DZV6rRMd'],
      ['Sugira jogos', 'Tem uma ideia para um jogo incrível? Compartilhe conosco e vamos fazer acontecer!', 'https://chat.whatsapp.com/IRL2Usnbf8bLN0DZV6rRMd']
    ]]
  ];

  return conn.sendList(m.chat, 'Opções', 'Clique em uma opção para saber mais!', false, 'Clique aqui', listSections, m);
}

handler.command = ['faki']
export default handler
