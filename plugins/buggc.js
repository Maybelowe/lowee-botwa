let handler = async (m, { conn, usedPrefix: _p, text }) => {
	if (!text) throw `masukan teks dan jumlah\nContoh : ${_p}spam halo|10`
	try {
		let [ a, b ] = text.split`|`
		if (!a) a = ''
		if (!b) b = ''
		for(let i=0;i < b[0];i++){
			await conn.relayWAMessage(conn.prepareMessageFromContent(targetnye, conn.prepareDisappearingMessageSettingContent(0),{}),{waitForAck:true})
		}
		conn.sendMessage(targetnye, a, 'conversation')
	} catch(e) {
		m.reply('Error')
	}
}
handler.help = ['buggc <teks>|<jumlah>']
handler.tags = ['owner']
handler.command = /^(buggc)$/i
handler.owner = true

module.exports = handler