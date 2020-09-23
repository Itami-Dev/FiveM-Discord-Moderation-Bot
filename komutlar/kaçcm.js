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



	}







	let timeout = 30000

		let dalga = await db.fetch(`dalga_${message.author.id}`);





   let dalgasure = await db.fetch(`dalgasure_${message.author.id}`);

    if (dalgasure !== null && timeout - (Date.now() - dalgasure) > 0) {
        let time = ms(timeout - (Date.now() - dalgasure));

        message.channel.send(`Zaten yeni dalgayı yordun! Yeniden yapmak için birazcık bekle **${time.seconds}saniye** içerisinde yeniden kaldırabilirsin!`)
    }




	let golddurum = db.fetch(`tios_gold${message.author.id}`)

	if (golddurum === 'gold') {






   message.channel.send('Hemen Diyorum Abi 1 Saniye..').then(message => {
   var espriler = [' **Senin Malafatın  18CM ** :eggplant: ' ,'**Senin Malafatın  11CM ** :eggplant:' ,'**Senin Malafatın 32CM  ** :eggplant:' ,'**Senin Malafatın  35CM ** :eggplant:' ,'**Senin Malafatın  8CM  ** :eggplant:' ,'**Senin Malafatın  65CM  ** :eggplant:' ,'**Senin Malafatın 5CM  ** :eggplant:' ,'**Senin Malafatın 31CM  ** :eggplant:' ,'**Senin Malafatın  14CM ** :eggplant:' ,'**Senin Malafatın  1CM ** :eggplant:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
				db.set(`dalgasure_${message.author.id}`, Date.now())

	return
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
  aliases: ['kaçcm', 'cmkaç', 'kaç-cm', 'cm-kaç'],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'Malafatını Söyler.',
  usage: 'kaçcm'
};
