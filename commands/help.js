const Discord = require("discord.js");
const config = require("../data/config.json");
const help = require("../data/help.json");

module.exports = {
  name: "help",
  execute(message) {
    const embed = new Discord.MessageEmbed()
      .setTitle("Help is here!")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("Fun:", help.fun)
      .addField("Utility:", help.utility)
      .addField("Actions:", help.action)
      .addField("Games:", help.game)
      .setDescription("**Type `d!about` to get more info on the bot**")
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} ${config.copyright}`);
    message.author.send({ embed }).catch((e) => {
      if (e) {
        message.channel.send(
          `Wait. Your DMs seem to be locked :lock: so I'll send it here instead :wink:`
        );
        message.channel.send({ embed });
      }
    });
    message.reply("Check your DMs!");
  },
};
