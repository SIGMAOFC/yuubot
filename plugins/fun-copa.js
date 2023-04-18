import moment from "moment-timezone"

let handler = async (m, {conn, usedPrefix}) => {

var copa = await import('../lib/copa.js')
copa.default().then(async ({resultado2: res}) => {
    let teks = ""
        if(res.aovivo[0]) {
            teks += `•••••••••••| Placar |•••••••••••\n\n` + res.aovivo.map((a) => `${a.time_1.nome} x ${a.time_2.nome}\n${parseInt(a.time_2.gols) + parseInt(a.time_2.penaltis)}\t|\t${parseInt(a.time_2.gols) + parseInt(a.time_2.penaltis)}`).join('\n\n•••••••••••••••••••••••••••••••••\n\n')

            conn.sendButton(m.chat, teks, 'Yuu Bot ┃ Copa', null, [
                ['≡ Prximos Jogos', `${usedPrefix}copa`]
              ],m)
        }
        if (res.proximos[0]) {
            teks += `••••••| Próximos Jogos |••••••\n\n` + res.proximos.map((a) => `${a.time_1.nome} x ${a.time_2.nome}\n⏰ ${moment(a.data).format('LTS | DD/MM/YYYY')}`).join('\n\n•••••••••••••••••••••••••••••••••\n\n')
            
        conn.sendButton(m.chat, teks.trim(), 'Yuu Bot ┃ Copa', null, [
            ['🛑 Ao Vivo', `${usedPrefix}copa`],
            ['▢ Placar', `${usedPrefix}copa`],
          ],m)
        }
})
.catch(console.error)
}

handler.help = ['copa']
handler.tags = ['fun']
handler.command = ['copa'] 

export default handler