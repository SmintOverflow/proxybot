const Discord = require("discord.js");

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
    .setColor("#363940")
    .setFooter("Nice :)")
    .addField(
      "__Easter Egg__",
      "You Found An Easter Egg!"
    );
  message.channel.send(embed);
};
module.exports.help = {
  name: "egg"
};
