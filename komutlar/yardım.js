const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')
exports.run = async (client, message, params, args) => {

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


				var facts = ["araba", "şizofrenik", "şanzımancılar", "doktoreldiveni", "kaldırımtaşı", "arabakornası", "muslukborusu", "yeşilelma", "karnıyarık", "arapatı", "kapınınarkasındakiadam", "güvenlikgörevlisi", "SUNUCUİSİMİ", "Lunar", "MahmutAbi", "Bardak"];
             var fact = Math.floor(Math.random() * facts.length);


  const yardım = new Discord.RichEmbed()
      .setColor("#ffbf00")
      .setAuthor(` | Yardım Paneli`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`s! - Yardım`, `<a:komut_anlami:723717527351590982> | **s!anakomutlar**: Sunucunuz için Ayar Komutlarını Gösterir.!\n <a:komut_anlami:723717527351590982> | **s!sosyalyardım**: Sosyal Medya Hesaplarınızı Sergilersiniz.! \n <a:komut_anlami:723717527351590982> | **s!kayıtsistemi**: Kendi Sunucunuza Özel Kayıt Sistemi Yaparsınız!\n<a:komut_anlami:723717527351590982> | **s!eğlence**: Eğlenmek için bulunan komutlar!\n<a:komut_anlami:723717527351590982> | **s!yetkili**: Sunucuyu yönetmek için gerekli olan komutlar!\n<a:komut_anlami:723717527351590982>  | **s!kullanıcı**: Kullanıcılar için komutlar.\n <a:komut_anlami:723717527351590982> | **s!efekt**: Fotoğraflarınıza efekt veren komutlar!\n <a:komut_anlami:723717527351590982> | **s!botbilgi**: Botumuzun davet linkini alırsın!\n <a:komut_anlami:723717527351590982> | **s!bakiyeyardım**: Botumuzun eğlenceli ve tamamen bedava bakiye sistemi için komutlar!\n <a:komut_anlami:723717527351590982>  | **s!goldkomutlar**: Gold üyeliğin varken kullanabileceğin komutları gösterir! `)

	  .setImage("https://dsunucu.com/wp-content/uploads/2020/05/gta2.gif")

	  .addBlankField()
	        .addField('SUNUCUİSİMİ Seçenekleri', '[<a:boost:721657570036809748> Botumuzun Davet Linki](https://discordapp.com/oauth2/authorize?client_id=688887558439960603&scope=bot&permissions=8)  ** | **  [<a:discord:616687535300542515> Destek Sunucumuz](https://discord.gg/H2DxBtR)', true)

	  .setFooter(`Kimileri kopyalar, kimileri yapıştırır. Biz ise geleceği inşa ederiz! | ${message.author.username} `, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komutlar','yardım'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
