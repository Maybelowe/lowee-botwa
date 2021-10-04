let handler = async (m, { conn, text, usedPrefix, command }) => {
    let fail = `perintah ini buat ngasih xp ke pengguna lain\n\ncontoh:\n${usedPrefix + command} @6285157336614 1000\natau balas pesan doi dengan perintah: ${usedPrefix + command} 1000`
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
    let expnya = parseInt(txt)
    if (expnya < 100) throw 'minimal 100'
    if (expnya > 100000000) throw 'maksimal 100jt'
    let users = global.db.data.users
    users[who].exp += expnya

    m.reply(`Berhasil gift ${expnya} XP kepada ${conn.getName(who)}`)
    conn.fakeReply(m.chat, `+${expnya} XP`, m.sender, m.text)
}
handler.help = ['giftxp @user <jumlah>']
handler.tags = ['owner']
handler.command = /^giftxp?$/

module.exports = handler

handler.owner = true