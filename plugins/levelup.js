let levelling = require('../lib/levelling')
const canvacord = require('canvacord')

let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.sender
  let discriminator = who.substring(9, 13)
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {
  } finally {
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let users = Object.entries(global.db.data.users).map(([key, value]) => {
      return { ...value, jid: key }
    })
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
    let usersLevel = sortedLevel.map(enumGetKey)
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    if (!levelling.canLevelUp(level, exp, global.multiplier)) {
      let rank = await new canvacord.Rank()
        .setRank(usersLevel.indexOf(m.sender) + 1)
        .setAvatar(pp)
        .setLevel(level)
        .setCurrentXP(exp - min)
        .setRequiredXP(xp)
        .setProgressBar("#030500", "COLOR")
        .setUsername(conn.getName(who))
        .setDiscriminator(discriminator)
      rank.build()
        .then(async data => {
          await conn.sendButtonImg(m.chat, data, `Level *${level} (${exp - min}/${xp})*\nKurang *${max - exp}* lagi!`.trim(), '© stikerin', 'Auto Level Up', `${usedPrefix}on autolevelup`, m, { thumbnail: data, height: 282, width: 934 })
        })
    }
    let before = level * 1
    while (levelling.canLevelUp(level, exp, global.multiplier)) level++
    if (before !== level) {
      let rank = await new canvacord.Rank()
        .setRank(usersLevel.indexOf(m.sender) + 1)
        .setAvatar(pp)
        .setLevel(level)
        .setCurrentXP(exp - min)
        .setRequiredXP(xp)
        .setProgressBar("#030500", "COLOR")
        .setUsername(conn.getName(who))
        .setDiscriminator(discriminator)
      rank.build()
        .then(async data => {
          await conn.sendButtonImg(m.chat, data, `_*Level Up!*_\n_${before}_ -> _${level}_`.trim(), '© stikerin', 'Auto Level Up', `${usedPrefix}on autolevelup`, m, { thumbnail: data, height: 282, width: 934 })
        })
    }
  }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i

module.exports = handler

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

function enumGetKey(a) {
  return a.jid
}