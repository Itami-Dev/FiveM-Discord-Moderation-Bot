const Discord = require('discord.js')
const db = require('quick.db')
exports.run = function(bot, message) {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`zarat` adlı komutu özel mesajlarda kullanamazsın.')
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


    message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setTitle('🎲 Zarın: ' + doMagicDiceVoodoo()));

    function doMagicDiceVoodoo() {
        var rand = ['1', '2', '3', '4', '5', '6'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

exports.conf = {
  enabled: true,
  aliases: ['zar'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'zarat',
  description: 'Zar Atın',
  usage: ''
};
