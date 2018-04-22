const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
   
   client.user.setGame(prefix+'help | Raccoon★Army ▹');

});

 client.on("guildMemberAdd", (member) => 
 {
     messageToSend = "Bienvenido " + member.user + " a la Raccoon★Army ▹!  disfruta tu estadia <:karly:331439541892284417> revisa nuestras reglas en <#262072325019664385> <:RaccAttack:268179348828323841> !";
     client.channels.get('433510888188805132').sendMessage(messageToSend);
 });
 
 client.on("guildMemberRemove", (member) => 
 {
     messageToSend = member.user.username + " abusó de la arena de gatos. Adios popó <:feelsyoshiman:336584928160514051>.";
     client.channels.get('433510888188805132').sendMessage(messageToSend);
 });
//comandos sin prefix

     client.on("message", (message) => {        
 if (message.content.startsWith("ban")){
   message.channel.send("<:alm:336584266307731459> <:ban:369005376361725952>");
    }
 });

    client.on("message", (message) => {
          if (!message.content.startsWith(message)) return;
          if (message.author.bot) return;
       
 if (message.content.startsWith("hola")){
   message.channel.send("Hola cabeza de bola! <:dogoderp:420253479370752011>");
    }
 });

    client.on("message", (message) => {
          if (!message.content.startsWith(message)) return;
          if (message.author.bot) return;
       
 if (message.content.startsWith("Hola")){
   message.channel.send("Hola cabeza de bola! <:dogoderp:420253479370752011>");
    }
 });
        
 //comandos con prefix

 let prefix = process.env.PREFIX;

client.on("message", (message) => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

 if (message.content.startsWith(prefix + "subs")) {
   message.channel.send("Mira el canal de <#415978105883066369> para vincular la cuenta y disfrutar de tus beneficios");
 } else
 if (message.content.startsWith(prefix + "rabbit")){
   message.channel.send({embed: {
       color: 16744448,   
       description: "Unete a nuestro grupo de Rabbit para ver peliculas con los mapachitos, recuerda primero crear una cuenta en caso de no tener una https://www.rabb.it/groups/raccoonarmy <:wae:404790335609241600>"
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
   message.author.send('**Comandos de RaccoonBot**\n'+
                       '-> '+prefix+'avatar <@user> | Muestra el avatar de un usuario.\n'+
                       '-> '+prefix+'rabbit | Muestra nuestro grupo de Rabbit.\n'+
                       '-> '+prefix+'subs <@user> | Muestra informacion para subs.\n'+
                       '-> '+prefix+'caracola <@user> | El bot respondera a tus preguntas.\n'+
                       '-> '+prefix+'user <@user> | Muestra informacion de un usuario.\n'+
                       '-> '+prefix+'server <@user> | Muestra informacion del.\n'+
                       '-> '+prefix+'love <@user> | Muestra el amor que tienes entre dos personas .\n'+
                       '-> '+prefix+'saosin.\n'+
                       '-> '+prefix+'karla.\n'+
                       '-> '+prefix+'juanjo.\n'+
                       
                       '**RacconBot - Bot Oficial del servidor**\n'+
                      '**Cualquier problema o duda con los comandos manda DM a Juanjomcw o etiquetarlo en el canal #general.**\n');
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
           .addField('Apodo', message.member.nickname, true)
           .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
           .setColor(10371071)
           
          message.channel.send({ embed });
       }else{
         const embed = new Discord.RichEmbed()
         .setThumbnail(userm.avatarURL)
         .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
         .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
         .addField('ID', userm.id, true)
         .addField('Estado', userm.presence.status, true)
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
    if (message.content.startsWith(prefix + "saosin")){
      message.channel.send("AAAAHHHHH PRRO TRAIS EL OCNTRIS", {file:"https://i.imgur.com/V58cDNV.png"});
       
    }else
    if (message.content.startsWith(prefix + "karla")){
      message.channel.send("La mejor de todas <:karlagLove:433626197168226355>", {file:"https://cdn.discordapp.com/attachments/260272124311109652/382233854640914447/avatar.png"});
       
    }else
    if (message.content.startsWith(prefix + "juanjo")){
      message.channel.send("JUANJO PATRÓN, AMO Y SEÑOR DE TODOS :bow: ");
       
    }else 
   if(message.content.startsWith(prefix + 'shoutout')){
       message.channel.send('**SUBS!** Compartan su stream pero __por favor revisen estas **reglas**__ :\n'+
                      
                            '**1.** Pon tu link **__1 sola vez__** para mantener el orden.\n'+
                       
                            '**2.** Incluye una pequeña descripción sobre ti, tu contenido, tu horario o hobbies, etc. <:owo:433633440118865920>\n'+
                        
                            '**3.** Sólo puedes promocionar **__tu propio canal__**.\n'+
                        
                            '**4.** Este canal esta reservado para estos posts solamente, **__evita chatear aquí__** para que los links no se pierdan.\n'+
                        
                            'Como saben es considerado mala "etiqueta" hacerse self-promotion en otros canales, así que abro este espacio para que por aquí podamos compartir los canales de la gente talentosa que hay en nuestra comunidad de una manera amable y saludable. :heart:\n');
    }else 
   if(message.content.startsWith(prefix + 'caracola')){

       var rpts = ["Sí", "No", "Tal vez", "No sé", "Definitivamente NO", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no ", "Definitivamente NO"];
       if (!arguments) return message.reply(`Escriba una pregunta.`);
       message.channel.send(message.member.user+' Mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
   
   }else 
    if(message.content.startsWith(prefix + 'love')){
        let users = message.mentions.users.map(m => m.username).join(' y ');
     if(!users) return message.channel.send('Mencione a dos usuarios para calcular');
    
     const random = Math.floor(Math.random() * 100);
     let heard = "";
 
    if(random < 50){
        heard=':broken_heart:';

    }else if(random < 80){
        heard=':sparkling_heart: ';
        
    }else if(random < 101){
        heard=':heart:';

    }
            
      const embed = new Discord.RichEmbed()
          .setAuthor('El porcentaje de amor de '+users+' es:')
          .setDescription(heard+' **'+random+' %**'+' '+heard)
          .setColor(10371071)

        message.channel.send({embed});
       
       //de aqui para arriba
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
        }
    }
});
client.login(process.env.TOKEN);
