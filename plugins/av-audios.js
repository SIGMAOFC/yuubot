
let handler = m => m
handler.all = async function (m) {

    if (/^bom dia$/i.test(m.text) ) {
      let av = 'https://protettordelinks.com/wp-content/audiosparazap/bom_dia_o_kralho_audiosparazap.com.mp3'
      this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
     }

  if (/^brfdddffdda$/i.test(m.text) ) {
     let av = 'https://protettordelinks.com/wp-content/audiosparazap/nordestino_levou_chifre_e_mandou_recado_no_zap_audiosparazap.com.mp3'
     this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^buenas noches$/i.test(m.text) ) {
    let av = 'https://e.top4top.io/m_2437afchn1.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
  
return !0
 }
 
export default handler
