const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)
const baza = require('./const')

let info = ""
let prev_action = ""
let nameman = ""
let sexman = ""
let ageman = ""
let countryman = ""
let username1 = ""
let cityman = ""
let interes = ""
let whofind = ""
let infiwords = ""
let end1 = ""
let del1 = ""
let post = ""
let email1 = ""
let emailon = ""
const bazaall = ["test@mail.com", "vip2@mail.com", "vip@mail.com", "2vip@mail.com"]
const bazashcf1 = ["vip@mail.com", "2vip@mail.com"]
const bazashcf2 = ["vip2@mail.com", "2vip@mail.com"]


bot.start(async (ctx) => {console.log(ctx.message),
  await ctx.replyWithHTML(`<b>Hi, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}</b>!\nWelcome to Panda's Telegram Universe!\n<b>ShibaripandaClub</b>`,
  Markup.inlineKeyboard(
[
     [Markup.button.callback('Add dating profile ✅', 'btn_1')],
     [Markup.button.callback('Delete dating profile ❌', 'btn_200')],
     [Markup.button.callback('ShibaripandaClub Free channel  🐼', 'btn_201')],
     [Markup.button.callback('info 📖', 'btn_206')]
]) 
),
await ctx.replyWithHTML(`<b>ShibaripandaClub XL.</b>\nDating, exclusive content,\ncommunity, chat, online trainings.`,
Markup.inlineKeyboard(
[
   [Markup.button.callback('Here you can subscribe 💵', 'btn_204')],
   [Markup.button.callback('Login to closed sections after subscription', 'btn_400')],
   [Markup.button.callback('info 📖', 'btn_205')]
]) 
)
end1 = "0"
username1 = ctx.message.from.username
del1 = "0"
post = "0"
emailon = "0"
}
)   



bot.action ('btn_400', (ctx) => {
  ctx.reply("Write your email that you use on patreon.(use only small letters)")
  emailon = "1"
  prev_action = "step_0"
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
    if (bazaall.includes(email1))
    
    { 
         if (bazaall.includes(email1)) {
  await ctx.replyWithHTML(`Welcome!\nHere are all the sections available for you, enjoy:`,
  Markup.inlineKeyboard(
    [
       [Markup.button.callback('ShibaripandaClub XL 🐼', 'btn_900')],
       [Markup.button.callback('ShibaripandaDating 🐼', 'btn_901')],
       [Markup.button.callback('ShibaripandaLive 🐼', 'btn_902')],
       [Markup.button.callback('ShibaripandaChat 🐼', 'btn_903')]
    ]) )}

      if (bazashcf1.includes(email1)){
        await ctx.reply('And here are the training groups available for you:',
  Markup.inlineKeyboard(
    [
       [Markup.button.callback('Shibari course for beginners 📚', 'btn_904')]
    ]))
      }    
    if (bazashcf2.includes(email1)){
      await ctx.reply('And here are the training groups available for you:',
      Markup.inlineKeyboard(
        [
           [Markup.button.callback('Shibari course for beginners2 📚', 'btn_905')]
        ]) )} 
  }
    if (!bazaall.includes(email1)) {
  ctx.reply(`The entered email is not registered or entered incorrectly.`,
  Markup.inlineKeyboard(
    [ 
      [Markup.button.callback('Edit email', 'btn_400')],
      [Markup.button.callback('Here you can subscribe 💵', 'btn_204')]
    ]))} 
})

bot.action ('btn_900'
 )

bot.action ('btn_1', (ctx) => {
  if (end1 == "0") {
  ctx.reply("Write your name.")
  prev_action = "step_1"}
 else { 
}})


bot.action ('btn_2', (ctx) => {
  if (end1 == "0") {
  ctx.reply("Write your gender.")
  prev_action = "step_2"}
  else { 
  }})


bot.action ('btn_3', (ctx) => {
  if (end1 == "0") {
  ctx.reply("Write your age.")
  prev_action = "step_3"}
  else { 
  }})

bot.action ('btn_4', (ctx) => {
  if (end1 == "0") {
  ctx.reply("Write your country.")
  prev_action = "step_4"
  post = "1"}
  else { 
  }})

  bot.action ('btn_5', (ctx) => {
    if (end1 == "0") {
    ctx.reply("Write your city.")
    prev_action = "step_5"
    post = "1"}
    else { 
    }})

    bot.action ('btn_6', (ctx) => {
      if (end1 == "0") {
      ctx.reply("What interests do you have?")
      prev_action = "step_6"
      post = "1"}
      else { 
      }})

      bot.action ('btn_7', (ctx) => {
        if (end1 == "0") {
        ctx.reply("Who would you like to find?")
        prev_action = "step_7"
        post = "1"}
        else { 
        }})

        bot.action ('btn_8', (ctx) => {
          if (end1 == "0") {
          ctx.reply("A few words about you")
          prev_action = "step_8"
          post = "1"}
          else { 
          }})  

