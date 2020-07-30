const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./config.json")
const prefix = require("./config.json")

bot.on("ready", async message => {
    console.log(`${bot.user.username} est allumé !`)
    bot.user.setActivity("Je suis le bot", {type: 'WATCHING'})
})

bot.on("message", async message => {
  if(message.content === config.prefix + "ping"){
    message.channel.send(`La tence du bot: ${message.createdTimestamp - message.editedTimestamp}` + "ms")
  }
})

bot.on("message", async message => {
  if(message.content === config.prefix + "youtube"){
    let embed = new Discord.MessageEmbed()
    .setTitle("Clique ici")
    .setColor("#ff0000")
    .setURL("https://www.youtube.com/watch?v=FOQIg5JxdYc")
    .setAuthor("La chaine youtube de Kiban")
    .setDescription("Aller regarder la vidéo de Kiban")
    .setImage("https://cdn.discordapp.com/attachments/706164701226205276/736882672156278924/minia_bot_discord_2.jpg")
    .setFooter("Youtube.com", "https://youtube.com/")
    message.channel.send(embed)
  }
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