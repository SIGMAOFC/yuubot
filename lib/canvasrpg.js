import { createCanvas, loadImage } from 'canvas'

const generateRPGCharacter = async (characterName, level, health, weapon, armor) => {
    // Crie o canvas
    const canvas = createCanvas(300, 300)
    const ctx = canvas.getContext('2d')

    // Carregue a imagem de fundo
    const backgroundImage = await loadImage('./background.jpg')
    ctx.drawImage(backgroundImage, 0, 0, 300, 300)

    // Escreva as informações do personagem no canvas
    ctx.font = '20px Arial'
    ctx.fillText(`Nome: ${characterName}`, 20, 50)
    ctx.fillText(`Level: ${level}`, 20, 80)
    ctx.fillText(`Vida: ${health}`, 20, 110)
    ctx.fillText(`Arma: ${weapon}`, 20, 140)
    ctx.fillText(`Armadura: ${armor}`, 20, 170)

    // Retorne a imagem gerada como um objeto de buffer
    return canvas.toBuffer()
}