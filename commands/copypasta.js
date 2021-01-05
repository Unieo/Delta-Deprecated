const copypastas = require("../data/copypasta.json");

module.exports = {
  name: "copypasta",
  execute(message, args) {
    args = args.join(" ");
    message.channel.send(
      `${copypastas[Math.floor(Math.random() * copypastas.length)]}`
    );
  },
};
