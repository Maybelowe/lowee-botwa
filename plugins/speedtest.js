let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn, isOwner, command }) => {
  if (global.conn.user.jid != conn.user.jid) return
  m.reply('Testing...')
  let teks = 'speedtest --simple --share'
  let o
  try {
    o = await exec(command.trimStart()  + ' ' + teks.trimEnd())
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim()) m.reply(stdout)
    if (stderr.trim()) m.reply(stderr)
  }
}
handler.help = ['speedtest']
handler.tags = ['info']
handler.command = /^speed(test)?$/i
module.exports = handler
