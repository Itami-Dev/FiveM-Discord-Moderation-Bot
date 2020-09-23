const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args, config) => {




	if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`gönder` adlı komutu özel mesajlarda kullanamazsın.')
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




    let user = message.mentions.members.first()

    let member = db.fetch(`money_${message.author.id}`)


    if (!user) {
        return message.channel.send('Birini etiketlemeyi unuttun!')
    }
    if (!args[1]) {
        return message.channel.send('Lütfen göndermek istediğin miktarı yaz.')
    }
    if (message.content.includes('-')) { // if the message includes "-" do this.
        return message.channel.send('Negatif değerler giremezsin kolpacı.')
    }

    if (member < args[1]) {
        return message.channel.send(`Bu paraya sahip değilsin, lütfen önce bu parayı elde et!`)
    }

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    message.channel.send(`${message.author.tag}, Başarıyla ${user.user.username} kullanıcısına ${args[1]}$ gönderdin!`)
    db.add(`money_${user.id}`, args[1])
	  db.add(`toplamişlem_${message.author.id}`, 1)
      db.add(`toplamişlem_${message.author.id}`, 1)
	  let kullanici = message.mentions.users.first() || message.author
	  let kayitlogs = db.fetch(`kayitlogs_${message.author.id}`)
	  let log = "[Para Verildi] Para Verilen Kişi: ${user.username} , Verilen Miktar: ${args[1]} , Zaman: ${today}"
	  db.push(`kayitlogs_${message.author.id}`, log)
    db.subtract(`money_${message.author.id}`, args[1])




}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'gönder',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
