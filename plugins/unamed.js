let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, args }) => {
   conn.sendMessage(m.chat, "\n".repeat(args[0]) + '', MessageType.text)
}
handler.command = /^unamedd$/i
