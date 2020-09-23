const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {




	if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kayıtdurum` adlı komutu özel mesajlarda kullanamazsın.')
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



	  let kayitrol = db.fetch(`kayityetki${message.guild.id}`)
	  	  let erkek = db.fetch(`erkek${message.guild.id}`)
		  	  	  let kiz = db.fetch(`kiz${message.guild.id}`)
				  		  	  	  let erkeksayi = db.fetch(`erkeksayi${message.guild.id}`)
								  				  		  	  	  let kizsayi = db.fetch(`kizsayi${message.guild.id}`)
																  								  				  		  	  	  let kayitsiz = db.fetch(`kayitsiz${message.guild.id}`)






    if (kayitrol === null) {

		db.set(`kayityetki${message.guild.id}`, 'Belirtilmedi!')

	}

	 if (erkek === null) {

		db.set(`erkek${message.guild.id}`, 'Belirtilmedi!')

	}

		 if (kiz === null) {

		db.set(`kiz${message.guild.id}`, 'Belirtilmedi!')

	}

		 if (kayitsiz === null) {

		db.set(`kayitsiz${message.guild.id}`, 'Belirtilmedi!')

	}


	if (erkeksayi === null) {

		db.set(`erkeksayi${message.guild.id}`, 0)

	}

		if (kizsayi === null) {

		db.set(`kizsayi${message.guild.id}`, 0)



			 let embedonbes = new Discord.RichEmbed()
		 .setTitle("SUNUCUİSİMİ Spam Koruması")
        .setDescription("Lütfen komutu yeniden yazınız! ")
        .setColor("RANDOM")
				.setFooter("SUNUCUİSİMİ Kayıt Sistemi")
		 message.channel.send(embedonbes)
		 return

	}





		 let embed = new Discord.RichEmbed()
        .setTitle(`<a:yas:737967291983069204> ${message.guild.name} Sunucusu Kayıt Durumu`)

        .setDescription(`<a:boost:721657570036809748> **Kayıt Görevlisi:** <@&${kayitrol}> \n <a:hypesquad:696791323621195898> **Kayıtsız Üye Rolü:** <@&${kayitsiz}> \n <a:hypesquad:696791323621195898> **Erkek Üye Rolü:** <@&${erkek}>  \n <a:hypesquad:696791323621195898> **Kız Üye Rolü:** <@&${kiz}> \n <a:isilti:695743278104051733> **Kayıt Edilen Erkek Üye Sayısı:** **${erkeksayi}** \n <a:odin:637704011713347615> **Kayıt Edilen Kız Üye Sayısı:** **${kizsayi}**`)
				.setThumbnail(message.guild.iconURL)

        .setColor("RANDOM")
		.setFooter("SUNUCUİSİMİ Özelleştirilebilir Kayıt Sistemi")
		 message.channel.send(embed)








}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'kayıtdurum',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
