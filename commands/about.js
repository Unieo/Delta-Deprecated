const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = {
  name: "about",
  execute(message) {
    let about = "This bot was made for the purpose of fun and entertainment.";
    let credit =
      "A big thank you to my friend **Lookin** in helping me solve bugs etc.";
    let licence = "MIT";
    let sourceCode =
      "Click [here](https://github.com/Unieo/Project-Delta) to go to GitHub";
    let version = "1.1.1 Official Release";
    const embed = new Discord.MessageEmbed()
      .setTitle("Bot Info")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("About:", about)
      .addField("Version", version)
      .addField("Credit:", credit)
      .addField("Licence:", licence)
      .addField("Source Code:", sourceCode)
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

    message.channel.send({ embed });
  },
};
