/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

import fetch from 'node-fetch';

// const MONITOR_API_KEY = process.env['MONITOR'];
const MONITOR_API_KEY = uptime

var handler = async (m, { conn }) => {
  conn.reply(m.chat, 'Sedang Memuat Informasi Monitor... Silahkan Tunggu', m);

  try {
    const [monitorResponse, accountResponse] = await Promise.all([
      fetch('https://api.uptimerobot.com/v2/getMonitors', {
        method: 'POST',
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          api_key: MONITOR_API_KEY,
          format: 'json',
          logs: '1'
        })
      }),
      fetch('https://api.uptimerobot.com/v2/getAccountDetails', {
        method: 'POST',
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          api_key: MONITOR_API_KEY,
          format: 'json'
        })
      })
    ]);

    if (!monitorResponse.ok || !accountResponse.ok) {
      throw new Error('Failed to fetch monitor data');
    }

    const { monitors } = await monitorResponse.json();
    const { account } = await accountResponse.json();
    const monitorData = monitors.map(monitor => `Monitor ID: ${monitor.id}\nJudul: ${monitor.friendly_name}\nMonitor Status: ${monitor.status}\nPort: ${monitor.port}\nInterval: ${monitor.interval}\n\n`).join('');

    conn.reply(m.chat, `Berikut adalah informasi monitor:\n\n${monitorData}\nTotal Monitor Aktif: ${account.up_monitors}\nTotal Monitor Tidak Aktif: ${account.down_monitors}\nTotal Monitor Dinonaktifkan: ${account.paused_monitors}`, m);
  } catch (error) {
    conn.reply(m.chat, 'Maaf, terjadi kesalahan. Kemungkinan API key telah mencapai batas limit (10 req/min). Harap tunggu selama 1 menit untuk melakukan permintaan lagi.', m);
    console.error(error);
  }
};

handler.help = ['monitor']
handler.tags = ['internet', 'tools']
handler.owner = true
handler.command = /^(monit(or|oring)?)$/i

export default handler