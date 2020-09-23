const db = require('quick.db')
const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {



 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sigara` adlı komutu özel mesajlarda kullanamazsın.')
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

    return message.channel.send("**Yak Yak Yak**").then(async msg => {
                        setTimeout(() => {
                            msg.edit('🚬');
                        }, 500);
                        setTimeout(() => {
                            msg.edit('🚬 ☁ ');
                        }, 700);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁ ');
                        }, 900);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁ ');
                        }, 1000);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁');
                        }, 1100);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁');
                        }, 1200);
                        setTimeout(() => {
                            msg.edit('🚬 ☁');
                        }, 1300);
                        setTimeout(() => {
                            msg.delete(`**Sigara Bitti **`);
                        }, 6000);
                    });
                };

                exports.conf = {
                  enabled: true,
                  guildOnly: false,
                  aliases: ['sigarayak', 'smoking'],
                  permLevel: "0"
                };

                exports.help = {
                  name: "sigarayak",
                  description: "sigara içersiniz",
                  usage: "sigara"
                };
