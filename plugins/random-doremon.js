let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/doraemon?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'π· *MΓ‘s de una vez habrΓ‘s visto Doraemon* π·', 'π πππ©π πΏππ€π¨ π', 'SIGUIENTE π', `${usedPrefix + command}`, m, false)
}
handler.command = /^(doraemon|Doraemon)$/i

module.exports = handler
