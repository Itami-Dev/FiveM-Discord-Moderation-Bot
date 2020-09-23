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
  .addField(':warning: Uyarı :warning:', '`tofaş` adlı komutu özel mesajlarda kullanamazsın.')
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

let araba = 13000;
let adet = 1;

 let golddurum = db.fetch(`tios_gold${message.author.id}`)






  if (author > 13000) {



  db.add(`tofas_${message.author.id}`, adet)


  message.channel.send(`**${message.author.username}** kullanıcısı **13.000** coin harcayarak **TOFAŞ** satın aldı!`)


 db.subtract(`money_${message.author.id}`, araba)


  }

  else
  {
	  message.channel.send(`**${message.author.username}** Üzgünüm, 13000 coin'e sahip değilsin!`)
  }








}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tofaş'],
  permLevel: 0
};
exports.help = {
  name: 'tofaş',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
