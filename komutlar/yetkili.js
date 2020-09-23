const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, params) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`yetkili` komutlarını özel mesajlarda göremezsin.')
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


  const embedyardim = new Discord.RichEmbed()
  .setTitle("<a:ayarlar:738134341145591878> Yetkili Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('<a:ayarlar:738134341145591878> **s!yasakla @kullanıcı** = Herhangi Bir Kullanıcıyı Banlarsınız.\n<a:ayarlar:738134341145591878> **s!at** = Herhangi Bir Kullanıcıyı Atarsınız. \n <a:ayarlar:738134341145591878> **s!otorol** = Sunucunuza yeni gelen üyelere otomatik rol verir. \n<a:ayarlar:738134341145591878> **s!sunucukur** = Sunucuyu bot sıfırdan yeniden düzenler.\n<a:ayarlar:738134341145591878> **s!banac @kullanıcı** = Herhangi Bir Kullanıcının Banını Açarsınız.\n <a:ayarlar:738134341145591878> **s!rolbilgi** = İstediğiniz Rolün Bilgilerini Gösterir.\n<a:ayarlar:738134341145591878> **s!süpür** = Herhangi Bir Miktarda Mesajları Siler.\n<a:ayarlar:738134341145591878> **s!ses-kanal-aç** = Bir Ses Kanalı Oluşturur.\n<a:ayarlar:738134341145591878> **s!yazı-kanal-aç** = Bir Yazı Kanalı Oluşturur.\n <a:ayarlar:738134341145591878> **s!yavasmod** = Sunucuda Yavaş Mod Açar. \n<a:ayarlar:738134341145591878> **s!sustur** = Seçtiğiniz Kullanıcıyı İstediğiniz Süre Boyunca Susturur.\n<a:ayarlar:738134341145591878> **s!kanalıkilitle** = İstediğiniz Kanalı Kilitler\n<a:ayarlar:738134341145591878> **s!kilitaç** = İstediğiniz Kanalın Kilidini Açar.')
      	        .setImage("https://i.pinimg.com/originals/2b/b5/d5/2bb5d51caf29dfa39b8b1f91d5f7687e.gif")
	  .addField("» s!yetkili", `Botumuz 7/24 Hizmet Vermektedir!`, false)
      .setFooter('')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
    }
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yetkili'],
    permLevel: 0
  };

  exports.help = {
    name: 'yetkili',
    description: 'yetkili',
    usage: 'yetkili'
  };
