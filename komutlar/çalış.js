
const Discord = require('discord.js')


const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args, config) => {


	if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`çalış` adlı komutu özel mesajlarda kullanamazsın.')
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




		  let gullanici = client.users.get(message.author.id);

  const kurulus = new Date().getTime() - gullanici.createdAt.getTime();
  const gün = require("moment-duration-format");

if (kurulus < 604800000) {
	  message.channel.send(`Hesabınız **1 haftadan** kısa süre önce oluşturulduğu için bu komutu kullanamazsınız!`)
   return
  }



  let timeout = 600000 // 30 days in milliseconds, change if you'd like.


  let caliszama = await db.fetch(`caliszama_${message.author.id}`);

 if (caliszama !== null && timeout - (Date.now() - caliszama) > 0) {
        let time = ms(timeout - (Date.now() - caliszama));

        message.channel.send(`Zaten yeni çalıştın birazcık dinlen! **${time.minutes}m ${time.seconds}s** içerisinde yeniden çalışabilirsin!`)
    } else {


    if (args[0] == 'pavyon') {

        let amount = Math.floor(Math.random() * 900) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, pavyonda çalıştın ve  Umut Dinçer'i mutlu ederek ${amount}$ kazandın!`)
        .setColor("RANDOM")


        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
		db.set(`caliszama_${message.author.id}`, Date.now())
    } else if(args[0] == 'mühendis') {
        let amount = Math.floor(Math.random() * 900) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, mühendis olarak çalıştın ve ${amount}$ kazandın!`)
        .setColor("RANDOM")


        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
		db.set(`caliszama_${message.author.id}`, Date.now())
    } else if(args[0] == 'yazılımcı') {
        let amount = Math.floor(Math.random() * 900) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, Epic Games'de yazılımcı olarak çalıştın ve Fortnite'ın açığını fixleyerek ${amount}$ kazandın!`)
        .setColor("RANDOM")


        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
		db.set(`caliszama_${message.author.id}`, Date.now())
    }

	}



    // simple work command
    /*
    let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number.

    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}, it payed off!`, message.author.displayAvatarURL)
    .setDescription(`${message.author}, you've worked and earned ${amount}$ !`)
    .setColor("RANDOM")


    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    */


}




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'çalış',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
