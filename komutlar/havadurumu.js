const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`havadurumu` adlı komutu özel mesajlarda kullanamazsın.')
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



    if (!args[0]) {
        const embed = new Discord.RichEmbed()
            .setDescription("Bir şehir yaz!")
            .setColor("RANDOM")
        message.channel.send({embed})
        return
    }

    const konum = args.join(" ")
    message.channel.send("", {
        files: [
            `http://wttr.in/${konum}_0tqp_lang=tr.png`
        ]
    })
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hava', 'hava-durumu', 'havabilgisi', 'hava-bilgisi', 'weather', 'weatherforecast'],
    permLevel: 0
}

exports.help = {
    name: 'havadurumu',
    description: 'Yazılan konumun hava durumu bilgisini gösterir.',
    usage: 'havadurumu <konum>'
}
