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

    if (message.author.id !== '663335480326094868') return;

    if (!args[0]) return message.reply('Lütfen eklemek istediğin miktarı belirt!')
    if (isNaN(args[0])) return message.reply('Bu geçerli bir numara değil!')

    let user = message.mentions.users.first() || message.author
    message.channel.send('Başarıyla eklendi: ' + args[0])
db.add(`money_${user.id}`, args[0])

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['paraekle'],
  permLevel: 0
};

exports.help = {
  name: 'paraekle',
  description: 'Tüm komutları gösterir.',
  usage: 'paraekle '
};
