 const Discord = require("discord.js");
  const kboosh = new Discord.Client();
    const kbooshtoken = "NTIwNTUyMTAyNjM2OTQ1NDA5.DweEJA.07L__sEghDF30Rx87pOsGXjBkQs"
      kboosh.on('ready', () => {
        kboosh.user.setGame(`%help |v:BETA|%credits|new mods<new cmd`,'https://www.twitch.tv/mohamedaminegamer');
          console.log('Im Ready!');
  
        });


  
kboosh.on('message', msg => {
  if (msg.content === '%help') {
    msg.reply('Moderation: %kick %ban %bot %help.bc %add.r | Everyone: %botping %avatar %support %owner %invitelink %date %million %new | ارسل رسالة للبوت في الخاص للتواصل مع الاونر %bot %count %botping %credits %daily %id ');
  }
});

kboosh.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '%avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});


kboosh.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "%kick"
  if (message.content.startsWith('!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to kick the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});
kboosh.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('%ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to ban the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('You didn\'t mention the user to ban!');
    }
  }
});
kboosh.on('message', msg => {
  if (msg.content === '%inv') {
    msg.reply('Tnx 7itach baghi t inviti l bot ta3na: https://discordapp.com/api/oauth2/authorize?client_id=520552102636945409&permissions=8&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D520552102636945409%26permissions%3D8%26redirect_uri%3Dhttps%253A%252F%252Fdiscordapp.com%252Fapi%252Foauth2%252Fauthorize%253Fclient_id%253D&scope=bot');
  }
});
kboosh.on('message', msg => {
  if (msg.content === '%support') {
    msg.reply('https://discord.gg/eHyjpZf');
  }
});
kboosh.on('message', msg => {
  if (msg.content === '%owner') {
    msg.reply('mohamedamine#1068');
  }
});

kboosh.on('message',message =>{
         var prefix = "%";
    if(message.content.split(' ')[0].toLowerCase() == prefix + 'myinv') {
   let guild = message.guild
   var codes = [""]
    var nul = 0
         
   guild.fetchInvites()
   .then(invites => {
   invites.forEach(invite => {
   if (invite.inviter === message.author) {
       nul+=invite.uses
   codes.push(`discord.gg/${invite.code}`)
   }
    
   })
     if (nul > 0) {
         const e = new Discord.RichEmbed()
         .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
         .setColor('#36393e')
         message.author.send(e).then(() => {
      }).catch(() => {
      });
     }else {
   var embed = new Discord.RichEmbed()
    .setColor("#36393e")
    .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذا السيرفر`)
   message.author.send({ embed: embed }).then(() => {
}).catch(() => {
});
    return;
}
   }).then(m => {
   if (codes.length < 0) {
       var embed = new Discord.RichEmbed()
   .setColor("#36393e")
   .addField(`Your invite codes in ${message.guild.name}`, `You currently don\'t have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
  message.author.send({ embed: embed }).then(() => {
   message.channel.send('**Successfully sent the message! :white_check_mark: **');
}).catch(() => {
   message.channel.send('**The user have dms disabled** :x:')
});
  return;
  } else {
      var embed = new Discord.RichEmbed()
  .addField(`Your invite codes in ${message.guild.name}`, `Invite Codes :\n${codes.join("\n")}`)
  .setColor('#36393e')
  message.author.send({ embed: embed }).then(() => {
   message.channel.send('**Successfully sent the message! :white_check_mark: **');
}).catch(() => {
   message.channel.send('**The user have dms disabled** :x:') 
});
  return;
  }
 })
 }
  
});
kboosh.on('message', msg => {
  if (msg.content === '%invitelink') {
    msg.reply(':warning:تم تعطيل الامر لاسباب امنية:warning: ');
  }
});
var prefix = "%";
kboosh.on('message', message => {
         if (message.content === prefix + "date") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
 
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 
 
                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")
 
                 message.channel.sendEmbed(Date15);
        }
    });
