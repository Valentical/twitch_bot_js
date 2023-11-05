const fs = require("fs");
const path = require("path");
module.exports.Commands = new Map();
const Aliases = new Map();

module.exports.add = (command) => {
  this.Commands.set(command.name, command);
  if (command.aliases) {
    for (const alias of command.aliases) {
      Aliases.set(alias, command.name);
    }
  }
}

module.exports.get = (commandName) => {
  return this.Commands.get(commandName) || this.Commands.get(Aliases.get(commandName));
}

const dirPath = path.resolve(__dirname, "../commands");
const commandFiles = fs.readdirSync(dirPath).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`../commands/${file}`)
  this.add(command)
} 