let limit = 30
const canvacord = require("canvacord");
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `contoh:\n${usedPrefix + command} https://www.youtube.com/watch?v=yxDdj_G9uRY`
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
  
  
  let mentionedJid = [m.sender]
  const card = await new canvacord.Spotify()
    .setAuthor('Akmalz')
    .setAlbum('Undefined')
    .setStartTimestamp('00:41')
    .setEndTimestamp('14:02:32')
    .setImage(thumb)
    .setTitle(title);

card.build()
    .then(async (buffer) => {
        conn.sendFile(m.chat, buffer, title + '.png', ``.trim(), m, false, { contextInfo: { mentionedJid } })
    });
  
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  m.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : global.wait)
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `
*Judul:* ${title}
*Ukuran File:* ${filesizeF}
`.trim(), m, null, {
    asDocument: chat.useDocument
  })
  //if (!isLimit) conn.sendMessage(m.chat, fetch(dl_link), MessageType.document, {quoted: m, mimetype: 'audio/mp4', filename: title})
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

