const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')
exports.run = (client, message) => {













 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`balıktut` adlı komutu özel mesajlarda kullanamazsın.')
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










   message.channel.send('Balık Tuttun Balığı Çekiyorsun..').then(message => {
   var baliklar = ['``Sazan Tuttun!`` :fish:' ,'``Köpek Balığı Tuttun İyi Para Eder Sat Sat`` :D' ,'``Uskumru Tuttun!`` :fish:' ,'``Mezgit Tuttun! Havyarıda Var Hee`` :) :fish:' ,'``Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?``' ,'``Hamsi Tuttun!`` :fish:' ,'``Levrek Tuttun!`` :fish:' ,'``Hiçbirşey Tutamadın Maalesef!`` :wastebasket:' ,'``Alabalık Tuttun!`` :fish:' ,'``Maalesef Balık Oltadan Kaçtı!`` :wastebasket:' ,'``İstavrit Tuttun!`` :fish:'];
      var balik = baliklar[Math.floor(Math.random() * baliklar.length)];
            message.edit(`${balik}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['balık', 'balıktut', 'balık-tut'],
  permLevel: 0
};

exports.help = {
  name: 'balıktut',
  description: 'Balık Tutarsın.',
  usage: 'balıktut'
};
