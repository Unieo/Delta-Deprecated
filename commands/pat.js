const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../data/config.json");

module.exports = {
  name: "pat",
  async execute(message) {
    let user = message.mentions.users.first();

    if (!user) return message.reply("You need to mention someone to pat them");
    if (user.id == config.botid)
      return message.channel.send("No, I dont want you to dirty me again!");
    if (user.id == message.author.id)
      return message.channel.send(
        "I see you're lonely,... **headpats you** :)"
      );

    const { body } = await superagent.get("https://nekos.life/api/pat");

    const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random() * 16777215))
      .setTitle(
        `${user.username}, you got a head pat from ${message.author.username}!  :eyes:`
      )
      .setImage(body.url)
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
