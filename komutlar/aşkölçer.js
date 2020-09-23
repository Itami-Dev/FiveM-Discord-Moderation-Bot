const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {



 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`aşk` adlı komutu özel mesajlarda kullanamazsın.')
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





        let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.get(args[0]))
        let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.get(args[1]))
        var s = message.author
        if(member2) {
                var s = member2.user
        }
        if(!member) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`Ölçmek İçin Birini Etiketlemelisin Mesala @deneme gibi`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }

        var anasonuc = Math.floor(Math.random() * 101)
        var kalp = ''
        var akalp = ''
        if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
                var c = 0
                for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
                        kalp += '❤️'
                        c++
                }
                for(var x = c; x < 10; x++) {
                        akalp += `🖤`
                }
        } else {
                var kalp = '🖤'
                var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
        }
        var yorum = `Sizi evlendirelim <3`
        if(anasonuc < 80) {
                var yorum = 'Biraz daha uğraşırsan bu iş olacak gibi :)'
        }
        if(anasonuc < 60) {
                var yorum = 'Eh biraz biraz bir şeyler var gibi.'
        }
        if(anasonuc < 40) {
                var yorum = 'Azıcıkta olsa bir şeyler hissediyor sana :)'
        }
        if(anasonuc < 20) {
                var yorum = 'Bu iş olmaz sen bunu unut.'
        }
        const embed = new Discord.RichEmbed()
                .setAuthor(`${member.user.tag} | ${s.tag}`)
                .setDescription(`Aşk Yüzdesi: ${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
                .setColor("RANDOM")
                .setTimestamp()
        message.channel.send({embed})
}

exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['aşk-ölçer', 'ask-olcer', 'askolcer', 'ask', 'aşk'],
        permLevel: 0,
}

exports.help = {
        name: 'aşkımı-ölç',
        description: 'İki kullanıcı sarasındaki aşkı ölçer.',
        usage: 'aşkımı-ölç [@Kullanıcı] [@Kullanıcı]'
}
