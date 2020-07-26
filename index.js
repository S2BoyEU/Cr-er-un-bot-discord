const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./config.json")
const prefix = require("./config.json")

bot.on("ready", async message => {
    console.log(`${bot.user.username} est allumé !`)
    bot.user.setActivity("Je suis le bot", {type: 'WATCHING'})
})

bot.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith(config.prefix + "kick")) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              message.reply(`Vous aver expulser ${user.tag}`)
            })
            .catch(err => {
              message.reply('Je n ai pas la permission d expulser cette personne !')
              console.error(err);
            });
        } else {
          message.reply("ce membre n'est pas de notre serveur !")
        }
      } else {
        message.reply("Vous n'aver pas mentionné la personne à expulser !")
      }
    }
  })

  

bot.login(config.token)