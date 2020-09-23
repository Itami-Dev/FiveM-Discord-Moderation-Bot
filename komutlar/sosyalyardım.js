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
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('<a:yas:737967291983069204> **s!sosyalmedya** = Sosyal medya hesaplarınızı gösterir.\n <a:yas:737967291983069204> **s!instagram** = Instagram hesabınızı ayarlarsınız.\n <a:yas:737967291983069204> **s!twitter** = Twitter hesabınızı ayarlarsınız.\n <a:yas:737967291983069204> **s!telegram** = Telegram hesabınızı ayarlarsınız.\n <a:yas:737967291983069204> **s!facebook** = Instagram hesabınızı ayarlarsınız.')
      .setImage("https://i.pinimg.com/originals/2b/b5/d5/2bb5d51caf29dfa39b8b1f91d5f7687e.gif")
	  .addField("Gold üyelik olmadan bu listedeki komutları kullanamazsınız!", `s!golddurum`, false)
      .setFooter('SUNUCUİSİMİ Gold Üyelik')

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
  aliases: ['sosyalyardım'],
  permLevel: 0
};

exports.help = {
  name: 'sosyalyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'sosyalyardım'
};
