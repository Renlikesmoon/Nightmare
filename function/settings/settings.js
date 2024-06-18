import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

/*
Setting
*/
global.setting = {
 clearSesi: false, // pembersih sampah sessions 
 clearTmp: true, // pembersih sampah tmp
 addReply: true, // buat with thumbnail di pesan
 idgc: '-' // id gc buat join only
 }

global.info = {
 nomerbot : '6281266445854',
 pairingNumber : '6281266445854',
 figlet: 'Merry', // buat tampilan konsole start
 nomorwa : '6281266445854',
 nameown : 'Varo',
 nomerown : '6282385969382',
 packname : 'sticker by ',
 author : 'Varo',
 namebot : '乂 Varo4you - MD',
 wm : 'Varo4you  -  M D',
 stickpack : 'Whatsapp',
 stickauth : 'Bot - MD',
 jid: '@s.whatsapp.net'
}

// Thumbnail 
global.media = {
 ppKosong : 'https://i.ibb.co/3Fh9V6p/avatar-contact.png',
 didyou : 'https://telegra.ph/file/fdc1a8b08fe63520f4339.jpg',
 rulesBot : 'https://telegra.ph/file/afcfa712bd09f4fcf027a.jpg',
 thumbnail : 'https://telegra.ph/file/c1669137d4db4844a1a2b.jpg',
 thumb : 'https://telegra.ph/file/c1669137d4db4844a1a2b.jpg',
 logo : 'https://telegra.ph/file/07428fea2fd4dccaab65f.jpg',
 unReg : 'https://telegra.ph/file/ef02d1fdd59082d05f08d.jpg',
 registrasi : 'https://telegra.ph/file/0169f000c9ddc7c3315ff.jpg',
 confess : 'https://telegra.ph/file/03cabea082a122abfa5be.jpg',
 access : 'https://telegra.ph/file/5c35d4a180b9074a9f11b.jpg',
 tqto : 'https://telegra.ph/file/221aba241e6ededad0fd5.jpg',
 spotify : 'https://telegra.ph/file/d888041549c7444f1212b.jpg',
 weather : 'https://telegra.ph/file/5b35ba4babe5e31595516.jpg',
 gempaUrl : 'https://telegra.ph/file/03e70dd45a9dc628d84c9.jpg',
 akses : 'https://telegra.ph/file/6c7b9ffbdfb0096e1db3e.jpg',
 wel : 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4',
 good : 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4',
 sound: 'https://pomf2.lain.la/f/ymca9u8.opus'
}
// Sosmed
global.url = {
 sig: 'https://instagram.com/varoo4you',
 sgh:  'https://github.com/Tiooxy',
 sgc: 'https://chat.whatsapp.com/DDCzRsYKvD66VSezWbN7lP'
}
// Donasi
global.payment = {
 psaweria: 'https://saweria.co/tiooxy',
 ptrakterr: '-',
 pdana: '082385969382'
}
// Info Wait
global.msg = {
 wait: '⏱️ *Mohon bersabar*\n\> Sedang menjalankan perintah dari *User*!',
 eror: '🤖 *Information Bot*\n\> Mohon maaf atas ketidaknyamanan dalam menggunakan *Nightmare Bot* . Ada kesalahan dalam sistem saat menjalankan perintah.'
}
 
// api_id web suntik
global.apiId = {
 smm: '-',
 lapak: '-'
}

// Apikey
global.api = {
 user: '-', // api_id antinsfw 
 screet: '-', // api_screet nsfw klo abis ganti sendiri 
 uptime: '-',
 xyro: '-',
 lol: '-',
 smm: '-',
 lapak: '-',
 bing: '-'

}
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    nightTeam: "https://api.night-team.my.id",
    lol: "https://api.lolhumaan.xyz",
    smm: "https://smmnusantara.id",
    lapak: "https://panel.lapaksosmed.com"
}

//Apikey
global.APIKeys = {
    "https://api.xyroinee.xyz": "vRFLiyLPWu",
    "https://api.lolhumaan.xyz": "-"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})