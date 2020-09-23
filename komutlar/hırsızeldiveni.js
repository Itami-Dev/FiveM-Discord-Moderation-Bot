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
  .addField(':warning: Uyarı :warning:', '`hırsızeldiveni` adlı komutu özel mesajlarda kullanamazsın.')
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

let hirsizeldiveni = 200;

 let hirsiz = db.fetch(`hirsiz_${message.author.id}`)

 if (hirsiz === 'aktif') {

	  message.channel.send(`**${message.author.username}**, hesabınızda zaten **Hırsız Eldiveni** bulunuyor! `)

	 return

 }



  if (author > 200) {



  db.set(`hirsiz_${message.author.id}`, 'aktif')


  message.channel.send(`**${message.author.username}** kullanıcısı **200** coin harcayarak **Hırsız Eldiveni** satın aldı!`)


 db.subtract(`money_${message.author.id}`, hirsizeldiveni)


  }

  else
  {
	  message.channel.send(`**${message.author.username}** Üzgünüm, 200 coin'e sahip değilsin!`)
  }








}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hırsızeldiveni'],
  permLevel: 0
};
exports.help = {
  name: 'hırsızeldiveni',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
