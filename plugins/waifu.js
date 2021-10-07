let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendButtonImg(m.chat, json.url, 'Istri Kartun', 'Tekan tombol dibawah untuk melanjutkan', 'Next', ',waifu')
  //conn.sendButtonImg(m.chat, json.url, 'Istri Kartun', 'Tekan tombol dibawah untuk melanjutkan', 'Lanjut', ',waifu')
}
handler.help = ['waifu']
handler.tags = ['internet']
handler.command = /^(waifu)$/i

module.exports = handler
