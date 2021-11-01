let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
	if (!text) throw `Anime apa um?`
	m.reply('Tunggu....')
	const res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${text}`)
	const damta = await res.json()
	const { title, synopsis, episodes, url, rated, score, image_url } = damta.results[0]
	teks = `*Anime found!*\n\n*Title:* ${title}\n*Episodes:* ${episodes}\n*Rating:* ${rated}\n*Score:* ${score}\n*Synopsis:* ${synopsis}\n*URL*: ${url}`
	try {
		conn.sendMessage(m.chat, await (await fetch(image_url)).buffer(), MessageType.image, {quoted: m, caption: teks, thumbnail: await (await fetch(image_url)).buffer()})
	} catch(e) {
		m.reply('Anime Not Found')
	}
}
handler.help = ['anime <pencarian>']
handler.tags = ['internet']
handler.command = /^anime/i

module.exports = handler
