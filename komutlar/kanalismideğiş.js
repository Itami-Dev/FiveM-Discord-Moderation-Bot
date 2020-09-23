const Discord = require("discord.js");
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kanalismideğiş` adlı komutu özel mesajlarda kullanamazsın.')
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


  var args = message.content.split(' ').slice(1).join(' ');
  if (!args) return message.reply("**Kanalın adını ne yapmam gerektiğini söylemelisin.**");
  message.channel.setName(`${args}`)
  .then(newChannel => message.channel.send(`Bu kanalın yeni ismi ***#${args}***`))
  .catch(console.error);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kanalismideğiş','kanal-ismideğiş','kanalismi-değiş'],
  permLevel: 2
};

exports.help = {
  name: 'kanal-ismi-değiş',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kanalismideğiş'
};
