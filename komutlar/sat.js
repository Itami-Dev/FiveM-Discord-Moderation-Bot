
const Discord = require('discord.js')


const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args, config) => {


	if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sat` adlı komutu özel mesajlarda kullanamazsın.')
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

      if (args[0] == null) {


  const embedyardim = new Discord.RichEmbed()
  .setAuthor(` | Coin Paneli`, client.user.avatarURL)
  .setColor(0x00ffff)
      .setDescription(' Satın aldığın eşyaları kar veya zararına bu fiyatlara satabilirsin! ')
			  .addField("s!sat tofaş", "12.000 Coin")
			  .addField("s!sat mercedes", "45.000 Coin")
			  .addField("s!sat gecekondu", "55.000 Coin")
			   .addField("s!sat villa", "130.000 Coin")




	  .setThumbnail(client.user.avatarURL)
      .setFooter('SUNUCUİSİMİ 2. El Sistemi')


      message.channel.send(embedyardim);
	  return;

	  }



if (kurulus < 604800000) {
	  message.channel.send(`Hesabınız **1 haftadan** kısa süre önce oluşturulduğu için bu komutu kullanamazsınız!`)
   return
  }



  let timeout = 600000 // 30 days in milliseconds, change if you'd like.


  let caliszama = await db.fetch(`caliszama_${message.author.id}`);




    if (args[0] == 'tofaş') {

 let tofasdurum = db.fetch(`tofas_${message.author.id}`)

 if (tofasdurum > 0) {

        let tofaspara = 12000

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, Başarıyla aracını sattın ve **$12.000** kazandın!`)
        .setColor("RANDOM")


        message.channel.send(embed)
        db.add(`money_${message.author.id}`, tofaspara)
		db.subtract(`tofas_${message.author.id}`, 1)
 }
		else {

			    let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, Satmak için buna sahip değilsin!`)
        .setColor("RANDOM")


        message.channel.send(embed)

		return;

		}


    } else if(args[0] == 'mercedes') {
       let mercedesdurum = db.fetch(`mercedes_${message.author.id}`)

 if (mercedesdurum > 0) {

        let mercedespara = 45000;

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, Başarıyla aracını sattın ve **$45.000** kazandın!`)
        .setColor("RANDOM")


        message.channel.send(embed)
        db.add(`money_${message.author.id}`, mercedespara)
		db.subtract(`mercedes_${message.author.id}`, 1)
 }
		else {

			    let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, Satmak için buna sahip değilsin!`)
        .setColor("RANDOM")


        message.channel.send(embed)

		return;

		}
    } else if(args[0] == 'gecekondu') {
          let gecekondudurum = db.fetch(`gecekondu_${message.author.id}`)

 if (gecekondudurum > 0) {

        let gecepara = 55000;

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, Başarıyla evini sattın ve **$55.000** kazandın!`)
        .setColor("RANDOM")


        message.channel.send(embed)
        db.add(`money_${message.author.id}`, gecepara)
		db.subtract(`gecekondu_${message.author.id}`, 1)
 }
		else {

			    let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, Satmak için buna sahip değilsin!`)
        .setColor("RANDOM")


        message.channel.send(embed)

		return;

		}
    }

	else if(args[0] == 'villa') {
          let villadurum = db.fetch(`villa_${message.author.id}`)

 if (villadurum > 0) {

        let villapara = 130000;

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, Başarıyla evini sattın ve **$130.000** kazandın!`)
        .setColor("RANDOM")


        message.channel.send(embed)
        db.add(`money_${message.author.id}`, villapara)
		db.subtract(`villa_${message.author.id}`, 1)
 }
		else {

			    let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, Satmak için buna sahip değilsin!`)
        .setColor("RANDOM")


        message.channel.send(embed)

		return;

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
  name: 'sat',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
