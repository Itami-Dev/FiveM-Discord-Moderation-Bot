const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {


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


  const yazi = args.slice(0).join('+');

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)

  const kuaty = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=fluffy-logo&text=${yazi}`

  .replace(' ', '+')



  const kuaty2 = new Discord.RichEmbed()

  .setTitle(`İşte Logon Burada`)

  .setColor("RANDOM")

  .setImage(kuaty)

  message.channel.send(kuaty2)

}

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: [],

    permLevel: 0

}

exports.help = {

    name: 'logoyap',

    description: '.',

    usage: 'logoyap <yazı>'

}
