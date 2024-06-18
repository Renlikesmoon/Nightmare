let handler = async (m, {
    conn,
    text,
    args,
    command,
    usedPrefix 
}) => {
const list = `⋄ sᴇᴡᴀ ᴠᴀʀᴏ4ʏᴏᴜ ᴍᴅ ⋄

[ 1 ] 8k / Minggu 
[ 2 ] 27k / bulan 
[ 3 ]  55k / 2bulan
[ 4 ]  85k /2 bulan + premium (30 hari)

 Via Dana: 082385969382
 Qris: not yet available 
 
 Owner: wa.me/6282385969382
  
 *Note*: chat owner untuk sewa Bot
                   Bot selalu Ter Up To Date

 anda membeli = setuju 😃
`

conn.sendFile(m.chat, 'https://telegra.ph/file/cf1c9bce36f1890e1d458.jpg', '', list, m)
}
handler.help = handler.command = ['sewa','sewabot']
handler.tags = ['main']
export default handler