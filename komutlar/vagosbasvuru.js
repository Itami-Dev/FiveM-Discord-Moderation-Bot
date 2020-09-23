const Discord = require("discord.js")
const db = require('quick.db')
exports.run = (bot, message) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`vagosgang` adlı komutu özel mesajlarda kullanamazsın.')
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



	 .setColor('#fffb00')
	 .setAuthor("Vagos Gang", "https://forum.eclipse-rp.net/uploadsnew/monthly_2018_09/LosSantosVagos.png.2306ac1bde3fbc19802328f925a20176.png")
	 .setTitle("Vagos Başvuru Formu", `https://cdn.discordapp.com/attachments/731789663077138463/734228254545805312/CElgwU7WEAAwOR2_format3Dpng26name3Dsmall.png`)
     .setDescription(`Vagos Gang'e katılmak için aşşağıda ki başvuru formunu doldurup **bu kanala** gönderiniz!`)
	 .addField("<a:silah:737967289864945676> Ad ve Soyadınız :", `OOC`, false)
	 .addField("<a:silah:737967289864945676>‍ Ad ve Soyadınız :", `IC`, false)
	 .addField("<a:yas:737967291983069204> Yaşınız :", `OOC`, false)
    .addField("<a:gunluksaat:737967289428869160> Günlük Aktifliğiniz:", `OOC`, false)
	.addField("<a:vagos:738442444923863191> Neden Vagos? :", `OOC`, false)
	.setImage("https://i.hizliresim.com/aWHBY6.png")
	.setFooter("SUNUCU İSİMİ Vagos Başvuru Formu | Maded By Itami")
    message.channel.send({embed});

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vagosbasvuru'],
  permLevel: 3,
};

exports.help = {
  name: "vagosbasvuru",
  description: "Shows all the servers the bot is in.",
  usage: "vagosbasvuru"
};
