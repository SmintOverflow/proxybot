const Discord = require("discord.js");

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
    .setColor("#363940")
    .setFooter("")
    .addField(
      "__Help__",
      "__**GENERATOR COMMANDS**__\n\n`$proxy` To Get A HTTP Proxy .\n`$sock4` To Get A SOCK4 Proxy .\n`$sock5` To Get A SOCK5 Proxy .\n`$invite` To Invite This Bot!"
    );
  message.channel.send(embed);
};
module.exports.help = {
  name: "help"
};
