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
  .setTitle("<a:semt:736469534273306735> Gold Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('<a:yas:737967291983069204> **s!kaçcm** = Dalganızın boyunu gösterir.\n <a:yas:737967291983069204> **s!ascii** = Yazdığınız metni ascii formatına dönüştürür. \n <a:yas:737967291983069204> **s!hızlıyaz** = Hızlı sayı yazma oyunu oynarsınız! \n  <a:yas:737967291983069204> **s!nah** = Bulunduğunuz sunucuya nah gifi atar. \n  <a:yas:737967291983069204> **s!goldsertifika** = Gold Üyeliğinize Dair Fotoğraf Atar.  \n  <a:yas:737967291983069204> **s!onayliuye** = Onaylı Üye Olduğunuza Dair Fotoğraf Atar.\n  <a:yas:737967291983069204> **s!banner** = Belirlediğiniz Yazıyı Resim Olarak Atar. \n<a:yas:737967291983069204> **s!burcum** = Burcunuzu tahmin eder.\n <a:yas:737967291983069204> **s!sosyalyardım** = Gold üyeliğe özel sosyal medya komutlarını gösterir.\n <a:yas:737967291983069204> **s!coolresim** = Chate cool resimler atar. \n <a:yas:737967291983069204> **s!ateşet** = Etiketlediğiniz kişiye ateş ederek öldürmeye çalışırsınız. \n <a:yas:737967291983069204> **s!sunucusay** = Sunucu durumunu emojilerle gösterir.\n <a:yas:737967291983069204> **s!güvenlik** = Sunucuya yeni katılan üyelerin güvenli olup olmadığını gösterir.')
      .addField("Gold üyelik olmadan bu listedeki komutları kullanamazsınız!", `s!golddurum`, false)
      	        .setImage("https://i.pinimg.com/originals/2b/b5/d5/2bb5d51caf29dfa39b8b1f91d5f7687e.gif")
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
  aliases: ['goldkomutlar', 'goldyardım'],
  permLevel: 0
};

exports.help = {
  name: 'goldkomutlar',
  description: 'Tüm komutları gösterir.',
  usage: 'goldkomutlar '
};
