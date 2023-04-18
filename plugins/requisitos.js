import fetch from 'node-fetch'

let handler = async (m, { text }) => {
    let game = text.trim()
    let response = await fetch(`https://open-apis-rest.up.railway.app/api/game_specs?game=${game}`)
    let data = await response.json()

    if(data.status !== 'OK') {
        return m.reply("Não foi possível encontrar requisitos para esse jogo.")
    }

    let { name, banner } = data.data.game
    let requirements = data.data.system_requirements
    let min = requirements.minimum
    let rec = requirements.recommended
    
    let gxame = data.data.game
    let bannerUrl = gxame.banner
    let pp = await (await fetch(bannerUrl)).buffer()

    // montar a mensagem com as informações do jogo
    let message = `Requisitos para o jogo ${name}:\n\n`
    message += `Requisitos mínimos:\n`
    message += `CPU: ${min.cpu}\n`
    message += `GPU: ${min.gpu}\n`
    message += `RAM: ${min.ram}\n`
    message += `HDD: ${min.hdd}\n`
    message += `DirectX: ${min.directx}\n`
    message += `OS: ${min.os}\n\n`
    message += `Requisitos recomendados:\n`
    message += `CPU: ${rec.cpu}\n`
    message += `GPU: ${rec.gpu}\n`
    message += `RAM: ${rec.ram}\n`
    message += `HDD: ${rec.hdd}\n`
    message += `DirectX: ${rec.directx}\n`
    message += `OS: ${rec.os}\n  `

    // enviar a mensagem com o banner e as informações do jogo
    conn.sendFile(m.chat, pp, 'banner.jpg', message, m, false, { mentions: conn.parseMention(message) })
}

handler.help = ['game <nome do jogo>']
handler.command = ['game']

export default handler
