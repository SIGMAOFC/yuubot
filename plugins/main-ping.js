import os from 'os';
import { performance } from 'perf_hooks';
import { createCanvas, Image, loadImage } from 'canvas';



let handler = async (m, { conn }) => {
  let timestamp = performance.now();
  let latensi = performance.now() - timestamp;
  const canvas = createCanvas(600, 500);
  const ctx = canvas.getContext('2d');

  // Define as informações do sistema operacional
  let osType = os.type();
  let arch = os.arch();
  let cpu = os.cpus()[0].model;
  let freeMem = os.freemem() / 1024 / 1024;

  // Define a imagem de fundo
  let background = await loadImage('https://images.wallpapersden.com/image/download/demon-slayer-shinobu-minimalist_bGtoaG2UmZqaraWkpJRnamtlrWZlZ2k.jpg');
  ctx.drawImage(background, 0, 0, 600, 500);

  // Define as configurações da fonte
  ctx.font = '20px Roboto, sans-serif bold 700';

    ctx.fillStyle = 'white';

  // Desenha o título da imagem
  ctx.fillText('T E S T E   D E   V E L O C I D A D E', 20, 50);

  // Desenha as informações do sistema operacional
  ctx.font = '20px sans-serif';
  ctx.fillText(`Sistema Operacional: ${osType}`, 20, 80);
  ctx.fillText(`Arquitetura: ${arch}`, 20, 110);
  ctx.fillText(`Memória livre: ${freeMem.toFixed(2)}MB`, 20, 140);
  ctx.fillText(`Velocidade: ${latensi.toFixed(4)}ms`, 20, 170);
    // Desenha as informações do sistema operacional
   
    ctx.font = '10px sans-serif';
    ctx.fillStyle = 'white';
    ctx.fillText(`Processador: ${cpu}`, 20, 200);

  // Adiciona bordas na imagem
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 5;
  ctx.strokeRect(0, 0, 600, 500);



  // Envia a imagem para o chat
  
 await conn.sendFile(m.chat, canvas.toBuffer(), 'velocidade.png', '', m);
}
handler.help = ['speed']
handler.tags = ['main']
handler.command = /^(ping)$/i

export default handler