kboosh.on('message', fkk => {
    if (fkk.content == "%million") {
        var x = ["المتاح للجميع لا يتاح لي",
"كم ساعة في اليوم الواحد؟",
"ما اسم المكان الذي يسكن فيه النحل؟",
"ن سباقات الالعاب الاولومبية سباق….؟",
"كن حذرا من اللئيم اذا….؟",
"تدور وتدورها الدابة وتفررها",
"كم يستطيع العقرب ان يعيش دون طعام او شراب؟",
"ما أكبر مدينة في قارة اوروبا؟",
"بم يسمى تغير المادة من الحالة الغازية الى الحالة السائلة؟",
"كم تبلغ نسبة البروتينات في حبة القمح؟",
"ما هما دولتا شبه الجزيرة الاسكندنافية؟",
"ما الاسم الحالي لمدينة القسطنطينية؟",
"لماذا يفتح السمك فمه باستمرار؟",
"ما هو عيار الذهب الخالص بالقيراط؟",
"من الخليفة الذي لقب بالمثمن؟",
"في اي عام توفي الخوارزمي؟",
"اصغر ولاية أمريكية",
"أول من وضع صورتة على النقود",
"أقدم وأقصر نشيد وطني",
"لون دم حيوان الكركدن",
"أندر فصيلة دم في العالم",
"كام دولة في العالم لا تطل على أي مسطح مائي",
"عدد غرف البيت الأبيض",
"مات لورانس العرب بحادث دراجة نارية",
"عدد الجيوب الأنفية للإنسان",
"ذكر رمضان في القرآن الكريم",
"ولد الملك سعود بن عبدالعزيز فى دول",
"حجبت جائزة نوبل في جميع المجالات",
"السورة الوحيدة في القرآن الكريم التي تحمل إسم نبات",
"الدولة الوحيدة التي لها حدود مع الدنمارك",
"ثالث أكبر دوايانة بعد المسيحية والإسام اليهود هي الديانة",
"عقوبة السائق السكران في السلفادور هى",
"أعلى درجات مقياس رختر للزلازل هى",
"عدد مربعات لعبة الشطرنج",
"الحيوان الذي له أكبر عدد من الأسنان",
"عدد قصص كتاب ألف ليلة وليلة",
"عدد إختراعات توماس أديسون",
"آخر من مات من الصحابة هو",
"تعيش أشجار الزيتون",
"عدد بنود شريعة حمورابي",
"في يوم 27 سبتمبر من كل عام يتساوى طول",
"كام اقمار فى كوكب المشترى",
"تعرضت المدينة المنورة لزلزال هائل في عام",
"العروة الوثقى مجلة أسسها جمال الدين الأفغاني والشيخ محمد عبده في باريس عام",
"ينظر تمثال أبو الهول إلى جهة",
"توفي الجاحظ بعد سقوط مجموعة من الكتب عليه من أرفف مكتبته وكان عمره",
"ولد الرئيس المصري محمد نجيب في",
"عدد القوارير في لعبة البولينغ",
"الحيوان الذي يقوم ذكرة بمهمة الحمل بدلاً من الأنثى",
"عدد الخلفاء الأمويين",
"عدد الخلفاء العباسيين",
"يحدث الكـسوف الكلي للشمس كل",
"كان عمر مسيلمة الكذاب عندما قتل قد تجاوز",
"القرامطة سرقوا الحجر الأسود من مكة المكرمة وأعادوه بعد",
];
        var x2 = ['',
		"24",
        "خلية",
		"100",
		"أكرمته",
		"السمسم يجبرها تطحنه بتدورها",
		"اربعة اسابيع",
		"لندن",
		"تكثيف",
		"13 % بروتينات",
		"السويد",
		"اسطنبول",
		"لأنه يتنفس من الخياشيم",
		"24 قيراط",
		"الخليفة المعتصم",
		"750",
		"رود آيلاند",
		"الإسكندر المقدوني",
		"النشيد الوطني الياباني",
		"أزرق",
		"Oh",
		"26",
		"143",
		"لندن",
		"8",
		"1",
		"الكويت",
		"49",
        "التين",
		"ألمانيا",
		"الكونفوشيوسية",
		"الاعدام",
		"12 درجة",
		"64",
		"التمساح",
		"568",
		"1033",
		"أبو الطفيل عامر بن واثلة",
		"400",
		"285",
		"الليل والنهار",
		"27",
		"1258",
		"1884",
		"الشرق",
		"94",
		"الخرطوم",
		"10",
		"حصان البحر",
		"14",
		"37",
		"360",
		"150",
		"22",
		
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`╔════════【۩ **__ من سيربح المليون __** ۩】════════╗

***${x[x3]}***

=====================================

**__لديك 15 ثانية للاجابة __**
╚═════════════════════════════╝`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1000,
                time : 15000,
                errors : ['https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`${collected.first().author} اجابة صحيحة :white_check_mark: `);
        })
        })
    }
})
kboosh.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '👋welcom👋');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

