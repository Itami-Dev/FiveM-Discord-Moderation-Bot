const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {





	if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`günlük` adlı komutu özel mesajlarda kullanamazsın.')
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





		  let gullanici = client.users.get(message.author.id);

  const kurulus = new Date().getTime() - gullanici.createdAt.getTime();
  const gün = require("moment-duration-format");

  if (kurulus < 604800000) {
	  message.channel.send(`Hesabınız **1 haftadan** kısa süre önce oluşturulduğu için bu komutu kullanamazsınız!`)
  return
  }








	    let amount = 500
    let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.

    // random amount: Math.floor(Math.random() * 1000) + 1;


    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`Zaten günlük hediyeni aldın, **${time.hours}saat ${time.minutes}dakika ${time.seconds}saniye** içerisinde yeniden hediyeni alabilirsin!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`Hediyen`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**Günlük Hediyen**`)
    .addField(`Kazandın!`, amount)

    message.channel.send(embed)

    db.add(`money_${message.author.id}`, amount)
    db.set(`daily_${message.author.id}`, Date.now())

    }


}





exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'günlük',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
