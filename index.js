const Discord = require("discord.js")

const TOKEN = "OTgxMjY5NjA4OTEwNjk2NDY4.G4MliR.3j_HiC6XSm2Sk6f6BKKhvqGg53pLnHfpEpYd5U"

const client = new Discord.Client({ 
    intents: [ 
        "GUILDS",
        "GUILD_MESSAGES"
      ]
    })

  client.on("ready", () => { 
    console.log('Logged in as ${client.user.tag}')
    })
client.login(TOKEN)