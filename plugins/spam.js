let handler = async (m, { conn, usedPrefix: _p, text }) => {
	if (!text) throw `masukan teks dan jumlah\nContoh : ${_p}spam halo|10`
	try {
		let [ a, b ] = text.split`|`
		if (!a) a = ''
		if (!b) b = ''
		for (let i = 0; i < b; i++) {
			conn.reply(m.chat, a, null)
		}
	} catch(e) {
		m.reply('Error')
	}
}
handler.help = ['spam <teks>|<jumlah>']
handler.tags = ['owner']
handler.command = /^(spam)$/i
handler.owner = true

module.exports = handler