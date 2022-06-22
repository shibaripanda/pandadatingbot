const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)
const baza = require('./const')

let info = []
let prev_action = []
let nameman = []
let sexman = []
let ageman = []
let countryman = []
let username1 = []
let cityman = []
let interes = []
let whofind = []
let infiwords = []
let end1 = []
let del1 = []
let post = []
let email1 = []
let emailon = []

const bazaall = ["test@mail.com", "vip2@mail.com", "vip@mail.com", "2vip@mail.com"]
const bazashcf1 = ["vip@mail.com", "2vip@mail.com"]
const bazashcf2 = ["vip2@mail.com", "2vip@mail.com"]

bot.start(async (ctx) => {
  await ctx.replyWithHTML(`<b>Hi, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}</b>!\nWelcome to Panda's Telegram Universe!\n<b>ShibaripandaClub</b>`,
  Markup.inlineKeyboard(
[
     [Markup.button.callback('Add dating profile ✅', 'btn_1')],
     [Markup.button.callback('Delete dating profile ❌', 'btn_200')],
//     [Markup.button.callback('ShibaripandaClub Free', 'btn_201')]
]) 
),
await ctx.replyWithHTML(`<b>ShibaripandaClub XL</b>\nExclusive content\nDating, community, chat, trainings.`,
Markup.inlineKeyboard(
[
  // [Markup.button.callback('Subscribe 💵', 'btn_204')],
   [Markup.button.callback('Login', 'btn_400')]
]) 
)
//nameman.splice([([(nameman.findIndex(item => item.id == ctx.from.id))])], 1)
//info.splice(info.findIndex(item => item.id == ctx.from.id), 1) 
//sexman.splice(sexman.findIndex(item => item.id == ctx.from.id), 1)
//ageman.splice(ageman.findIndex(item => item.id == ctx.from.id), 1)
//countryman.splice(countryman.findIndex(item => item.id == ctx.from.id), 1)
//cityman.splice(cityman.findIndex(item => item.id == ctx.from.id), 1)
//interes.splice(interes.findIndex(item => item.id == ctx.from.id), 1)
//whofind.splice(whofind.findIndex(item => item.id == ctx.from.id), 1)
//infiwords.splice(infiwords.findIndex(item => item.id == ctx.from.id), 1)
//end1.splice(end1.findIndex(item => item.id == ctx.from.id), 1)
//email1.splice(email1.findIndex(item => item.id == ctx.from.id), 1)
//emailon.splice(emailon.findIndex(item => item.id == ctx.from.id), 1)
//username1.splice(username1.findIndex(item => item.id == ctx.from.id), 1)
//post.splice(post.findIndex(item => item.id == ctx.from.id), 1)
//prev_action.splice(prev_action.findIndex(item => item.id == ctx.from.id), 1)
//del1.splice(del1.findIndex(item => item.id == ctx.from.id), 1)

nameman.push({id: ctx.from.id})
info.push({id: ctx.from.id})
sexman.push({id: ctx.from.id})
ageman.push({id: ctx.from.id})
countryman.push({id: ctx.from.id})
cityman.push({id: ctx.from.id})
interes.push({id: ctx.from.id})
whofind.push({id: ctx.from.id})
infiwords.push({id:ctx.from.id})
end1.push({id: ctx.from.id})
email1.push({id: ctx.from.id.id})
emailon.push({id: ctx.from.id})
username1.push({id: ctx.from.id})
post.push({id: ctx.from.id})
prev_action.push({id: ctx.from.id, prev_action: 'step_0'})
del1.push({id: ctx.from.id})

console.log (ctx.from.username, ctx.from.id, nameman.length)
}
) 


bot.action ('btn_400', (ctx) => {
  ctx.reply("Write your email that you use on patreon.(use only small letters)")
  emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 1})
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'})
  })




