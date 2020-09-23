const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs');




exports.run = async (bot, message, args) => {




	let author = await db.fetch(`money_${message.author.id}`)

let isiyan = 10000;

 let odulsistemi_ = require("quick.db").fetch(`odulsistemi_${message.guild}`) // ${client.guild}



  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ışıyan` adlı komutu özel mesajlarda kullanamazsın.')
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



  if (odulsistemi_ == 'aç' ) {




  if (author > 10000) {
         message.channel.send(`**:warning: | ${message.author.username}** kullanıcısı **10.000** coine ulaşarak **IŞIYAN** rolünü satın aldı!`)
  var role = message.guild.roles.find(role => role.name === "Işıyan");
  message.member.addRole(role);

    db.subtract(`money_${message.author.id}`, isiyan)



}







if (author < 10000) {
         message.channel.send(`**:warning: | ${message.author.username}** Henüz 10.000 coine sahip değilsin! Biraz daha çabalaman gerekiyor`)




}





  }

   else
  {
	  return	 message.channel.send(`:warning: | Sunucunuzda **Ödül Sistemi** henüz aktifleştirilmemiş. Lütfen yetkiliye ulaşın!`);
  }



}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ışıyan'],
  permLevel: 0
};
exports.help = {
  name: 'ışıyan',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
