import fetch from 'node-fetch';

export async function before(m, { conn }) {
  // Check if the message is from the bot or is not in a group
  if (m.isBaileys && m.fromMe || !m.isGroup) {
    return true;
  }

  // Check if the user has opted in to using the chatbot
  let user = global.db.data.users[m.sender];
  if (!user.chatbot) {
    return true;
  }

  // Check if the message contains any of the following symbols: #, @, $, %, ^, &, *, ~, `, +, =, |, \, /, <, >, [, ], {, }, :, ;, ,, ., ?, !
  let symbolRegex = /[#$%@^&*~`+=|\\\/<>\[\]{}:;,.\!]/;
  if (symbolRegex.test(m.text)) {
    return true;
  }

  // Send the message to the chatbot API and return the response
  let api = await fetch(`https://api.simsimi.net/v2/?text=${m.text}&lc=pt`);
  let res = await api.json();
  let botResponse = res.success.replace('robo', 'yuubot').replace('bot', 'yuubot').replace('sim simi', 'yuu');

  // Check if the bot response contains 'please enter the text - text='
  if (botResponse.toLowerCase().includes('please enter the text - text=')) {
    return true;
  }

  // Check if the bot response contains 'Eu não resposta. Por favor me ensine.'
  if (botResponse.toLowerCase().includes('Eu não resposta. Por favor me ensine.')) {
    return true;
  }

  m.reply(botResponse);
}
