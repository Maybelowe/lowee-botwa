let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
   if (!text) text = '20'
   conn.sendMessage(m.chat, "\n".repeat(text), MessageType.text)
}
handler.command = /^unamedd$/i
module.exports = handler
