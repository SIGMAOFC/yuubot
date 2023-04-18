import axios from 'axios'

let handler = async (m, { text }) => {
if (!text) throw `✳️ Digite o que você deseja procurar na NewsAPI`
try {
    const link = await axios.get(`https://newsapi.org/v2/everything?q=${text}&apiKey=cf66b004ccdd49088c2bc17e13c6e128`)
    const noticias = link.data.articles
    if (noticias.length === 0) {
		m.reply(`⚠️ Não foram encontrados resultados sobre "${text}"`)
		return
	}

	let resultados = ''
	for (let i = 0; i < 5; i++) {
		resultados += `\n\n▢ *Notícia ${i + 1}*\n\n‣ Título: ${noticias[i].title}\n‣ Descrição: ${noticias[i].description}\n‣ Link: ${noticias[i].url}\n`
	}

	m.reply(`▢ *Notícias sobre "${text}"*\n\n${resultados}`)
} catch (e) {
	m.reply(`⚠️ Não foi possível acessar a NewsAPI. Verifique sua conexão com a internet e sua chave de API.`)
}
}
handler.help = ['newsapi']
handler.tags = ['tools']
handler.command = ['noticias', 'newsapi']

export default handler