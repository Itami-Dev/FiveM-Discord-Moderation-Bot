const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {


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


    if (message.author.id !== '663335480326094868') return; //



    let user = message.mentions.users.first() || message.author
    message.channel.send('**Başarıyla Hizaya Geçin Tarihi Sıfırlandı!**')

		 let goldzam = await db.fetch(`goldzam_${message.author.id}`);

	  db.set(`goldzam_${message.author.id}`, null)


}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hiza'],
  permLevel: 0
};

exports.help = {
  name: 'hiza',
  description: 'Tüm komutları gösterir.',
  usage: 'hiza '
};
