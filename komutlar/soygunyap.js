const Discord = require('discord.js');
const db = require('quick.db')
const prosoyguncu = [
  "85 Türk Lirası Soydun",
  "10 Türk Lirası Soydun",
  "Ahhaa Polise Yakalandın.",
  "1 Türk Lirası Soydun",
  "120 Türk Lirası Soydun",
  "250 Türk Lirası Soydun",
  "800 Türk Lirası Soydun!",
  "950 Türk Lirası Soydun",
  "1.000 Türk Lirası Soydun",
  "2.500 Türk Lirası Soydun",
  "1.485 Türk Lirası Soydun",
  "7.850 Türk Lirası Soydun",
  "24.657 Türk Lirası Soydun",
  "89.652 Türk Lirası Soydun",
  "Ahhaa Polise Yakalandın.",
  "578.546 Türk Lirası Soydun",
  "875.135 Türk Lirası Soydun",
  "205.598 Türk Lirası Soydun",
  "Ahhaa Polise Yakalandın.",
  "356.451 Türk Lirası Soydun",
  "VURGUN!1.000.0000 Türk Lirası Soydun!",
];

exports.run = function(client, message) {



 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`soygun` adlı komutu özel mesajlarda kullanamazsın.')
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



//Komutun Kodları
const soyguncu = prosoyguncu[Math.floor(Math.random() * prosoyguncu.length)];
  message.channel.send(

  "**Soyguna hazırlanılıyor..**"

  ).then(
  function(i){
    i.edit("**Soyguna gidiliyor..**")
    message.edit(2 * 2500)
    i.edit(
    new Discord.RichEmbed()
      .setTitle('**Soygun Yaptın!**')
    .setDescription('---------')
      .addField('**Soyulan Para: **',soyguncu)
    .setColor('GREEN')

    //Efe Tarafından Kodlanmıştır Lütfen Çalmayınız.
    )
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['soygun'],
  permLevel: 0
};

exports.help = {
  name: 'soygunyap',

  description: 'Soygun Yaparsınız',
    kategori: 'eğlence',
  usage: 'soygunyap'
}
