/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

import {
    Prodia
} from "prodia.js";
const apiKey = "f5c9ab8e-2041-4d3f-be94-7a516c08d34e";
const prodia = new Prodia(apiKey);

import fetch from 'node-fetch'
let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {

    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw 'No media found'
    let media = await q.download()

    await m.reply(wait)
    try {

        const generateImageParams = {
            imageData: media.toString('base64'),
            resize: 4
        };
        const openAIResponse = await generateImage(generateImageParams);
        if (openAIResponse) {
            const result = openAIResponse;
            const tag = `@${m.sender.split('@')[0]}`;

            await conn.sendMessage(m.chat, {
                image: {
                    url: result.imageUrl
                },
                caption: `Nih effect *upscale* nya\nRequest by: ${tag}`,
                mentions: [m.sender]
            }, {
                quoted: m
            });
        } else {
            console.log("Tidak ada respons dari OpenAI atau terjadi kesalahan.");
        }
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["tohdx *[Reply image]*"]
handler.tags = ["ai"]
handler.command = /^(tohdx|hd)$/i
handler.premium = true
export default handler

async function generateImage(params) {
    const generate = await prodia.upscale(params);

    while (generate.status !== "succeeded" && generate.status !== "failed") {
        await new Promise((resolve) => setTimeout(resolve, 250));

        const job = await prodia.getJob(generate.job);

        if (job.status === "succeeded") {
            return job;
        }
    }
}