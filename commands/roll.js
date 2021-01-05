module.exports = {
  name: "roll",
  execute(message) {
    let answer = Math.floor(Math.random() * 6) + 1;

    message.channel.send(
      `:game_die: **${message.author.username}**, you rolled a **${answer}**!`
    );
  },
};
