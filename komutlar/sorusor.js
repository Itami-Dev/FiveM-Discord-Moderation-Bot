const Discord = require('discord.js')
const db = require('quick.db')
const cevaplar = [
  "Evet",
	"Hayır",
	"Muhtemelen",
	"İmkansız",
	"Ne yazık ki hayır",
	"Maalesef",
	"Tabii ki",
	"Belki de",
	"Şimdi söylemeyeceğim",
  "Odaklan ve tekrar sor"
];
exports.run = function(client, message, args) {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sorusor` adlı komutu özel mesajlarda kullanamazsın.')
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

    var soru = args.join(' ');
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
if(!soru) return message.channel.send('Bana sormak istediğin soruyu yazarmısın?')
    else message.reply(cevap)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  exports.help = {
    name: 'sorusor',
    description: 'Bota soru sorarsınız.',
    usage: 'sorusor'
  };