kboosh.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

kboosh.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '👋welcom👋');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Has Let the Server', ';(')
        .addField('Bye Bye :(', 'We will all miss you!')
        .addField('The server now as', `${member.guild.memberCount}` + " members")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

kboosh.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});


var prefix = "%";
kboosh.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.toLowerCase().startsWith(prefix + `help`)) { //TPG_Community
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: Tycket Help`)
    .setColor(0xCF40FA)
    .setDescription(`مرحبا!  ، و Discord commands=بوت لأشياء تذكرة دعم أكثر من رائع وأكثر! وهنا أوامر بلدي:`)
    .addField(`Tickets`, `[${prefix}new]() > Opens up a new ticket and tags the Support Team\n[${prefix}close]() > Closes a ticket that has been resolved or been opened by accident`)
    .addField(`Other`, `[${prefix}help]() > Shows you this help menu your reading\n[${prefix}ping]() > Pings the bot to see how long it takes to react\n[${prefix}about]() > Tells you all about mohamedamine#1068`)
    message.channel.send({ embed: embed });
  }
 
  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`#ping`).then(m => {
    m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
    });
}
 
if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم ** ** هنا قريباً لمساعدتك.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`لا يمكنك استخدام أمر الإغلاق خارج قناة التذاكر.`);
 
    message.channel.send(`هل أنت واثق؟ بمجرد التأكيد ، لا يمكنك عكس هذا الإجراء!\للتأكيد ، اكتب \`%close\`. سوف يتم الغاء امر بعد 20 ثواني ان لم تقم بكتابة تاكيد.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '%close', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}
 
});
kboosh.on('message', function(message) {

    if (message.channel.type === "dm") {

        if (message.author.id === kboosh.user.id) return;

        var stewart = new Discord.RichEmbed()

            .setColor('RANDOM')

            .setTimestamp()

            .setTitle('``رساله جديده في خاص البوت``')

            .setThumbnail(`${message.author.avatarURL}`)

            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)

            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)

        kboosh.channels.get("551749509164564481").send({ embed: stewart });

    }

})

kboosh.on('guildMemberUpdate', (o,n) => {
    if (n.user.bot) {
        if (o.roles !== n.roles) {
            n.roles.forEach(role => {
                if (!n.roles.find('id', role.id)) n.removeRole(role);
            });
        };
    };
});
kboosh.on('message', msg => {
  if (msg.content === 'bghit account fortnite fabor') {
    msg.reply('7wini nta 7sn');
  }
});
kboosh.on('message', msg => {
  if (msg.content === 'Chkon molak') {
    msg.reply('Li 7wak 1-0');
  }
});
var prefix = "%";
kboosh.on('message', message =>{
if(message.content.startsWith(prefix + 'count')){
message.channel.send(`

 
${message.guild.memberCount} <== ** عدد الكل**
${message.guild.members.filter(m =>!m.user.bot).size} <==  ** عدد الاعضاء**
${message.guild.members.filter(m=>m.user.bot).size} <== ** عدد البوتات**
`)
}
});
var prefix = "%";
kboosh.on('message', message => { //ping
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + 'botping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(kboosh.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('#5016f3')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
                        .setTimestamp()
        message.channel.send({embed:embed});
                        }
                    });

kboosh.on('message', message => {
    if (message.content === ('%bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(kboosh.user.username,kboosh.user.avatarURL)
            .setThumbnail(kboosh.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**📚 :', [kboosh.guilds.size], true)
            .addField('**Channels**📝 :' , `[ ${kboosh.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${kboosh.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${kboosh.user.tag} ]` , true)
            .addField('**Bot Owner**👑 :' , `[<@اmohamedamine#1068>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});
kboosh.on('message', async msg => {
  if(msg.content.startsWith('%servers')) {
    let output = '**Servers**\n';
    kboosh.guilds.forEach(guild => {
      output += `**Name**: ${guild.name}, **ID**: ${guild.id}, **MembersCount**: ${guild.memberCount}, **Owner**: ${guild.owner}`;
    });
    msg.channel.send(output);
  }
});
var prefix = "%";
kboosh.on('message',async message => {//new msg event
if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'Rainbow')) {//to create the rainbow role
   let role = message.guild.roles.find('name', 'Rainbow Rank')
   if(role) return message.channel.send(`هاي الرتبة موجودة !`)//if the role already created return with this msg
 //start of create role 
 if(!role){
   rainbow =  message.guild.createRole({
  name: "Rainbow Rank",//the role will create name
  color: "#000000",//the default color
  permissions:[]//the permissions
//end of create role
})

}
message.channel.send('تم')//if the step completed
}})
kboosh.on('ready', () => {//new ready event
 setInterval(function(){
     kboosh.guilds.forEach(g => {
                 var role = g.roles.find('name', 'Rainbow Rank');//rainbow role name
                 if (role) {
                     role.edit({color : "RANDOM"});
                 };
     });
 }, 1000);//the rainbow time
})
var prefix = "%";
kboosh.on("message", message => {
  let men = message.mentions.users.first();
  if(message.content.startsWith(prefix + "vkick")) {
    try {
    if(!men) {
      message.channel.send("**الرجاء اخيار شخص لطرده !**");
      return;
    }
    if(!message.guild.member(men).voiceChannel) return message.channel.send("المراد طرده ليس في الغرف الصوتيه!");
    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لديك صلحيات سحب الاعضاء")
    if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لدي الصلاحيه لسحب الاعضاء");
       if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ليست لدي الصلاحيات لانشاء رومات صوتيه")

    message.guild.createChannel(" VKick", "voice").then(c => {
      message.guild.member(men).setVoiceChannel(c.id)
    setTimeout(() => {
      c.delete()
    }, 100)
    });
    message.channel.send(`**لقد تم طرده من الرومات الصوتيه \`\`${men.username}\`\`**`)
} catch (e) {
  message.channel.send("لا يمكنني القيام بذلك بسبب الصلاحيات او ما شابه");
}
  }
});
var prefix = "%";
kboosh.on("message", msg => {
  if(msg.content === prefix + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true);
      msg.channel.send({embed: embed})
  }
});
var prefix = "%";
kboosh.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(kboosh.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('**منشن عضو لأسكاته ( لأعطائة ميوت ) كتابي**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(kboosh.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**لا يمكنك اعطاء ميوت  لنفسك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('**حدد وقت زمني لفك الميوت عن الشخص**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "غير محدد";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('تم اغطائك ميوت بسيرفر')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - السيرفر',message.guild.name,true)
    .addField('# - تم اعطائك ميوت بواسطة',message.author,true)
    .addField('# - السبب',reason)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {  // حقوق الفا كومينتي
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `); // حقوق الفا كومينتي
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(kboosh.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**منشن الشخص لفك الميوت عنه**').then(msg => { // حقوق الفا كومينتي
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `); // حقوق الفا كومينتي
  }
});
kboosh.on('message', function(msg) {
    const prefix = '%'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

var prefix = "%";
kboosh.on('message', message => {
  if (message.content.startsWith(prefix + 'id')) {
    var mentionned = message.mentions.users.first();
    var mrx;
      if(mentionned){
          var mrx = mentionned; } else {
          var mrx = message.author;
      }
      let alpha = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor('ℹ️ ID USER')
      .addField(`${mrx.username}`,` [ ${mrx.id} ]`)
      .setFooter(`- Requested By: ${message.author.tag}`)
      .setThumbnail(`${mrx.avatarURL}`)
      message.channel.sendEmbed(alpha);
  }
});
kboosh.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`MAr7ba bik a khoya f "TPG community" For Gamers o kayn 7ta credits %help ola %new ila 3ndk mochkil
 ${member}  
 `) 
}).catch(console.error)
})
var prefix = "%";
kboosh.on('message', message => {
			var mintionchannel = message.content.split(' ').slice(1);
      if(message.content.startsWith(prefix + 'channel')) {
       
         if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
          message.channel.send("You Don't Have A Permissions `MANAGE_CHANNELS` ");
        } else {
			     var room1 = message.guild.channels.find('name', `${mintionchannel}`);
          if(!room1) {
           message.channel.send( "**Usage :** ```" + "  " + `${prefix}` + 'channel'+ " " + 'ChannelName```' );
            } else {
             
             if (room1.type = "text"){
              var filtertitle = "Channel Last Message : ";
              var filtermessage =  room1.lastMessage; 
             }if (room1.type = "voice"){
              var filtertitle = "Channel Timestamp";
              var filtermessage = room1.createdTimestamp;
             }
              let embed = new Discord.RichEmbed()
              .addField(' Chanel Name : ', room1.name, true)
              .addField(' Channel ID : ',room1.id, true)
              .addField(' Channel CreateAt  : ', room1.createdAt,true)
              .addField(`${filtertitle}`, filtermessage , true)
              .addField(' Channel Type : ', room1.type, true)
               message.channel.sendEmbed(embed);
		    	}
            
          }
     }
    });
