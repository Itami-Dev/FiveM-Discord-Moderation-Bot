const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')
const ms = require('parse-ms')
var figlet = require('figlet');

exports.run = async (client, message, args, config) => {





		if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kaçcm` adlı komutu özel mesajlarda kullanamazsın.')
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








	let timeout = 30000






	let golddurum = db.fetch(`tios_gold${message.author.id}`)

	if (golddurum === 'gold') {



		 var maxLen = 100 // Kendiniz en yüksek harf sayısını ayarlayabilirsiniz

  if(args.join(' ').length > maxLen) return message.channel.send(`En fazla ${maxLen} karakter yazabilirsin!`)

  if(!args[0]) return message.channel.send('Lütfen bir yazı girin...');

  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Bir hata var...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
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




  }



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ascii',
  description: '',
  usage: 'ascii'
};
