let buatall = 1
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    conn.judi = conn.judi ? conn.judi : {}
    if (m.chat in conn.judi) return m.reply ('Ainda há jogo aqui, espere até terminar!!')
    else conn.judi[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 100)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 86)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, usedPrefix + 'apostar <valor>\n ' + usedPrefix + 'apostar 1000', m)
        if (global.db.data.users[m.sender].money >= count * 1) {
            global.db.data.users[m.sender].money -= count * 1
            await m.reply('*Não jogue, você não vai ganhar!! , se você não acredita, ok*') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                conn.reply(m.chat, `Meu dado rola 🎲 :${Aku}\nSeu dado rola 🎲 :${Kamu}\n\nVocê perde  *Perdeu*  ${count} Grana \nEu avisei `.trim(), m)
            } else if (Aku < Kamu) {
                global.db.data.users[m.sender].money += count * 2
                conn.reply(m.chat, `Meu dado rola 🎲 :${Aku}\nSeu dado rola 🎲 : ${Kamu}\n\nVocê ganha  *Ganhou* ${count * 2} Grana`.trim(), m)
            } else {
                global.db.data.users[m.sender].money += count * 1
                conn.reply(m.chat, `Meu dado rola 🎲:${Aku}\nSeu dado rola 🎲 : ${Kamu}\n\n você obtém ${count * 1} Grana`.trim(), m)
            }
        } else conn.reply(m.chat, `seu dinheiro não é suficiente para jogar  ${count} grana`.trim(), m)
    } catch (e) {
        console.log(e)
        m.reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, 'Judi.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*',)
            }
        }
    } finally {
        delete conn.judi[m.chat]
    }
}
    
handler.help = ['apostar <valor>']
handler.tags = ['rpg']
handler.command = /^(apostar)$/i

handler.fail = null

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