var prefix = "%";
kboosh.on('message', async message => {//alpha codes & Mrx -Dev
                    if (message.content.startsWith(prefix + 'add.r')) {//alpha codes & Mrx -Dev
                        let args = message.content.split(' ').slice(1);//alpha codes & Mrx -Dev
                        if (!args) return message.reply('Type Name Role') //alpha codes & Mrx -Dev
                        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                        await message.channel.sendMessage(`➕ | To Create Role
:x: | To Cancel the process`).then(e => {//alpha codes & Mrx -Dev
                            e.react("➕")//alpha codes & Mrx -Dev
                            .then(()=> e.react("➕"))//alpha codes & Mrx -Dev
                            .then(()=> e.react("❌")).then(() => c.delete(12000))//alpha codes & Mrx -Dev
                            let reaction1Filter = (reaction, user) => reaction.emoji.name === '➕' && user.id === message.author.id;//alpha codes & Mrx -Dev
                            let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;//alpha codes & Mrx -Dev
                            let reaction1 = e.createReactionCollector(reaction1Filter, { time: 12000 });//alpha codes & Mrx -Dev
                            let reaction2 =e.createReactionCollector(reaction2Filter, { time: 12000 });//alpha codes & Mrx -Dev
                            reaction1.on("collect", c => {//alpha codes & Mrx -Dev
                  message.guild.createRole({
                    name : args.join(' '),
                    permissions : [1]
      
                })
                  e.edit(`Role Created ! :heavy_check_mark:`).then(g => {
                    g.delete(5000)
                    message.delete()
                                    })
                                }
                  
                                    )//alpha codes & Mrx -Dev
                                    reaction2.on("collect", c => {//alpha codes & Mrx -Dev
                                      e.edit('**Successfully Canceled :x:**').then(c => {
                                        c.delete(5000)
                                        message.delete()
                                        
                        })
                      })
                    }
                        )}
                        
                });
