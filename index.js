const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
    token: "BOT TOKEN",
    prefix: "$getGuildVar[prefix]",
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onInteractionCreate"]
});


const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/") //you can change this to any directory you want

bot.variables({
  prefix: "?"
})
