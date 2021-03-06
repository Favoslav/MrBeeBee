const Discord = require('discord.js');
const { Event } = require("gcommands")
const StatusUpdater = require('@tmware/status-rotate')
module.exports = class Ping extends Event {
  constructor(client) {
    super(client, {
      name: "ready",
      once: false,
      ws: false
    })
  }

  async run(client) {
    console.log(`Přihlášen - ${client.user.tag}!`)

    //--Status bota
    const botvers = require('../package.json');
    const statusMessages = [{ type: 'STREAMING', url: 'https://www.twitch.tv/Favoslav_', name: '🇺🇦 Стою за Україну!' },
    { type: 'STREAMING', url: 'https://www.twitch.tv/Favoslav_', name: `${botvers.state} ${botvers.version}${botvers.stage}` }]

    const Updater = new StatusUpdater(client, statusMessages)

    Updater.start(8 * 1000)

    /*client.user.setActivity(`Happy new year! 🎉`, {
      type: 'STREAMING',
      url: 'https://www.twitch.tv/Favoslav_'
    });*/

    //--Server that keeps bot online
    //const keepAlive = require("../server.js");
    //keepAlive();

    //--Server status embeds
    const util = require('minecraft-server-util');
    /*-----sfsdfsd--------*/ setInterval(function() {
      util.status('mod.boagc.tk')
        .then((result) => {
          const onembed = new Discord.MessageEmbed()
            .setColor('#00FF04')
            .setTitle('🟢 Status: Online')
            .setDescription('\u200B\n🔄 Status se obnovuje každých 30s.\n\u200B\n🛡️ ModPack: https://modpack.boagc.tk/\n\u200B') 
            .setThumbnail('https://cdn.discordapp.com/attachments/817323618576760853/942098087864852480/GeoGlitchedv2ICON.png')
            .addField('💻 IP:', `mod.boagc.tk`)
            .addField('🗞️ Verze:', `${result.version.name}`)
            .addField('🔢 Online Hráči:', `${result.players.online}`)
            .addField('📈 Max. Počet Hráčů:', `${result.players.max}`)
            .addField('📶 Motd:', `${result.motd.clean}`)
            .setTimestamp()

          client.channels.cache.get('836166237729587240').messages.fetch('923636305248784468').then(msg => msg.edit({ embeds: [onembed] }))
        })
        .catch((error) => {
          const offembed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('🔴 Status: Offline')
            .setDescription('\u200B\n🔄 Status se obnovuje každých 30s.\n\u200B\n🛡️ ModPack: https://modpack.boagc.tk/\n\u200B')
            //.setThumbnail("https://cdn.discordapp.com/attachments/817323618576760853/923635592791748618/favicon.png")
            .setThumbnail('https://cdn.discordapp.com/attachments/817323618576760853/942098087864852480/GeoGlitchedv2ICON.png')
            .addField('💻 IP:', `🚫 -`)
            .addField('🗞️ Verze:', `🚫 -`)
            .addField('🔢 Online Hráči:', `🚫 -`)
            .addField('📈 Max. Počet Hráčů:', `🚫 -`)
            .addField('📶 Motd:', `🚫 -`)
            //.addField('🗺️ DynMapa:', `🚫 -`)
            .setTimestamp()

          client.channels.cache.get('836166237729587240').messages.fetch('923636305248784468').then(msg => msg.edit({ embeds: [offembed] }))
        });
    }, 30000);
    
/*-----sfsdfsd--------*/ setInterval(function() {
      util.status('events.large-lands.tk')
        .then((result) => {
          const onembed = new Discord.MessageEmbed()
            .setColor('#00FF04')
            .setTitle('🟢 Status: Online')
            .setDescription('\u200B\n🔄 Status se obnovuje každých 30s.\n\u200B\n')
            //.setThumbnail("https://cdn.discordapp.com/attachments/817323618576760853/923635592791748618/favicon.png")
            .setThumbnail('https://cdn.discordapp.com/attachments/817323618576760853/942098087864852480/GeoGlitchedv2ICON.png')
            .addField('💻 IP:', `events.large-lands.tk`)
            .addField('🗞️ Verze:', `${result.version.name}`)
            .addField('🔢 Online Hráči:', `${result.players.online}`)
            .addField('📈 Max. Počet Hráčů:', `${result.players.max}`)
            .addField('📶 Motd:', `${result.motd.clean}`)
            .setTimestamp()

          client.channels.cache.get('836166237729587240').messages.fetch('956542775011196928').then(msg => msg.edit({ embeds: [onembed] }))
        })
        .catch((error) => {
          const offembed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('🔴 Status: Offline')
            .setDescription('\u200B\n🔄 Status se obnovuje každých 30s.\n\u200B')
            //.setThumbnail("https://cdn.discordapp.com/attachments/817323618576760853/923635592791748618/favicon.png")
            .setThumbnail('https://cdn.discordapp.com/attachments/817323618576760853/942098087864852480/GeoGlitchedv2ICON.png')
            .addField('💻 IP:', `🚫 -`)
            .addField('🗞️ Verze:', `🚫 -`)
            .addField('🔢 Online Hráči:', `🚫 -`)
            .addField('📈 Max. Počet Hráčů:', `🚫 -`)
            .addField('📶 Motd:', `🚫 -`)
            //.addField('🗺️ DynMapa:', `🚫 -`)
            .setTimestamp()

          client.channels.cache.get('836166237729587240').messages.fetch('956542775011196928').then(msg => msg.edit({ embeds: [offembed] }))
        });
    }, 30000);

   /* setInterval(function() {
      util.status('193.86.139.133')
        .then((result) => {
          const onembed = new Discord.MessageEmbed()
            .setColor('#00FF04')
            .setTitle('🟢 Status: Online')
            .setDescription('\u200B\n🔄 Status se obnovuje každých 60s.\n\u200B')
            .setThumbnail('https://cdn.discordapp.com/icons/915618656275275846/67ffd0d0aa0986baf3d2fe0ec3a1e835.png?size=4096')
            .addField('💻 IP:', `play.ownyk.ml`)
            .addField('🗞️ Verze:', `${result.version.name}`)
            .addField('🔢 Online Hráči:', `${result.players.online}`)
            .addField('📈 Max. Počet Hráčů:', `${result.players.max}`)
            .addField('📶 Motd:', `${result.motd.clean}`)
            .addField('🗺️ Dočásná DynMap DNS:', `http://map.ownyk.ml`)
            .setTimestamp()

          client.channels.cache.get('921105849638862888').messages.fetch('923632304411267092').then(msg => msg.edit({ embeds: [onembed] }))
        })
        /*.then(async (response) => {
        const onembed = new Discord.MessageEmbed()
          .setColor('#ffe600')
          .setTitle('🟡 Status: Maintained')
          .setDescription('\u200B\n🔄 Status se obnovuje každých 5s.\n\u200B')
          .setThumbnail('https://cdn.discordapp.com/icons/915618656275275846/552d8b53362460c42e99078f3ee4eee5.png?size=4096')
          .addField('💻 Dočasná IP:', `${response.host}`)
          .addField('🗞️ Verze:', `${response.version}`)
          .addField('🔢 Online Hráči:', `${response.onlinePlayers}`)
          .addField('📈 Max. Počet Hráčů:', `${response.maxPlayers}`)
          .addField('🗺️ Dočásná DynMap DNS:', `http://map.ownyk.ml`)
          .setTimestamp()

        client.channels.cache.get('921105849638862888').messages.fetch('923632304411267092').then(msg => msg.edit({ embeds: [onembed] }))
      })*/
       /*.catch((error) => {
          const offembed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('🔴 Status: Offline')
            .setDescription('\u200B\n🔄 Status se obnovuje každých 60s.\n\u200B')
            .setThumbnail('https://cdn.discordapp.com/icons/915618656275275846/67ffd0d0aa0986baf3d2fe0ec3a1e835.png?size=4096')
            .addField('💻 IP:', `🚫 -`)
            .addField('🗞️ Verze:', `🚫 -`)
            .addField('🔢 Online Hráči:', `🚫 -`)
            .addField('📈 Max. Počet Hráčů:', `🚫 -`)
            .addField('📶 Motd:', `🚫 -`)
            .addField('🗺️ DynMapa:', `🚫 -`)
            .setTimestamp()

          client.channels.cache.get('921105849638862888').messages.fetch('923632304411267092').then(msg => msg.edit({ embeds: [offembed] }))
        });
    }, 60000);*/
  }
}