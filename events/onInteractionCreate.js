const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
const { Event } = require("gcommands")
module.exports = class Ping extends Event {
  constructor(client) {
    super(client, {
      name: "interactionCreate",
      once: false,
      ws: false
    })
  }

  async run(client, interaction) {
    if (interaction.member.bot) return;
    if (interaction.isCommand()) return;

    /*-------------*/
    if (interaction.isButton()) {
      if (interaction.customId === 'verify') {
        interaction.deferUpdate()

        const AlrVerifiedEmbed = new Discord.MessageEmbed()
          .setColor('#FF0000')
          .setTitle('❌ Already Verified')
          .setDescription('Už jsi ověřen. Není třeba se ověřovat znovu.')
        if (interaction.member.roles.cache.has('816426874967162941')) return interaction.member.send({ embeds: [AlrVerifiedEmbed] }).then(msg => {
          setTimeout(() => msg.delete(), 60000)
        })
        interaction.member.roles.add('816426874967162941')

        const verifyEmbed = new Discord.MessageEmbed()
          .setColor('#00FF0C')
          .setTitle('✅ Verified')
          .setDescription('Byl jsi ověřen! Nyní máš přístup k serveru!')

        interaction.member.send({ embeds: [verifyEmbed] }).then(msg => {
          setTimeout(() => msg.delete(), 60000)
        })

        if (interaction.member.id === '816656200993079297') {
          console.log('--GargUS byl ověřen.')
        } else {
          const verifyEmbed2 = new Discord.MessageEmbed()
            .setColor('#00FF0C')
            .setTitle('✅ Verified')
            .setDescription(`${interaction.member} byl právě ověřen!`)

          const channel = client.channels.cache.get('934124458464141382')
          channel.send({ embeds: [verifyEmbed2] })
        }
      }
      /*-------------*/
    } else if (interaction.isSelectMenu()) {
      if (interaction.customId === 'select') {
          await interaction.deferUpdate();
          await interaction.member.send({ content: 'Pong!' });
      }
      /*-------------*/
    } else {
      return;
    }
  }
}