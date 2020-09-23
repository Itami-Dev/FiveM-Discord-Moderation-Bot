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
      .setDescription(' Naber, Botumuzun bakiye sistemi açıldı! Peki artık neler mi yapabilirsin; ')
	  .addField("<a:yas:737967291983069204> s!bakiye = Kaç Coinin olduğunu gösterir", "Kontrol Komutudur" )
	  .addField("<a:yas:737967291983069204> s!bakiyegör = Etiketlediğiniz kişinin kaç Coini olduğunu gösterir", "Kontrol Komutudur" )
	  .addField("<a:yas:737967291983069204> s!gönder = Başka bir kullanıcıya coin göndermeni sağlar.", "Kontrol Komutudur" )
         .addField("<a:yas:737967291983069204> s!günlük = Günlük Hediyeni Alırsın.", "Kontrol Komutudur")
		    .addField("<a:yas:737967291983069204> s!haftalık = Haftalık Hediyeni Alırsın.", "Kontrol Komutudur")
				  .addField("<a:yas:737967291983069204> s!aylık = Aylık Hediyeni Alırsın.", "Kontrol Komutudur")
			.addField("<a:yas:737967291983069204> s!çal = Başka bir kullanıcıyı soyarsın.", "Kontrol Komutudur")
			.addField("<a:yas:737967291983069204> s!çalış pavyon = Pavyonda çalışırsın.", "Kontrol Komutudur")
             .addField("<a:yas:737967291983069204> s!çalış yazılımcı = Yazılımcı olarak çalışırsın.", "Kontrol Komutudur")
			 .addField("<a:yas:737967291983069204> s!çalış mühendis = Mühendis olarak çalışırsın.", "Kontrol Komutudur")
			 .addField("<a:yas:737967291983069204> s!bankasoygunu = Banka soygunu yaparsın!", "Yüksek Risk / Yüksek Kazanç")
			  .addField("<a:yas:737967291983069204> s!odulsistemi = Sunucunda roller için ödül sistemini aktifleştirirsin.", "Yetkili Komutudur")
			  .addField("<a:yas:737967291983069204> s!golddurum = Gold üyelik durumunu görürsün.", "Kontrol Komutudur")
			  			  .addField("<a:yas:737967291983069204> s!transferlog = Toplam işlemlerini görürsün.", "Kontrol Komutudur")
			  .addField("<a:yas:737967291983069204> s!goldgör = Başka birisinin Gold üyelik durumunu görürsün", "Kontrol Komutudur")
			  .addField("<a:yas:737967291983069204> s!market = Botumuzda coinlerle satın alabileceğin şeyleri gösterir.", "Market")
			  			  .addField("<a:yas:737967291983069204> s!sat = 2. El piyasasına göz atarsın", "Satış Merkezi")

			        	        .setImage("https://i.pinimg.com/originals/2b/b5/d5/2bb5d51caf29dfa39b8b1f91d5f7687e.gif")



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
  aliases: ['bakiyeyardım'],
  permLevel: 0
};

exports.help = {
  name: 'bakiyeyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'bakiyeyardım '
};
