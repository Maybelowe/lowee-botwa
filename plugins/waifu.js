let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  let json = await res.json()
  try {
     conn.sendButtonImg(m.chat, json.url, 'Istri Kartun', 'Tekan tombol dibawah untuk melanjutkan', 'Next', ',waifu')
     //conn.sendButtonImg(m.chat, json.url, 'Istri Kartun', 'Tekan tombol dibawah untuk melanjutkan', 'Lanjut', ',waifu')
  } catch(e) {
     throw e
  }
}
handler.help = ['waifu']
handler.tags = ['internet']
handler.command = /^waifu/i

module.exports = handler
