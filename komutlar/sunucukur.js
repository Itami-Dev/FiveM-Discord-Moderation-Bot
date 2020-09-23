const Discord = require('discord.js');
const {stripIndents} = require('common-tags');
const db = require('quick.db')
exports.run = async (client, message, args) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sunucukur` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }






  try {
	const embed = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setDescription('Sunucunuzdaki kanalların, kategorilerin ve rollerin hepsinin silinip botun yeni bir sunucu kurmasını onaylıyor musunuz?')
	.setFooter('Komut kullanmadan kanala direk "evet" yazar iseniz onaylamış olursunuz. Hiç bir şey yazmaz iseniz onaylanmaz.')
	message.channel.send({embed: embed})
	 message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.guild.channels.forEach((kanal) => {
          	kanal.delete()
          })
           setTimeout(() => {
          message.guild.roles.forEach((rol) => {
          	rol.delete()
          })
      }, 5000)

     const embedd = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setDescription('Sunucunuzdaki kanalların, kategorilerin ve rollerin hepsinin silinip botun yeni bir sunucu kurmasını onayladınız! Sunucu kuruluyor bu işlem biraz zaman alabilir.')
	message.author.send({embed: embedd})

    let every = message.guild.roles.find(r => r.name === '@everyone')

    //Kategoriler
    message.guild.createChannel('💥 Kayıt Kanalları', 'category').then(bilgi => {
    message.guild.createChannel('📞 Destek Odaları', 'category').then(toplum => {
    message.guild.createChannel('💫 Duyurular', 'category').then(kayitlar => {
    message.guild.createChannel('🔮 Kurallar', 'category').then(sesli => {
      message.guild.createChannel('🚔 LSPD', 'category').then(lspd => {
        message.guild.createChannel('🚑 EMS', 'category').then(ems => {


    //Kanallar
    setTimeout(() => {
    	message.guild.createChannel('🎞hosgeldiniz', 'text').then(hosgeldiniz => {
    	hosgeldiniz.overwritePermissions(every, {
    		SEND_MESSAGES: true
    	})
    	hosgeldiniz.setParent(bilgi.id)

    })
    	message.guild.createChannel('📣 Kayıt Bekleme', 'voice').then(kayitb => {
    	kayitb.overwritePermissions(every, {

    	})
    	kayitb.setParent(bilgi.id)
    })

    message.guild.createChannel('📣 Mülakat 1', 'voice').then(mulakat1 => {
    mulakat1.overwritePermissions(every, {

    })
    mulakat1.setParent(bilgi.id)
  })
  message.guild.createChannel('📣 Mülakat 2', 'voice').then(mulakat2 => {
  mulakat2.overwritePermissions(every, {

  })
  mulakat2.setParent(bilgi.id)
})
message.guild.createChannel('📣 Mülakat 3', 'voice').then(mulakat3 => {
mulakat3.overwritePermissions(every, {

})
mulakat3.setParent(bilgi.id)
})

message.guild.createChannel('🎡│duyurular', 'text').then(duyurular => {
duyurular.overwritePermissions(every, {
  SEND_MESSAGES: false
})
duyurular.setParent(kayitlar.id)

})


message.guild.createChannel('🚔│pd-rol-duyuru', 'text').then(duyurularpd => {
duyurularpd.overwritePermissions(every, {
  SEND_MESSAGES: true
})
duyurularpd.setParent(kayitlar.id)

})

message.guild.createChannel('🔫│illegal-rol-duyuru', 'text').then(duyurularil => {
duyurularil.overwritePermissions(every, {
  SEND_MESSAGES: true
})
duyurularil.setParent(kayitlar.id)

})

message.guild.createChannel('🤵│oyuncu-rol-duyuru', 'text').then(duyurularoyuncu => {
duyurularoyuncu.overwritePermissions(every, {
  SEND_MESSAGES: true
})
duyurularoyuncu.setParent(kayitlar.id)

})

message.guild.createChannel('🎉│etkinlik-duyuru', 'text').then(duyurularetkinlik => {
duyurularetkinlik.overwritePermissions(every, {
  SEND_MESSAGES: false
})
duyurularetkinlik.setParent(kayitlar.id)

})


message.guild.createChannel('🚔│lspd-basvuru', 'text').then(lspdbasvuru => {
lspdbasvuru.overwritePermissions(every, {
  SEND_MESSAGES: true
})
lspdbasvuru.setParent(lspd.id)

})


message.guild.createChannel('🚔│lspd-kurallar', 'text').then(lspdkurallar => {
lspdkurallar.overwritePermissions(every, {
  SEND_MESSAGES: false
})
lspdkurallar.setParent(lspd.id)

})


message.guild.createChannel('🚔│lspd-kadro', 'text').then(lspdkadro => {
lspdkadro.overwritePermissions(every, {
  SEND_MESSAGES: false
})
lspdkadro.setParent(lspd.id)

})

message.guild.createChannel('🚔│lspd-sohbet', 'text').then(lspdsohbet => {
lspdsohbet.overwritePermissions(every, {
  SEND_MESSAGES: false
})
lspdsohbet.setParent(lspd.id)

})

message.guild.createChannel('🚔│ Sohbet', 'voice').then(lspdseslisohbet => {

lspdseslisohbet.setParent(lspd.id)

})



message.guild.createChannel('🚑│ems-basvuru', 'text').then(emsbasvuru => {
emsbasvuru.overwritePermissions(every, {
  SEND_MESSAGES: false
})
emsbasvuru.setParent(ems.id)

})


message.guild.createChannel('🚑│ems-kurallar', 'text').then(emskurallar => {
emskurallar.overwritePermissions(every, {
  SEND_MESSAGES: false
})
emsbasvuru.setParent(ems.id)

})



message.guild.createChannel('🚑│ems-kadro', 'text').then(emskadro => {
emskadro.overwritePermissions(every, {
  SEND_MESSAGES: false
})
emskadro.setParent(ems.id)

})

message.guild.createChannel('🚑│ems-sohbet', 'text').then(emssohbet => {
emssohbet.overwritePermissions(every, {
  SEND_MESSAGES: false
})
emssohbet.setParent(ems.id)

})

message.guild.createChannel('🚑│ Sohbet', 'voice').then(emsseslisohbet => {

emsseslisohbet.setParent(ems.id)

})







    	message.guild.createChannel('📞 Destek Bekleme', 'voice').then(destekb => {
    	destekb.setParent(toplum.id)
    })
    	message.guild.createChannel('📞 Destek Odası 1', 'voice').then(destek1 => {
    	destek1.setParent(toplum.id)
    })
    	message.guild.createChannel('📞 Destek Çağırma', 'text').then(destek => {
    	destek.setParent(toplum.id)
    	destek.send(stripIndents`
    		\`\`\`md
# Merhaba!
> Bu kanal destek sistemi kanalıdır! Buraya **s!talep** yazıldığında otomatik olarak bir Destek Talebi açılır ve yetkililerimiz açılan talep kanalında size yardımcı olurlar. Harici olarak **📞 Destek Bekleme** odasına girerek yetkili ile sesli görüşme sağlayabilirsiniz!
[Uyarı!]: Gereksiz yere kullanmak yasaktır!
- ${client.user.username} Gelişmiş Destek Sistemi -
\`\`\`
    	`)
    	db.set(`destekK_${message.guild.id}`, destek.id)
    })
    }, 5000)



    setTimeout(() => {
    	message.guild.createChannel('📖│çete-kuralları', 'text').then(shbt => {
    	shbt.setParent(sesli.id)
    })
    	message.guild.createChannel('📖│roleplay-terimleri', 'text').then(shbt2 => {
    	shbt2.setParent(sesli.id)
    })
    	message.guild.createChannel('📖│sunucu-kuralları', 'text').then(oyn => {
    	oyn.setParent(sesli.id)
    })
    	message.guild.createChannel('📖│etkinlik-kuralları', 'text').then(oyn2 => {
    	oyn2.setParent(sesli.id)
    })
    	message.guild.createChannel('📖│soygun-kuralları', 'text').then(mzk => {
    	mzk.setParent(sesli.id)
    })
    	message.guild.createChannel('📖│yasal-sorumluluk', 'text').then(mzk2 => {
    	mzk2.setParent(sesli.id)
    })
    }, 15000)

  })})})})})})

    setTimeout(() => {
    	message.guild.createRole({
        name: 'Kurucu',
        color: 'ff0000',
        permissions: [
            "ADMINISTRATOR",
    ]
      })
      message.guild.createRole({
        name: 'Yönetim',
        color: '00bdff',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })
      message.guild.createRole({
        name: 'WL Reader',
        color: '00ff08',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })
      message.guild.createRole({
      	name: 'Destek Ekibi',
      	color: 'GREEN',
      	mentionable: true
      }).then(d => {
      db.set(`destekR_${message.guild.id}`, d.id)
    })
    message.guild.createRole({
      name: '-----------------------------',
      color: 'ff8100',
    })
      message.guild.createRole({
        name: 'DONATOR',
        color: '00ffb6',
      })
      message.guild.createRole({
        name: '-----------------------------',
        color: 'ff8100',
      })
      message.guild.createRole({
        name: 'VAGOS',
        color: 'e1ff00',
      })
      message.guild.createRole({
        name: 'BALLAS',
        color: '#aa00ff',
      })
      message.guild.createRole({
        name: 'GROVE',
        color: '00ff00',
      })
      message.guild.createRole({
        name: '-----------------------------',
        color: 'ff8100',
      })
      message.guild.createRole({
        name: 'LSPD',
        color: '0073ff',
      })
      message.guild.createRole({
        name: 'EMS',
        color: 'ff0080',
      })
      message.guild.createRole({
        name: '-----------------------------',
        color: 'ff8100',
      })
      message.guild.createRole({
        name: 'Bot',
        color: 'ff8100',
      })
      message.guild.createRole({
        name: '-----------------------------',
        color: 'ff8100',
      })
      message.guild.createRole({
        name: 'Whitelist',
        color: 'ff8c00',
      })
      message.guild.createRole({
        name: 'Bayan Üye',
        color: 'ff8c00',
      })
      message.guild.createRole({
        name: 'Kayıtsız',
        color: 'ff0000',
      }).then(d => { db.set(`otoR_${message.guild.id}`, d.id)})

    const embed = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setDescription('Sunucunuzdaki kanalların, kategorilerin ve rollerin hepsi başarıyla silindi! Ve sunucu kurulumu tamamlandı!')
	message.author.send({embed: embed})
    }, 20000)





db.set(`kurulum${message.guild.id}`, 'aktif')


        })
        .catch(() => {
        	message.channel.send('`10 saniye` geçerek kanalları, kategorileri ve rolleri silme işlemi iptal edildi!')
        });

  } catch (err) {

  }



};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['sunucukurulum', 'sunucu-kur', 'sunucukur'],
	permLevel: '4',
	kategori: 'moderasyon'
};

exports.help = {
	name: 'sunucu-kurulum',
	description: 'Sunucunuzu sıfırlar ve tekrardan botun ayarlarını ayarlayarak gerekli rolleri, kanalları, kategorileri oluşturarak sunucu kurar.',
	usage: ''
};
