const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, params) => {




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








  const embedyardim = new Discord.RichEmbed()
  .setTitle("<a:efekt:738137491521011723> Efekt Komutları")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('<a:ayarlar:738134341145591878> **s!yakalandı** = Resiminize wasted efekti verir. \n<a:ayarlar:738134341145591878> **s!türkvatandaşı** = Resiminize Türkiye efekti verir. \n <a:ayarlar:738134341145591878> **s!partnet** = Resiminize Partner Logosu Ekler. \n<a:ayarlar:738134341145591878> **s!logoyap** = Yazdığınız isimi logoya çevirir.\n<a:ayarlar:738134341145591878> **s!engel** = Resiminize engellenmiş içerik efekti verir.\n<a:ayarlar:738134341145591878> **s!supreme** = Resiminize Supreme yazar.\n<a:ayarlar:738134341145591878> **s!taç** = Resiminize Taç Yerleştirir.\n ')
      	  	        .setImage("https://i.pinimg.com/originals/2b/b5/d5/2bb5d51caf29dfa39b8b1f91d5f7687e.gif")

	  .addField("» s!efekt", `7/24 Sizlerleyiz!!!`, false)
      .setFooter('SUNUCUİSİMİ Efekt')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['efekt'],
  permLevel: 0
};

exports.help = {
  name: 'efekt',
  description: 'Tüm komutları gösterir.',
  usage: 'efekt '
};
