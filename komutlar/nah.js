const Discord = require("discord.js");
const db = require('quick.db')
const ms = require('parse-ms')
const client = new Discord.Client();



const resim = ['https://i.pinimg.com/originals/09/2d/9c/092d9c3ced8534dfa17ea451b640e874.gif',

'https://thumbs.gfycat.com/ImpassionedHotCattle-size_restricted.gif' ,

'https://media1.tenor.com/images/b04254eec0ca1a3cddd9f570a3687b30/tenor.gif?itemid=17077586' ,

'https://i.makeagif.com/media/8-19-2019/Gqmpcf.gif' ,

'https://media1.tenor.com/images/6d51712931cc331f21a7c80d0a936e84/tenor.gif?itemid=17243509' ,

'https://galeri13.uludagsozluk.com/636/gecenin-gif-i_1473239.gif' ,

'https://i.makeagif.com/media/3-01-2016/txv1Li.gif' ,

'https://thumbs.gfycat.com/WeightyLazyBeaver-size_restricted.gif' ,

'https://galeri13.uludagsozluk.com/704/recep-ivedik_1520673.gif' ,

'https://37.media.tumblr.com/tumblr_m2jivqzZXG1ro330po1_500.gif' ,



]



exports.run = (client, message) => {



		if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`nah` adlı komutu özel mesajlarda kullanamazsın.')
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


	let golddurum = db.fetch(`tios_gold${message.author.id}`)

	if (golddurum === 'gold') {



 message.channel.send(

  new Discord.RichEmbed()

  .setColor("RANDOM")

  .setTitle("Tabi ki kardeşim buyur!")

  .setImage(resim[Math.floor(Math.random() * resim.length)])

  .setFooter(message.guild.name, client.user.avatarURL)

  .setTimestamp()

  )


	}

	else

		{
				 let embed = new Discord.RichEmbed()
		 .setTitle("Gold Üyelik Gerekiyor!")
        .setDescription("Bunun gibi **Gold Üyelik** gerektiren komutları kullanmak için **s!bakiyeyardım** komutunu kullanarak gold üyelik alman gerekiyor! ")
        .setColor("RANDOM")

		 message.channel.send(embed)


		}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nah"],
  permLevel: 0
};

exports.help = {
  name: "nah",
  description: "Bulunduğunuz sunucuya nah gifi atar.",
  usage: "nah"
};
