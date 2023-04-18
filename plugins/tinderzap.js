let handler = async (m, {conn, usedPrefix}) => {
    let randomUser = ''
    let randomUserAge = 0
    let randomUserName = ''
    let randomUserLikes = 0
    let users = Object.keys(global.db.data.users)
    if (users.length > 0) {
    let randomIndex = Math.floor(Math.random() * users.length)
    randomUser = users[randomIndex]
    randomUserAge = global.db.data.users[randomUser].age
    randomUserName = global.db.data.users[randomUser].name
    randomUserLikes = global.db.data.users[randomUser].likes || 0
    }
    let pp = await conn.profilePictureUrl(randomUser, 'image').catch(_ => './src/avatar_contact.png')

let str = ''
if (randomUserAge === -1) {
    str = `
    ⊶ Usuário Aleatório: 
    ▢ Nome: ${randomUserName}
    ▢ Endereço: wa.me/${randomUser.replace('@s.whatsapp.net', '')}
    ▢ Idade: Não informada
    `
} else {
    str = `
    ⊶ Usuário Aleatório: 
    ▢ Nome: ${randomUserName}
    ▢ Endereço: wa.me/${randomUser.replace('@s.whatsapp.net', '')}
    ▢ Idade: ${randomUserAge}
    `
}



conn.sendButton(m.chat, str, `\n⊶ Total de curtidas no perfil: ${randomUserLikes}\n⊶ Total de usuários registrados: ${users.length}\n O que você deseja fazer?`, pp, [
    ['💖 Curtir', `${usedPrefix}like ${randomUser.replace('@s.whatsapp.net', '')}`],
    ['🚫 Passar', `${usedPrefix}tinder`]
], m, { mentions: [randomUser] })
}

handler.command = ['tinder']
export default handler