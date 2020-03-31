exports.run = (client, message, args) => {
var usr = message.mentions.users.first().id;
message.quietUsers.append()
};

exports.help = {
  name: "clear",
  description: "Bulk deletes botmessages & commands in channel it was called",
  usage: "m!clear"
};
exports.config = {
  permLevel: "admin"
}