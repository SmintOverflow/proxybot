const Discord = require("discord.js");

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
    .setColor("#363940")
    .setFooter("")
    .addField(
      "__STOCK__",
      "__**STOCK COMMANDS**__\n\n`$proxy`: unlimited .\n`$sock4`: unlimited .\n`$sock5`: unlimited ."
    );
  message.channel.send(embed);
};
module.exports.help = {
  name: "help"
};
