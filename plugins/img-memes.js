/*
     ig : https://www.instagram.com/fg98._/
*/

import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    const response = await axios.get('https://meme-api.com/gimme/HUEstation');
    const { postlink, title, subreddit, url, nsfw, spoiler } = response.data	

    conn.sendFile(m.chat, `${url}`, 'meme.jpg', `${title}`, '', '', m)
    m.react('😆') 
}
handler.help = ['meme']
handler.tags = ['img']
handler.command = ['meme', 'memes'] 
handler.limit = true

export default handler
