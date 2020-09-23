const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const gün = require("moment-duration-format");
const ms = require('parse-ms')
const db = require('quick.db');
const Canvas = require('canvas');
const config = require('./ayarlar.json');


 poster.bind(client);

const moment = require('moment');
require('./util/eventLoader')(client);




var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};













client.on("guildMemberAdd", async member => {
  let user = client.users.get(member.id);
  let chan = client.channels.get(db.fetch(`guvenlik${member.guild.id}`));
  const canvas = Canvas.createCanvas(360, 100);
  const ctx = canvas.getContext("2d");

  const resim1 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png"
  );
  const resim2 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png"
  );
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = require("moment-duration-format");
  var kontrol;
  if (kurulus > 2629800000) kontrol = resim2;
  if (kurulus < 2629800000) kontrol = resim1;

  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614164413318168606/Adsz.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol, 0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
  ctx.clip();
  ctx.drawImage(avatar, 143, 10, 73, 72);

  const attachment = new Discord.Attachment(
    canvas.toBuffer(),
    "semt-guvenlik.png"
  );
  
  
  
  
 
  
  
  chan.send(attachment);
});







client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
   log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};






client.on('message', (message) => {
  if(message.content.toLocaleLowerCase() === '<@!663335480326094868>') {
    message.react('👁‍🗨')
  }
})





client.on("message", async message => {
	
	let zaman = 7200000
	
	 let goldzam = await db.fetch(`goldzam_${message.author.id}`);


let gold = require("quick.db").fetch(`tios_gold${message.author.id}`)

 if (goldzam !== null && zaman - (Date.now() - goldzam) > 0) {
        let time = ms(zaman - (Date.now() - goldzam));

       return;
    } else {
if (gold === "gold") {

  const embed = new Discord.RichEmbed()
  .setColor("GOLD")
  .setDescription("<a:goldye:745563682112667700> Hizaya Geçin! Gold Üye Belirdi!")
  message.channel.send({embed}).then(message => message.delete(6000))

  db.set(`goldzam_${message.author.id}`, Date.now())

  } else {

return;

  }
  
	}

})









client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};







client.on('guildMemberAdd', async (member, guild, message) => {
 
  let role = db.fetch(`otorolisim_${member.guild.id}`)
   let otorol = db.fetch(`autoRole_${member.guild.id}`)
   let i = db.fetch(`otorolKanal_${member.guild.id}`)
   if (!otorol || otorol.toLowerCase() === 'yok') return;
  else {
   try {
   
   
    if (!i) return
  if (!role) {
    member.addRole(member.guild.roles.get(otorol))
                          var embed = new Discord.RichEmbed()
                          .setDescription("**Sunucuya Yeni Katılan** @" + member.user.tag + " **Kullanıcısına** <@&" + otorol + ">  **Rolü verildi.**")
                          .setColor('#ff00fc')
                          .setFooter(` sEmT4LiFe Otorol Sistemi`)
       member.guild.channels.get(i).send(embed)
  } else if (role) {
      member.addRole(member.guild.roles.get(otorol))
                          var embed = new Discord.RichEmbed()
                          .setDescription(`**Sunucuya Yeni Katılan** \`${member.user.tag}\` **Kullanıcısına** \`${role}\` **Rolü verildi.**`)
                          .setColor('#ff00fc')
                          .setFooter(` sEmT4LiFe Otorol Sistemi`)
       member.guild.channels.get(i).send(embed)
   
  }
   
   } catch (e) {
   console.log(e)
  }
  }
   
  });



















client.on('message', async message => {
	if (message.content === '!join') {
		client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
	}
});








  





client.on('message', (msg, member, args)  => {
	
	let saas_ = db.fetch(`saas_${msg.guild}`)
	if (saas_ == 'odulac') {


 
  if (msg.content.toLowerCase() === 'sa') {
      msg.reply('AleykümSelam , Hoşgeldin!  Nasılsın ?  ');
  }





  if (msg.content.toLowerCase() === 'iyiyim sen nasılsın') {
      msg.reply('Çok teşekkür ederimm bende iyiyim <3  ');
  }


  if (msg.content.toLowerCase() === 'nasılsın') {
      msg.reply('Ben çok iyiym, teşekkür ederim <3  ');
  }







  if (msg.content.toLowerCase() === 'merhaba') {
       msg.reply('Merhaba, Hoşgeldin');
  }
  
  if (msg.content.toLowerCase() === 'selam') {
    msg.reply('Aleykümselam, hoşgeldin nasılsın?');
  }
  if (msg.content.toLowerCase() === 'merhabalar') {
    msg.reply('Sanada Merrrrhabalar');
  }
 
 
	}
  

});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);