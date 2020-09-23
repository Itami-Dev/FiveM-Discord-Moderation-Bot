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
  .addField(':warning: Uyarı :warning:', '`hızlıyaz` adlı komutu özel mesajlarda kullanamazsın.')
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


	        let amount = Math.floor(Math.random() * 10000000000000) + 1; // 1-500 random number. whatever you'd like



			var facts = ["araba", "şizofrenik", "şanzımancılar", "doktoreldiveni", "kaldırımtaşı", "arabakornası", "muslukborusu", "yeşilelma", "karnıyarık", "arapatı", "kapınınarkasındakiadam", "güvenlikgörevlisi", "SUNUCUİSİMİ", "Lunar", "MahmutAbi", "Bardak"];
             var fact = Math.floor(Math.random() * facts.length);

      var kelime = facts[Math.floor(Math.random() * facts.length)];

	  		db.set(`cevap${message.author.id}`, kelime)



  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor("Resimdeki kelimeyi 6 saniye içerisinde yaz!")
  .setImage("https://dummyimage.com/2000x500/33363c/ffffff&text=" + kelime)
  .setFooter("s!cevap sayı");

  message.channel.send(embed)


  .then(msg => {
    msg.delete(6000)
  })

   setTimeout(() => {


         let embedi = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`<a:eglence:738137490187354212> Oyun sona erdi!`)
  .setFooter("SUNUCUİSİMİ Gold Üye Komutları");

  message.channel.send(embedi)

   .then(msg => {
    msg.delete(4000)
  })



	  		db.set(`cevap${message.author.id}`, 6666666666666666666666666666)



      }, 6000)




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
  aliases: ["hızlıyaz"],
  permLevel: 0
};

exports.help = {
  name: "hızlıyaz",
  description: "Bulunduğunuz sunucuya nah gifi atar.",
  usage: "hızlıyaz"
};
