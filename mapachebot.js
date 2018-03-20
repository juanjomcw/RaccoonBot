const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
   
   client.user.setGame(prefix+'help | Raccoon★Army ▹');

});
let prefix = process.env.PREFIX;

client.on("message", (message) => {
     if (!message.content.startsWith(prefix)) return;
 if (message.author.bot) return;

  if (message.content.startsWith(prefix + "subs")) {
    message.channel.send('Mira el canal de <#415978105883066369>');
  } else
  if (message.content.startsWith(prefix + "rabbit")){
    message.channel.send({embed: {
        color: 16744448,   
        description: "Unete a nuestro grupo de Rabbit para ver peliculas con los mapachitos, recuerda primero crear una cuenta en caso de no tener una *LINK* <:wae:404790335609241600>"
        }});
  } else
  if(message.content.startsWith(prefix + 'avatar')){
    let img = message.mentions.users.first()
    if (!img) {

        const embed = new Discord.RichEmbed()
        .setImage(`${message.author.avatarURL}`)
        .setColor(10371071)
        .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
        message.channel.send({ embed });

    } else if (img.avatarURL === null) {

        message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");

    } else {
        
        const embed = new Discord.RichEmbed()
        .setImage(`${img.avatarURL}`)
        .setColor(10371071)
        .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
        message.channel.send({ embed });
        }
  }else
  if(message.content.startsWith(prefix + "help")){
      
    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
    message.author.send('**Comandos**\n'+
                        '-> '+prefix+'avatar <@user> | Muestra el avatar de un usuario.\n'+
                        '-> '+prefix+'rabbit | Muestra nuestro grupo de Rabbit.\n'+
                        '-> '+prefix+'subs | Muestra informacion para subs.\n'+
                        '-> '+prefix+'8ball <pregunta> | El bot respondera a tus preguntas.\n'+
                        '-> '+prefix+'user <@user> | Muestra informacion de un usuario.\n'+
                        '-> '+prefix+'server | Muestra informacion del Servidor.\n'+
                        '-> '+prefix+'join | Conecta a un canal de voz.\n'+
                        '-> '+prefix+'leave | Sale del canal del voz.\n'+
                        
                        '_**RacconBot - Bot Oficial del servidor**_\n');
  }else
   if (message.content.startsWith(prefix + "ban")){
    message.channel.send("<:alm:336584266307731459><:ban:420862051175366656><:ned:420862051410509844>");

    }else
  if (message.content.startsWith(prefix + "saosin")){
    message.channel.send("ahhh prro trais el ocnitrix https://cdn.discordapp.com/attachments/260272124311109652/425551272658206720/75f47707dcfc5806a662eb39ebd2bffa.png");
     
  }else 
    if(message.content.startsWith(prefix + 'user')){
        let userm = message.mentions.users.first()
        if(!userm){
          var user = message.author;
          
            const embed = new Discord.RichEmbed()
            .setThumbnail(user.avatarURL)
            .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
            .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
            .addField('ID', user.id, true)
            .addField('Estado', user.presence.status, true)
            .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
            .setColor(10371071)
            
           message.channel.send({ embed });
        }else{
          const embed = new Discord.RichEmbed()
          .setThumbnail(userm.avatarURL)
          .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
          .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
          .addField('ID', userm.id, true)
          .addField('Estado', userm.presence.status, true)
          .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
          .setColor(10371071)
          
         message.channel.send({ embed });
        }
    }else
    if(message.content.startsWith(prefix + 'server')){
        
        var server = message.guild;
      
        const embed = new Discord.RichEmbed()
        .setThumbnail(server.iconURL)
        .setAuthor(server.name, server.iconURL)
        .addField('ID', server.id, true)
        .addField('Region', server.region, true)
        .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator, true)
        .addField('Miembros', server.memberCount, true)
        .setColor(10371071)
       message.channel.send({ embed });
    }else 
    if(message.content.startsWith(prefix + '8ball')){

        var rpts = ["Sí", "No", "Tal vez", "No sé", "Definitivamente NO", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no ", "Definitivamente NO"];
        if (!arguments) return message.reply(`Escriba una pregunta.`);
        message.channel.send(message.member.user+' Mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
    
    }else 
    if (message.content. startsWith(prefix + 'join')){
        let Canalvoz = message.member.voiceChannel;
        if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));

        }else if (message.guild.voiceChannel) {
            message.channel.send('Ya estoy conectado en un canal de voz.');

        } else {
            message.channel.send('Conectando...').then(m => {
                Canalvoz.join().then(() => {
                     m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
               }).catch(error => message.channel.send(error));
           }).catch(error => message.channel.send(error));
        }
    }else
    if (message.content.startsWith(prefix + 'leave')) {
        let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz) {
        message.channel.send('No estoy en un canal de voz.');

    } else {
        message.channel.send('Dejando el canal de voz.').then(() => {
            Canalvoz.leave();
        }).catch(error => message.channel.send(error));
        }
    }else
       if (message.content.startsWith(prefix + 'play')) {

  console.log(message.author.username + ' Ha usado p?play en ' + message.channel.name + ' servidor ' + message.guild.name);

  const ytdl = require('ytdl-core');  
  const search = require('youtube-search');

   search(arguments, {

               maxResults: 1,

               key: 'AIzaSyD0V9wSSRdv5FC4W0mLvKOuBIYkUov-2gA'

           },(err, res) => {

          //Si hay error o no se encontraron resultado de la busqueda

          if (err) return message.channel.send("Error");

          if (!res[0]) return message.channel.send("Sin resultados.");

          

          //Obtiene el link de la busqueda

          let url  = res[0].link;

          



          let voiceChannel = message.member.voiceChannel;

          voiceChannel.leave();

          voiceChannel.join()

            .then(connection => {

              const url = ytdl(res[0].link, { filter : 'audioonly' });

              const dispatcher = connection.playStream(url);

            });



      message.channel.send('Reproduciendo ahora: '+ url);

      message.delete();

          })
    }
});    
client.login(process.env.TOKEN);
