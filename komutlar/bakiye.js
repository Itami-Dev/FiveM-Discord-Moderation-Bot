const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {




	if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`bakiye` adlı komutu özel mesajlarda kullanamazsın.')
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








    let bal = db.fetch(`money_${message.author.id}`)

    if (bal === null) bal = 0;


	let villa = db.fetch(`villa_${message.author.id}`)

    if (villa === null) villa = 0;



	let tofas = db.fetch(`tofas_${message.author.id}`)

    if (tofas === null) tofas = 0;


	let mercedes = db.fetch(`mercedes_${message.author.id}`)

    if (mercedes === null) mercedes = 0;


	let gecekondu = db.fetch(`gecekondu_${message.author.id}`)

    if (gecekondu === null) gecekondu = 0;



 let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .addField("Sahip olduğun bakiye: ", bal)
		.addField("Tofaş araç sayın: ", tofas)
		.addField("Mercedes araç sayın: ", mercedes)
		.addField("Gecekondu ev sayın: ", gecekondu)
		.addField("Villa sayın: ", villa)
        .setColor("RANDOM")
		 message.channel.send(embed)


}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'bakiye',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
