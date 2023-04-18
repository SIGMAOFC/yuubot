import fs from 'fs';
let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid);
    let numOfMembers = users.length;

    let jsonData = {
        groupName: groupMetadata.subject,
        members: users
    };
    
    let jsonString = JSON.stringify(jsonData);
    
    fs.mkdirSync('./database', { recursive: true });
    
    fs.writeFile(`./database/${numOfMembers}_${groupMetadata.subject}.json`, jsonString, (err) => {
        if (err) throw err;
        console.log(`Arquivo ${numOfMembers}_${groupMetadata.subject}.json foi salvo na pasta "./database"!`);
        console.log(`Dados do grupo ${groupMetadata.subject} foram salvos no meu banco de dados!`);
        m.reply(`✅ Dados dos participantes do grupo ${groupMetadata.subject} foram salvos em ./database/${numOfMembers}_${groupMetadata.subject}.json`);
    });
}
    
handler.help = ['Salvar participantes']
handler.tags = ['grupo']
handler.command = ['save']

export default handler