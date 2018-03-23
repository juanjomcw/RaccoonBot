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
   message.channel.send("Mira el canal de #read_me_first para vincular la cuenta y disfrutar de tus beneficios");
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
                       '-> '+prefix+'8ball <@user> | El bot respondera a tus preguntas.\n'+
                       '-> '+prefix+'user <@user> | Muestra informacion de un usuario.\n'+
                       '-> '+prefix+'server <@user> | Muestra informacion del.\n'+
                       '-> '+prefix+'join <@user> | Conecta a un canal de voz.\n'+
                       '-> '+prefix+'leave <@user> | Sale del canal del voz.\n'+
                       'Cualquier problema o duda con los comandos manda DM a Juanjomcw o etiquetarlo en el canal #general.\n'+
                       '**RacconBot - Bot Oficial del servidor**\n');
 }else
 if (message.content.startsWith(prefix + "ban")){
   message.channel.send("<:alm:336584266307731459><:ban:420862051175366656><:ned:420862051410509844>");

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
    if (message.content.startsWith(prefix + "saosin")){
      message.channel.send("AAAAHHHHH PRRO TRAIS EL OCNTRIS https://cdn.discordapp.com/attachments/260272124311109652/425551272658206720/75f47707dcfc5806a662eb39ebd2bffa.png");
       
    }else
    if (message.content.startsWith(prefix + "karla")){
      message.channel.send("La mejor de todas <:love:331544353115734016>");
       
    }else
    if (message.content.startsWith(prefix + "juanjo")){
      message.channel.send("JUANJO PATRÓN, AMO Y SEÑOR DE TODOS <:bow:6ad7533814016970e37691af940737b1> ");
       
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
        }
    }else 
    client.on("guildMemberAdd", (member) => {
        console.log(`Nuevo Usuario: ${member.user.username} se ha unido a ${member.guild.name}.`);
        var canal = client.channels.get('404155431917715456');
        canal.send((`${member.user}, bienvenido al servidor pasala bien ahora eres un mapachito <:hype:331406040434212865>.`));
    })
}); 
client.login(process.env.TOKEN);
