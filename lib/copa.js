import cheerio from 'cheerio';
import axios from 'axios';
import fs from 'fs';

export default function SexoMods2() {
  return new Promise((resolve, reject) => {
  axios({url: 'https://ge.globo.com/agenda/#/todos', headers: { "user-agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.136 Mobile Safari/537.36"}})
  .then((res) => {
    const $ = cheerio.load(res.data);
    const dados = [];
    $('script').each((i, e) => {
      const texto = $(e).text()
      if(texto.includes('window.dataSportsSchedule = ')) {
        let txt_copa = texto.split('\n').find(a => a.includes('window.dataSportsSchedule = '))
        txt_copa = txt_copa.slice(txt_copa.indexOf('{') - 1).replace(/;/g, '')
        let json1 = []
        let json2 = []
        Object.entries(eval(`const ___ = ${txt_copa}\n___`).CHAMPIONSHIPS).map(a => a[1]).map(a => a.championshipsAgenda).forEach(sex => json1.push(...sex))
        json1.forEach(a => {
          if(a.championship?.name && /Copa|Fifa/gi.test(a.championship.name)) json2.push(...a.past, ...a.now, ...a.future)
        })
        const resultado = json2.sort((a, b) => Date.parse(`${a.startDate} ${a.startHour}`) - Date.parse(`${b.startDate} ${b.startHour}`)).reverse().map((a) => a.match).map(function (a){return {"time_1": {"nome": a.homeTeam.popularName, "imagem": a.homeTeam.badge_svg, "gols": String(a.scoreboard.home || 0), "penaltis": String(a.scoreboard.penalty?.home || 0)}, "time_2": {"nome": a.awayTeam.popularName, "imagem": a.awayTeam.badge_svg, "gols": String(a.scoreboard.away || 0), "penaltis": String(a.scoreboard.penalty?.away || 0)}, fase: (a.phase?.name || ''), status: (a.transmission?.period?.label || 'Pendente'), data: Date.parse(`${a.startDate} ${a.startHour}`)};})
        resolve({status: res.status, criador: '+55 94 9147-2796', resultado: resultado, resultado2: {proximos: resultado.filter(a => a.status === 'Pendente'), aovivo: resultado.filter(a => a.status !== 'Pendente' && !/encerrado/gi.test(a.status)), encerrado: resultado.filter(a => /encerrado/gi.test(a.status)) }})
      }
    })
  })
  .catch((e) => {
    reject(e)
  })
})
}