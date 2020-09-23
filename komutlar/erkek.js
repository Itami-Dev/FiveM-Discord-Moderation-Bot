const Discord = require('discord.js')
const db = require('quick.db')


exports.run = async (client, message, args) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`erkek` adlı komutu özel mesajlarda kullanamazsın.')
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





	  let kayitrol = db.fetch(`kayityetki${message.guild.id}`)

	  if(!message.member.roles.has(`${kayitrol}`)) return message.channel.send(`Bu komutu kullanabilmek için <@&730247589844484148> yetkisine sahip olmalısın!`); // && !message.member.hasPermission('ADMINISTRATOR'))



if (kayitrol === null || kayitrol === 'Belirtilmedi!') {


let embedonbes = new Discord.RichEmbed()
		 .setTitle("SUNUCUİSİMİ Kayıt Sistemi")
        .setDescription("<a:yas:737967291983069204> Botunuza herhangi bir kayıt görevlisi tanımlanmamış! Lütfen **s!kayıtsistemi** komutundan yardım alınız! ")
        .setColor("RANDOM")
				.setFooter("SUNUCUİSİMİ Kayıt Sistemi")
		 message.channel.send(embedonbes)
		 return



	}



		  	  let erkek = db.fetch(`erkek${message.guild.id}`)

					  		  	  	  let erkeksayi = db.fetch(`erkeksayi${message.guild.id}`)
									   					  		  	  	  let kayitsiz = db.fetch(`kayitsiz${message.guild.id}`)







	if (erkek === null || erkek === 'Belirtilmedi!') {


let embedonalti = new Discord.RichEmbed()
		 .setTitle("SUNUCUİSİMİ Kayıt Sistemi")
        .setDescription("<a:yas:737967291983069204> Botunuza herhangi bir **Erkek Üye** rolü tanımlanmamış! Lütfen **s!kayıtsistemi** komutundan yardım alınız! ")
        .setColor("RANDOM")
				.setFooter("SUNUCUİSİMİ Kayıt Sistemi")
		 message.channel.send(embedonalti)
		 return



	}

		if (kayitsiz === null || kayitsiz === 'Belirtilmedi!') {


let embedonyedi = new Discord.RichEmbed()
		 .setTitle("SUNUCUİSİMİ Kayıt Sistemi")
        .setDescription("<a:yas:737967291983069204> Botunuza herhangi bir **Kayıtsız Üye** rolü tanımlanmamış! Lütfen **s!kayıtsistemi** komutundan yardım alınız! ")
        .setColor("RANDOM")
				.setFooter("SUNUCUİSİMİ Kayıt Sistemi")
		 message.channel.send(embedonyedi)
		 return



	}











  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun dostum.')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
     let isim = args[1]
      if(!isim) return message.channel.sendEmbed(new Discord.RichEmbed().addField(` Bilgi` , `Bir isim girmelisin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  await member.setNickname(`${isim}`)
  member.addRole(erkek)//verilecek rol
  member.removeRole(kayitsiz)//alınacak rol
  let embed = new Discord.RichEmbed()
  .setColor('BLACK')
  .setDescription(`${kullanıcı} **üyesine** <@&${erkek}> **rolü verip ismini**  \`${isim}\` **olarak ayarladım!**`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`)

          let art = 1;



        db.add(`erkeksayi${message.guild.id}`, art)


  return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['erkek'],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}

exports.help = {
  name: 'erkek',
  description: "Hadi erkek olalımm",
  usage: 'erkek'
}
