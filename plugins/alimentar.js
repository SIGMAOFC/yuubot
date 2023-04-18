let handler = async (m, { conn, args, usedPrefix }) => {
    let type = (args[0] || '').toLowerCase()
    let rubah = global.db.data.users[m.sender].rubah
    let kuda = global.db.data.users[m.sender].kuda
    let kucing = global.db.data.users[m.sender].kucing
    let anjing = global.db.data.users[m.sender].anjing
    let unicor = global.db.data.users[m.sender].unicor
    let gvida = 71
    let gtak = 8
    let gdef = 4 
    let mixvida = Math.floor(Math.random() * gvida)
    let mixatk = Math.floor(Math.random() * gtak)
    let mixdef = Math.floor(Math.random() * gdef)
    switch (type) {
        case 'raposa':
            if (rubah == 0) return m.reply('*Você ainda não tem o pet raposa*')
            if (rubah == 5) return m.reply('*Seu pet já está no lvl max*')
            let __waktur = (new Date - global.db.data.users[m.sender].rubahlastclaim)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)

            if (new Date - global.db.data.users[m.sender].rubahlastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakrubah += 20
                    global.db.data.users[m.sender].rubahlastclaim = new Date * 1
                    conn.reply(m.chat, `Pet alimentado com Sucesso 🍲  🦊 ${type}`, m)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 100) - 1)
                        if (global.db.data.users[m.sender].anakrubah > naiklvl) {
                            global.db.data.users[m.sender].rubah += 1
                            global.db.data.users[m.sender].rubahvida += mixvida
                            global.db.data.users[m.sender].rubahatk += mixatk
                            global.db.data.users[m.sender].rubahdef += mixdef
                            global.db.data.users[m.sender].anakrubah -= (rubah * 100)
                            conn.reply(m.chat, `*Parabéns Pet  🦊 Raposa subiu de level*\n Vida +${mixvida}\n Ataque +${mixatk}\n Defesa +${mixdef}`, m)
                        }
                    }
                } else m.reply(`comida de pet insuficiente`)
            } else m.reply(`Seu pet de estimação está cheio, tente alimentá-lo *${waktur}* novamente`)
            break
        case 'cavalo':
            if (kuda == 0) return m.reply('*Você ainda não tem o pet Cavalo*')
            if (kuda == 5) return m.reply('*Seu pet já está no lvl max*')
            let __waktuk = (new Date - global.db.data.users[m.sender].kudalastclaim)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - global.db.data.users[m.sender].kudalastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakkuda += 20
                    global.db.data.users[m.sender].kudalastclaim = new Date * 1
                    conn.reply(m.chat, `Pet alimentado com sucesso 🍲 🐴 ${type}`, m)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 100) - 1)
                        if (global.db.data.users[m.sender].anakkuda > naiklvl) {
                            global.db.data.users[m.sender].kuda += 1
                            global.db.data.users[m.sender].anakkuda -= (kuda * 100)
                            conn.reply(m.chat, `*Parabéns Pet Cavalo subiu de level*`, m)
                        }
                    }
                } else m.reply(`comida de pet insuficiente`)
            } else m.reply(`Seu pet de estimação está cheio, tente alimentá-lo *${waktuk}* novamente`)
            break
        case 'gato':
            if (kucing == 0) return m.reply('*Você ainda não tem o pet gato')
            if (kucing == 5) return m.reply('*Seu pet já está no lvl max*')
            let __waktu = (new Date - global.db.data.users[m.sender].kucinglastclaim)
            let _waktu = (600000 - __waktu)
            let gatime = clockString(_waktu)
            if (new Date - global.db.data.users[m.sender].kucinglastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakkucing += 20
                    global.db.data.users[m.sender].kucinglastclaim = new Date * 1
                    conn.reply(m.chat, `Pet alimentado com sucesso 🍲  🐈 ${type}`, m)
                    if (kucing > 0) { 
                        let naiklvl = ((kucing * 100) - 1)
                        if (global.db.data.users[m.sender].anakkucing > naiklvl) {
                            global.db.data.users[m.sender].kucing += 1
                            global.db.data.users[m.sender].anakkucing -= (kucing * 100)
                            conn.reply(m.chat, `*Parabéns Pet Gato subiu de level  🆙*`, m)
                        }
                    }
                } else m.reply(`comida de pet insuficiente`)
            } else m.reply(`Seu pet de estimação está cheio, tente alimentá-lo *${gatime}* novamente`)
            break
            case 'panda':
                if (anjing == 0) return m.reply('*Você ainda não tem o pet panda*')
                if (anjing == 5) return m.reply('*Seu pet já está no lvl max*')
                let __waktux = (new Date - global.db.data.users[m.sender].anjinglastclaim)
                let _waktux = (600000 - __waktux)
                let waktuxz = clockString(_waktux)
                if (new Date - global.db.data.users[m.sender].anjinglastclaim > 600000) {
                    if (global.db.data.users[m.sender].makananpet > 0) {
                        global.db.data.users[m.sender].makananpet -= 1
                        global.db.data.users[m.sender].anakanjing += 20
                        global.db.data.users[m.sender].anjinglastclaim = new Date * 1
                        conn.reply(m.chat, `Pet alimentado com sucesso 🍲  🐼 ${type}`, m)
                        if (anjing > 0) { 
                            let naiklvl = ((anjing * 100) - 1)
                            if (global.db.data.users[m.sender].anakanjing > naiklvl) {
                                global.db.data.users[m.sender].anjing += 1
                                global.db.data.users[m.sender].anakanjing -= (anjing * 100)
                                conn.reply(m.chat, `*Parabéns Pet Panda subiu de level  🆙*`, m)
                            }
                        }
                    } else m.reply(`comida de pet insuficiente`)
                } else m.reply(`Seu pet de estimação está cheio, tente alimentá-lo *${waktuxz}* novamente`)
                break
                case 'unicor':
                    if (unicor == 0) return m.reply('*Você ainda não tem o pet Unicórno*')
                    if (unicor == 5) return m.reply('*Seu pet já está no lvl max*')
                    let __waktuxx = (new Date - global.db.data.users[m.sender].unicorlastclaim)
                    let _waktuxx = (600000 - __waktuxx)
                    let waktuxzz = clockString(_waktuxx)
                    if (new Date - global.db.data.users[m.sender].unicorlastclaim > 600000) {
                        if (global.db.data.users[m.sender].makananpet > 0) {
                            global.db.data.users[m.sender].makananpet -= 1
                            global.db.data.users[m.sender].anakunicor += 20
                            global.db.data.users[m.sender].unicorlastclaim = new Date * 1
                            conn.reply(m.chat, `Pet alimentado com sucesso 🍲  🦄 ${type}`, m)
                            if (unicor > 0) { 
                                let naiklvl = ((unicor * 100) - 1)
                                if (global.db.data.users[m.sender].anakunicor > naiklvl) {
                                    global.db.data.users[m.sender].unicor += 1
                                    global.db.data.users[m.sender].anakunicor -= (unicor * 100)
                                    conn.reply(m.chat, `*Parabéns Pet Panda subiu de level  🆙*`, m)
                                }
                            }
                        } else m.reply(`comida de pet insuficiente`)
                    } else m.reply(`Seu pet de estimação está cheio, tente alimentá-lo *${waktuxzz}* novamente`)
                    break
        default:
            return conn.reply(m.chat, `${usedPrefix}alimentar [ Raposa | Cavalo | Gato | Panda| Unicor]\nExemplo: *${usedPrefix}alimentar gato*`, m)
    }
}
handler.help = ['alimentar [nome do pet]']
handler.tags = ['rpg']
handler.command = /^(alimentar(ing)?)$/i

handler.disabled = false

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}