bot.action ('btn_201', async (ctx) => {
  await ctx.replyWithPhoto({ source: "./img/alerteng.jpg" })
  await ctx.replyWithHTML(`To enter the channel, use this link <a href="https://t.me/+Ap62Lp2sjdM3NDYy">ShibaripandaClub</a>.\n\n<b> If, when you try to log in, you see a message like in the photo above. You need to enable “Disable filtering” in the settingsin the web or computer version of the telegram application.</b>`, {
    disable_web_page_preview: true})
  await ctx.reply (`These links will help you!`,
    Markup.inlineKeyboard(
      [
         [Markup.button.callback('Web telegram', 'btn_300'), Markup.button.callback('Detailed instructions', 'btn_301')]
      ]) )   
})

bot.action ('btn_301', (ctx) => {ctx.replyWithHTML(`How to Open Blocked or Banned Telegram Channels <a href="https://www.followchain.org/open-banned-blocked-telegram-channels">Detailed instructions</a>.`)    
})

bot.action ('btn_300', (ctx) => {ctx.replyWithHTML(`<a href="https://web.telegram.org/">Web telegram</a>.`)    
})


bot.action ('btn_204', (ctx) => {
  ctx.replyWithHTML(`To subscribe, go to <a href="https://www.patreon.com/shibaripanda">Patreon</a>.`)    
})


bot.action ('btn_401', async (ctx) => { 
  if ((emailon.find(item => item.emailon == 0)) == undefined){ 
    ctx.reply('Please restart the bot to continue.\n/start - restart\n')
  }
    else{
        if (bazaall.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1))
    
    { 
         if (bazaall.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)) {
  await ctx.replyWithHTML(`Welcome!\nHere are all the sections available for you, enjoy:`,
  Markup.inlineKeyboard(
    [
       [Markup.button.callback('ShibaripandaClub XL 🐼', 'btn_900')],
       [Markup.button.callback('ShibaripandaDating 🐼', 'btn_901')],
       [Markup.button.callback('ShibaripandaLive 🐼', 'btn_902')],
       [Markup.button.callback('ShibaripandaChat 🐼', 'btn_903')]
    ]) )}

      if (bazashcf1.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)){
        await ctx.reply('Your learning class:',
  Markup.inlineKeyboard(
    [
       [Markup.button.callback('Shibari course for beginners 📚', 'btn_904')]
    ]))
      }    
    if (bazashcf2.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)){
      await ctx.reply('Your learning class:',
      Markup.inlineKeyboard(
        [
           [Markup.button.callback('Shibari course for beginners2 📚', 'btn_905')]
        ]) )} 
  }
    if (!bazaall.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)) {
  ctx.reply(`You didn't subscribe or entered your email incorrectly.`,
  Markup.inlineKeyboard(
    [ 
      [Markup.button.callback('Edit email', 'btn_400')],
      [Markup.button.callback('Subscribe 💵', 'btn_204')]
    ]))} 
    }
})

bot.action ('btn_900')

bot.action ('btn_1', async (ctx) => {
  end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 0})
  if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0"){ 
    await ctx.reply("What is your name?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_1'})
  }
 else {
  }
})


bot.action ('btn_2', (ctx) => {
  if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.reply('Please restart the bot to continue.\n/start - restart\n')
  }
  else {if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
  ctx.reply("What's your gender?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_2'})}
  else {
  } 
  }})


bot.action ('btn_3', (ctx) => {
  if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.reply('Please restart the bot to continue.\n/start - restart\n')
  }
  
  else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
  ctx.reply("How old are you?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_3'})}
  }})

bot.action ('btn_4', (ctx) => {
  if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.reply('Please restart the bot to continue.\n/start - restart\n')
  }
  
  else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
  ctx.reply("What country are you from?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_4'})
  post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})}
  }})

  bot.action ('btn_5', (ctx) => {
    if ((end1.find(item => item.end1 == 0)) == undefined){ 
      ctx.reply('Please restart the bot to continue.\n/start - restart\n')
    }
    
    else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
    ctx.reply("Which city are you from?")
    prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_5'})
    post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})}
    }})

    bot.action ('btn_6', (ctx) => {
      if ((end1.find(item => item.end1 == 0)) == undefined){ 
        ctx.reply('Please restart the bot to continue.\n/start - restart\n')
      }
      
      else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
      ctx.reply("What interests do you have?")
      prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_6'})
      post[([(post.findIndex(item => item.id == ctx.from.id.id))])] = ({id: ctx.from.id, post: 1})}
      }})

      bot.action ('btn_7', (ctx) => {
        if ((end1.find(item => item.end1 == 0)) == undefined){ 
          ctx.reply('Please restart the bot to continue.\n/start - restart\n')
        }
        
        else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
        ctx.reply("Who would you like to find?")
        prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_7'})
        post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})}
        }})

        bot.action ('btn_8', (ctx) => {
          if ((end1.find(item => item.end1 == 0)) == undefined){ 
            ctx.reply('Please restart the bot to continue.\n/start - restart\n')
          }
          
          else {if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
          ctx.reply("That tell about yourself?")
          prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_8'})
          post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})} 
          }})  

