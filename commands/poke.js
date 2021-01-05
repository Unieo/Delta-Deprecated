const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../data/config.json");

module.exports = {
  name: "poke",
  async execute(message) {
    let user = message.mentions.users.first();

    if (!user)
      return message.channel.send("You need to mention someone to poke them");
    if (user.id == config.botid)
      return message.channel.send("I don't have cheeks kiddo");
    if (user.id == message.author.id)
      return message.channel.send(
        "You know you can't poke yourself, **lol** :)"
      );

    const { body } = await superagent.get("https://nekos.life/api/v2/img/poke");

    const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random() * 16777215))
      .setTitle(
        `${user.username}, you got poked by ${message.author.username} :eyes:`
      )
      .setImage(body.url)
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
