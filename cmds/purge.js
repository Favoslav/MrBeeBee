const Discord = require('discord.js');
const { ArgumentType, Command } = require("gcommands");
module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: "",
            description: "Vymaže chat.",
            userRequiredPermissions: 'MANAGE_MESSAGES | ADMINISTRATOR',
            args: [
                {
                    name: "Message Count",
                    type: ArgumentType.NUMBER,
                    description: "Počet zpráv ke smazání.",
                    prompt: "Kolik zpráv chceš smazat?",
                    required: true,
                },
            ],
        });
    }

    async run({ client, respond, message, args }) {
        let count = args[0]
        if (args[0] > 100) return message.channel.send("**Nelze smazat víc než 100 zpráv!**");
        if (args[0] < 1) return message.channel.send("**Musís uvést číslo větší než 0!**");

        message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages)

            const purgeembed = new Discord.MessageEmbed()
                .setColor('#cc3300')
                .setTitle('🗑️ Purge')
                .addField(`🔍 Úspešně smazáno!`, `✉️ Počet zpráv: ${count}.`)
                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()

            message.channel.send(purgeembed)
                .then(msg => {
                    setTimeout(() => msg.delete(), 5000)
                })
        });
    }
}