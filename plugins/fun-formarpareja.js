let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, forma um belo casal 💍 com ${toM(b)}, sejam felizes para sempre 💓*`, null, {
mentions: [a, b]
})}

handler.help = ['casal']
handler.tags = ['main', 'fun']
handler.command = ['casal','formarparejas']
handler.group = true
export default handler
