const Discord = require("discord.js");
const db = require('quick.db')
const ms = require('parse-ms')
const client = new Discord.Client();



exports.run = (client, message) => {



		if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`burcum` adlı komutu özel mesajlarda kullanamazsın.')
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



  message.channel.send("❕Lütfen Biraz Bekle Burcunu Bulmaya Çalışıyorum...").then(message => {
    var burçlar = [
      "🦂 Senin Burcun:Akrep",
      "⚖ Senin Burcun:Terazi",
      "🦀 Senin Burcun:Yengeç",
      "🐏 Senin Burcun:Koç",
      "🐂 Senin Burcun:Boğa",
      "🐟 Senin Burcun:Balık",
      "🐐 Senin Burcun:Oğlak",
      "👼 Senin Burcun:İkizler",
      "🦁 Senin Burcun:Aslan",
      "🏹 Senin Burcun:Yay",
      "🌾 Senin Burcun:Başak",
      "🌊 Senin Burcun:Kova",
      "😭 Şansızsın Burcun Yokmuş",
      "😢 Burcunu Yok Ettiler",
      "😟 Doğuştan Burcun Yok"
    ];
    var burç = burçlar[Math.floor(Math.random() * burçlar.length)];
    message.edit(`${burç}`);
  });

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
  aliases: ["burcum"],
  permLevel: 0
};

exports.help = {
  name: "burç",
  description: "Burcunuzu Bulmaya Çalışır.",
  usage: "burç"
};
