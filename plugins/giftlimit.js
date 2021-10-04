let handler = async (m, { conn, text, usedPrefix, command }) => {
    let fail = `perintah ini buat ngasih xp ke pengguna lain\n\ncontoh:\n${usedPrefix + command} @6285157336614 10\natau balas pesan doi dengan perintah: ${usedPrefix + command} 10`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.chat
    if (!who) {
        conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: [owner[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'] } })
        throw false
    }
    if (typeof global.db.data.users[who] == "undefined") {
        global.db.data.users[who] = {
            exp: 0,
            limit: 10,
            lastclaim: 0,
            registered: false,
            name: conn.getName(m.sender),
            age: -1,
            regTime: -1,
            afk: -1,
            afkReason: '',
            banned: false,
            level: 0,
            call: 0,
            role: 'Warrior V',
            autolevelup: false,
            pc: 0,
        }
    }
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) {
        conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: [owner[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'] } })
        throw false
    }
    if (isNaN(txt)) throw 'Hanya angka'
    let limitnya = parseInt(txt)
    if (limitnya < 1) throw 'minimal 1'
    if (limitnya > 100000) throw 'maksimal 100k'
    let users = global.db.data.users
    users[who].limit += limitnya

    m.reply(`Berhasil gift ${limitnya} limit kepada ${conn.getName(who)}`)
    conn.fakeReply(m.chat, `+${limitnya} Limit`, m.sender, m.text)
}
handler.help = ['giftlimit @user <jumlah>']
handler.tags = ['owner']
handler.command = /^giftlimit?$/

module.exports = handler

handler.owner = true