const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {

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


  let yilbasi = new Date('2021-01-01:00:00')
    let zaman = ms(yilbasi - Date.now())
    message.channel.send(`Yılbaşına Girmemize **${zaman.days}** Gün **${zaman.hours}** Saat **${zaman.minutes}** Dakika Kaldı! **Fakat Yılbaşı Bize Hergün Giriyor.**`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yeniyıl', 'yilbaşi', 'yılbası', 'yılbasi', 'yilbası'],
  permLevel: 0
};

exports.help = {
  name: 'yeniyıl',
  description: '',
usage: ""
};
