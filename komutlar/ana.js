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
  .setTitle("<a:gunluksaat:737967289428869160> AnaKomutlar")
  .setColor(0x00ffff)
  .setThumbnail(client.user.avatarURL)
  .setDescription(' <a:ayarlar:738134341145591878> | **s!aktif**: Aktif Geçersiniz!\n  <a:ayarlar:738134341145591878> | **s!bakim**: Bakım Moduna Geçersiniz!\n  <a:ayarlar:738134341145591878> | **s!lspdbasvuru**: LSPD Başvuru Metini Atar!\n <a:ayarlar:738134341145591878> | **s!grovebasvuru**: Grove Başvuru Metini Atar!\n <a:ayarlar:738134341145591878> | **s!ballasbasvuru**: Ballas Başvuru Metini Atar!\n <a:ayarlar:738134341145591878> | **s!vagos**: Vagos Başvuru Metini Atar!\n  \n<a:ayarlar:738134341145591878> | **s!talep**: Talep Açarsınız!\n<a:ayarlar:738134341145591878> | **s!şehitlerimiz**: Şehitlerimiz hakkında bilgi verir!\n <a:ayarlar:738134341145591878> | **s!sunucubilgi**: Sunucu Hakkında Bilgi Edinirsiniz! \n <a:ayarlar:738134341145591878> | **s!sa-ac**: Selam sistemini aktifleştirir veya kapatırsınız! \n<a:ayarlar:738134341145591878> | **s!steam**: Steamde yayınlanan oyun hakkında bilgi alırsınız.\n<a:ayarlar:738134341145591878> | **s!havadurumu**: Seçtiğiniz İlin Hava Durumunu Gösterir! \n<a:ayarlar:738134341145591878> | **s!botbilgi**: Hakkımda Bilgi Veririm!`')
      .setImage("https://i.pinimg.com/originals/2b/b5/d5/2bb5d51caf29dfa39b8b1f91d5f7687e.gif")

	  .setFooter('SUNUCUİSİMİ Ana Komutları!')

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
    aliases: ['anakomutlar'],
    permLevel: 0
  };

  exports.help = {
    name: 'anakomutlar',
    description: 'anakomutlar',
    usage: 'anakomutlar'
  };
