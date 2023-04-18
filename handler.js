import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import Canvas from 'canvas'



/**
 * @type {import('@adiwajshing/baileys')}
 */
const { proto } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

/**
 * Handle messages upsert
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate 
 */
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate)
        return
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m)
        return
    if (global.db.data == null)
        await global.loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.diamond = false
        try {
            // TODO: use loop to insert data instead of this
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object')
            
                global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.mythic)) user.mythic = 0
                if (!isNumber(user.kuda)) user.kuda = 0
                if (!isNumber(user.likes)) user.likes = 0
                if (!isNumber(user.msg)) user.msg = 0
                if (!isNumber(user.dano)) user.dano = 0
                if (!isNumber(user.defesa)) user.defesa = 0
                if (!isNumber(user.winlut)) user.winlut = 0
                if (!isNumber(user.loselut)) user.loselut = 0
                if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
                if (!isNumber(user.lastcarinhorap)) user.lastcarinhorap = 0
                if (!isNumber(user.lasthacker)) user.lasthacker = 0
                if (!isNumber(user.lastquest)) user.lastquest = 0
                if (!isNumber(user.trainingCount)) user.trainingCount = 0

                if (!isNumber(user.anakkuda)) user.anakkuda = 0
                if (!isNumber(user.kucing)) user.kucing = 0
                if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
                if (!isNumber(user.anjing)) user.anjing = 0
                if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
                if (!isNumber(user.anakanjing)) user.anakanjing = 0
                if (!isNumber(user.anakkucing)) user.anakkucing = 0
                if (!isNumber(user.healt)) user.healt = 0
                if (!isNumber(user.potion)) user.potion = 0
                if (!isNumber(user.armor)) user.armor = 0
                if (!isNumber(user.sword)) user.sword = 0
                //inicio dos hhab
                if (!isNumber(user.ChamaInfernal)) user.ChamaInfernal = 0;
                if (!isNumber(user.ChamaInfernalatk)) user.ChamaInfernalatk = 20;
                if (!isNumber(user.Meteoro)) user.Meteoro = 0;
                if (!isNumber(user.Meteoroatk)) user.Meteoroatk = 35;
                if (!isNumber(user.Conflagração)) user.Conflagração = 0;
                if (!isNumber(user.Conflagraçãoatk)) user.Conflagraçãoatk = 50;
                if (!isNumber(user.Tsunami)) user.Tsunami = 0;
                if (!isNumber(user.Tsunamiatk)) user.Tsunamiatk = 25;
                if (!isNumber(user.Tempestade)) user.Tempestade = 0;
                if (!isNumber(user.Tempestadeatk)) user.Tempestadeatk = 40;
                if (!isNumber(user.Cascata)) user.Cascata = 0;
                if (!isNumber(user.Cascataatk)) user.Cascataatk = 55;
                if (!isNumber(user.Tremor)) user.Tremor = 0;
                if (!isNumber(user.Tremoratk)) user.Tremoratk = 30;
                if (!isNumber(user.Sismo)) user.Sismo = 0;
                if (!isNumber(user.Sismoatk)) user.Sismoatk = 45;
                if (!isNumber(user.Terremoto)) user.Terremoto = 0;
                if (!isNumber(user.Terremotoatk)) user.Terremotoatk = 60;
                if (!isNumber(user.Ventania)) user.Ventania = 0;
                if (!isNumber(user.Ventaniaatk)) user.Ventaniaatk = 25;
                if (!isNumber(user.Rafaga)) user.Rafaga = 0;
                if (!isNumber(user.RafagaAtk)) user.RafagaAtk = 45;
                if (!isNumber(user.Tornado)) user.Tornado = 0;
                if (!isNumber(user.TornadoAtk)) user.TornadoAtk = 65;
                //fim
                if (!isNumber(user.rubah)) user.rubah = 0
                if (!isNumber(user.rubahvida)) user.rubahvida = 0
                if (!isNumber(user.rubahatk)) user.rubahatk = 0
                if (!isNumber(user.rubahdef)) user.rubahdef = 0
                if (!isNumber(user.pet)) user.pet = 0
                if (!isNumber(user.makananpet)) user.makananpet = 0
                if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
                if (!isNumber(user.anakrubah)) user.anakrubah = 0
                if (!isNumber(user.lasthunt)) user.lasthunt = 0
                if (!isNumber(user.drogas)) user.drogas = 0
                if (!isNumber(user.bebidas)) user.bebidas = 0
                if (!isNumber(user.orgao)) user.orgao = 0
                if (!isNumber(user.notasf)) user.notasf = 0
                if (!isNumber(user.bank)) user.bank = 0
                if (!isNumber(user.atm)) user.atm = 0
                if (!isNumber(user.pc)) user.pc = 0
                if (!isNumber(user.god)) user.god = 0

                if (!isNumber(user.exp))
                    user.exp = 0
                if (!isNumber(user.diamond))
                    user.diamond = 10
                if (!isNumber(user.money)) 
                    user.money = 0

                if (!isNumber(user.lastclaim))
                    user.lastclaim = 0
                if (!('registered' in user))
                    user.registered = false
                    //-- user registered 
                if (!user.registered) {
                    if (!('name' in user))
                        user.name = m.name
                    if (!isNumber(user.age))
                        user.age = -1
                    if (!isNumber(user.regTime))
                        user.regTime = -1
                }
                //--user number
                if (!isNumber(user.afk))
                    user.afk = -1
                if (!('afkReason' in user))
                    user.afkReason = ''
                    if (!('clan' in user))
                    user.clan = ''
                    if (!('element' in user))
                    user.element = ''
                    if (!('casado' in user))
                    user.casado = ''
                if (!('banned' in user))
                    user.banned = false
                if (!isNumber(user.warn))
                    user.warn = 0
                if (!('pokemons' in user)) 
                    user.pokemons = []
                if (!isNumber(user.level))
                    user.level = 0
                if (!('role' in user))
                    user.role = 'Novato'
                if (!('autolevelup' in user))
                    user.autolevelup = true
                    if (!('sensei' in user))
                    user.sensei = ''
                if (!('chatbot' in user))
                    user.chatbot = false
            } else
                global.db.data.users[m.sender] = {
                    exp: 750,
                    dano: 20,
                    level: 0,
                    healt: 100,
                    defesa: 5,
                    clan: '',
                    element: '',
                    casado: '',
                    winlut: 0,
                    pokemon: {},
                    msg: 0,
                    diamond: 10,
                    money: 100000,
                    lastclaim: 0,
                    likes: 0,
                    lastcarinhorap: 0,
                    sensei: '',
                    //habilidades fogo
                    ChamaInfernal: 0,
                    ChamaInfernalatk: 20,
                    Meteoro: 0,
                    Meteoroatk: 35,
                    Conflagração: 0,
                    Conflagraçãoatk: 50,
                    //habilidades agua
                    Tsunami: 0,
                    Tsunamiatk: 25,
                    Tempestade: 0,
                    Tempestadeatk: 40,
                    Cascata: 0,
                    Cascataatk: 55,
                    //habilidades terra
                    Tremor: 0,
                    Tremoratk: 30,
                    Sismo: 0,
                    Sismoatk: 45,
                    Terremoto: 0,
                    Terremotoatk: 60,
                    //habilidades ar
                    Ventania: 0,
                    Ventaniaatk: 35,
                    Rafaga: 0,
                    RafagaAtk: 45,
                    Tornado: 0,
                    TornadoAtk: 65,
                    //habilidades fim

                    trainingCount: 0,
                    lasthacker: 0,
                    lastquest: 0,
                    registered: false,
                    name: m.name,
                    age: -1,
                    regTime: -1,
                    afk: -1,
                    afkReason: '',
                    banned: false,
                    warn: 0,
                    mythic: 0,
                    rubah: 0,
                    rubahvida: 100,
                    rubahatk: 5,
                    rubahdef: 3,
                    rubahlastclaim: 0,
                    anakrubah: 0,
                    kucing: 0,
                    kucinglastclaim: 0,
                    anakkucing: 0,
                    armor: 0,
                    sword: 0,
                    pet: 0,
                    makananpet: 0,
                    anjing: 0,
                    anjinglastclaim: 0,
                    anakanjing: 0,
                    potion: 0,
                    lasthunt: 0,
                    kuda: 0,
                    kudalastclaim: 0,
                    anakkuda: 0,
                    drogas: 0,
                    bebidas: 0,
                    orgao: 0,
                    notasf: 0,
                    bank: 0,
                    atm: 0,
                    pc: 0,
                    god: 0,
                    role: 'Novato',
                    autolevelup: true,
                    chatbot: false,
                }
            let chat = global.db.data.chats[m.chat]
            if (typeof chat !== 'object')
                global.db.data.chats[m.chat] = {}
            if (chat) {
                if (!('isBanned' in chat))
                    chat.isBanned = false
                if (!('welcome' in chat))
                    chat.welcome = false
                if (!('detect' in chat))
                    chat.detect = false
                if (!('sWelcome' in chat))
                    chat.sWelcome = ''
                if (!('sBye' in chat))
                    chat.sBye = ''
                if (!('sPromote' in chat))
                    chat.sPromote = ''
                if (!('sDemote' in chat))
                    chat.sDemote = ''
                if (!('delete' in chat))
                    chat.delete = true
                if (!('antiLink' in chat))
                    chat.antiLink = true
                if (!('viewonce' in chat))
                    chat.viewonce = false
                if (!('onlyLatinos' in chat))
                    chat.onlyLatinos = false
                 if (!('nsfw' in chat))
                    chat.nsfw = false
                if (!isNumber(chat.expired))
                    chat.expired = 0
            } else
                global.db.data.chats[m.chat] = {
                    isBanned: false,
                    welcome: false,
                    detect: false,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    delete: true,
                    antiLink: false,
                    viewonce: false,
                    useDocument: true,
                    onlyLatinos: false,
                    nsfw: false, 
                    expired: 0,
                }
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = false
                if (!('restrict' in settings)) settings.restrict = false
                if (!('status' in settings)) settings.status = 0
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: false,
                restrict: false, 
                status: 0
            }
        } catch (e) {
            console.error(e)
        }
        if (opts['nyimak'])
            return
        if (!m.fromMe && opts['self'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['gconly'] && !m.chat.endsWith('g.us'))
            return
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''

        const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

        if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque, time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                   /*for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`*Plugin:* ${name}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${m.text}\n\n${format(e)}.trim(), data.jid)
                    }*/
                }
            }
            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                    continue
            }
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                command = (command || '').toLowerCase()
                let fail = plugin.fail || global.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    if (name != 'owner-unbanchat.js' && chat?.isBanned)
                        return // Except this
                    if (name != 'owner-unbanuser.js' && user?.banned)
                        return
                }
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) { // Real Owner
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) { // Number Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) { // Moderator
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) { // Premium
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) { // Group Only
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) { // User Admin
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) { // Private Chat Only
                    fail('private', m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                    fail('unreg', m, this)
                    continue
                }
                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                if (xp > 200)
                    m.reply('chirrido -_-') // Hehehe
                else
                    m.exp += xp
                if (!isPrems && plugin.diamond && global.db.data.users[m.sender].diamond < plugin.diamond * 1) {
                    this.sendButton(m.chat, `✳️ Seus diamantes acabo  \n Seu pobre  \n*${usedPrefix}buy* <quanti> \n*${usedPrefix}buyall*`, igfg, null, [['Buy', `${usedPrefix}buy`], ['Buy All', `${usedPrefix}buyall`]], m)
                    continue // Limit habis
                }
                if (plugin.level > _user.level) {
                    this.reply(m.chat, `✳️ precisa de level ${plugin.level} para usar este comando. \nTu nivel ${_user.level}`, m)
                    continue // If the level has not been reached
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.diamond = m.diamond || plugin.diamond || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        m.reply(text)
                    }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.diamond)
                        m.reply(`Utilizaste *${+m.diamond}* 💎`)
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
        }
        //console.log(global.db.data.users[m.sender])
        let user, stats = global.db.data.stats
        if (m) {
            if (m.sender && (user = global.db.data.users[m.sender])) {
                user.exp += m.exp
                user.diamond -= m.diamond * 1
            }

            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }

        try {
            if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (opts['autoread'])
            await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => { })
    }
}

