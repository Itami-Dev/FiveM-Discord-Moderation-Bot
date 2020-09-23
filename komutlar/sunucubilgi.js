const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
exports.run = (client, message, args) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
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


	let region = {
			"us-central": "Amerika :flag_us:",
			"us-east": "Doğu Amerika :flag_us:",
			"us-south": "Güney Amerika :flag_us:",
			"us-west": "Batı Amerika :flag_us:",
			"eu-west": "Batı Avrupa :flag_eu:",
			"eu-central": "Avrupa :flag_eu:",
			"singapore": "Singapur :flag_sg:",
			"london": "Londra :flag_gb:",
			"japan": "Japonya :flag_jp:",
			"russia": "Rusya :flag_ru:",
			"hongkong": "Hong Kong :flag_hk:",
			"brazil": "Brezilya :flag_br:",
			"singapore": "Singapur :flag_sg:",
			"sydney": "Sidney :flag_au:",
			"southafrica": "Güney Afrika :flag_za:"
	}
	let kur = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
	}
	const embed = new Discord.RichEmbed()
		.setAuthor(`${message.guild.name} | Sunucunun Bilgileri`)
		.addField(':star2: Sunucu Kurucusu', `${message.guild.owner} `)
		.addField(':gear: Sunucu ID', message.guild.id)
		.addField(':date: Oluşturulma Tarihi', `${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`)
		.addField(':computer: Sunucu Kurulum Konumu', region[message.guild.region])
		.addField(`:loud_sound: Kanallar [${message.guild.channels.size}]`, `${message.guild.channels.filter(c => c.type === "text").size} Yazı | ${message.guild.channels.filter(c => c.type === "voice").size} Ses | ${message.guild.channels.filter(c => c.type === 'category').size} Kategori`)
		.addField(`:man_juggling: Kullanıcılar [${message.guild.members.size}]`, `${message.guild.members.filter(m => m.user.presence.status === "online").size} Çevrimiçi | ${message.guild.members.filter(m => m.user.presence.status === "offline").size} Çevrimdışı | ${message.guild.members.filter(m => m.user.presence.status === "dnd").size} Rahatsız Etmeyin | ${message.guild.members.filter(m => m.user.presence.status === "idle").size} Boşta | ${message.guild.members.filter(m => m.user.bot).size} Bot`)
		.addField(':satellite: AFK Kanalı', message.guild.afkChannel || 'Bulunmuyor')
		.addField(':hourglass_flowing_sand: AFK Zaman Aşımı', `${message.guild.afkTimeout} saniye`)
		.setThumbnail(message.guild.iconURL)
		.setColor(0x00ffff)
		.setTimestamp()
	message.channel.send({embed})
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['sunucu-bilgi', 'sunucubilgi'],
	permLevel: 1,
	kategori: 'kullanıcı'
}

exports.help = {
	name: 'sunucu',
	description: 'Bulunduğun sunucu hakkında bilgi verir.',
	usage: 'sunucu'
}
