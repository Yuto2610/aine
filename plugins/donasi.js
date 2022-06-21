let handler = async m => m.reply(`
╭─「 Donasi • Bot 」
│ • Dana [0895-1502-3118]
│ • Ovo [0895-1502-3118]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler