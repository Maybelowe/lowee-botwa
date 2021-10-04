let fs = require('fs')
global.ownerName = ['Akmalz','J-BOT'] // Ketik nama kamu disini
global.botName = 'WA-BOT' // Isi nama bot kamu
global.owner = ['6281326635396', '62857024477637'] // Letakan nomor kamu disini
global.mods = [] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.credit = '© Bot-WhatsApp'
global.APIs = { // API Prefix
  // nama: 'https://website'
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
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': '17fa27316b9ffd1818a259ae',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'Koplerjiro',
  'https://dapuhy-api.herokuapp.com': 'J-BOT',
}
global.ghb = {
	repoUrl: 'https://github.com/Dvnz99/stikelinbot',
	repoName: 'Maybelowe/updet',
	repoBranch: 'main',
}

// Sticker WM
global.packname = 'BOT-WA'
global.author = ''

global.wait = '_*tunggu..*_'
global.eror = '_*Server Error*_'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.igUrl = 'https://instagram.com/akmalz.zp'

global.multiplier = 60 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
