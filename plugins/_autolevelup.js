import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].msg += 1;
  if (!user.autolevelup) return !0;

  let before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) {
    user.level++;
    user.healt += Math.floor(Math.random() * (user.level * 20)); // Adiciona vida baseado no nível do usuário
    user.dano += Math.floor(Math.random() * (user.level * 7)); // Adiciona dano baseado no nível do usuário
    user.defesa += Math.floor(Math.random() * (user.level * 5)); // Adiciona defesa baseado no nível do usuário
  }
  user.role = global.rpg.role(user.level).name;
  if (before !== user.level) {
    m.reply(`
    🎉 PARABÉNS! VOCÊ SUBIU DE NÍVEL! 🎉\n
    • • • • • • • • • • • • • \n
    Nível atual: ${user.level}
    → Cargo: ${user.role}
    → Vida: ${user.healt}
    → Dano: ${user.dano}
    → Defesa: ${user.defesa}
    → Clã: ${user.clan}
    → Elemento: ${user.element}\n
    • • • • • • • • • • • • • \n
    Parabéns por subir de nível! Você agora é um ${user.role} com mais força e defesa!
     Continue lutando para se tornar ainda mais poderoso!
   `.trim());
  }
}
