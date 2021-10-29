let handler = async (m, { conn }) => {
    let id = m.chat
    let mCount = {}
    let totalM = 0
  try {
    await conn.loadAllMessages(id, m => {
        let user = m.key.fromMe ? conn.user.jid : m.participant ? m.participant : id.includes('g.us') ? '' : id
        if (!user) return
        if (user in mCount) mCount[user]++
        else mCount[user] = 1
        totalM++
    }, 1000)
    let sorted = Object.entries(mCount).sort((a, b) => b[1] - a[1])
    let pesan = sorted.map(v => `${conn.getName(v[0])}: ${v[1]} messages`).join('\n')
    m.reply(`${totalM} pesan terakhir\n${pesan}`, false, {})
  } catch (e) {
    throw '*ERROR LOG INFO*\n\n' + e
  }
}
handler.help = ['totalpesan']
handler.tags = ['group']
handler.command = /^totalpesan$/i

module.exports = handler
