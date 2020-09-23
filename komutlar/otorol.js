const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {



if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`otorol` adlı komutu özel mesajlarda kullanamazsın.')
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



    var bymayfe = args[0];
  if(!bymayfe) return message.channel.send(" :warning:  | Bir Seçenek Belirtin (aç - kapat)");

      if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Sadece herhangi bir sunucudan mesaj gönderebilirim.:relaxed: ')
    return message.author.sendEmbed(ozelmesajuyari); }

 // if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: Otorol ayarlamak için `Rolleri Yönet` yetkisine sahip olman gerek.')


    if (bymayfe == 'ayarla' || bymayfe == 'aç') {
 let rol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
  let newRole;
  let tworole;
  if (!rol) return message.channel.send(' :warning:  | Otorol olarak ayarlamak istediğin rolü etiketlemelisin.`s!otorol aç @Üye #Kanal`')
  else newRole = message.mentions.roles.first().id
  let isim = message.mentions.roles.first().name
  let otorolkanal = message.mentions.channels.first();
  if (!otorolkanal) return message.channel.send(' :warning:  | Otorol olarak ayarlamak istediğin rolü etiketlemelisin.`s!otorol aç @Üye #Kanal`')
    db.set(`otorolisim_${message.guild.id}`, isim)
  let i = await  db.set(`otorolKanal_${message.guild.id}`, message.mentions.channels.first().id)
  let otorol = await db.set(`autoRole_${message.guild.id}`, newRole)
  if (!message.guild.roles.get(newRole)) return message.channel.send(" :warning:  | Etiketlediğiniz rol bulunamadı, etiketlediğiniz rolün etiketlenebilirliğinin aktif olduğundan emin olunuz.")
    message.channel.send(`**Otorol Başarılı Bir Şekilde Ayarlandı** :warning:  \n \n Ayarlanan Rol <@&${newRole}> :white_check_mark:  \n \n Ayarlanan Kanal <#${i}> :crystal_ball:  \n \n Otorolü Kapatmak İçin .otorol kapat :x:  `)

  }

  if (bymayfe == 'kapat' || bymayfe == 'sıfırla') {




    db.delete(`otorolisim_${message.guild.id}`)
        db.delete(`otorolKanal_${message.guild.id}`)
    db.delete(`autoRole_${message.guild.id}`)

    message.channel.send(` :warning:  | Otorol Sistemi **Kapatıldı**`)
  }
};



exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['oto-rol'],
    permLevel: 2
}

exports.help = {
    name: 'otorol',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'otorol <@rol>'
}
