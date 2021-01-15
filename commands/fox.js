const Discord = require("discord.js");
const axios = require("axios");
const config = require("../data/config.json");

module.exports = {
  name: "fox",
  cooldown: 10,
  async execute(client, message, args) {
    const image = "https://randomfox.ca/floof/";

    
    try {
      response = await axios.get(url);
      image = response.data;
    } catch (e) {
      return message.channel.send(`An error occured!`);
    }

    const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random() * 16777215))
      .setTitle("Here's Your Fox")
      .setImage(image)
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    return message.channel.send({ embed });
  },
};
