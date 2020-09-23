const Discord = require("discord.js");
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {


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


  var sehitler = {
    sehit1isim: 'Beytullah Melih İşık',
    sehit1bilgi: ' Şırnak İli Cizre İlçe Emniyet Müdürlüğü Çevik Kuvvet Grup Amirliği kadrosunda görevli 426570 sicil sayılı Polis Memuru Beytullah Melih İŞIK, kapama esnasında silahın kazaen ateş alması sonucu yaralanmış, kaldırıldığı Cizre Devlet Hastanesinde kurtarılamayarak şehit olmuştur. Aziz şehidimize Allah’tan rahmet, ailesine ve milletimize başsağlığı ve sabırlar dilerim.',
    sehit1foto: 'https://www.egm.gov.tr/kurumlar/egm.gov.tr/Sehit%20G%C3%B6rsel/Beytullah-Melih-I%CC%87s%CC%A7ik-.png?mode=resize&width=200',
    sehit2isim: 'Coşkun Elber',
    sehit2bilgi: '24.12.2019 tarihinde Ağrı Özel Harekât Şube Müdürlüğünde geçici olarak görevli olan Polis Memuru Coşkun Elber, Özel Harekât Şubesi Hasankeyf Yerleşkesi içerisinde uzun namlulu silahının kazaen ateş alması sonucu şehit olmuştur. Aziz şehidimize Allah’tan rahmet, ailesine ve milletimize başsağlığı ve sabırlar dilerim.',
    sehit2foto: 'https://www.egm.gov.tr/kurumlar/egm.gov.tr/Sehit%20G%C3%B6rsel/Cos%CC%A7kun-Elber.png?mode=resize&width=200',
    sehit3isim: 'Alaattin Özdemir',
    sehit3bilgi: '03.12.2019 günü saat 19.30 sıralarında Bursa İli Yıldırım İlçe Emniyet Müdürlüğü Devriye Ekipler Amirliği kadrosunda görevli 188186 sicil sayılı Polis Memuru Alaattin ÖZDEMİR, Merkez Yavuz Selim Mahallesi 11 Eylül Bulvarı üzerinde olay yerine intikal ettiğinde müdahale esnasında yaralanmış, kaldırıldığı Bursa Yüksek İhtisas Eğitim ve Araştırma Hastanesinde kurtarılamayarak şehit olmuştur. Aziz şehidimize Allah’tan rahmet, ailesine ve milletimize başsağlığı ve sabırlar dilerim.',
    sehit3foto: 'https://www.egm.gov.tr/kurumlar/egm.gov.tr/Sehit%20G%C3%B6rsel/alaattin.png?mode=resize&width=200',
    sehit4isim: 'Yücel Başpınar',
    sehit4bilgi: '13.10.2019 tarihinde Denizli ili Pamukkale ilçe Emniyet Müdürlüğü Devriye Ekipler Amirliği kadrosunda görevli Polis Memuru Yücel Başpınar görevi sırasında seyir halindeyken yaşanan trafik kazası sonucu yaralanmış, tedavi gördüğü Pamukkale Üniversitesi Tıp Fakültesi Hastanesinde 14.10.2019 günü şehit olmuştur. Aziz şehidimize Alah’tan rahmet, ailesine ve milletimize baş sağlığı ve sabırlar dilerim.',
    sehit4foto: 'https://www.egm.gov.tr/kurumlar/egm.gov.tr/Sehit%20G%C3%B6rsel/Sehit-PM-Yucel-Baspinar.png?mode=resize&width=200',
    sehit5isim: 'Serkan ÇAĞLAYAN',
    sehit5bilgi: '26.09.2019 tarihinde İzmir Bölge Trafik Denetleme Şube Müdürlüğü kadrosunda görevli Polis Memuru Serkan ÇAĞLAYAN, İzmir ili Güzelbahçe ilçesinde görevini ifa ederken geçirdiği trafik kazası sonucu kaldırıldığı hastanede 27.09.2019 tarihinde şehit olmuştur. Aziz şehidimize Allah’tan rahmet, ailesine ve milletimize başsağlığı ve sabırlar dilerim.',
    sehit5foto: 'https://www.egm.gov.tr/kurumlar/egm.gov.tr/Haberler(1)/2019/Eylul/27092019/indir.jpeg?mode=resize&width=200',
    sehit6isim: 'Tufan Kansuva',
    sehit6bilgi: 'Teşkilatımız mensuplarından 4.Sınıf Emniyet Müdürü Tufan Kansuva 07 Eylül 2019 günü Mardin ili Ömerli İlçesi Harmankaya ve Kömürlü Köylerinde JÖH ve PÖH ortak operasyonunda bölücü terör örgütü mensuplarıyla çıkan çatışma sonucu yaralanmış, kaldırıldığı Mardin Devlet Hastanesinde kurtarılamayarak şehit olmuştur. Şehidimize Allah’tan rahmet, acılı ailesine ve Teşkilatımıza başsağlığı ve sabırlar diliyorum',
    sehit6foto: 'https://www.egm.gov.tr/kurumlar/egm.gov.tr/Sehit%20G%C3%B6rsel/tufanmudur.jpg?mode=resize&width=200'
}
  const istek = args[0]
  if(!istek) return message.reply('1\'den 6ya kadar bir rakam gir.')
  if(istek ==='1'){
  const sehit1 = new Discord.RichEmbed()
  .setColor('BLACK')
  .setTitle(sehitler.sehit1isim)
  .addField('Bilgi:',sehitler.sehit1bilgi)
  .setFooter(sehitler.sehit1isim,sehitler.sehit1foto)
  .setTimestamp()
  .setThumbnail(sehitler.sehit1foto)
  await message.channel.send(sehit1)
  return}
  if(istek ==='2'){
  const sehit2 = new Discord.RichEmbed()
  .setColor('BLACK')
  .setTitle(sehitler.sehit2isim)
  .addField('Bilgi:',sehitler.sehit2bilgi)
  .setFooter(sehitler.sehit2isim,sehitler.sehit2foto)
  .setTimestamp()
  .setThumbnail(sehitler.sehit2foto)
  await message.channel.send(sehit2)
  return}
  if(istek === '3') {
  const sehit3 = new Discord.RichEmbed()
  .setColor('BLACK')
  .setTitle(sehitler.sehit3isim)
  .addField('Bilgi:',sehitler.sehit3bilgi)
  .setFooter(sehitler.sehit3isim,sehitler.sehit3foto)
  .setTimestamp()
  .setThumbnail(sehitler.sehit3foto)
  await message.channel.send(sehit3)
  return}
  if(istek ==='4') {
  const sehit4 = new Discord.RichEmbed()
  .setColor('BLACK')
  .setTitle(sehitler.sehit4isim)
  .addField('Bilgi:',sehitler.sehit1bilgi)
  .setFooter(sehitler.sehit4isim,sehitler.sehit4foto)
  .setTimestamp()
  .setThumbnail(sehitler.sehit4foto)
  await message.channel.send(sehit4)
  return}
  if(istek === '5'){
  const sehit5 = new Discord.RichEmbed()
  .setColor('BLACK')
  .setTitle(sehitler.sehit5isim)
  .addField('Bilgi:',sehitler.sehit1bilgi)
  .setFooter(sehitler.sehit5isim,sehitler.sehit5foto)
  .setTimestamp()
  .setThumbnail(sehitler.sehit5foto)
  await message.channel.send(sehit5)
  return}
  if(istek === '6'){
  const sehit6 = new Discord.RichEmbed()
  .setColor('BLACK')
  .setTitle(sehitler.sehit6isim)
  .addField('Bilgi:',sehitler.sehit6bilgi)
  .setFooter(sehitler.sehit6isim,sehitler.sehit6foto)
  .setTimestamp()
  .setThumbnail(sehitler.sehit6foto)
 await  message.channel.send(sehit6)
  return}




};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şehit', 'şehitlerimiz','sehit','sehitlerimiz'],
  permLevel: 0
};

exports.help = {
  name: 'şehitlerimiz',
  description: 'Şehitlerimiz hakkında bilgi verir.',
  usage: 'şehitlerimiz',
  kategori: 'anakomutlar',
};
