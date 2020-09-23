const Discord = require('discord.js');
const db = require('quick.db')
const client = new Discord.Client();
exports.run = function(client, message, args) {

 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`süpür` adlı komutu özel mesajlarda kullanamazsın.')
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

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("<:warning:495950887898841089> Lütfen Silinicek Mesaj Miktarını Yazın.!");

++args[0];

message.channel.bulkDelete(args[0]).then(() => {

	--args[0];
        let embed = new Discord.RichEmbed()
		.setTitle(`<a:boost:721657570036809748> | ${args[0]} Adet Mesajı Başarıyla Sildim!`)
        .setColor("#3cff00")
		.setFooter(`${message.author.tag} | SUNUCUİSİMİ Temizlik Sistemi`, message.author.displayAvatarURL)


        message.channel.send(embed)


  .then(msg => {
    msg.delete(4000)
  })
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['süpür'],
  permLevel: 2
};

exports.help = {
  name: 'süpür',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};
