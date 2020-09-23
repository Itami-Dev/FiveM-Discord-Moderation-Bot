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
  .setAuthor(` | Coin Paneli`, client.user.avatarURL)
  .setColor(0x00ffff)
      .setDescription(' Botumuzda kazandığın coinlerle satın alabileceğin şeyler; ')
			  .addField("s!ışıyan = Ödül sistemi açıksa eğer Işıyan rolünü satın alırsın.", "10.000 Coin")
			  .addField("s!goldol = Gold üye olursun!", "8.000 Coin")
			  .addField("s!hırsızeldiveni = Başka bir kullanıcı soymak için gerekir!", "200 Coin")
			  .addField("s!tofaş = Gıcır gıcır Tofaş satın alırsın!", "13.000 Coin")
			  .addField("s!mercedes = Gıcır gıcır Mercedes satın alırsın!", "55.000 Coin")
			  .addField("s!gecekondu = Gecekondu ev satın alırsın!", "60.000 Coin")
			   .addField("s!villa = Villa satın alırsın!", "140.000 Coin")
			   .addField("s!tabanca = Sizden coin çalınmasını engeller!", "70.000 Coin")
			   .addField("s!kaç = Birisi sizi soymaya çalışırsa hemen oradan uzaklaşırsın!", "700 Coin")
			   .addField("s!rehineal = Tabancası olan birisinin tabancasını elinden alırsın!", "100.000 Coin")



	  .setThumbnail(client.user.avatarURL)
      .setFooter('SUNUCUİSİMİ Coin Sistemi')

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
  aliases: ['market'],
  permLevel: 0
};

exports.help = {
  name: 'market',
  description: 'Tüm komutları gösterir.',
  usage: 'market '
};
