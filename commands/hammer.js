const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = {
  name: "hammer",
  execute(message) {
    let user = message.mentions.users.first();
    if (!user)
      return message.channel.send(
        "Mention someone to throw the hammer at, **Dummy!**"
      );
    if (user.id == config.botid)
      return message.channel.send(`Ima robot, leave me alone :persevere:`);
    if (user.id == message.author.id)
      return message.channel.send(`*Bruh*, ${user.username} suicided`);

    const embed = new Discord.MessageEmbed()
      .setTitle("Hammer Time!")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField(
        `${message.author.username} threw a hammer at ${user.username}. :hammer:  :eyes: **BAM**, lol`
      )
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
