const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs');






exports.run = async (bot, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`rehineal` adlı komutu özel mesajlarda kullanamazsın.')
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



 let kullanici = message.mentions.members.first()


		if (!kullanici) {
        return message.channel.send('Birini etiketlemeyi unuttun!')
    }


   	let author = await db.fetch(`money_${message.author.id}`)

let tabanca = 100000;
let adet = `deaktif`;

 let golddurum = db.fetch(`tios_gold${message.author.id}`)



	let kontrol = await db.fetch(`tabanca_${kullanici.id}`)


  if (author > 100000) {


  if (kontrol === 'deaktif' || kontrol === null) {


	  message.channel.send("**Soymaya çalıştığın kullanıcının zaten bir tabancası yok!**")

	  return;

  }

  else

	  {







  db.set(`tabanca_${kullanici.id}`, 'deaktif')


  message.channel.send(`**${message.author.username}** kullanıcısı **100.000** coin harcayarak düşmanını **Rehine aldı ve silahına el koydu!** Burada işler **${message.author.username}** dan sorulur!`)


 db.subtract(`money_${message.author.id}`, tabanca)


	  }


  }

  else
  {
	  message.channel.send(`**${message.author.username}** Üzgünüm, 100.000 coin'e sahip değilsin!`)
  }








}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rehineal'],
  permLevel: 0
};
exports.help = {
  name: 'rehineal',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