const fs = require('fs'); // npm i fs
const ms = require('ms'); // npm i ms
const cool = [];
var prefix = "%";
kboosh.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || kboosh.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || kboosh.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
  
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2])) return message.channel.send('**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**');
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**');
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
    
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}`);
  } 
  
  }
  if(message.content.startsWith(prefix + "daily")) {
    if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \ , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);
    if(mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
  
      var number = `${one}${two}${three}${four}`;
 
      message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {
        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
          if(collected.first().content === number) {
            m.delete();
            collected.first().delete();
            credits[mentionn.id].credits += (+daily);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
          message.channel.send(`**:atm: | \`${daily}\`, تم تسليم المبلغ**`);  
          }
          if(collected.first().content !== number) {
            return m.delete();
          }
        });
      });
    } else if(!mentionn) {
      credits[author].credits += (+daily);
      fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
      message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
    }
    cool.unshift(message.author.id);
 
    setTimeout(() => {
      cool.shift(message.author.id);
      message.author.send("**:atm: | \`Daily\`, يمكنك الحصول على الكردت المجانية الان**").catch();
    }, ms("1d"));
  }
});
const bugs = require("./Report.json")

var prefix = "%";
 
 
kboosh.on("message", TheReport => {
 
  const args = TheReport.content.slice(prefix.length).trim().split(/ +/g);
 
if(TheReport.content.startsWith(prefix + "report")) {
  TheReport.delete();
  if(TheReport.content === '${prefix}report') return TheReport.channel.send("**write your bug**").then(msgR =>msgR.delete(4000));
 bugs[TheReport.author.id] = {
  message: args.slice(1).join(""),
  by: TheReport.author.id
 }
fs.writeFile("./Report.json", JSON.stringify(bugs, null , 4), err =>{
  console.log(err);
  })
  }
 
}
 
 
 
)
var prefix = "%"; 
kboosh.on('message', message =>{
  if(message.content.startsWith(prefix + 'stats')){
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **لا تملك صلاحية**');
  if(!message.guild.member(kboosh.user).hasPermissions(['MANAGE_CHANNELS'])) return message.reply('❌ **البوت لا يمتلك صلاحية**');
  message.guild.createChannel(`👑معلومات السيرفر👌:` , 'category')
  
    message.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
    time.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  
  setInterval(() => {
      time.setName(`${message.guild.memberCount} <== عدد الكل `);
 },1000);
    });

 message.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
  time.overwritePermissions(message.guild.id, {
    CONNECT: false,
    SPEAK: false
  });
setInterval(() => {
    time.setName(`${message.guild.members.filter(m =>!m.user.bot).size} <==  عدد الاعضاء `);
},1500);
});

