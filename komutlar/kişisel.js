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
  .setTitle("<a:kisisel:738137492141768808> Kişisel Komut Listesi")
  .setDescription('')
  .setColor("RANDOM")
      .setDescription('<a:ayarlar:738134341145591878> **s!sorusor** = Bota Soru Sorarsınız.\n<a:ayarlar:738134341145591878> **s!rolinfo** = Seçtiğiniz rol hakkında bilgi verir. \n <a:ayarlar:738134341145591878> **s!kitapbilgi** = Yazdığınız kitap hakkında bilgi verir. \n<a:ayarlar:738134341145591878> **s!yeniyıl** = Yeni yıl sayacını gösterir. \n<a:ayarlar:738134341145591878> **s!durum** = Bot üzerindeki durumunuzu gösterir. \n <a:ayarlar:738134341145591878> **s!filmöneri** = Bot size rastgele film önerir. \n<a:ayarlar:738134341145591878> **s!hesapla** = Matematiksel işlem yapmanı sağlar.\n<a:ayarlar:738134341145591878> **s!şifre** = Belirlediğiniz uzunlukta şifre üretir.\n<a:ayarlar:738134341145591878> **s!spotify** = Spotify dinleyen kullanıcının dinlediği müzik hakkında bilgi verir.\n<a:ayarlar:738134341145591878> **s!spoiler** = Seçilen spoiler mesajları göndermemi sağlar.\n<a:ayarlar:738134341145591878> **s!emojiler** = Sunucudaki Tüm Emojileri Gösterir.')
      .addField("» s!kişisel", `7/24 Sizlerleyiz!!!`, false)
	  	        .setImage("https://images.squarespace-cdn.com/content/v1/54b58df3e4b0d903cb54d3c1/1499285141858-6S2IB3Y4TZGXPE18TGOG/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmoW6VMYd7DRFXOxjGuORbJVRIz_X6uKxhFE9bwG5-diIJ9kj42L3XbtP_RiBprpp_/wolf.gif")

      .setFooter(' Kişisel')

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
  aliases: ['kişisel','kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'kişisel',
  description: 'Tüm komutları gösterir.',
  usage: 'kişisel'
};
