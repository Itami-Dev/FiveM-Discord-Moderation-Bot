const Discord = require("discord.js");
const db = require('quick.db')
const ms = require('parse-ms')
const client = new Discord.Client();








exports.run = (client, message, args) => {



		if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`banner` adlı komutu özel mesajlarda kullanamazsın.')
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





   let txt = args.join('+');
  if(!args[0]) return message.channel.send("Lütfen yazı yazın!");

  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor("Banner!")
  .setImage("https://dummyimage.com/2000x500/33363c/ffffff&text=" + txt)
  .setFooter("Banner Oluşturuldu!");

  message.channel.send(embed);

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
  aliases: ["banner"],
  permLevel: 0
};

exports.help = {
  name: "banner",
  description: "Bulunduğunuz sunucuya nah gifi atar.",
  usage: "banner"
};
