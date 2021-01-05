const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../data/config.json");

module.exports = {
  name: "feed",
  async execute(message) {
    let user = message.mentions.users.first();
    if (!user)
      return message.channel.send("Mention someone to feed them, **Dummy!**");
    if (user.id == config.botid)
      return message.channel.send("I don't eat you know :confounded:");
    if (user.id == message.author.id)
      return message.channel.send(
        "You have to ask someone to feed you, **lol** :)"
      );

    const { body } = await superagent.get("https://nekos.life/api/v2/img/feed");

    const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random() * 16777215))
      .setTitle(
        `${user.username}, you got fed by ${message.author.username} :eyes:`
      )
      .setImage(body.url)
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
