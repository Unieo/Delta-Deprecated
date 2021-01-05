const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = {
  name: "smack",
  execute(message) {
    let user = message.mentions.users.first();

    if (!user)
      return message.channel.send("You need to mention someone to smack them");
    if (user.id == config.botid)
      return message.channel.send("Ima robot, dude.");
    if (user.id == message.author.id)
      return message.channel.send("You smacked yourself, **lol** :)");

    const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random() * 16777215))
      .setTitle(`${message.author.username} smacked ${user.username} lol`)
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
