const Discord = require("discord.js")
const db = require('quick.db')
exports.run = (bot, message) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`aktif` adlı komutu özel mesajlarda kullanamazsın.')
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




if(!message.member.roles.has("730215164489629806") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Bu komutu kullanabilmek için <@&730215164489629806> yetkisine sahip olmalısın!`);


  message.channel.send(`@everyone | @here`)

    const embed = new Discord.RichEmbed()



	 .setColor('#fff200')
	 .setAuthor('Sunucu Durumu')
	 .setTitle("SUNUCU İSİMİ")
     .setDescription(` <a:aktif:736155789000966177> Sunucumuz şuanda **aktif** duruma geçiş yapmıştır! **serverip** adresi üzerinden sunucumuza bağlanabilir rol yapmaya başlayabilirsiniz! Hepinize iyi oyunlar <a:galp:736155789340966954> `)
	.setImage("https://media1.tenor.com/images/5bfc228a28b469fa63c111add54d123d/tenor.gif?itemid=17235728")
	.setFooter("SUNUCU İSİMİ Aktif Duyuru Sistemi | Maded By Itami")
    message.channel.send({embed});

return;

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aktif'],
  permLevel: 0,
};

exports.help = {
  name: "aktif",
  description: "Shows all the servers the bot is in.",
  usage: "aktif"
};
