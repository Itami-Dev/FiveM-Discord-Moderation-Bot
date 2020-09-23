
const Discord = require('discord.js')

const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args, config) => {






	if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`bankasoygunu` adlı komutu özel mesajlarda kullanamazsın.')
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




    let author = await db.fetch(`money_${message.author.id}`)

	  let polisabi = Math.floor(Math.random() * 200) + 1;


  let timeout = 604800000

 let bankasoygunu = await db.fetch(`bankasoygunu_${message.author.id}`);

    if (bankasoygunu !== null && timeout - (Date.now() - bankasoygunu) > 0) {
        let time = ms(timeout - (Date.now() - bankasoygunu));

        message.channel.send(`Zaten yakın bi tarihte soygun yaptın! Yeniden yapmak için birazcık bekle **${time.days}gün ${time.hours}saat ${time.minutes}dakika ${time.seconds}saniye** içerisinde yeniden icraate başlayabilirsin!`)
    } else {






	if (polisabi < 160) {

		 let kefalet = 5000


	 let yakalandi = new Discord.RichEmbed()
    .setDescription(`:x: Hey ${message.author}! banka soygunu sonrası kovalamacada polis seni yakaladı!  ${kefalet} coin kefalet ödedin!`)
    .setColor("RED")
    .setTimestamp()
	.setFooter("SUNUCUİSİMİ Hapishane Sistemi")
    message.channel.send(yakalandi)


    db.subtract(`money_${message.author.id}`, kefalet)
	db.set(`bankasoygunu_${message.author.id}`, Date.now())

	return

	}

else {

    let random = 30000


    let embed = new Discord.RichEmbed()
    .setDescription(`:moneybag:  | Hey ${message.author}! banka kasasını başarıyla patlattın ve polisleri atlattın!  ${random} coin kazandın!`)
    .setColor("GREEN")

    .setTimestamp()
    message.channel.send(embed)



    db.add(`money_${message.author.id}`, random)
	db.set(`bankasoygunu_${message.author.id}`, Date.now())
}
	}
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'bankasoygunu',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
