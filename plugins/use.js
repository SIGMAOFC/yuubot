
let handler = async (m, { conn, usedPrefix, args, command}) => {
    let msgerror = (pickRandom(['Error', 'achou que falhou🥴', 'Belo Error😫', 'formato errado eu acho 😖', 'Error bb👼🏻', 'error macaco 🙊', 'deu erro em algo🥴', 'falhou 😂kkk', 'erro 😟aa', 'error 🙄aff']))
    try {
        let msgkurang = (pickRandom(['Você não possui poções🍶 suficientes', 'Não tem poção🍶 suficiente 😓', 'Não vejo suas poçoes🍶', 'Compre poções🍶 primeiro, você não possui poções🍶 suficientes', 'Suas poções🍶 não são suficientes😲', 'Falta poções📜 no seu ineventário📜', 'Compre primeiro, caso queira usar poções🍶😐','Mas não há poções🍶 😦','Peça a outro aventureiro para transferir poções🍶, para que suas poções não faltem😁', 'Compre poções🍶 primeiro 😂KKK']))
        let msgpenuh = (pickRandom(['Sua saúde❤ está cheia', 'Verifique seu inventário📜, sua saúde❤ atingiu 100', 'Sua saúde está cheia❤', 'Você está bem🤭', 'Sua saúde❤ está cheia', 'Saúde❤ cheia, solicite novamente quando estiver sem sáude']))
        let kucing = global.db.data.users[m.sender].kucing
        let usepotion = (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '')
        let healt = global.db.data.users[m.sender].healt
        if (/usar|pakai/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
                 let msgsucces = (pickRandom(['Sabor é horrivel, mas bebeu as poções🤢', 'Pronto você bebeu poção😋', 'Tomando🥤 poção', 'Macaco🐒 bebeu tuda sua poção', 'Bebendo tudo gut gut gut!🥛', 'Você está usando poção🍶']) + ' *' + (count * 1) + '* poção🍶')
                 if (args[0] === 'poção') {
                    if (global.db.data.users[m.sender].healt < 1000) {
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].potion -= count * 1
                            global.db.data.users[m.sender].healt += usepotion * count
                            conn.reply(m.chat, msgsucces, m)
                        } else conn.reply(m.chat, msgkurang, m)
                    } else conn.reply(m.chat, msgpenuh, m)
                } else if (args.length > 2 && args[0] === !'poção') m.reply(pickRandom(['Só posso usar poções🍶', 'O que você quer usar? Só posso usar poções🤷🏻‍♂️', 'Você só pode usar poções🤔', 'Apenas poção😣', 'O que você quer usar? Apenas poçoes🍶']) + '\nExemplo envie: *' + usedPrefix + 'poção 1*')
            } catch (e) {
                console.log(e)
                m.reply(msgerror)
                
            }
        } else if (/curar/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
                let msgsucces = (pickRandom(['Humm usado com sucesso🍶', 'Você usou poção🍶', 'Conseguiu beber...🥤', '🍶Poçoes do inferno hmm😈', 'Você está bebendo🤡', 'gut gut gut muito ruim😷']) + ' *' + (count * 1) + '* poção')
                if (global.db.data.users[m.sender].healt < 1000) {
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].potion -= count * 1
                        global.db.data.users[m.sender].healt += usepotion * count
                        conn.reply(m.chat, msgsucces, m)
                    } else conn.reply(m.chat, msgkurang, m)
                } else conn.reply(m.chat, msgpenuh, m)
            } catch (e) {
                console.log(e)
                m.reply(msgerror)

            }
        }
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, msgerror, m)

    }
}

handler.help = ['usar <item> <quantidade>', 'curar']
handler.tags = ['xp']
handler.command = /^(usar|curar)$/i

handler.disabled = false

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}