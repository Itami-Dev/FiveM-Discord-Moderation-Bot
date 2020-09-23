const Discord = require("discord.js")
const db = require('quick.db')
exports.run = (bot, message) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`grovegang` adlı komutu özel mesajlarda kullanamazsın.')
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



	 .setColor('#15ff00')
	 .setAuthor("Groove St.", "https://pngimage.net/wp-content/uploads/2018/06/grove-png-1.png")
	 .setTitle("Grove Street Başvuru Formu", `https://cdn.discordapp.com/attachments/731789663077138463/734228254545805312/CElgwU7WEAAwOR2_format3Dpng26name3Dsmall.png`)
     .setDescription(`Grove Street'e katılmak için aşşağıda ki başvuru formunu doldurup **bu kanala** gönderiniz!`)
	 .addField("<a:silah:737967289864945676> Ad ve Soyadınız :", `IC`, false)
	 .addField("<a:yas:737967291983069204> Yaşınız :", `OOC`, false)
	 	 .addField("<a:720345417870737528:722252756634697778> Fivem Saatiniz :", `OOC`, false)
	 .addField("<a:aktif:736155789000966177> Çete Deneyiminiz :", `OOC`, false)

    .addField("<a:gunluksaat:737967289428869160> Günlük Aktifliğiniz:", `OOC`, false)
	.addField("<a:yesil:737967289885786192> Neden Green Street Family? :", `OOC`, false)
	.addField("<a:nedengrove:737967288686346271> Çete hikayesini kabul ediyor musun? :", `OOC`, false)
	.setImage("https://img.funky-emu.net/uploads/043711OGF-2Pac%5D.png")
	.setFooter("SUNUCU İSİMİ Grove Street Başvuru Formu | Maded By Itami")
    message.channel.send({embed});

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['grovebasvuru'],
  permLevel: 3,
};

exports.help = {
  name: "grovebasvuru",
  description: "Shows all the servers the bot is in.",
  usage: "grovebasvuru"
};
