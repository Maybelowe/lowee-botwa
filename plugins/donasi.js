let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • E-Wallet 〕
├ Dana : 08885960825
├ Gopay : 08885960825
└────
┌〔 Donasi • Pulsa 〕
├ Smartfren : 08885960825
├ Telkomsel : 081326635396
└────
`.trim(), '© *BOT-WA*', 'OWNER', '.owner', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
