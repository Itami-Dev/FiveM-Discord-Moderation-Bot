const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
exports.run = (client, message, params) => {












    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
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





    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Polis Geliyor!!!!')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ara155'],
  permLevel: 0
};

exports.help = {
  name: 'ara155',
  description: 'Polisi Arar (ciddiye almayın)',
  usage: 'ara155'
};