message.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
  time.overwritePermissions(message.guild.id, {
    CONNECT: false,
    SPEAK: false
  });
setInterval(() => {
    time.setName(`${message.guild.members.filter(m=>m.user.bot).size} <==  عدد البوتات `);
},2000);
});
}
}); 
kboosh.on('message', message => {
    if (message.content === "%c.roles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);
 
                     message.guild.createRole({ name: "Owner", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "CoOwner", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "CoLeader", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "King", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "Queen", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "Active", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "Member", color: "#اللون", permissions: [] })
        
 
message.channel.sendMessage('**انتظر قليلا حتى انتهي من صناعة الرتب! **')
}
});
var prefix = "%";
kboosh.on('message', message => {
    let messageArray = message.content.split(" ");
    
    let command = messageArray[0];
    
    
    if (command === `${prefix}help.bc`) {
			let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-:: [ Narox ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
				.addField(`**${prefix}bc1 | رسالة جماعية لجميع الاعضاء**'` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**${prefix}bc2 | رسالة جماعية للاونلاين فقط**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**${prefix}bc3 | رسالة جماعية للوفلاين فقط**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**${prefix}bcrole | رسالة جماعية لرتبة معينه**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ شكرا على استعمال [TPG]_Bot ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`By mohamedamine - TPG_community`)
                .setTimestamp()
			
                message.author.sendEmbed(embed)
	}
});

var prefix = "%";
 kboosh.on("message", message => {//bc1

            if (message.content.startsWith(prefix + "bc1")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}\n By Server : ${message.guild.name}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

var prefix = "%";
kboosh.on("message", message => {//bc2

            if (message.content.startsWith(prefix + "bc2")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}\n ${m}\n By Server : ${message.guild.name}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
var prefix = "%";
kboosh.on("message", message => {//bc3

            if (message.content.startsWith(prefix + "bc3")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m} \n By Server : ${message.guild.name}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


var prefix = "%";
kboosh.on('message' , message => {//bcrole
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "bcrole")) {
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }
    if(!args[1]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`);
        message.guild.members.forEach(mi => {
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("لا توجد رتبة بهذا الاسم");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(
          "الرسالة :" + "\n" +
        "**" + `${args[1]}` + `By Server : ${message.guild.name}`
          );
        });
      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عظو**`);
    }
});
const moment = require("moment")
kboosh.on("guildMemberAdd", m => {
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 30
) {
        m.ban();
    };
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
   
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    };
});

let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"))
// كل كود اوله ضيف
/* if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {
        prefix: '!',
    };
    var prefix = prefixes[message.guild.id].prefix;*/
 
 
// واخره
/* fs.writeFile("./prefix.json", JSON.stringify(prefixes), (err) => {
        if (err) console.error(err);
    });*/
 
 
kboosh.on("message", message => {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {
        prefix: '!',
    };
    var prefix = prefixes[message.guild.id].prefix;
    if (message.content.startsWith(prefix + 'prefix')) {
        if (!message.member.hasPermission(`MANAGE_GUILD`)) return message.reply('You Dont Have Permissions `MANAGE_GUILD`!');
        let args = message.content.split(" ").slice(1);
        if (!args.join(" ")) return message.reply('Please Type The New `Prefix`!');
        let PrefixSuccess = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(`Successfully`)
          .addField('The New Prefix Has been Set to:',`${args.join(" ")}`, true)
          .setFooter(message.author.tag, message.author.avatarURL)
          .setTimestamp();
          message.channel.sendEmbed(PrefixSuccess);
        prefixes[message.guild.id] = {
          prefix: args.join(),
      };
        }
    fs.writeFile("./prefix.json", JSON.stringify(prefixes), (err) => {
        if (err) console.error(err);
    });
});
var prefix = "%";
kboosh.on('message', message=>{
  if(message.content ===  prefix + 'leaveserver') {
       if (message.author.id !== 365949349684838400) return;//واكتب الايدي تبعك config.mkID احذف 
  message.guild.leave();
  }
});
var prefix = "%"//بيرفكس حق بوتك
kboosh.on('message',async message => {//Narox
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),//Narox
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {//Narox
minutes = "0" + minutes;
}
var suffix = "AM";//Narox
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;//Narox
}
 
  var filter = m => m.author.id === message.author.id;//Narox
  if(message.content.startsWith(prefix + "giveaway")) {
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {//Narox
        max: 1,//Narox
        time: 20000,
        errors: ['time']
      }).then(collected => {//Narox
        let room = message.guild.channels.find('name' , collected.first().content);//Narox
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');//Narox
        room = collected.first().content;
        collected.first().delete();//Narox
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,//Narox
            errors: ['time']
          }).then(collected => {//Narox
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
            duration = collected.first().content * 60000;
            collected.first().delete();//Narox
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,//Narox
                errors: ['time']
              }).then(collected => {//Narox
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');//Narox
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;//Narox
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);//Narox
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()//Narox
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)//Narox
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                     },duration);//Narox
                   });
                } catch(e) {//Narox
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                 console.log(e);//Narox
               }
             });
           });
         });
       });
     });
   });
 }
});
kboosh.on('guildMemberAdd', Sal => { //By Salto7#4595
    var embed = new Discord.RichEmbed()
    .setAuthor(Sal.user.username, Sal.user.avatarURL)
    .setThumbnail(Sal.user.avatarURL)
    .setImage('https://cdn.discordapp.com/attachments/492862340484694027/493771573740830740/welcome1.png') //هنا حط الصوره الي تبيها
    .setTitle('عضو جديد!')
    .setDescription('مرحبا بك بالسيرفر')
    .addField('``ايدي العضو``:',"" +  Sal.user.id, true)
    .addField('``تاق العضو``', Sal.user.discriminator, true)
    .addField('``تم الانشاء في``', Sal.user.createdAt, true)
    .addField(' 👤  انت رقم',`**[ ${Sal.guild.memberCount} ]**`,true)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name', ' (👋welcom👋)') // هنا حط اسم الروم الي تبيه يكتب فيه
    if (!channel) return;
    channel.send({embed : embed});
    });
