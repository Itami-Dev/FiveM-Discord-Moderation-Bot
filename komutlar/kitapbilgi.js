const Discord = require('discord.js')
const request = require('node-superfetch')
const moment = require('moment')
  const db = require('quick.db')
const { GOOGLE_KEY } = process.env

exports.run = async (client, message, args) => {


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


        if (!args[0]) {
                const embed = new Discord.RichEmbed()
                        .setDescription('Aramak istediğiniz kitabı yazınz')
                        .setColor("RANDOM")
                message.channel.send({embed})
                return
        }

        const kitap = args.join(" ")

        try {
                const { body } = await request
                        .get('https://www.googleapis.com/books/v1/volumes')
                        .query({
                                apiKey: GOOGLE_KEY,
                                q: kitap,
                                maxResults: 1,
                                printType: 'books'
                        });

                if(!body.items) {
                        const embed = new Discord.RichEmbed()
                                .setDescription('Bulunamadı')
                                .setColor("RANDOM")
                        message.channel.send({embed})
                        return
                }

                const data = body.items[0].volumeInfo;

                const embed = new Discord.RichEmbed()
                        .setAuthor(`${data.title} | Kitap bilgileri`, "https://www.pngmart.com/files/1/Civil-Engineering-Book-PNG.png", `https://books.google.com.tr/`)
                        .addField('Yazar', data.authors || 'Bilinmiyor')
                        if(!data.publishedDate) {
                                embed.addField('Yayın tarihi', 'Bulunamadı')
                        } else {
                                embed.addField('Yayın tarihi', data.publishedDate)
                        }
                        embed.addField('Sayfa sayısı', data.pageCount || 'Bulunamadı')
                        if(data.imageLinks) {
                                embed.setThumbnail(`${data.imageLinks ? data.imageLinks.thumbnail : null}`)
                        }
                        embed.setColor("RANDOM")
                message.channel.send({embed})
        } catch (err) {
                message.channel.send(`HATA: ${err}`)
        }
}

exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['kitap', 'kitapara', 'kitapbilgi'],
        permLevel: 0,
        kategori: "kullanıcı",
}

exports.help = {
        name: 'kitap-ara',
        description: 'Yazılan kitabın bilgisini gösterir.',
        usage: 'kitap-ara <kitap ismi>',
}
