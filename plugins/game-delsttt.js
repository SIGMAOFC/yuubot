let handler = async (m, { conn, text }) => {
	conn.game = conn.game ? conn.game : {}
	try {
		if (conn.game) {
			delete conn.game
			conn.reply(m.chat, `✅ deletando partida de *tictactoe 🎮*`, m)
		} else if (conn.game) {
			m.reply(`✳️ Não há sessão de TicTacToe 🎮 `)
		} else throw '?'
	} catch (e) {
		m.reply('⚠️ Error :v')
	}
}
handler.help = ['delttt']
handler.tags = ['game']
handler.command = ['delttc', 'delttt', 'delxo']

handler.fail = null

export default handler
