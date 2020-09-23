const Discord = require("discord.js")
const db = require('quick.db')
exports.run = (bot, message) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`lspdbasvuru` adlı komutu özel mesajlarda kullanamazsın.')
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



	 .setColor('#ffaa00')
	 .setTitle("LSPD Başvuru Formu", `https://pngimage.net/wp-content/uploads/2018/06/grove-png-1.png`)
     .setDescription(`LSPD'ye katılmak için aşşağıda ki başvuru formunu doldurup **bu kanala** gönderiniz!`)
	 .addField("<:polis:750486346371694685> Ad ve Soyadınız :", `IC`, false)
	 .addField("<a:isilti:750486347688575047> Yaşınız :", `OOC`, false)
	 	 .addField("<a:yas:737967291983069204> Fivem Saatiniz :", `OOC`, false)
	 .addField("<a:720345417870737528:722252756634697778> Polislik Deneyiminiz :", `OOC`, false)

    .addField("<a:gunluksaat:737967289428869160> Günlük Aktifliğiniz:", `OOC`, false)
	.addField("<a:alarm:750486347516477472> Neden LSPD? :", `OOC`, false)
	.addField("<a:nedengrove:737967288686346271> LSPD Ağır Bir Roldür, Bunun Farkında mısın? :", `OOC`, false)
	.setImage("https://i4.hurimg.com/i/hurriyet/75/770x0/5aeb02d218c77317a4dc544e")
	.setFooter("SUNUCU İSİMİ LSPD Başvuru Formu | Maded By Itami")
    message.channel.send({embed});

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['lspdbasvuru'],
  permLevel: 3,
};

exports.help = {
  name: "lspdbasvuru",
  description: "Shows all the servers the bot is in.",
  usage: "lspdbasvuru"
};
