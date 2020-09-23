
const Discord = require('discord.js')

const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args, config) => {






	if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`çal` adlı komutu özel mesajlarda kullanamazsın.')
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




	 let hirsiz = db.fetch(`hirsiz_${message.author.id}`)


	 let kullanici = message.mentions.members.first()

	 let tabanca = await db.fetch(`tabanca_${kullanici.id}`)
	 let kac = await db.fetch(`kac_${kullanici.id}`)



	  if (kac > 0 ) {




	 let kackoruma = new Discord.RichEmbed()
    .setDescription(`:x: Hey ${message.author}!    ${kullanici} kullanıcısını soymaya çalıştın ama o kaçma hakkına sahip! Onu kovaladın ama o ışık hızıyla ortalıktan kayboldu!`)
    .setColor("RED")
    .setTimestamp()

    message.channel.send(kackoruma)


 let harcama = 1;

    db.subtract(`kac_${kullanici.id}`, harcama)


	return


	 }




	 if (tabanca === 'aktif') {

		 	 let ceza = Math.floor(Math.random() * 800) + 1;


	 let tabancakoruma = new Discord.RichEmbed()
    .setDescription(`:x: Hey ${message.author}!    ${kullanici} kullanıcısını soymaya çalıştın ama o tabancaya sahip! Sana 3 el ateş etti ve  ${ceza} coin kaybettin!`)
    .setColor("RED")
    .setTimestamp()

    message.channel.send(tabancakoruma)


    db.subtract(`money_${message.author.id}`, ceza)
	db.add(`money_${kullanici.id}`, ceza)
	db.set(`hirsizlik_${message.author.id}`, Date.now())

	return


	 }







 if (hirsiz === 'aktif') {




    let user = message.mentions.members.first()
    let targetuser = await db.fetch(`money_${user.id}`)
    let author = await db.fetch(`money_${message.author.id}`)

	  let polisabi = Math.floor(Math.random() * 200) + 1;


  let timeout = 120000

 let hirsizlik = await db.fetch(`hirsizlik_${message.author.id}`);

    if (hirsizlik !== null && timeout - (Date.now() - hirsizlik) > 0) {
        let time = ms(timeout - (Date.now() - hirsizlik));

        message.channel.send(`Zaten yeni hırsızlık yaptın! Yeniden yapmak için birazcık bekle **${time.minutes}dakika ${time.seconds}saniye** içerisinde yeniden icraate başlayabilirsin!`)
    } else {


    if (!user) {
        return message.channel.send('Üzgünüm, birisini etiketlemen gerekiyor!')
    }


    if (targetuser < 50) {
        return message.channel.send(`:x: ${user.user.username} bu üyede çalınmaya değecek birşey yok fakirin teki.`)
    }


	if (polisabi < 100) {

		 let kefalet = Math.floor(Math.random() * 800) + 1;


	 let yakalandi = new Discord.RichEmbed()
    .setDescription(`:x: Hey ${message.author}!    ${user} kullanıcısı soymaya çalıştın ama polis seni yakaladı!  ${kefalet} coin kefalet ödedin!`)
    .setColor("RED")
    .setTimestamp()
	.setFooter("SUNUCUİSİMİ Hapishane Sistemi")
    message.channel.send(yakalandi)


    db.subtract(`money_${message.author.id}`, kefalet)
	db.set(`hirsizlik_${message.author.id}`, Date.now())

	return

	}




    let random = Math.floor(Math.random() * 3500) + 1;


    let embed = new Discord.RichEmbed()
    .setDescription(`Hey ${message.author}!  ${user} kullanıcısı soydun ve  ${random} coin kazandın!`)
    .setColor("GREEN")
    .setTimestamp()
    message.channel.send(embed)


    db.subtract(`money_${user.id}`, random)
    db.add(`money_${message.author.id}`, random)
	db.set(`hirsizlik_${message.author.id}`, Date.now())
}
 }
 else {


	 	 let eldivens = new Discord.RichEmbed()
		 .setTitle("Hırsız Eldiveni Gerekli!")
    .setDescription(`:x: Hey ${message.author}! Bu komutu kullanmak için **Hırsız Eldiveninin** olması gerekiyor!`)
    .setColor("RED")

	.setFooter("Eldiveni 200 coin karşılığı almak için s!hırsızeldiveni yaz!")
    message.channel.send(eldivens)

 }

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'çal',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};

//HELE ŞÜKÜR ANANI SİKEYİM
