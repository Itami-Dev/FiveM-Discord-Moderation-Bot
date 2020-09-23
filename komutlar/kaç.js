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
  .addField(':warning: Uyarı :warning:', '`kaç` adlı komutu özel mesajlarda kullanamazsın.')
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

let kac = 700;
let adet = 1;

 let golddurum = db.fetch(`tios_gold${message.author.id}`)






  if (author > 700) {



  db.add(`kac_${message.author.id}`, adet)


  message.channel.send(`**${message.author.username}** kullanıcısı **700** coin harcayarak **1 Adet Kaçma Hakkı** satın aldı! Onu birisi soymaya çalışırsa şimşek hızıyla oradan uzaklaşacak!`)


 db.subtract(`money_${message.author.id}`, kac)


  }

  else
  {
	  message.channel.send(`**${message.author.username}** Üzgünüm, 700 coin'e sahip değilsin!`)
  }








}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaç'],
  permLevel: 0
};
exports.help = {
  name: 'kaç',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
