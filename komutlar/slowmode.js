const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sayac` adlı komutu özel mesajlarda kullanamazsın.')
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


	if(!args[0]) {
		const embed = new Discord.RichEmbed()
			.setDescription(`Lütfen bir sayı yazın!`)
			.setColor("RED")
			.setTimestamp()
		message.channel.send({embed})
		return
  }

	let profil = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send("kanal seç");


	if(args[0] === "sıfırla") {
		if(!profil[message.guild.id]) {
			const embed = new Discord.RichEmbed()
				.setDescription(`Ayarlanmayan şeyi sıfırlayamazsın!`)
				.setColor("RANDOM")
				.setTimestamp()
			message.channel.send({embed})
			return
		}
		delete profil[message.guild.id]
		fs.writeFile("./ayarlar/sayac.json", JSON.stringify(profil), (err) => {
			console.log(err)
		})
		const embed = new Discord.RichEmbed()
			.setDescription(`Sayaç başarıyla sıfırlandı!`)
			.setColor("RANDOM")
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(isNaN(args[0])) {
		const embed = new Discord.RichEmbed()
			.setDescription(`Lütfen bir sayı yazın!`)
			.setColor("RANDOM")
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(args[0] <= message.guild.memberCount) {
		const embed = new Discord.RichEmbed()
			.setDescription(`Lütfen sunucu sayısından [${message.guild.memberCount}] daha yüksek bir değer girin!`)
			.setColor("RANDOM")
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(!profil[message.guild.id]){
		profil[message.guild.id] = {
			sayi: args[0],
      kanal: mentionedChannel.id
		};
	}

	profil[message.guild.id].sayi = args[0]
  profil[message.guild.id].kanal = mentionedChannel.id

	fs.writeFile("./ayarlar/sayac.json", JSON.stringify(profil), (err) => {
		console.log(err)
	})

	const embed = new Discord.RichEmbed()
		.setDescription(`Sayaç başarıyla ${args[0]} olarak ayarlandı!\nSayaç kanalı başarıyla ${mentionedChannel} olarak ayarlandı`)
		.setColor("RANDOM")
		.setTimestamp()
	message.channel.send({embed})
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['sayacayarla', 'sayac', 'sayaç'],
	permLevel: 2
}

exports.help = {
	name: 'sayaç-ayarla',
	description: 'Sayacı ayarlar.',
	usage: 'sayaç [sayı/sıfırla] [kanal]'
}
