let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
const canvacord = require('canvacord')
const fs = require('fs')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let bekgron = './src/bgCanva.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
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
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role, banned } = global.db.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let str = `
Nama: ${username} ${registered ? '(' + name + ') ' : ''}(@${who.replace(/@.+/, '')})${about != 401 ? '\nInfo: ' + about : ''}
Nomor: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
Link: https://wa.me/${who.split`@`[0]}${registered ? '\nUmur: ' + age : ''}
XP: TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]
Level: ${level}
Role: *${role}*
Limit: ${limit}
Premium: ${prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? 'Ya' : 'Tidak'}
Terdaftar: ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Tidak'}${lastclaim > 0 ? '\nTerakhir Klaim: ' + new Date(lastclaim).toLocaleString() : ''}
`.trim()
    let mentionedJid = [who]
    //conn.sendFile(m.chat, pp, 'pp.jpg', banned ? 'jiakh ke banned' : str, m, false, { contextInfo: { mentionedJid } })
    
    let whe = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let discriminator = who.substring(9, 13)
    let user = global.db.data.users[whe]
    let users = Object.entries(global.db.data.users).map(([key, value]) => {
                return { ...value, jid: key }
        })
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
    let usersLevel = sortedLevel.map(enumGetKey)
    let rank = await new canvacord.Rank()
                      .setRank(usersLevel.indexOf(whe) + 1)
                      .setAvatar(pp)
                      .setLevel(user.level)
                      .setCurrentXP(user.exp - min)
                      .setRequiredXP(xp)
                      .setProgressBar("#ffffff", "COLOR")
                      .setBackground('IMAGE', bekgron)
                      .setUsername(conn.getName(whe))
                      .setDiscriminator(discriminator);
                 rank.build()
                      .then(async (data) => {
                      	canvacord.write(data, './src/ampas.png')
                      	await conn.sendButtonImg(m.chat, './src/ampas.png', str.trim(), credit, 'Daily', '.daily')
                      	fs.unlinkSync('./src/ampas.png')
                      	//await conn.sendButtonImg(m.chat, data, str.trim(), credit, 'Daily', ',daily')
                      })
                      
function enumGetKey(a) {
        return a.jid
}

function sort(property, ascending = true) {
        if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
        else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
        if (property) return (a, i, b) => {
                return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
        }
        else return a => a === undefined ? _default : a
}

  }
}
handler.help = ['profile [@user]','profile']
handler.tags = ['tools','main']
handler.command = /^(my)|profile$/i
module.exports = handler
