const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs');






exports.run = async (bot, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`gecekondu` adlı komutu özel mesajlarda kullanamazsın.')
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



   	let author = await db.fetch(`money_${message.author.id}`)

let ev = 60000;
let adet = 1;

 let golddurum = db.fetch(`tios_gold${message.author.id}`)






  if (author > 60000) {



  db.add(`gecekondu_${message.author.id}`, adet)


  message.channel.send(`**${message.author.username}** kullanıcısı **60.000** coin harcayarak **GeceKondu** satın aldı!`)


 db.subtract(`money_${message.author.id}`, ev)


  }

  else {

	  message.channel.send(`**${message.author.username}** Üzgünüm, 60.000 coin'e sahip değilsin!`)
  }



  }





exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gecekondu'],
  permLevel: 0
};
exports.help = {
  name: 'gecekondu',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
