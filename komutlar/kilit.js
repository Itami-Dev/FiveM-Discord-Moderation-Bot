const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kilit` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let kurulumkontrol = db.fetch(`kurulum${message.guild.id}`)
  if (kurulumkontrol === undefined || kurulumkontrol === null || kurulumkontrol === "pasif")
  {

    let hata = new Discord.RichEmbed()
    .setTitle("Sunucu Kurulumu Yapılmamış!")
      .setDescription("Botun komutlarının başarıyla kullanılması için sunucunu **prefixin!sunucukur** komutuyla kurman gerekmekte!")
      .setFooter(" ROLEPLAY SUNUCUSU İSİMİ  ")
      .setColor("RANDOM")

    message.channel.send(hata) 

  return;

  }
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['kilitaç', 'unlock'];
  if (!time) return message.channel.send('**Doğru Kullanım** : `/kilitle 2min`');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('**Kanal Kilidi Açıldı.**');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`**Kanal Kilitlendi.** ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('**Kanalın Kilidi Açıldı.**')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kilitle'],
  permLevel: 3
};

exports.help = {
  name: 'kanalıkilitle',
  description: 'Kanalı istediğiniz kadar süreyle kitler.',
  usage: 'kanalıkilitle'
};
