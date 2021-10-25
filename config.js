let fs = require('fs')
let fetch = require('node-fetch')
global.ownerName = ['Akmalz','Akmalz - 2'] // Ketik nama kamu disini
global.botName = 'WA-BOT' // Isi nama bot kamu
global.owner = ['4365044631513','6281326635396'] // Letakan nomor kamu disini
global.mods = [] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.credit = '© Bot-WhatsApp'
global.APIs = { // API Prefix
  // nama: 'https://website'
  rey: 'https://server-api-rey.herokuapp.com',
  bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  dapuhy: 'https://dapuhy-api.herokuapp.com',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': '17fa27316b9ffd1818a259ae',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'Koplerjiro',
  'https://dapuhy-api.herokuapp.com': 'J-BOT',
}
global.repoUrl = 'https://github.com/Maybelowe/updet'
global.repoName = 'Maybelowe/updet'
global.repoName2 = 'ariffb25/stikerinbot'
global.repoBranch = 'main'
global.repoBranch2 = 'main'

global.repos = {
	url: 'https://github.com/Dvnz99/stikelinbot',
	name: 'Maybelowe/updet',
	branch: 'main',
}

// Sticker WM
global.packname = 'Akmalz Lwzy\n\nInstagram\n@akmalz.lwzy\n\n+43 650 44631513'
global.author = ''

let listimg = [
	"https://i.ibb.co/dMs2VDN/elaina-majo-no-tabitabi-library-books-witch-school-white-hair-smiling-anime-42814-resized.jpg",
	"https://i.ibb.co/3sVR1g5/897710-Majo-no-Tabitabi-Elaina-Majo-no-Tabitabi-witch.jpg",
	"https://i.ibb.co/bXMwM3k/HD-wallpaper-anime-the-journey-of-elaina-elaina-the-journey-of-elaina-majo-no-tabitabi.jpg",
	"https://i.ibb.co/r2fCYWV/elaina-majo-no-tabitabi.jpg",
	"https://i.ibb.co/Qr5z3JK/HD-wallpaper-anime-the-journey-of-elaina-elaina-the-journey-of-elaina.jpg"
]
global.elaImg = listimg[Math.floor(Math.random() * listimg.length)]
global.fakeThumb = 'https://i.ibb.co/mq8TBvz/IMG-20211011-WA0107.jpg'


global.wait = '_Sekk, sabar cok..._'
global.eror = '_*Server Error*_'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.flaz = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.igUrl = 'https://instagram.com/akmalz.zp'

global.multiplier = 100 // Semakin tinggi, semakin sulit naik level
// global.iniLimit = 50 // Custom limit sesuai keinginan

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