bot.action ('btn_100', (ctx) => {
  if (end1 == "0"){
  ctx.reply (nameman +' '+ ageman +'\n'+ countryman +' '+ cityman +'\nGender: '+ sexman +'\n'+ 'My interests: '+ interes+'\n'+ 'Who I want to find: '+ whofind +'\n'+ 'About me: '+ infiwords +'\n@'+ username1,
  Markup.inlineKeyboard(
    [
         [Markup.button.callback('Change information', 'btn_1')],
         [Markup.button.callback('Post', 'btn_101')]
         
    ]))
    info = nameman +' '+ ageman +'\n'+ countryman +' '+ cityman +'\nGender: '+ sexman +'\n'+ 'My interests: '+ interes+'\n'+ 'Who I want to find: '+ whofind +'\n'+ 'About me: '+ infiwords +'\n@'+ username1
} else { 
} }
)

bot.action ('btn_101', async (ctx) => {
  if (post == "1"){
  await ctx.telegram.sendMessage(-1001738151348, info)
  await ctx.reply("Profile added!\n\nAfter publishing the profile, restart the bot to change the information!.")
  end1 = "1"
  post = "0"
}
  else { 
  } 
})

bot.action ('btn_200', async (ctx) => {
  if (del1 == "0"){
  await ctx.telegram.sendMessage(-1001738151348,`Delete @` + username1)
  await ctx.reply("Your profile will be deleted shortly.")
  del1 = "1"}
  else { 
  } 
})

bot.on('text', async(ctx) => {
  if (prev_action == "step_1") {
    await ctx.reply(`Your name : ${ctx.message.text}`,
    (Markup.inlineKeyboard(
      [
           [Markup.button.callback('Edit', 'btn_1')],
           [Markup.button.callback('Next step 2/8', 'btn_2')]
      ])))
    nameman = ctx.message.text
    
    }; 

    if (prev_action == "step_2") {
      await ctx.reply(`Your gender : ${ctx.message.text}`,
      (Markup.inlineKeyboard(
        [
             [Markup.button.callback('Edit', 'btn_2')],
             [Markup.button.callback('Next step 3/8', 'btn_3')]
        ])))
      sexman = ctx.message.text
      };

      if (prev_action == "step_3") {
        await ctx.reply(`Your age : ${ctx.message.text}`,
        (Markup.inlineKeyboard(
          [
               [Markup.button.callback('Edit', 'btn_3')],
               [Markup.button.callback('Next step 4/8', 'btn_4')]
          ])))
        ageman = ctx.message.text
        }; 


        if (prev_action == "step_4") {
          await ctx.reply(`Your country : ${ctx.message.text}`,
          (Markup.inlineKeyboard(
            [
                 [Markup.button.callback('Edit', 'btn_4')],
                 [Markup.button.callback('Next step 5/8', 'btn_5')]
            ])))
          countryman = ctx.message.text
          }; 


          if (prev_action == "step_5") {
            await ctx.reply(`Your city : ${ctx.message.text}`,
            (Markup.inlineKeyboard(
              [
                   [Markup.button.callback('Edit', 'btn_5')],
                   [Markup.button.callback('Next step 6/8', 'btn_6')]
              ])))
            cityman = ctx.message.text
            }

          if (prev_action == "step_6") {
            await ctx.reply(`Your interests: ${ctx.message.text}`,
            (Markup.inlineKeyboard(
              [
                   [Markup.button.callback('Edit', 'btn_6')],
                   [Markup.button.callback('Next step 7/8', 'btn_7')]
              ])))
            interes = ctx.message.text
            };

            if (prev_action == "step_7") {
              await ctx.reply(`You are looking for: ${ctx.message.text}`,
              (Markup.inlineKeyboard(
                [
                     [Markup.button.callback('Edit', 'btn_7')],
                     [Markup.button.callback('Last step', 'btn_8')]
                ])))
             whofind = ctx.message.text
              };        
  if (prev_action == "step_8") {
    await ctx.reply(`About me: ${ctx.message.text}`,
    (Markup.inlineKeyboard(
      [
           [Markup.button.callback('Edit', 'btn_8')],
           [Markup.button.callback('See what your profile will look like', 'btn_100')]
      ])))
    infiwords = ctx.message.text

  }; 

  if (emailon == "1") {
    await ctx.reply(`Email from patreon: ${ctx.message.text}`,
    (Markup.inlineKeyboard(
      [
           [Markup.button.callback('Edit', 'btn_400')],
           [Markup.button.callback('Email is correct', 'btn_401')]
      ])))
    email1 = ctx.message.text
    emailon = "0"
    }  
   else { 
    
  } 
})



 bot.launch()


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))