const Discord = require('discord.js');
const generator = require('generate-password');
const db = require('quick.db')

exports.run = function(client, message, args) {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`şifre` adlı komutu özel mesajlarda kullanamazsın.')
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


    var uzunluk = args.slice(0).join(' ');

    if (!uzunluk) return message.reply('Bir uzunluk belirt. **Doğru Kullanım**: $şifre <uzunluk>')



    var password = ("**Senin için oluşturduğum Rastgele Şifre:** ")+ generator.generate({
        length: uzunluk,
        numbers: true,
    })

    message.author.send(password);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'şifre',
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'şifre <uzunluk>'
};
