
import fetch from 'node-fetch'

 export async function all(m, { conn, groupMetadata }) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => fglog)
	
	//reply link wa
    global.rpl = { contextInfo: { externalAdReply: { title: packname, body: 'grupo do suporte' , sourceUrl: dygp, thumbnail: await(await fetch(fglog)).buffer() }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: fgyt, mediaType: 'VIDEO', description: 'se inscreva : ' + fgyt, title: 'NAOMODZ YOUTUBE', body: 'abc', thumbnailUrl: pp, sourceUrl: fgyt }}}

} 
