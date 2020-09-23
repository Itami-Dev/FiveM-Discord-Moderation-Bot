const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {




	if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`golddurum` adlı komutu özel mesajlarda kullanamazsın.')
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




	let user = message.mentions.members.first()

    let golddurum = db.fetch(`tios_gold${user.id}`)

		if (!user) {
        return message.channel.send('Birini etiketlemeyi unuttun!')
    }


    if (golddurum === null) {


		 let embed = new Discord.RichEmbed()
        .addField("Gold Üyelik: ", "Devre Dışı!")
        .setColor("RANDOM")

		 message.channel.send(embed)

	}

	if (golddurum === 'gold') {

		 let embed = new Discord.RichEmbed()
        .addField("Gold Üyelik: ", "Aktif!")

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
  name: 'goldgör',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
