const Discord = require('discord.js')
const db = require('quick.db')
exports.run = (client, message, args) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`emojiler` adlı komutu özel mesajlarda kullanamazsın.')
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







	try {
		const embed = new Discord.RichEmbed()
			.addField(`Sunucuda Bulunan Emojiler`, message.guild.emojis.map(emoji => emoji).join(' | '))
			.setColor(0x00ffff)
			.setTimestamp()
		message.channel.send({embed})
	} catch (err) {
		const embed = new Discord.RichEmbed()
			.addField(`Sunucuda Bulunan Emojiler`, 'Üzgünüm ama sunucunuzda ya çok fazla emoji bulunuyor ya da hiç emoji bulunmuyor. Bunları gösteremiyorum. Discord buna izin vermiyor.')
			.setColor(0x00ffff)
			.setTimestamp()
		message.channel.send({embed})
	}
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0,
	kategori: 'kullanıcı'
}

exports.help = {
	name: 'emojiler',
	description: 'Sunucuda bulunan emojileri gösterir.',
	usage: 'emojiler'
}
