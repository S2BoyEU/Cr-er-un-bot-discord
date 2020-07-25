const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./config.json")

bot.on("ready", async message => {
console.log(`${bot.user.username} est allumé !`)
bot.user.setActivity("votre statut pérsonnalisée", {type: 'WATCHING'})
})

bot.login(config.token)



créer un fichier config.json:
{
"token ": " Votre token "
}

