const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** $yasakla @kullanıcı = Herhangi Bir Kullanıcıyı Banlarsınız.\n**•** $at = Herhangi Bir Kullanıcıyı Atarsınız.\n**•** $banac @kullanıcı = Herhangi Bir Kullanıcının Banını Açarsınız.\n**•** $otorol rol = İstediğiniz Rolü Girişte Verdirmesini Sağlayabilirsiniz.\n**•** $rolbilgi ? İstediğiniz Rolün Bilgilerini Gösterir.\n**•** $süpür = Herhangi Bir Miktarda Mesajları Siler.\n**•** $ses-kanal-aç = Bir Ses Kanalı Oluşturur.\n**•** $yazı-kanal-aç = Bir Yazı Kanalı Oluşturur.\n**•** $yavasmod = Sunucuda Yavaş Mod Açar.\n**•** $sustur = Seçtiğiniz Kullanıcıyı İstediğiniz Süre Boyunca Susturur.\n**•** $kanalıkilitle = İstediğiniz Kanalı Kilitler\n**•** $kilitaç = İstediğiniz Kanalın Kilidini Açar.')
      .addField("» sEmT4LiFe", `7/24 Uptime`, false)
      .setFooter('sEmT4LiFe')

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
  aliases: ['yetkili3131313131'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili31313131',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili '
};
