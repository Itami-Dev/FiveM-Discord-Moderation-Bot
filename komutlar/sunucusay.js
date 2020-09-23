const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {
    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField('⚠ Uyarı ⚠', '`sunucusayı` adlı komutu özel mesajlarda kullanamazsın.');
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


	const mapping = {
  " ": "   ",
  "0": "<a:0a:726772795194867784>",
  "1": "<a:1a:696786369766490142>",
  "2": "<a:2a:696786408035057715>",
  "3": "<a:3a:696786495662456913>",
  "4": "<a:4a:696786495737954365>",
  "5": "<a:5a:696786501392138272>",
  "6": "<a:6a:696786522770243664>",
  "7": "<a:7a:696786567796359169>",
  "8": "<a:8a:696786580723204166>",
  "9": "<a:9a:696786582975283350>",
  "!": "::exclamation:",
  "?": ":question:",
  "#": ":hash:",
  "*": ":asterisk:"
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});


	let golddurum = db.fetch(`tios_gold${message.author.id}`)

	if (golddurum === 'gold') {


		 if(message.author.bot || message.channel.type === "dm") return;
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;

    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.find(emoji => emoji.name === "tik");



		  let offlinesayi = message.guild.members.filter(
    m => m.user.presence.status === "offline"
  ).size;
  let offline = '**Çevrimdışı Kişi Sayısı:** ' +
     `${offlinesayi}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  let toplam = message.guild.memberCount;
  let sunucu = '**Sunucudaki Kişi Sayısı:** ' +
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
	   let ses = '**Sesli Odalardaki Kişi Sayısı:** ' +
      `${count}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  let onlinesayi = message.guild.members.filter(
    only => only.presence.status != "offline"
  ).size;
  let online = '**Çevrimiçi Kişi Sayısı:** ' +
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")











const embed = new Discord.RichEmbed()
.setTitle('Sunucu İstatistikleri')
.setColor("RANDOM")







      .setThumbnail(client.user.avatarURL)

      	        .setImage("https://i.pinimg.com/originals/2b/b5/d5/2bb5d51caf29dfa39b8b1f91d5f7687e.gif")
.setDescription('' + sunucu + '\n \n' + online + '\n \n'+ ses + '\n \n'  + offline + '')
	  .addBlankField()

	 .addField('<a:discord:616687535300542515>  Sunucunuzun Reklamını Yayınlamak İçin', `[Top.GG Global Server List](https://top.gg/servers)`, true)

.setFooter('©️ 2020 SUNUCUİSİMİ Sunucu Sistemi')
  message.channel.send(embed)

	}





	else {

			let embed = new Discord.RichEmbed()
		 .setTitle("Gold Üyelik Gerekiyor!")
        .setDescription("Bunun gibi **Gold Üyelik** gerektiren komutları kullanmak için **s!bakiyeyardım** komutunu kullanarak gold üyelik alman gerekiyor! ")
        .setColor("RANDOM")

		 message.channel.send(embed)

	}
}


	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucusay'],
  permLevel: 0
};

exports.help = {
  name: 'sunucusay',
  description: 'Sunucu durumunu söyler.',
  usage: 'sunucusay'
};
