const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = {
  name: "about",
  aliases: ["info"],
  cooldown: 5,
  execute(client, message, args) {
    let about = "This bot was made for the purpose of fun and entertainment.";
    let credit =
      "A big thank you to my friend **Lookin** in helping me solve bugs etc.";
    let licence = "MIT";
    let sourceCode =
      "Click [here](https://github.com/Unieo/Project-Delta) to go to GitHub";
    let version = "1.1.2 Official Release";
    let notes =
      "**Delta Beta:** Like Stable Builds but Awesome Features? Or do you just want to test out new feature's before anyone else? [click here](https://discord.com/oauth2/authorize?client_id=796231105665040414&scope=bot&permissions=2147483647) to invite the Beta version of Delta!\n**Delta Canary:** Are you a dev? Or do you just want to test out new feature's before anyone else? [click here](https://discord.com/oauth2/authorize?client_id=796232722372231219&scope=bot&permissions=2147483647) to invite the Canary version of Delta!";
    const embed = new Discord.MessageEmbed()
      .setTitle("Bot Info")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("About:", about)
      .addField("Version", version)
      .addField("Credit:", credit)
      .addField("Licence:", licence)
      .addField("Source Code:", sourceCode)
      .addField("Other Bots", notes)
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

    message.channel.send({ embed });
  },
};
