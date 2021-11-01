let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
	if (!text) throw `Kodenya mana?`
	m.reply('Tunggu....')
	const res = await fetch(`https://bryanrfly-api.herokuapp.com/api/nhentai?code=${text}`)
	const json = await res.json()
	teks = `*Nhentai code found!*\n\n*Title :* ${json.result.title}\n\n${json.result.details}`
	try {
           m.reply(teks)
	   conn.sendMessage(m.chat, await (await fetch()).buffer(), MessageType.document, { quoted: m })
	} catch(e) {
	   m.reply('Nhentai code Not Found')
           throw e
	}
}
handler.help = ['nhentai <code>']
handler.tags = ['download']
handler.command = /^nhentai/i

module.exports = handler

/* Belum Tuntas */
