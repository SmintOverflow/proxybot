const Discord = require("discord.js");
const fs = require("fs");
const cooldown = new Set();

module.exports.run = async (client, msg, args, config) => {
  if (cooldown.has(msg.author.id)) {
    msg
      .reply(
        `You need to wait ${config.COOLDOWN} minutes to use this command again!`
      )
      .then(m => {
        msg.delete();

        setTimeout(() => {
          m.delete();
        }, 5000);
      });
  } else {
    fs.readFile("./accounts/sock4.txt", "utf8", function(err, data) {
      if (err) throw err;

      data = data + "";
      var lines = data.split("\n");
      let account = lines[Math.floor(Math.random() * 1)];

      fs.writeFile("./accounts/sock5.txt", lines.slice(1).join("\n"), function(
        err
      ) {
        if (err) throw err;
      });

      let embed = new Discord.RichEmbed()
        .addField("SOCK5 Proxy", `\n**${account}**`)
        .setColor("#363940")
        .setTimestamp();

      msg.author.send(embed);

      msg.reply("I've sent you the account! Please check your DM!").then(m => {
        setTimeout(() => {
          m.delete();
        }, 900000);
      });

      cooldown.add(msg.author.id);
      setTimeout(() => {
        cooldown.delete(msg.author.id);
      }, config.COOLDOWN * 60 * 1000);
    });
  }
};

module.exports.help = {
  name: `SOCK5 Proxy`,
  description: `Sends you a SOCK5 proxy!`
};
