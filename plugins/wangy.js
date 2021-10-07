let handler = async (m, { text }) => {
	wangynya = `${text} ${text} ${text} ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${text} wangi aku mau nyiumin aroma wanginya ${text} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${text} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${text} AAAAA LUCCUUUUUUUUUUUUUUU............ ${text} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${text} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${text} gw ... ${text} di laptop ngeliatin gw, ${text} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${text} aku gak mau merelakan ${text} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${text} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
	m.reply(wangynya)
}

handler.help = ['wangy <text>']
handler.tags = ['fun']
handler.command = /^wangy/i
module.exports = handler