import { getPokemon } from '../lib/pokemon.js'

let interval = 3 * 60 * 1000 // 3 minutes in milliseconds

while (true) {
  let pokemon = await getPokemon()
  console.log(`Um pokemon selvagem apareceu! Nome: ${pokemon.name}. Vida: ${pokemon.health}. Dano: ${pokemon.damage}. Nível: ${pokemon.level}. Habilidades: ${pokemon.abilities}.`)

  await new Promise(resolve => setTimeout(resolve, interval))
}