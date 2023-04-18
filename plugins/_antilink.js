const linkRegex = /(?:chat.whatsapp.com\/(?:invite\/)?)([0-9A-Za-z]{20,24})/i;

export async function before(m, {conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0;
    if (!m.isGroup) return !1;
    
    const isGroupLink = linkRegex.exec(m.text);
    if (!isAdmin && isGroupLink) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
            if (m.text.includes(linkThisGroup)) return !0;
            conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')

        }


          conn.sendMessage(m.chat, { delete: m.key });
        if (isBotAdmin) {
            conn.sendMessage(m.chat, { delete: m.key });

        }
        return !1;
    }
    return !0;
}