/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
    if (opts['self'])
        return
    // if (id in conn.chats) return // First login will spam
    if (this.isInit)
        return
    if (global.db.data == null)
        await loadDatabase()
    let chat = global.db.data.chats[id] || {}
    let text = ''
    switch (action) {
        case 'add':
            case 'remove':
                if (chat.welcome) {
                    let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                    for (let user of participants) {
                        let pp = './src/avatar_contact.png'
                        try {
                            pp = await this.profilePictureUrl(user, 'image')
                        } catch (e) {
                        } finally {
                            let _text = action === 'add' ? 'BEM VINDO': 'BYE BYE'
                            let _participants = groupMetadata.participants
                
                            let users = _participants.map(u => u.id).filter(v => v !== this.user.jid);
                            let numOfMembers = users.length;
                
                            Canvas.loadImage('./wel.png').then(async(i) => {
                                const myCanvas = Canvas.createCanvas(i.width, i.height);
                                const ctx = myCanvas.getContext('2d');
                          
                                const bg = await Canvas.loadImage('./wel.png')
                          
                                ctx.drawImage(bg, 0, 0, i.width, i.height)
                            
                                ctx.font = 'bold 16px Arial'
                                ctx.fillStyle = 'rgba(255, 0, 128, 1)';
                                ctx.fillText(`${await this.getName(user)}`, 240, 124) // nome
                          
                                ctx.font = 'bold 15px Arial'
                                ctx.fillStyle = 'rgba(255, 0, 128, 1)';
                                ctx.fillText(`você é o membro numero ${numOfMembers}`, 240, 179) // member number
                          
                                ctx.font = 'bold 30px Arial'
                                ctx.fillStyle = 'rgba(255, 0, 128, 1)';
                                ctx.fillText(`${_text}`, 300, 40) // BEM VINDO E BYE BYE NO TOPO
                          
                                ctx.font = 'bold 23px Arial'
                                ctx.fillStyle = 'rgba(255, 0, 128, 1)';
                                ctx.fillText(`${await this.getName(id)}`, 245, 262) // NOME DO GRUPO
                          
                                ctx.save()
                                const Avatar = await Canvas.loadImage(pp)
                                const avatarWidth = 138;
                                const avatarHeight = 138;
                                const centerX = 134
                                const centerY = 150;
                                
                                const x = centerX - avatarWidth / 2;
                                const y = centerY - avatarHeight / 2;
                          
                                const radius = avatarWidth / 2;
                          
                                ctx.arc(134, 150, radius, 0, 2 * Math.PI);
                                ctx.clip()
                                
                                ctx.drawImage(Avatar, x , y, avatarWidth, avatarHeight);
                
                                let buffer = myCanvas.toBuffer();
                                this.sendFile(id, buffer, 'welcome.jpg', '', null, false, { mentions: [user] });
                              });
                
                        }
                    }
                }
                break
                
            case 'promote':
            case 'promover':
                text = (chat.sPromote || this.spromote || conn.spromote || '@user Agora é administrador')
            case 'demote':
            case 'rebaixar':
                if (!text)
                    text = (chat.sDemote || this.sdemote || conn.sdemote || '@user Ele não é mais administrador')
                text = text.replace('@user', '@' + participants[0].split('@')[0])
                if (chat.detect)
                    this.sendMessage(id, { text, mentions: this.parseMention(text) })
                break
        }
        }
        
        /**
        * Handle groups update
        * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
        */
        export async function groupsUpdate(groupsUpdate) {
        if (opts['self'])
            return
        for (const groupUpdate of groupsUpdate) {
            const id = groupUpdate.id
            if (!id) continue
            let chats = global.db.data.chats[id], text = ''
            if (!chats?.detect) continue
            if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
            if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
            if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
            if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
            if (!text) continue
            await this.sendMessage(id, { text, mentions: this.parseMention(text) })
        }
        }
        
        export async function deleteUpdate(message) {
        try {
            const { fromMe, id, participant } = message
            if (fromMe)
                return
            let msg = this.serializeM(this.loadMessage(id))
            if (!msg)
                return
            let chat = global.db.data.chats[msg.chat] || {}
            if (chat.delete)
                return
            await this.reply(msg.chat, `
        ≡ Ele excluiu uma mensagem  
        ┌─⊷  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀 
        ▢ *Nome :* @${participant.split`@`[0]} 
        └─────────────
        
        
        `.trim(), msg, {
                mentions: [participant]
            })
            this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
        } catch (e) {
            console.error(e)
        }
        }
        
        global.dfail = (type, m, conn) => {
        let msg = {
            rowner: '✳️ Este comando só pode ser usado pelo *Criador do Bot*',
            owner: '✳️ Este comando só pode ser usado pelo *proprietário do bot*',
            mods: '✳️  Esta função é apenas para *para moderadores do bot*',
            premium: '✳️Este comando é apenas para membros *VIP* Quer vip ? \n\n*Inscreva-se https://www.youtube.com/c/NaoModz',
            group: '✳️ Este comando só pode ser usado em grupos!',
            private: '✳️ Este comando só pode ser usado no bate -papo privado **',
            admin: '✳️ Este comando é apenas para * admins * do grupo',
            botAdmin: '✳️ Para usar este comando, devo ser *administrador! *',
            unreg: 'Registre -se para usar esta função escrevendo:\n\n*/reg nome.idade*\n\n📌Exemplo : */reg YUU.16*',
            restrict: '¡Esse recurso esta *Desativado*'
        }[type]
        if (msg) return conn.sendButton(m.chat, msg, igfg, null, [['😭 ME AJUDA SOU POBRE', 'khajs'], ['⦙☰ Menu', '/menu'] ], m)
        }
        
        let file = global.__filename(import.meta.url, true)
        watchFile(file, async () => {
        unwatchFile(file)
        console.log(chalk.redBright("Update 'handler.js'"))
        if (global.reloadHandler) console.log(await global.reloadHandler())
        })
        
