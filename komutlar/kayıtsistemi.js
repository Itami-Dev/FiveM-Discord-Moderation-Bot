const Discord = require('discord.js');
const db = require('quick.db');

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
  .setAuthor(` | Kayıt Paneli`, client.user.avatarURL)
  .setColor(0x00ffff)
      .setDescription('<a:ayarlar:738134341145591878> Naber, Botumuzun kayıt sistemi kullanıma açıldı! Artık kendi sunucuna özel kayıt sistemini dakikalar içerisinde oluşturabilirsin; ')
	  .addField("<a:yas:737967291983069204> s!kayıtrol = Kayıt Alan Yetkilinin Rolünü Belirler", "Veri Komutudur" )
	  .addField("<a:yas:737967291983069204> s!kayitsiz = Kayıtsız Üye Rolünü Belirler", "Veri Komutudur" )
	  .addField("<a:yas:737967291983069204> s!erkekayarla = Erkek Üye Rolünü Belirler", "Veri Komutudur" )
         .addField("<a:yas:737967291983069204> s!kızayarla = Kız Üye Rolünü Belirler", "Veri Komutudur")
		    .addField("<a:yas:737967291983069204> s!erkek = Erkek Üye Kayıdı Yapar", "Kontrol Komutudur")
				  .addField("<a:yas:737967291983069204> s!kız = Kız Üye Kayıdı Yapar", "Kontrol Komutudur")


			        	        .setImage("https://i.pinimg.com/originals/2b/b5/d5/2bb5d51caf29dfa39b8b1f91d5f7687e.gif")



	  .setThumbnail(client.user.avatarURL)
      .setFooter('SUNUCUİSİMİ Kayıt Sistemi')

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
  aliases: ['kayıtsistemi'],
  permLevel: 0
};

exports.help = {
  name: 'kayıtsistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'kayıtsistemi '
};
