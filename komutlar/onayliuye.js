const Discord = require("discord.js");
const db = require('quick.db')
const ms = require('parse-ms')
var Jimp = require('jimp');
const client = new Discord.Client();





exports.run = (client, message) => {



		if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`goldsertifika` adlı komutu özel mesajlarda kullanamazsın.')
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

	  var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;

    message.channel.send(`:timer: | Fotoğraf hazırlanıyor, lütfen bekleyin.`).then(m => m.delete(1000));

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://cdn.discordapp.com/attachments/738734252887244884/746152831454806148/onayli.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 1, 0).write(`./img/onayliuye/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/onayliuye/${client.user.id}-${user.id}.png`));
        }, 1000);
    });

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
  aliases: ["onayliuye"],
  permLevel: 0
};

exports.help = {
  name: "onayliuye",
  description: "Bulunduğunuz sunucuya nah gifi atar.",
  usage: "onayliuye"
};
