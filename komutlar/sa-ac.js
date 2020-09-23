const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {



if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sa-ac` adlı komutu özel mesajlarda kullanamazsın.')
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


    let guild = message.guild







    var odulac = args[0];
  if(!odulac) return message.channel.send(" :warning:  | Bir Seçenek Belirtin (aç - kapat)");

  let saas_ = db.fetch(`saas_${message.guild}`)




    if (odulac == 'aç') {

  if(saas_ == 'odulac') {

	  return message.channel.send(":warning: | Sunucunuzda bu sistem zaten **açık!**");
  }


    db.set(`saas_${message.guild}`, 'odulac')



   message.channel.send(` :warning:  | Sa-As Sistemi **Aktifleştirildi**`)



	}




  if (odulac == 'kapat') {





	   db.delete(`saas_${message.guild}`)

	  return message.channel.send(":warning: | Sa-As sistemi **Kapatıldı!**");






  }
};



exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sa-ac'],
    permLevel: 3
}

exports.help = {
    name: 'sa-ac',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'sa-ac'
}
