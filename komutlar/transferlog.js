const Discord = require("discord.js"),
client = new Discord.Client();
const db = require('quick.db')
const hastebin = require('hastebin')
module.exports.run = async (client, message, args) => {


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


  let kayit = db.get('kayitlogs_${message.author.id}')
  let işlem = db.fetch(`toplamişlem_${message.author.id}`)





        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
		.setTitle("<a:ayarlar:738134341145591878> Transfer Geçmişiniz")
		.addField(`Toplam İşlem`, işlem)
        .setColor("RANDOM")


        message.channel.send(embed)





}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['transferlog'],
  permLevel: 0
};

exports.help = {
  name: 'transferlog',
  description: 'transferlog.',
  usage: 'transferlog'
};
