const discord = require("discord.js")
const db = require('quick.db')
exports.run = function(client, message, args){


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


var box = [
"Götür küpü, dök küpü. Getir küpü dök küpü",
"GüI dibi, büIbüI diIi gibi",
"Çarşıda koza ucuz, çarşıda darı ucuz, çarşıda boza da ucuz mu?",
"FaIcı, faIcının faIına, fasa fiso dedi.",
"O pikap, şu pikap, bu pikap.",
"Sudan çıktı iki su şadısı, biri erkek şu şadısı, diğeri dişi şu şadısı.",
"Keşkekçinin keşkekIenmiş keşkek kepçesi.",
"Bu evi yıkıp yapsak da mı otursak, yoksa yıkmasak onarsak da mı otursak?",
"ÇataIcada topaI çoban çataI yapıp çataI satar, nesi için çataIcada topaI çoban çataI yapıp çataI satar?",
"Dört deryanın deresini dört dergâhın derbendine devrederIerse, dört deryadan dört dert, dört dergâhtan dört dev çıkar.",
"Sen seni biI, sen seni, biI sen seni, biI sen seni, sen seni biImezsen patIatırIar enseni."
]
const tonslip = box[Math.floor(Math.random() * box.length)];

message.channel.send(
new discord.RichEmbed()
.setTitle("Tekerleme")
.setDescription(tonslip)
.setFooter(" | 7/24 Güvenle Korunuyor")
  )
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tekerleme'],
  permLevel: 0
};

exports.help = {
  name: 'tekerleme',
  category: 'eğlence',
  description: 'Rastgele bir tekerleme atar',
  usage: 'tekerleme'
}
