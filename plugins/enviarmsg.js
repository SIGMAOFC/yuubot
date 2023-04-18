import fs from 'fs';

let handler = async (m, { conn, text }) => {
try {
console.log("Recebendo comando de envio de mensagem para grupo salvo");
let [command, fileName, message] = text.split(" ");
if (!fileName || !message) {
return m.reply("Formato inválido, use o formato: enviamsg nomeDoArquivo.json mensagem");
}
let filePath = `/database/${fileName}`
console.log(`Lendo arquivo ${filePath}`);
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
    console.error(`Erro ao ler o arquivo ${fileName}`);
    return m.reply(`Erro ao ler o arquivo ${fileName}`);
    }
let groupData = JSON.parse(data);
let members = groupData.members;
console.log(`Enviando mensagem para ${members.length} membros do grupo ${groupData.groupName}`);
for (let member of members) {
    conn.sendText(member, message);
    }
    console.log(`Mensagem enviada para ${members.length} membros do grupo ${groupData.groupName}`);
    m.reply(`Mensagem enviada para ${members.length} membros do grupo ${groupData.groupName}`);
});
} catch (err) {
console.error(`Erro ao executar comando de envio de mensagem para grupo salvo: ${err}`);
m.reply(`Erro ao executar comando, verifique o formato e tente novamente`);
}
}

handler.help = ['Enviar mensagem para membros do grupo salvo']
handler.tags = ['grupo']
handler.command = ['enviamsg']

export default handler
