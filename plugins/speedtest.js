let { exec } = require('child_process');
let handler = async (m, { conn }) => {
  m.reply('Testing...')
  teks = 'speedtest --simple --share'
  exec(teks, (err, stdout) => {	
  	if (err) return m.reply(err.toString())
  	if (stdout) return m.reply(stdout)
  })
}
handler.help = ['speedtest']
handler.tags = ['info']
handler.command = /^speed(test)?$/i
module.exports = handler