var prefix = "%";
kboosh.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content.startsWith(prefix + "setSay")) {
    let filter = m => m.author.id === message.author.id;
    let role;
 
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
   
    message.channel.send(':pencil: **| Please Type The Role Required To Type The Say Command ... :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
    
        .then(collected => {
            collected.first().delete();
            role = collected.first().content;
            let replymsg;
            msg.edit(':scroll: **| Now Please Type The Answer If He Dont Have The Required Role ... :pencil2: **').then(msg => {
     
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    replymsg = collected.first().content;
                    msg.edit('✅ **| Successfully Setup !...  **').then(msg => {
       
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                    
      let embed = new Discord.RichEmbed()
      .setTitle('**Done The Say Code Has Been Setup**')
      .addField('Say Role:', `${role}`)
      .addField('Say Role Reply:', `${replymsg}`)
      .addField('Requested By:', `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`)
      .setColor('RANDOM')
      say[message.guild.id] = {
      onoff: 'On',
      sayembed: 'On',
      reply: replymsg,
      sayrole: role
      },
      message.channel.sendEmbed(embed)
      fs.writeFile("./say.json", JSON.stringify(say), (err) => {
      if (err) console.error(err)
    })
      })
    })
   })
 })
})
   }})
var prefix = "%";
kboosh.on("message", msg => {
  if(msg.content === '$' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});
kboosh.login(kbooshtoken);