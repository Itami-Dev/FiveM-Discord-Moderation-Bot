const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {



if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`odulsistemi` adlı komutu özel mesajlarda kullanamazsın.')
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





    if (odulac == 'aç') {

  if(guild.roles.find(role => role.name === 'Işıyan')) {

	  return message.channel.send(":warning: | Sunucunuzda ödül sistemi zaten **açık!**");
  }


    db.set(`odulsistemi_${message.guild}`, odulac)

	guild.createRole({
name: 'Işıyan',
color: 'GOLD'
});

   message.channel.send(` :warning:  | Ödül Sistemi **Aktifleştirildi**`)



	}




  if (odulac == 'kapat' || odulac == 'sıfırla') {


  if (rolkontrolu =  guild.roles.find(role => role.name === 'Işıyan')) {


	   db.delete(`odulsistemi_${message.guild}`)
     guild.roles.find(role => role.name === 'Işıyan').delete();

	  return message.channel.send(":warning: | Ödül sistemi **Kapatıldı!**");
  }
  else
  {
	    return message.channel.send(":warning: | Ödül sistemi zaten **Devre Dışı!**");
  }




  }
};



exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['odulsistemi'],
    permLevel: 3
}

exports.help = {
    name: 'odulsistemi',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'odulsistemi'
}
