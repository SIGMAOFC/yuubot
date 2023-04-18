import fs from 'fs'

let handler = async (m, { conn, text, participants }) => {
    let members = JSON.parse(fs.readFileSync('database/testnumeros.json', 'utf8')).members;
    let _participants = participants.map(user => user.id)

    const wait = (time) => new Promise(resolve => setTimeout(resolve, time))

    let count = 0
    while (count < 3) {
        let index = Math.floor(Math.random() * members.length)
        let member = members[index]
        if (!_participants.includes(member)) {
            try {
                let users = [member];
                const response = await conn.query({
                    tag: 'iq',
                    attrs: {
                        type: 'set',
                        xmlns: 'w:g2',
                        to: m.chat,
                    },
                    content: users.map(jid => ({
                        tag: 'add',
                        attrs: {},
                        content: [{ tag: 'participant', attrs: { jid } }]
                    }))
                });

                const pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
                const jpegThumbnail = pp ? await (await fetch(pp)).arrayBuffer() : Buffer.alloc(0)
                const add = getBinaryNodeChild(response, 'add')
                const participant = getBinaryNodeChildren(add, 'participant')

                for (const user of participant.filter(item => item.attrs.error == 403)) {
                    const jid = user.attrs.jid
                    const content = getBinaryNodeChild(user, 'add_request')
                    const invite_code = content.attrs.code
                    const invite_code_exp = content.attrs.expiration
                    let teks = `✳️ Al usuario @${jid.split('@')[0]} solo lo pueden agregar sus contactos :'v pero le envié un enlace de invitación`
                    m.reply(teks, null, {
                        mentions: conn.parseMention(teks)
                    })
                    await conn.sendGroupV4Invite(m.chat, jid, invite_code, invite_code_exp, await conn.getName(m.chat), 'Invitación para unirse a mi grupo de WhatsApp ', jpegThumbnail)
                }
            } catch (error) {
                console.error(error)
                await wait(5000)
                continue
            }
            break
        }
        count++
        await wait(5000)
    }
}

handler.command = ['pegar']
export default handler

