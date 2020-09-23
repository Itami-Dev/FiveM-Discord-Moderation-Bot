const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args, config) => {




	if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`instagram` adlı komutu özel mesajlarda kullanamazsın.')
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



	 let hesapismi = args.slice(0).join(' ');


	let golddurum = db.fetch(`tios_gold${message.author.id}`)

	if (golddurum === 'gold') {







    if (hesapismi.length < 1) return message.reply(' :warning: | **Lütfen hesabının ismini belirt!**');





     let instagram = db.fetch(`instagram_${message.author.id}`)
     db.set(`instagram_${message.author.id}`, hesapismi)

      message.channel.send(`${message.author.tag}, Başarıyla Instagram hesabının isimini güncelledim!`)


	}
	else {

		 let embed = new Discord.RichEmbed()
		 .setTitle("Gold Üyelik Gerekiyor!")
        .setDescription("Bunun gibi **Gold Üyelik** gerektiren komutları kullanmak için **s!bakiyeyardım** komutunu kullanarak gold üyelik alman gerekiyor! ")
        .setColor("RANDOM")

		 message.channel.send(embed)

	}


}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'instagram',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
