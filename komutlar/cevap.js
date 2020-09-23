const Discord = require("discord.js");
const db = require('quick.db')
const ms = require('parse-ms')
const client = new Discord.Client();








exports.run = (client, message, args) => {



		if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`cevap` adlı komutu özel mesajlarda kullanamazsın.')
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







		  message.delete(500);



	let golddurum = db.fetch(`tios_gold${message.author.id}`)


	if (golddurum === 'gold') {

	   let txt = args.join('+');
  if(!args[0]) return message.channel.send("Lütfen kelimeyi yazın!");


	let cevap = db.fetch(`cevap${message.author.id}`)


if (cevap == txt) {





  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`<a:boost:721657570036809748> Tebrikler! Başarıyla oyunu kazandınız!`)

  message.channel.send(embed)

  .then(msg => {
    msg.delete(6000)
  })


}
else {


  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`<a:ck:737967289206571020> Ne yazık ki böyle bir şey söylemedim!`)
  message.channel.send(embed)

	.then(msg => {
    msg.delete(4000)
  })
}

	}

	else

		{
				 let embed = new Discord.RichEmbed()
		 .setTitle("Gold Üyelik Gerekiyor!")
        .setDescription("Bunun gibi **Gold Üyelik** gerektiren komutları kullanmak için **s!bakiyeyardım** komutunu kullanarak gold üyelik alman gerekiyor! ")
        .setColor("RANDOM")

		 message.channel.send(embed)


		}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cevap"],
  permLevel: 0
};

exports.help = {
  name: "cevap",
  description: "Bulunduğunuz sunucuya nah gifi atar.",
  usage: "cevap"
};
