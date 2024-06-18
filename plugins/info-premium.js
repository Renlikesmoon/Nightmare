let handler = async (m, {
    conn,
    text,
    args,
    command,
    usedPrefix 
}) => {
const list = `⋄ ᴘʀᴇᴍɪᴜᴍ ᴠᴀʀᴏ4ʏᴏᴜ ᴍᴅ ⋄

[ 1 ] 1k/2hari 
[ 2 ] 3k/Minggu 
[ 3 ] 10k/bulan 
[ 4 ] 15k/bln + add ke grup pribadi (3hari)
[ 5 ] (25k permanen)
 
 Via Dana: 082385969382
 Qris: minta ke owner
 Gopay: 082385969382
 Owner: wa.me/6282285357346
  
 *Note*: chat owner untuk pembelian premium, 
  beli = setuju 😃
`

conn.sendThumb(m.chat, list, 'https://telegra.ph/file/2e3cd79eb99c4b86f27a8.jpg', m)
}
handler.help = handler.command = ['premium','prem']
handler.tags = ['main']
export default handler