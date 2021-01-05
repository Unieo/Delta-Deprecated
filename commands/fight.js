const Discord = require("discord.js");
const fights = require("../data/fights.json");
const config = require("../data/config.json");

module.exports = {
  name: "fight",
  execute(message) {
    let user = message.mentions.users.first();
    if (!user)
      return message.channel.send("Mention someone to feed them, **Dummy!**");
    if (user.id == config.botid)
      return message.channel.send("*Seriously?* Delta won :wink:");
    if (user.id == message.author.id)
      return message.channel.send(
        "You know you can't fight yourself, **lol** :)"
      );

    const embed = new Discord.MessageEmbed()
      .setTitle("Fight Time!")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField(
        `${message.author.username} is fighting ${user.username} :eyes:`,
        fights[Math.floor(Math.random() * fights.length)]
      )
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
