let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
	if (!text) throw `Manga apa um?`
	m.reply('Tunggu....')
	const res = await fetch(`https://api.jikan.moe/v3/search/manga?q=${data.body}`)
	const damta = await res.json()
	const { title, synopsis, chapters, url, rated, score, image_url } = damta.results[0]
	teks = `*Manga found!*\n\n*Title:* ${title}\n*Chapters:* ${chapters}\n*Rating:* ${rated}\n*Score:* ${score}\n*Synopsis:* ${synopsis}\n*URL*: ${url}`
	try {
		conn.sendFile(m.chat, image_url, teks, m, 0, { thumbnail: await (await fetch(image_url)).buffer() })
	} catch(e) {
		m.reply('Manga Not Found')
	}
}
handler.help = ['manga <pencarian>']
handler.tags = ['internet']
handler.command = /^manga/i

module.exports = handler