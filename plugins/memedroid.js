let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (text === 'vaca') {
        m.react('🐄');
    }
}

handler.help = ['Comando para reagir a mensagem com uma vaquinha quando alguem fala corno']
handler.tags = ['reação', 'vaquinha']
export default handler
