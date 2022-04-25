let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • tree [3] [089654836567]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/tr4studio
│ • Gopay [089654836567]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
