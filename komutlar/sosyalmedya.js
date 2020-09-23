const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args, config) => {





		if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sosyalmedya` adlı komutu özel mesajlarda kullanamazsın.')
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


	  let instagram = db.fetch(`instagram_${message.author.id}`)

    if (instagram === null) {

		db.set(`instagram_${message.author.id}`, 'Belirtilmedi!')

	}


	 let facebook = db.fetch(`facebook_${message.author.id}`)

    if (facebook === null) {

		db.set(`facebook_${message.author.id}`, 'Belirtilmedi!')

	}


	  let telegram = db.fetch(`telegram_${message.author.id}`)

    if (telegram === null) {

		db.set(`telegram_${message.author.id}`, 'Belirtilmedi!')

	}


	 let twitter = db.fetch(`twitter_${message.author.id}`)

    if (twitter === null) {

		db.set(`twitter_${message.author.id}`, 'Belirtilmedi!')


			 let embedonbes = new Discord.RichEmbed()
		 .setTitle("SUNUCUİSİMİ Spam Koruması")
        .setDescription("Lütfen komutu yeniden yazınız! ")
        .setColor("RANDOM")

		 message.channel.send(embedonbes)
		 return

	}







	let golddurum = db.fetch(`tios_gold${message.author.id}`)

	if (golddurum === 'gold') {


	 const instalink = `https://www.instagram.com/${instagram}`




		 let embed = new Discord.RichEmbed()
        .setTitle("Belirttiğiniz Sosyal Medya Hesaplarınız")
        .addField("<:instagram:745970022148735006> Instagram: ", instagram+` <a:720345417870737528:722252756634697778>[ Profil Linki](https://www.instagram.com/${instagram})`)
		.addField("<:facebook:745970021859328001> Facebook: ", facebook+` <a:720345417870737528:722252756634697778>[ Profil Linki](https://www.facebook.com/${facebook})`)
		.addField("<:telegram:745970021838356570> Telegram: ", telegram)
		.addField("<:twitter:314349922877046786> Twitter: ", twitter+` <a:720345417870737528:722252756634697778>[ Profil Linki](https://twitter.com/${twitter})`)
        .setColor("#9900ff")
		.setFooter(`${message.author.tag} adlı kullanıcının sosyal medya hesaplarıdır!`)
		 message.channel.send(embed)








	return
 }




	else
	{

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
  aliases: ['sosyalmedya'],
  permLevel: 0
};

exports.help = {
  name: 'sosyalmedya',
  description: 'Sosyal medya hesaplarınızı gösterir.',
  usage: 'sosyalmedya'
};
