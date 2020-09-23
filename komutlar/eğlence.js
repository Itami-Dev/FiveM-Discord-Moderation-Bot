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
  .setTitle("<a:eglence:738137490187354212> Eğlence Komutları")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('<a:ayarlar:738134341145591878> **s!aşk @kullanıcı** = Seçtiğiniz kişiye % kaç aşık olduğunuzu gösterir.\n<a:ayarlar:738134341145591878> **s!sigarayak** = Sigara içersiniz. \n<a:ayarlar:738134341145591878> **s!ara155** = Polisi ararsınız. \n<a:ayarlar:738134341145591878> **s!slots** = Slot oyunu oynarsınız.\n <a:ayarlar:738134341145591878> **s!soygun** = Soygun yapmanızı sağlar.\n<a:ayarlar:738134341145591878> **s!stres** = Stres çarkı çevirirsiniz. \n<a:ayarlar:738134341145591878> **s!tekerleme** = Tekerleme yazarım.\n<a:ayarlar:738134341145591878> **s!yazıtura** = Yazı tura atmanızı sağlar.\n<a:ayarlar:738134341145591878> **s!türk** = Rastgele Türk Bayrağı gifi atarım.. \n<a:ayarlar:738134341145591878> **s!zar** = Zar atmanızı sağlar.\n<a:ayarlar:738134341145591878> **s!balıktut** = Balık Tutarsınız.\n<a:ayarlar:738134341145591878> **s!espri** = Soğuk Espri Yaparsınız.')
      .addField("» s!", `7/24 Sizlerleyiz!!!`, false)
	        .setImage("https://i.pinimg.com/originals/2b/b5/d5/2bb5d51caf29dfa39b8b1f91d5f7687e.gif")
      .setFooter(' Eğlence')

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
  aliases: ['eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence '
};
