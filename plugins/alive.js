const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━〔 *CRYPTO-MD* 〕━━┈⊷
┃☮╭─────────────·๏
┃☮┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃☮┃• *📟 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃☮┃• *⚙️ HostName*: ${os.hostname()}
┃☮┃• *👨‍💻 Owner*: CRYPTO KNIGHT
┃☮┃• *🧬 Version*: 1.0.0 LITE
┃☮└───────────┈⊷
╰──────────────┈⊷
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐂𝐑𝐘𝐏𝐓𝐎 𝐊𝐍𝐈𝐆𝐇𝐓`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/S4bM1GZr/6942.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363369843420196@g.us',
                    newsletterName: '𝐂𝐑𝐘𝐏𝐓𝐎 𝐊𝐍𝐈𝐆𝐇𝐓',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});