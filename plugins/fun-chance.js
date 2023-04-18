let handler = async(m, {conn, text}) => {
    setTimeout(() => {
        const val = Math.floor(Math.random() * 100) + 1
        let str;
        let emoji;
        if (val <= 25) {
            str = `Muito baixa`;
            emoji = "😔"
        } else if (val <= 50) {
            str = `Baixa`;
            emoji = "🤔"
        } else if (val <= 75) {
            str = `Média`;
            emoji = "🙂"
        } else if (val <= 90) {
            str = `Alta`;
            emoji = "😎"
        } else {
            str = `Muito alta`;
            emoji = "🤑"
        }
        m.react(emoji)
        let output = `
    XxX------- YuuBot -------XxX
    pelos meus cálculos de angolano 1+1 = 0
    a chance de: ${text}
    é ${str}
    `.trim()
        conn.reply(m.chat, output)
    }, 5000) // 5 seconds delay
}

handler.command = ['chance', 'sorte']
handler.tags = ['fun']

export default handler
