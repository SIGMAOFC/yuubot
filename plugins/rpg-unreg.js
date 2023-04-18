//import db from '../lib/database.js'

import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) throw `✳️ *Digite o número de série*\n verifique seu número de série com o comando...\n\n*${usedPrefix}nserie*`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '⚠️ *Número de série incorreto*'
  user.registered = false
  m.reply(`✅Registro eliminado`)
}

handler.register = true

export default handler

