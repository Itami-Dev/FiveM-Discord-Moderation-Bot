const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {


 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sustur` adlı komutu özel mesajlarda kullanamazsın.')
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


  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Bu Komutu Kullanmak İçin : /sustur <Kullanıcı> <Süre> Olarak Yazmalısınız.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Hata: Geçici olarak susturmaya çalıştığınız kişi yetkili veya bot'un yetkisi belirttiğiniz kişiyi geçici olarak susturmaya yetmiyor!");
let muterole = message.guild.roles.find(r => r.name === "Cezalı");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Susturuldu!!!",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Bu Komutu Kullanmak İçin : ₺sustur <Kullanıcı> <Süre> Olarak Yazmalısınız.");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> için ses kapatıldı! ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Kişinin susturulma süresi dolduğu için mutesi kaldırıldı!`);
  }, ms(mutetime));



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['geçici-sustur', 'gsustur'],
  permLevel: 2
};

exports.help = {
  name: 'sustur',
  description: 'Sureli Susturur.',
  usage: 'sustur [Kullanıcı] [Süre]'
};
