const Discord = require("discord.js");
const db = require('quick.db')
const ms = require('parse-ms')
const client = new Discord.Client();


exports.run = async (client, message, args, color) => {


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

    let start = Date.now(); message.channel.send('♻ Yükleniyor!').then(message => {


    let diff = (Date.now() - start);
    let API = (client.ping).toFixed(2)




		   let txt = (`${API}`);


  if (txt > 280)  {

  let embed = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setAuthor("Yüksek Gecikme!")
  .setImage("https://dummyimage.com/2000x500/33363c/f00014&text=" + txt)
  .setFooter("SUNUCUİSİMİ Ping Göstergesi");

  message.channel.send(embed);
  return;

  }

  {
	   if(txt > 170) {

		  let embed = new Discord.RichEmbed()
  .setColor("#ffe100")
  .setAuthor("Varsayılan Gecikme")
  .setImage("https://dummyimage.com/2000x500/33363c/ffe600&text=" + txt)
  .setFooter("SUNUCUİSİMİ Ping Göstergesi");

  message.channel.send(embed);
  return;


	  }

	  else  {


		  		  let embed = new Discord.RichEmbed()
  .setColor("#2fff00")
  .setAuthor("Düşük Gecikme!")
  .setImage("https://dummyimage.com/2000x500/33363c/00ff00&text=" + txt)
  .setFooter("SUNUCUİSİMİ Ping Göstergesi");

  message.channel.send(embed);


	  }

	}})

	}







exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p', 'pong', 'uptime',],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun Pingini Gösterir !',
  usage: 'ping'
};
