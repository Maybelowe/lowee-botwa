let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/yqyjPX/`
	if (!args[0].match(/tiktok/gi)) throw `url salah`
	
	let res = await fetch(API('dapuhy', '/api/socialmedia/tiktokder', { url: args[0] }, 'apikey'))
	if (!res.ok) throw eror
	let json = await res.json()

	v = json.user
	y = json.result
	teksny = `Username : ${v.username}\nNickname : ${v.user_nickname}\nDesc : ${y.desc}\nViews : ${y.views}`
	await conn.send2ButtonLoc(m.chat, await (await fetch(v.pp)).buffer(), teksny.trim(), credit, 'Audio', `.ttm ${args[0]}`, 'Video', `.ttv ${args[0]}`)
}
handler.help = ['tiktokb'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktokb)$/i

handler.exp = 0