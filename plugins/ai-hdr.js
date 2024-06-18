/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

import uploadImage from '../lib/uploadImage.js'
import uploadFile from '../lib/uploadFile.js'

let handler = async (m, {
    conn,
    args,
    command,
    usedPrefix
}) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw 'media not found'
    let media = await q.download()
    let isTele = /image\/(png|jpe?g)/.test(mime)
    let link = await (isTele ? uploadImage : uploadFile)(media)
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`;
					

let result
if (args[0] === 'low') {
    try {
m.reply(wait)

 result = await runReplication(link, 2)
conn.sendFile(m.chat, result
, 'remini.jpg', `*Result from*: ${usedPrefix+command} ${text}
`, m)
} catch (e) {
        throw eror
    }
} else if (args[0] === 'medium') {
try {
m.reply(wait)

 result = await runReplication(link, 4);
conn.sendFile(m.chat, result
, 'remini.jpg', `*Result from*: ${usedPrefix+command} ${text}
`, m)
} catch (e) {
        throw eror
    }
} else if (args[0] === 'high') {
try {
m.reply(wait)

 result = await runReplication(link, 8)
conn.sendFile(m.chat, result
, 'remini.jpg', `*Result from*: ${usedPrefix+command} ${text}
`, m)
} catch (e) {
        throw eror
    }
} else m.reply('*Pilih style hdr*\n1. hdr low\n2. hdr medium\n3. hdr high')

}
handler.help = ['low','medium','high'].map(v => `hdr ${v}`)
handler.command = /^(hdr)$/i
handler.tags = ['ai']
handler.premium = true 

export default handler

const Replicate = await (await import("replicate")).default;

const replicate = new Replicate({
    auth: 'r8_XatZQWOTvViMWhlCTfNhM4yr0L3w99E1jgFhA',
});

const runReplication = async (url, scala = 2) => {
    const output = await replicate.run(
  "cjwbw/real-esrgan:d0ee3d708c9b911f122a4ad90046c5d26a0293b99476d697f6bb7f2e251ce2d4",
  {
    input: {
      image: url,
      upscale: scala
    }
  }
);
    return output;
};