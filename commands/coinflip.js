const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = {
  name: "coinflip",
  async execute(message) {
    let random = Math.floor(Math.random() * Math.floor(2));
    let heads = ":coin: You got Heads!";
    let tails = ":coin: You got Tails!";
    if (random === 0) {
      let embed = new Discord.MessageEmbed()
        .setTitle("Magic 8Ball")
        .setColor(Math.floor(Math.random() * 16777215))
        .addField(heads)
        .setTimestamp()
        .setFooter(`${config.copyright}`);
      message.channel.send({ embed });
    } else {
      let embed = new Discord.MessageEmbed()
        .setTitle("The Coin flipped and")
        .setColor(Math.floor(Math.random() * 16777215))
        .addField(tails)
        .setTimestamp()
        .setFooter(`${config.copyright}`);
      message.channel.send({ embed });
    }
  },
};
