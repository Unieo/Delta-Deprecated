const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../data/config.json");

module.exports = {
  name: "cuddle",
  async execute(message) {
    let user = message.mentions.users.first();
    if (!user)
      return message.channel.send("Mention someone to cuddle them, **Dummy!**");
    if (user.id == config.botid)
      return message.channel.send("*Aww!* cuddles you.");
    if (user.id == message.author.id)
      return message.channel.send(
        "You know you can't cuddle yourself, **lol** :)"
      );

    const { body } = await superagent.get(
      "https://nekos.life/api/v2/img/cuddle"
    );

    const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} cuddled ${user.username} OwO`)
      .setColor(Math.floor(Math.random() * 16777215))
      .setTimestamp()
      .setImage(body.url)
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
