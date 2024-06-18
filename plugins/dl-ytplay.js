
import ytdl from 'ytdl-core';
import yts from 'yt-search';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';

const streamPipeline = promisify(pipeline);

var handler = async (m, { conn, command, text, usedPrefix }) => {
let input = `[!] Input Invalid

ex: /${usedPrefix+command} Dj full bass`
  if (!text) return m.reply(input);
  
  conn.data = conn.data ? conn.data : {}
  let id = m.sender
  let search = await yts(text);
  let array = []
  for (let pus of search.all) {
  array.push({
                header: pus.title.toUpperCase(),
                title: pus.timestamp,
                description: "",
                id: ".ytmp3 "+pus.url,
            })
  }
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)];
  if (!search) throw 'Video Not Found, Try Another Title';
  let { title, thumbnail, timestamp, views, ago, url } = vid;
  // buat simpan sessi play
  conn.data[id] = {
  user: id,
  title: title,
  times: timestamp,
  views: views,
  ago: ago,
  url: url,
  thumbnail: thumbnail
  };

  let captvid = ` *${title}*
  
─── 〔 Y O U T U B E 〕 ────
  ⎎ Duration: ${timestamp}
  ⎎ Views: ${views}
  ⎎ Upload: ${ago}
  ⎎ Link: ${url}
─────//────
*PETUNJUK ❗*
ketik salah satu di bawah ini:

Mp3 » untuk 🎵 (Audio)
Mp4 » untuk 🎥 (Video)
Cancel » untuk ❎ (membatalkan)

`;

 const data = {
    title: "Pencarian lainnya!",
    sections: [{
        title: "List ytplay",
        highlight_label: "Recommended",
        rows: [...array],
    }, ],
};

let quick = [
{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Ytmp4\",\"id\":\".ytmp4 ${url}\"}`
              },
{
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Ytmp3\",\"id\":\".ytmp3 ${url}\"}`
              }
]
return conn.sendListImageButton(m.chat, captvid, data, wm, thumbnail, quick)

 setTimeout(() => {
 conn.sendMessage(m.chat, {react: {text: '⚙️', key: m.key}})
 delete conn.data[id]
 }, 30000)

};

handler.help = ['play'].map((v) => v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^(play)$/i;

handler.exp = 0;
handler.limit = true 
handler.register = true

export default handler;