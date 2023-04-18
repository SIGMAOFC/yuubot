let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'abrir': 'not_announcement',
        'fechar': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*✳️ Escolha uma opção:*
  *▢ ${usedPrefix + command} fechar*
  *▢ ${usedPrefix + command} abrir*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *abrir/fechar*']
handler.tags = ['group']
handler.command = ['group', 'grupo'] 

handler.admin = true
handler.botAdmin = true

export default handler
