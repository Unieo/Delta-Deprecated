const dadjoke = require("../data/dadjoke.json");
const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = {
  name: "dadjoke",
  execute(message, args) {
    args = args.join(" ");

    const embed = new Discord.MessageEmbed()
      .setTitle("Here's your Joke")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField(dadjoke[Math.floor(Math.random() * dadjoke.length)])
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
