const Discord = require("discord.js")
const db = require('quick.db')
exports.run = (bot, message) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`bakim` adlı komutu özel mesajlarda kullanamazsın.')
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
	 .setAuthor('Sunucu Durumu', 'https://i.hizliresim.com/xCcNdN.png')
	 .setTitle("Bakımdayız! Sunucuya Giriş Yapmayın!")
     .setDescription(` <a:yukleniyor:747526754218016919> Sunucumuz şuanda **bakım** moduna alınmıştır! **Aktif** yazısı geçilmeden lütfen oyuna giriş yapmayınız, yakın zamanda sizle olucağız!`)
	.setImage("https://mir-s3-cdn-cf.behance.net/project_modules/disp/b6e0b072897469.5bf6e79950d23.gif")
	.setFooter("ROLEPLAY SUNUCUSU İSİMİ Bakım Duyuru Sistemi | Maded By Itami")
    message.channel.send({embed});
return;

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakim'],
  permLevel: 0,
};

exports.help = {
  name: "bakim",
  description: "Shows all the servers the bot is in.",
  usage: "bakim"
};
