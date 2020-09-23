const Discord = require("discord.js")
const db = require('quick.db')
exports.run = (bot, message) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ballasgang` adlı komutu özel mesajlarda kullanamazsın.')
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





    const embed = new Discord.RichEmbed()



	 .setColor('#9a34d9')
	 .setTitle("  Ballas Gang Başvuru Formu", `https://cdn.discordapp.com/attachments/731789663077138463/734228254545805312/CElgwU7WEAAwOR2_format3Dpng26name3Dsmall.png`)
     .setDescription(`Ballas Gang'e katılmak için aşşağıda ki başvuru formunu doldurup **bu kanala** gönderiniz!`)
	 .addField("💂‍ Ad ve Soyadınız :", `IC`, false)
	 .addField("🔷 Yaşınız :", `OOC`, false)
    .addField("⏳ FiveM Saatiniz:", `OOC`, false)
	.addField("💪 Çete Deneyiminiz:", `OOC`, false)
	.addField("⏲ Aktiflik Süreniz:", `OOC`, false)
	.addField("⚜ Gang Hikayesini Kabul Ediyormusun..?:", `OOC`, false)
	.addField("❓ Neden Ballas Gang? :", `OOC`, false)
	.setImage("https://forum.eclipse-rp.net/uploadsnew/monthly_2017_06/23l15yc.png.a1e591d378e116e98a0b8732a05bec1e.png")
	.setFooter("SUNUCU İSİMİ Ballas Gang Başvuru Formu | Maded By Itami")
    message.channel.send({embed});

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ballasbasvuru'],
  permLevel: 3,
};

exports.help = {
  name: "ballasbasvuru",
  description: "Shows all the servers the bot is in.",
  usage: "ballasbasvuru"
};
