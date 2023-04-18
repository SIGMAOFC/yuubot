let handler = async (m, { conn, text }) => {
    const usedPrefix = '*';
    const potion = 500;
    const Spotion = 150;
    const Bdiamond = 900;
    const Sdiamond = 500;
    const Bcommon = 550;
    const Scommon = 20;
    const Suncommon = 100;
    const Buncommon = 700;
    const Bmythic = 2000;
    const Smythic = 500;
    const Slegendary = 3000;
    const Bsampah = 10;
    const baupet = 90000;
    const ptfood = 10000;
    const card = 40000;
    const pchack = 500000;
    
    let listSections = [
    ['🧾Lista de Mercadoria:', [
    ['🧰Conteúdo', '💸Preço de compra'],
    ['💳Cartão', card],
    ['🖥️Pc', pchack],
    ['🍶Poção', potion],
    ['💎Diamante', Bdiamond],
    ['🎠Petbox', baupet],
    ['🧆Petfood', ptfood],
    ['🥼Armadura', ''],
    ['⚔️Espada', ''],
    ['🧰Conteúdo', '💵Preço de venda'],
    ['🍶Poção', Spotion],
    ['💎Diamante', Sdiamond],
    ]]
    ];
    
    return conn.sendList(m.chat, 'Opções', 'Clique em uma opção para saber mais!', false, 'Clique aqui', listSections, m);

}

handler.command = ['listaloja']
export default handler
  