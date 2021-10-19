let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? 'bot tidak aktif' : banned ? 'kamu dibanned' : 'bot disini',
                credit,
                isBanned ? 'Unban' : banned ? 'Pemilik Bot' : 'Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.?',
                m.isGroup ? 'Ban' : isBanned ? 'Unban' : 'Donasi',
                m.isGroup ? '.ban' : isBanned ? '.unban' : '.donasi', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `┌〔 Undang Bot ke Grup 〕\n├ Free, syarat member 100+\n├ 30 Hari / Rp 5,000\n├ 30 Hari + Premium / Rp 7,000\n└────\n\n` + igUrl.trim(), credit, 'Pemilik Bot', ',owner', m)
    }

	//Tag Owner
	let own = /(@628885960825|@6281326635396)/i
	let isTagOwner = own.exec(m.text)
	if (isTagOwner && !m.fromMe) {
		m.reply('Ya? Ada apa tag ownerku?')
	}
	
    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }

    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status/info/bio whatsapp
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1//Hack Runtime pakai [ process.uptime * jumlah ], contoh [ process.uptime * 10 ]
        let uptime = formater(_uptime)
        await this.setStatus(`Aktif selama ${uptime} | Mode: ${global.opts['self'] ? 'Private' : setting.groupOnly ? 'Group Only' : 'Public'}`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

/*
function clockString(ms) {
	let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [d, h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
*/
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

const formater = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? "d, " : "d, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? "h, " : "h, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? "m, " : "m, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
