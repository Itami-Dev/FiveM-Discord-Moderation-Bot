const Discord = require("discord.js");
const db = require('quick.db')
module.exports.run = async (client, message, args) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`çeviri` adlı komutu özel mesajlarda kullanamazsın.')
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






    let store = args.slice(0).join('%20');

        let link = `https://translate.google.com/?hl=tr#tr/en/` + store;
        if(!store)return message.channel.send("Lütfen çevirmek istediğin yazıyı yaz.")
        if(!link)return message.channel.send("Algılanamadı.")
        let embed = new Discord.RichEmbed()

    .setColor("RED")
    .setTimestamp()
    .addField("Kelime:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
    .setFooter("Çeviri");

    message.channel.send(embed);

}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çevir', 'çeviri'],
  permLevel: 0
};

exports.help = {
  name: 'çeviri',
  description: 'Mevcut olan çeviriyi gösterir.',
  usage: 'çeviri'
};
