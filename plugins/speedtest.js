let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn, isOwner, command, text }) => {
  if (global.conn.user.jid != conn.user.jid) return
  m.reply('Testing...')
  teks = 'speedtest-cli --simple --share'
  let o
  try {
    o = await exec(command.trimStart()  + ' ' + teks.trimEnd())
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim()) m.reply(stdout + '\n\n© Akmalz')
    if (stderr.trim()) m.reply(stderr + '\n\n© Akmalz')
  }
}
handler.help = ['speedtest']
handler.tags = ['info']
handler.command = /^speed(test)?$/i
module.exports = handler
