const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {
    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField('⚠ Uyarı ⚠', '`ateşet` adlı komutu özel mesajlarda kullanamazsın.');
        return message.author.sendEmbed(ozelmesajuyari);
    }




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




	let golddurum = db.fetch(`tios_gold${message.author.id}`)

	if (golddurum === 'gold') {



    let guild = message.guild
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Kime ateş edeceksen etiketlemelisin.').catch(console.error);
    message.channel.send('Ateş ediliyor....')
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit(`${Random[kafasınasık]}`));
    var Random = [
        'Tam isabet. Adam öldü! ☠',
        'Iskaladın tekrar dene.',
    ];
    var kafasınasık = Math.floor(Math.random() * Random.length);


	}

	else

		{

			let embed = new Discord.RichEmbed()
		 .setTitle("Gold Üyelik Gerekiyor!")
        .setDescription("Bunun gibi **Gold Üyelik** gerektiren komutları kullanmak için **s!bakiyeyardım** komutunu kullanarak gold üyelik alman gerekiyor! ")
        .setColor("RANDOM")

		 message.channel.send(embed)
		}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ateşet'],
  permLevel: 0
};

exports.help = {
  name: 'ateşet',
  description: 'Ateş etmeni Söyler.',
  usage: 'ateşet'
};