bot.action ('btn_100', (ctx) => {
  if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.reply('Please restart the bot to continue.\n/start - restart\n')
  }
  else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0"){
  ctx.reply ((nameman[(nameman.findIndex(item => item.id == ctx.from.id))].nameman) +' '+ 
  (ageman[(ageman.findIndex(item => item.id == ctx.from.id))].ageman) +'\n'+ 
  (countryman[(countryman.findIndex(item => item.id == ctx.from.id))].countryman) +' '+ 
  (cityman[(cityman.findIndex(item => item.id == ctx.from.id))].cityman) +'\nGender: '+ 
  (sexman[(sexman.findIndex(item => item.id == ctx.from.id))].sexman) +'\n'+ 'My interests: '+ 
  (interes[(interes.findIndex(item => item.id == ctx.from.id))].interes)+'\n'+ 'Who I want to find: '+ 
  (whofind[(whofind.findIndex(item => item.id == ctx.from.id))].whofind) +'\n'+ 'About me: '+ 
  (infiwords[(infiwords.findIndex(item => item.id == ctx.from.id))].infiwords) +'\n@'+ 
  (username1[(username1.findIndex(item => item.id == ctx.from.id))].username1),


  Markup.inlineKeyboard(
    [
         [Markup.button.callback('Edit information', 'btn_1')],
         [Markup.button.callback('Publish my profile', 'btn_101')]
         
    ]))
    info[([(info.findIndex(item => item.id == ctx.from.id))])] =
    ({id: ctx.from.id, info: (nameman[(nameman.findIndex(item => item.id == ctx.from.id))].nameman) +' '+ 
    (ageman[(ageman.findIndex(item => item.id == ctx.from.id))].ageman) +'\n\n'+ 
    (countryman[(countryman.findIndex(item => item.id == ctx.from.id))].countryman) +' '+ 
    (cityman[(cityman.findIndex(item => item.id == ctx.from.id))].cityman) +'\nGender: '+ 
    (sexman[(sexman.findIndex(item => item.id == ctx.from.id))].sexman) +'\n'+ 'My interests: '+ 
    (interes[(interes.findIndex(item => item.id == ctx.from.id))].interes)+'\n'+ 'Who I want to find: '+ 
    (whofind[(whofind.findIndex(item => item.id == ctx.from.id))].whofind) +'\n'+ 'About me: '+ 
    (infiwords[(infiwords.findIndex(item => item.id == ctx.from.id))].infiwords) +'\n@'+ 
    (username1[(username1.findIndex(item => item.id == ctx.from.id))].username1)})

    prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'})}
 else { 
} }}
)

bot.action ('btn_101', async (ctx) => {
  if ((post[(post.findIndex(item => item.id == ctx.from.id))].post) == "1") {
  await ctx.telegram.sendMessage(-1001738151348, (info[(info.findIndex(item => item.id == ctx.from.id))].info))
  await ctx.reply("Your profile has been published!✅\n\nAfter publishing the profile, restart the bot to edit information!.\nPlease restart the bot to continue.\n/start - restart\n\n🐼🐼🐼🐼🐼🐼🐼🐼🐼")
  end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 1})
  post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 0})}
  else { 
  } 
})

