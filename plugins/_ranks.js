global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      role: '🏅',
      level: '⬆️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  },
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    const role = [
      { name: 'Estudante', level: 0 },
      { name: 'Espadachim', level: 5 },
      { name: 'Lutador', level: 10 },
      { name: 'Mestre em Treinamento', level: 15 },
      { name: 'Mestre de Espada', level: 20 },
      { name: 'Campeão de Torneios', level: 25 },
      { name: 'Herói da Batalha', level: 30 },
      { name: 'Senhor da Espada', level: 35 },
      { name: 'Rei da Batalha', level: 40 },
      { name: 'Deus da Guerra', level: 45 },
      { name: 'Mestre Supremo', level: 50 },
      { name: 'Guardião da Paz', level: 55 },
      { name: 'Protetor da Justiça', level: 60 },
      { name: 'Defensor da Liberdade', level: 65 },
      { name: 'Lendário Guerreiro', level: 70 },
      { name: 'Espadachim Celestial', level: 75 },
      { name: 'Mestre da Eternidade', level: 80 },
      { name: 'Espadachim do Destino', level: 85 },
      { name: 'Mestre da Realidade', level: 90 },
      { name: 'Espadachim da Alma', level: 95 },
      { name: 'Mestre do Cosmos', level: 100 }
    ]
    return role.reverse().find(role => level >= role.level)
  }
}
