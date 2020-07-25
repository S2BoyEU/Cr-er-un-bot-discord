const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./config.json")
const prefix = require("./config.json")

const fs = require("fs")

bot.on("ready", async message => {
    console.log(`${bot.user.username} est allumé !`)
    bot.user.setActivity("Je suis le bot", {type: 'WATCHING'})
})

fs.readdir("./Commandes/", (err, files) => {
    if(err)console.log(err)
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Aucune commande trouvée")
        return
    }
    jsfile.forEach((f,i) =>{
        let proprs = require(`./Commandes/${f}`)
        console.log(`${f} Chargée ) 100%`)
        bot.commands.set(props.help.name.props)
    })
    fs.readdir("./events/",(error, f) => {
        if(error)console.log(error)
        console.log(`${f.length} event en chargement !`)
        f.forEach((f) => {
            const events = require(`./events/${f}`)
            const event = f.split(".")[0]
            bot.on(event, events.bind(null, client))
        })
    })
})

bot.login(config.token)