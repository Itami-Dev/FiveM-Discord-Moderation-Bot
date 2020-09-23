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
  .addField(':warning: Uyarı :warning:', '`tabanca` adlı komutu özel mesajlarda kullanamazsın.')
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

let tabanca = 70000;
let adet = `aktif`;

 let golddurum = db.fetch(`tios_gold${message.author.id}`)






  if (author > 70000) {



  db.set(`tabanca_${message.author.id}`, 'aktif')


  message.channel.send(`**${message.author.username}** kullanıcısı **70.000** coin harcayarak **TABANCA** satın aldı! Bundan sonra onu kimse soyamaz!`)


 db.subtract(`money_${message.author.id}`, tabanca)


  }

  else
  {
	  message.channel.send(`**${message.author.username}** Üzgünüm, 70.000 coin'e sahip değilsin!`)
  }








}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tabanca'],
  permLevel: 0
};
exports.help = {
  name: 'tabanca',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
