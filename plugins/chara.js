let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
	if (!text) throw `Chara apa um?`
	m.reply('Tunggu....')
	const res = await fetch(`https://api.jikan.moe/v3/search/character?q=${text}`)
	const damta = await res.json()
	const { name, alternative_names, url, image_url } = damta.results[0]
	teks = `*Character found!*\n\n*Name:* ${name}\n*Alternative names:* ${alternative_names}\n*URL*: ${url}`
	try {
		conn.sendMessage(m.chat, await (await fetch(image_url)).buffer(), MessageType.image, { quoted: m, caption: teks })
	} catch(e) {
		m.reply('Chara Not Found')
	}
}
handler.help = ['chara <pencarian>']
handler.tags = ['internet']
handler.command = /^chara/i

module.exports = handler