bot.action ('btn_200', async (ctx) => {
  username1[([(username1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, username1: ctx.from.username})
  del1[([(del1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, del1: 0})
  if ((del1.find(item => item.del1 == 0)) == undefined){ 
    ctx.reply('Please restart the bot to continue.\n/start - restart\n')
  }
  else {if ((del1[(del1.findIndex(item => item.id == ctx.from.id))].del1) == "0") {
  await ctx.telegram.sendMessage(-1001738151348,`Delete @` + (username1[(username1.findIndex(item => item.id == ctx.from.id))].username1))
  await ctx.reply("Your profile will be deleted shortly.❌")
  del1[([(del1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, del1: 1})} 
}})

bot.on('text', async(ctx) => {
  if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_1") {
    await ctx.reply(`Your name : ${ctx.message.text}`,
    (Markup.inlineKeyboard(
      [
           [Markup.button.callback('Edit', 'btn_1')],
           [Markup.button.callback('Next step 2/8', 'btn_2')]
      ])))
  
    nameman[([(nameman.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, nameman: ctx.message.text})
    }; 

    if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_2") {
      await ctx.reply(`Your gender : ${ctx.message.text}`,
      (Markup.inlineKeyboard(
        [
             [Markup.button.callback('Edit', 'btn_2')],
             [Markup.button.callback('Next step 3/8', 'btn_3')]
        ])))
    sexman[([(sexman.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, sexman: ctx.message.text})
      };

      if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_3") {
        await ctx.reply(`Your age : ${ctx.message.text}`,
        (Markup.inlineKeyboard(
          [
               [Markup.button.callback('Edit', 'btn_3')],
               [Markup.button.callback('Next step 4/8', 'btn_4')]
          ])))
        ageman[([(ageman.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, ageman: ctx.message.text})
        }; 


        if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_4") {
          await ctx.reply(`Your country : ${ctx.message.text}`,
          (Markup.inlineKeyboard(
            [
                 [Markup.button.callback('Edit', 'btn_4')],
                 [Markup.button.callback('Next step 5/8', 'btn_5')]
            ])))
          countryman[([(countryman.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, countryman: ctx.message.text})};


          if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_5") {
            await ctx.reply(`Your city : ${ctx.message.text}`,
            (Markup.inlineKeyboard(
              [
                   [Markup.button.callback('Edit', 'btn_5')],
                   [Markup.button.callback('Next step 6/8', 'btn_6')]
              ])))
            cityman[([(cityman.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, cityman: ctx.message.text})
            };

          if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_6") {
            await ctx.reply(`Your interests: ${ctx.message.text}`,
            (Markup.inlineKeyboard(
              [
                   [Markup.button.callback('Edit', 'btn_6')],
                   [Markup.button.callback('Next step 7/8', 'btn_7')]
              ])))
            interes[([(interes.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, interes: ctx.message.text})
            };

            if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_7") {
              await ctx.reply(`You are looking for: ${ctx.message.text}`,
              (Markup.inlineKeyboard(
                [
                     [Markup.button.callback('Edit', 'btn_7')],
                     [Markup.button.callback('Last step', 'btn_8')]
                ])))
             whofind[([(whofind.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, whofind: ctx.message.text})
              };        
  if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_8") {
    await ctx.reply(`About you: ${ctx.message.text}`,
    (Markup.inlineKeyboard(
      [
           [Markup.button.callback('Edit', 'btn_8')],
           [Markup.button.callback('See what your profile will look like', 'btn_100')]
      ])))
    infiwords[([(infiwords.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, infiwords: ctx.message.text})
    username1[([(username1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, username1: ctx.from.username})

  }
 if ((emailon[(emailon.findIndex(item => item.id == ctx.from.id))].emailon) == "1") {
    await ctx.reply(`Is your patreon email?\n${ctx.message.text}`,
    (Markup.inlineKeyboard(
      [
           [Markup.button.callback('Edit', 'btn_400')],
           [Markup.button.callback('Email is correct', 'btn_401')]
      ])))
    email1[([(email1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, email1: ctx.message.text})
    emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0}) 
    
   }
   if ((emailon.find(item => item.emailon == 1)) == undefined){ 
  
  }
   })



 bot.launch()


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))