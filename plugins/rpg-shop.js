const potion = 500
const Spotion = 150 
const Bdiamond = 900
const Sdiamond = 500
const Bcommon = 550
const Scommon = 20
const Suncommon = 100
const Buncommon = 700
const Bmythic = 2000 
const Smythic = 500
const Slegendary = 3000
const Bsampah = 10
const baupet = 90000
const ptfood = 10000
const card = 40000
const pchack = 500000
let handler = async (m, { conn, usedPrefix, args, command}) => {

    let im22g = './src/loja.png'
 
    const _armor = global.db.data.users[m.sender].armor

    const armor = (_armor == 0 ? 5000 : '' || _armor == 1 ? 10000 : '' || _armor == 2 ? 25000 : '' || _armor == 3 ? 50000 : '' || _armor == 4 ? 100000 : '' || _armor == 5 ? 250000 : '' || _armor == 6 ? 500000 : '' || _armor == 7 ? 500000 : '' || _armor == 8 ? 750000 : '');
    const _sword = global.db.data.users[m.sender].sword
    const sword = (_sword == 0 ? 30000 : _sword == 1 ? 85000 : _sword == 2 ? 150000 : _sword == 3 ? 300000 : _sword == 4 ? 500000 : _sword == 5 ? 750000 : _sword == 6 ? 1000000 : _sword == 7 ? 2000000 : _sword == 8 ? 3000000 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
${usedPrefix}loja <comprar|vender> <item> <quantidade>\n
Exemplo de uso: *${usedPrefix}loja comprar poção 1*\n\n
*🧾Lista de Mercadoria:*\n\n
*🧰Conteúdo |💸Preço de compra*\n
💳Cartão:       *${card}*
🖥️Pc:       *${pchack}*
🍶Poção:       *${potion}*
💎Diamante:       *${Bdiamond}*
🎠Petbox:       *${baupet}*
🧆petfood:       *${ptfood}*
🥼Armadura:      *${armor}*
⚔️Espada:       *${sword}*\n\n
*🧰Conteúdo |💵Preço de venda*\n
🍶Poção:       *${Spotion}*
💎Diamante:     *${Sdiamond}*\n\n
`.trim()
    try {
        if (/shop|loja/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'comprar':
                switch (_type) {
                    case 'poção':
                            if (global.db.data.users[m.sender].money >= potion * count) {
                                global.db.data.users[m.sender].money -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Compra realizada de ${count} poção por ${potion * count} 💰\n\nUse digitando: *${usedPrefix}poção <quantidade>*`, m)
                            } else conn.reply(m.chat, `Seu dinheiro não é suficiente ${count}. O preço é ${potion * count} 💰`,)
                        break
                        case 'diamante':
                            if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].money -= Bdiamond * count
                                conn.reply(m.chat, `Compra realizada de ${count} diamante por ${Bdiamond * count} 💰`, m)
                            } else conn.reply(m.chat, `Seu dinheiro não é suficiente.`, m)
                        
                        break
                        
                        case 'cartão':
                            if (global.db.data.users[m.sender].money >= card * count) {
                                global.db.data.users[m.sender].atm += count * 1
                                global.db.data.users[m.sender].money -= card * count
                                conn.reply(m.chat, `Compra realizada de ${count} Cartão Eletronico por ${card * count} 💰`, m)
                            } else conn.reply(m.chat, `Seu dinheiro não é suficiente.`, m)
                        
                        break
                        case 'pc':
                            if (global.db.data.users[m.sender].money >= pchack * count) {
                                global.db.data.users[m.sender].pc += count * 1
                                global.db.data.users[m.sender].money -= pchack * count
                                conn.reply(m.chat, `Compra realizada de ${count} PC por ${pchack * count} 💰\n\n use com #hackear @ \n `, m)
                            } else conn.reply(m.chat, `Seu dinheiro não é suficiente.`, m)
                        
                        break
                        case 'petbox':
                            if (global.db.data.users[m.sender].money >= baupet * count) {
                                global.db.data.users[m.sender].pet += count * 1
                                global.db.data.users[m.sender].money -= baupet * count
                                conn.reply(m.chat, `Compra realizada de ${count} baú de pet por ${baupet * count} 💰`, m)
                            } else conn.reply(m.chat, `Seu dinheiro não é suficiente ${count}. O preço é ${baupet * count} 💰\n\nUse digitando: #abrir petbox`, m)
                            
                            break
                            
                        case 'petfood':
                            if (global.db.data.users[m.sender].money >= ptfood * count) {
                                global.db.data.users[m.sender].makananpet += count * 1
                                global.db.data.users[m.sender].money -= ptfood * count
                                conn.reply(m.chat, `Compra realizada de ${count} comida de pet por ${ptfood * count} 💰`, m)
                            } else conn.reply(m.chat, `Seu dinheiro não é suficiente ${count}. O preço é ${ptfood * count} 💰\n\nUse digitando: #alimentar nome do pet`, m)
                            
                            break
                            case 'armadura':
                                const armorPrices = [5000, 10000, 25000, 50000, 100000, 250000, 500000, 750000];
                                const armor = armorPrices[global.db.data.users[m.sender].armor];
                                const nextArmor = armorPrices[global.db.data.users[m.sender].armor + 1];
                                const armorDefense = [10, 25, 35, 55, 75, 120, 220, 350];
                                const defenseIncreased = armorDefense[global.db.data.users[m.sender].armor];
                            
                                if (global.db.data.users[m.sender].armor == 8) {
                                    return conn.reply(m.chat, 'Ei, você já tem a armadura mais poderosa que existe! Não precisa ir além disso!', m);
                                }
                                if (global.db.data.users[m.sender].money < armor) {
                                    return conn.reply(m.chat, `Seu dinheiro não é suficiente ${armor} 💰. Economize mais ${nextArmor - global.db.data.users[m.sender].money}G e volte para tentar novamente!`, m);
                                }
                            
                                global.db.data.users[m.sender].armor += 1;
                                global.db.data.users[m.sender].money -= armor;
                                global.db.data.users[m.sender].defesa += defenseIncreased;
                            
                                conn.reply(m.chat, `🛡️ Compra realizada de armadura ao preço ${armor} 💰. Sua defesa aumentou em ${defenseIncreased}! 🔥`, m);
                                break;
                            
                            
                            
                        case 'espada':
                            if (global.db.data.users[m.sender].sword == 8) return conn.reply(m.chat, 'Ei, você já tem a espada mais poderosa que existe! Não precisa ir além disso!', m)
                            const swordPrices = [30000, 85000, 150000, 300000, 500000, 750000, 1000000, 2000000, 3000000];
                            const sword = swordPrices[global.db.data.users[m.sender].sword];
                            const nextSword = swordPrices[global.db.data.users[m.sender].sword + 1];
                            const swordDamage = [15, 35, 55, 70, 95, 155, 225, 350, 400];
                            const danoAumentado = swordDamage[global.db.data.users[m.sender].sword];
                        
                            if (global.db.data.users[m.sender].money >= sword) {
                                global.db.data.users[m.sender].sword += 1;
                                global.db.data.users[m.sender].money -= sword;
                                global.db.data.users[m.sender].dano += danoAumentado;
                                conn.reply(m.chat, `🗡️ Uau! Você acaba de comprar uma espada incrível! Com ela, você vai causar um dano extra de ${danoAumentado}! 🔥`, m);
                            } else conn.reply(m.chat, `💰 Oops, parece que você não tem dinheiro suficiente para comprar essa espada. Economize mais ${nextSword - global.db.data.users[m.sender].money}G e volte para tentar novamente!`, m);
                            break;
                        

                            
                    default:
                        
                        return await conn.sendFile(m.chat, `${im22g}`, 'meme.jpg', ` ${Kchat}`, '', '', m)
                }
                break
            case 'vender': 
                switch (_type) {
                    case 'poção':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].money += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Venda realizada de ${count} poção ao preço de ${Spotion * count} 💰`.trim(), m)
                        } else conn.reply(m.chat, `Suas poções não são suficientes`.trim(), m)
                        break

                    case 'diamante':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Venda realizada de ${count} Diamante ao preço de ${Sdiamond * count} 💰`, m)
                        } else conn.reply(m.chat, `Você não tem diamante suficiente`, m)
                        break
                    default:
                        return await conn.sendFile(m.chat, `${im22g}`, 'meme.jpg', ` ${Kchat}`, '', '', m)
                }
                break
            default:
                return await conn.sendFile(m.chat, `${im22g}`, 'meme.jpg', ` ${Kchat}`, '', '', m)
            }
        } else if (/beli|comprar/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'poção':
                        if (global.db.data.users[m.sender].money >= potion * count) {
                            global.db.data.users[m.sender].money -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Compra realizada de ${count} poção ao preço de ${potion * count} 💰\n\nUse digitando: *${usedPrefix}poção <quantidade>*`, m)
                        } else conn.reply(m.chat, `Seu dinheiro não é suficiente ${count} o preço da poção é ${potion * count} 💰`,m)
                    
                    break
                case 'diamante':
                        if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].money -= Bdiamond * count
                            conn.reply(m.chat, `Compra realizada de ${count} diamante ao preço de ${Bdiamond * count} 💰`, m)
                        } else conn.reply(m.chat, `Seu dinheiro não é suficiente`, m)
                    
                    break

                default:
                    return await conn.sendFile(m.chat, `${im22g}`, 'meme.jpg', ` ${Kchat}`, '', '', m)
            }
        } else if (/vender|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'poção':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].money += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Venda realizada de ${count} poção ao preço de ${Spotion * count} 💰`.trim(), m)
                    } else conn.reply(m.chat, `Você não tem poção suficiente`.trim(), m)
                    break
                case 'diamante':
                    if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[m.sender].money += Sdiamond * count
                        conn.reply(m.chat, `Venda realizada de ${count} diamante ao preço de ${Sdiamond * count} 💰`, m)
                    } else conn.reply(m.chat, `Você não tem diamante suficiente`, m)
                    break
                default:
                   // return await conn.sendFile(m.chat, `${im22g}`, 'meme.jpg', ` ${Kchat}`, '', '', m)
                    const sections = [
                        {
                         title: `≡ Lista de opções`,
                         rows: [
                         {title: "Opção 1", rowId: `1`},
                         {title: "Opção 2", rowId: `2`},
                         {title: "Opção 3", rowId: `3`},
                         {title: "Opção 4", rowId: `4`},
                         ]
                         },
                     ]
                     
                     const listMessage = {
                       text: '\nEscolha uma opção:',
                       title: `≡ Lista de opções`,
                       sections
                     }
                     
                     return await conn.sendMessage(m.chat, listMessage, { quoted: m });
                     
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)

        }
    }


handler.help = ['loja <v|c> <quantidade>']
handler.tags = ['xp']
    
handler.command = /^(loja|shop|comprar|beli|vender|jual)$/i

handler.disabled = false

export default handler
