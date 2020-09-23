const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async (client, message, args) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kayitsiz` adlı komutu özel mesajlarda kullanamazsın.')
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



if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Bu komutu kullanabilmek için **ADMINISTRATOR** yetkisine sahip olmalısın!`);
  let kullanıcı = message.mentions.users.first()
  let rol = message.mentions.roles.first()
    if (!rol) return message.channel.send('Seçilecek olan rolü etiketle dostum!')



  let embed = new Discord.RichEmbed()
  .setColor('BLACK')
  .setDescription(`<a:yas:737967291983069204> Başarıyla ${rol} rolünü **Kayıtsız** olarak ayarladım!`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`)

   db.set(`kayitsiz${message.guild.id}`, rol.id)


  return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kayitsiz'],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}

exports.help = {
  name: 'kayitsiz',
  description: "Hadi erkek olalımm",
  usage: 'kayitsiz'
}
