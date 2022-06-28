const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)
const baza = require('./const')
const mongoose = require('mongoose')
const db = (process.env.BD_TOKEN)
const Bel = require('./models/post')
const { hydrate } = require('./models/post')
const pt = (process.env.PATREON_TOKEN)

mongoose
.connect(db, {useNewUrlParser: true})
.then((res)=> console.log('connect to DB'))
.catch((error) => console.log(error))


let bdinfo = []
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
let emailon  = []

const bazaall = ["test@mail.com", "vip2@mail.com", "vip@mail.com", "2vip@mail.com"]
const bazashcf1 = ["vip@mail.com", "2vip@mail.com"]
const bazashcf2 = ["vip2@mail.com", "2vip@mail.com"]

bot.start(async (ctx) => {
  await Bel.updateOne ({id: ctx.from.id}, {profiledating: 'profiledating', username: ctx.from.username, chat: 'off', chatstatus: 'free', chatclient: 'no'}, {upsert: true})
  
  let q = nameman.findIndex(item => item.id == ctx.from.id)
  if (q != -1) {nameman.splice(nameman.findIndex(item => item.id == ctx.from.id),1)};
  nameman.push({id: ctx.from.id})
  let w = nameman.findIndex(item => item.id == ctx.from.id)
  if (w != -1) {info.splice(info.findIndex(item => item.id == ctx.from.id),1)};
  info.push({id: ctx.from.id, email: '0'})                  
  let e = sexman.findIndex(item => item.id == ctx.from.id)
  if (e != -1) {sexman.splice(sexman.findIndex(item => item.id == ctx.from.id),1)};
  sexman.push({id: ctx.from.id})                  
  let r = ageman.findIndex(item => item.id == ctx.from.id)
  if (r != -1) {ageman.splice(ageman.findIndex(item => item.id == ctx.from.id),1)};
  ageman.push({id: ctx.from.id}) 
  let t = countryman.findIndex(item => item.id == ctx.from.id)
  if (t != -1) {countryman.splice(countryman.findIndex(item => item.id == ctx.from.id),1)};
  countryman.push({id: ctx.from.id})
  let y = cityman.findIndex(item => item.id == ctx.from.id)
  if (y != -1) {cityman.splice(cityman.findIndex(item => item.id == ctx.from.id),1)};
  cityman.push({id: ctx.from.id})
  let u = interes.findIndex(item => item.id == ctx.from.id)
  if (u != -1) {interes.splice(interes.findIndex(item => item.id == ctx.from.id),1)};
  interes.push({id: ctx.from.id})
  let i = whofind.findIndex(item => item.id == ctx.from.id)
  if (i != -1) {whofind.splice(whofind.findIndex(item => item.id == ctx.from.id),1)};
  whofind.push({id: ctx.from.id})
  let o = infiwords.findIndex(item => item.id == ctx.from.id)
  if (o != -1) {infiwords.splice(infiwords.findIndex(item => item.id == ctx.from.id),1)};
  infiwords.push({id: ctx.from.id})
  let p = end1.findIndex(item => item.id == ctx.from.id)
  if (p != -1) {end1.splice(end1.findIndex(item => item.id == ctx.from.id),1)};
  end1.push({id: ctx.from.id})
  let a = email1.findIndex(item => item.id == ctx.from.id)
  if (a != -1) {email1.splice(email1.findIndex(item => item.id == ctx.from.id),1)};
  email1.push({id: ctx.from.id})
  let s = emailon.findIndex(item => item.id == ctx.from.id)
  if (s != -1) {emailon.splice(emailon.findIndex(item => item.id == ctx.from.id),1)};
  emailon.push({id: ctx.from.id})
  let d = username1.findIndex(item => item.id == ctx.from.id)
  if (d != -1) {username1.splice(username1.findIndex(item => item.id == ctx.from.id),1)};
  username1.push({id: ctx.from.id, username1: ctx.from.username})
  let f = post.findIndex(item => item.id == ctx.from.id)
  if (f != -1) {post.splice(post.findIndex(item => item.id == ctx.from.id),1)};
  post.push({id: ctx.from.id})
  let g = prev_action.findIndex(item => item.id == ctx.from.id)
  if (g != -1) {prev_action.splice(prev_action.findIndex(item => item.id == ctx.from.id),1)};
  prev_action.push({id: ctx.from.id, prev_action: 'step_0'})
  let h = del1.findIndex(item => item.id == ctx.from.id)
  if (h != -1) {del1.splice(del1.findIndex(item => item.id == ctx.from.id),1)};
  del1.push({id: ctx.from.id})

console.log (ctx.from.id, ctx.from.username, nameman.length)

bdinfo = [{id: ctx.from.id}]
bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Bel.findOne({id: ctx.from.id})
  if ((bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profile) == 'deleted') {
  await ctx.replyWithHTML(`<b>Привет, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}</b>!\n<b>Приветствуем в нашем сообществе!</b>`,
  Markup.inlineKeyboard(
[
     [Markup.button.callback('Добавить анкету знакомств ✅', 'btn_1')]
    //  [Markup.button.callback('Rollet', 'btn_170')],
    //  [Markup.button.callback('ShibaripandaClub Free', 'btn_201')]
]) 
)
// ,
// await ctx.replyWithHTML(`<b>ShibaripandaClub XL</b>\nExclusive content\nDating, community, chat, trainings`,
// Markup.inlineKeyboard(
// [
//    [Markup.button.callback('Login', 'btn_400')],
//    [Markup.button.callback('Subscribe 💵', 'btn_204')]
   
// ]))
}

else if ((bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profile) == 'ok')
 {
  await ctx.replyWithHTML(`<b>Hi, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}</b>!\n<b>Добро пожаловать в знакомства!</b>`,
  Markup.inlineKeyboard(
[
     [Markup.button.callback('Посмотреть свою анкету', 'btn_250')],
     [Markup.button.callback('Удалить или изменить анкету ❌', 'btn_200')]
     //[Markup.button.callback('Rollet', 'btn_170')],
    //  [Markup.button.callback('ShibaripandaClub Free', 'btn_201')]
])
)
// ,
// await ctx.replyWithHTML(`<b>ShibaripandaClub XL</b>\nExclusive content\nDating, community, chat, trainings`,
// Markup.inlineKeyboard(
// [
//    [Markup.button.callback('Login', 'btn_400')],
//    [Markup.button.callback('Subscribe 💵', 'btn_204')]
// ]))
}

else{
  await ctx.replyWithHTML(`<b>Hi, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}</b>!\n<b>Добро пожаловать в знакомства!</b>`,
  Markup.inlineKeyboard(
[
     [Markup.button.callback('Добавить анкету знакомств ', 'btn_1')]
     //[Markup.button.callback('Rollet', 'btn_170')],
    //  [Markup.button.callback('ShibaripandaClub Free', 'btn_201')]
]), 

 )
// ,
// await ctx.replyWithHTML(`<b>ShibaripandaClub XL</b>\nExclusive content\nDating, community, chat, trainings`,
// Markup.inlineKeyboard(
// [
//    [Markup.button.callback('Login', 'btn_400')],
//    [Markup.button.callback('Subscribe 💵', 'btn_204')]
   
// ]))
}
}
)

bot.action ('btn_250', (ctx) => {
  ctx.reply(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profiledata)
  })

// bot.action ('btn_400', async (ctx) => {
//  bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Post.findOne({id: ctx.from.id})
//   if (bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email == undefined) {  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   ctx.reply("Enter your patreon email")
//   emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 1})
//   prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'})
//     }
//   else {ctx.reply("Enter your new patreon email:",
//     (Markup.inlineKeyboard(
//       [
//            [Markup.button.callback(`Or click to use it: ${bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email}`, 'btn_405')]
//       ])))
//        prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'}) 
//        emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 1})  }  
//   })

//   bot.action ('btn_789', (ctx) => {
//     ctx.replyWithHTML(`Q`,
//     email1[([(email1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, email1: ctx.message.text.toLowerCase()}),
//     emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0}) )    
// })

// bot.action ('btn_201', async (ctx) => {
//   await ctx.replyWithPhoto({ source: "./img/alerteng.jpg" })
//   await ctx.replyWithHTML(`To enter the channel, use this link <a href="https://t.me/+Ap62Lp2sjdM3NDYy">ShibaripandaClub</a>.\n\n<b> If, when you try to log in, you see a message like in the photo above. You need to enable “Disable filtering” in the settingsin the web or computer version of the telegram application.</b>`, {
//     disable_web_page_preview: true})
//   await ctx.reply (`These links will help you!`,
//     Markup.inlineKeyboard(
//       [
//          [Markup.button.callback('Web telegram', 'btn_300'), Markup.button.callback('Detailed instructions', 'btn_301')]
//       ]) 
//       ) 
//       ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')  
// })

// bot.action ('btn_301', (ctx) => {ctx.replyWithHTML(`How to Open Blocked or Banned Telegram Channels <a href="https://www.followchain.org/open-banned-blocked-telegram-channels">Detailed instructions</a>.`)    
// })

// bot.action ('btn_300', (ctx) => {ctx.replyWithHTML(`<a href="https://web.telegram.org/">Web telegram</a>.`)    
// })


// bot.action ('btn_204', (ctx) => {
//   ctx.replyWithHTML(`<b>To subscribe, go to <a href="https://www.patreon.com/shibaripanda">Patreon</a>.</b>\n\nPlease restart the bot to continue.\nRestart ➡️ <b>/start</b> ✅`)    
// })


// bot.action ('btn_401', async (ctx) => {
//   let n = email1.findIndex(item => item == ctx.from.id)
//   if (n != -1) {
//     console.log(n)
//     ctx.replyWithHTML('Перезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅')
//   }
//   else {
//   await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
//       email: email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1
//     }) 
//   if ((emailon.find(item => item.emailon == 0)) == undefined){ 
//     ctx.replyWithHTML('Перезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅')
//   }
//     else{
//         if (bazaall.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1))
    
//     { 
//          if (bazaall.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)) {
//   await ctx.replyWithHTML(`Welcome!\nGoodies available for you, enjoy :`,
//   Markup.inlineKeyboard(
//     [
//        [Markup.button.callback('ShibaripandaClub XL 🐼', 'btn_900')],
//        [Markup.button.callback('ShibaripandaDating 🐼', 'btn_901')],
//        [Markup.button.callback('ShibaripandaLive 🐼', 'btn_902')],
//        [Markup.button.callback('ShibaripandaChat 🐼', 'btn_903')]
//     ]) )}

//       if (bazashcf1.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)){
//         await ctx.reply('Your learning class:',
//   Markup.inlineKeyboard(
//     [
//        [Markup.button.callback('Shibari course for beginners 📚', 'btn_904')]
//     ]))
//       }    
//     if (bazashcf2.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)){
//       await ctx.reply('Your learning class:',
//       Markup.inlineKeyboard(
//         [
//            [Markup.button.callback('Shibari course for beginners2 📚', 'btn_905')]
//         ]) )} 
//   }
//     if (!bazaall.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)) {
//   ctx.reply(`You didn't subscribe or entered your email incorrectly`,
//   Markup.inlineKeyboard(
//     [ 
//       [Markup.button.callback('Edit email', 'btn_400')],
//       [Markup.button.callback('Subscribe 💵', 'btn_204')]
//     ]))} 
//     }}
// })

// bot.action ('btn_405', async (ctx) => {
//   emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
//   bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Post.findOne({id: ctx.from.id})
//   if ((emailon.find(item => item.emailon == 0)) == undefined){ 
//     ctx.replyWithHTML('Перезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅')
//   }
//     else{
//         if (bazaall.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email))
    
//     { 
//          if (bazaall.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)) {
//   await ctx.replyWithHTML(`Welcome!\nGoodies available for you, enjoy :`,
//   Markup.inlineKeyboard(
//     [
//        [Markup.button.callback('ShibaripandaClub XL 🐼', 'btn_900')],
//        [Markup.button.callback('ShibaripandaDating 🐼', 'btn_901')],
//        [Markup.button.callback('ShibaripandaLive 🐼', 'btn_902')],
//        [Markup.button.callback('ShibaripandaChat 🐼', 'btn_903')]
//     ]) )}

//       if (bazashcf1.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)){
//         await ctx.reply('Your learning class:',
//   Markup.inlineKeyboard(
//     [
//        [Markup.button.callback('Shibari course for beginners 📚', 'btn_904')]
//     ]))
//       }    
//     if (bazashcf2.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)){
//       await ctx.reply('Your learning class:',
//       Markup.inlineKeyboard(
//         [
//            [Markup.button.callback('Shibari course for beginners2 📚', 'btn_905')]
//         ]) )} 
//   }
//     if (!bazaall.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)) {
//   ctx.reply(`You didn't subscribe or entered your email incorrectly`,
//   Markup.inlineKeyboard(
//     [ 
//       [Markup.button.callback('Edit email', 'btn_400')],
//       [Markup.button.callback('Subscribe 💵', 'btn_204')]
//     ]))} 
//     }
// })




bot.action ('btn_900')

bot.action ('btn_1', async (ctx) => {
  // let l = username1.findIndex(item => item.id == ctx.from.id)
  // if (l != -1) {username1.splice(username1.findIndex(item => item.id == ctx.from.id),1)};
  // username1.push({id: ctx.from.id, username1: ctx.from.username})

  emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
  end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 0})

  if (username1[([(username1.findIndex(item => item.id == ctx.from.id))])] == undefined){
    await ctx.reply("У тебя нет юзернейма. Тебя не смогут найти!\nУстанови юзернейм в настройказ телеграм\nСпасибо за внимаение!")
  }
else{
  if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0"){ 
    await ctx.reply("Твоё имя?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_1'})
  }
 else {
  }}
})


bot.action ('btn_2', (ctx) => {
  if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.replyWithHTML('Перезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅')
  }
  else {if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
  ctx.reply("Укажи свой пол?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_2'})}
  else {
  } 
  }})


bot.action ('btn_3', (ctx) => {
   if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.replyWithHTML('Перезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅')
  }
  
  else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
  ctx.reply("Сколько тебе лет?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_3'})}
  }})

bot.action ('btn_4', (ctx) => {
  if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.replyWithHTML('Перезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅')
  }
  
  else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
  ctx.reply("Страна?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_4'})
  post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})}
  }})

  bot.action ('btn_5', (ctx) => {
    if ((end1.find(item => item.end1 == 0)) == undefined){ 
      ctx.replyWithHTML('Перезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅')
    }
    
    else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
    ctx.reply("Твой город?")
    prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_5'})
    post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})}
    }})

    bot.action ('btn_6', (ctx) => {
      if ((end1.find(item => item.end1 == 0)) == undefined){ 
        ctx.replyWithHTML('Перезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅')
      }
      
      else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
      ctx.reply("Какие у вас интересы?")
      prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_6'})
      post[([(post.findIndex(item => item.id == ctx.from.id.id))])] = ({id: ctx.from.id, post: 1})}
      }})

      bot.action ('btn_7', (ctx) => {
        if ((end1.find(item => item.end1 == 0)) == undefined){ 
          ctx.replyWithHTML('Перезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅')
        }
        
        else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
        ctx.reply("Кого хочете найти?")
        prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_7'})
        post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})}
        }})

        bot.action ('btn_8', (ctx) => {
          if ((end1.find(item => item.end1 == 0)) == undefined){ 
            ctx.replyWithHTML('Перезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅')
          }
          
          else {if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
          ctx.reply("Расскажи о себе?")
          prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_8'})
          post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})} 
          }})  




bot.action ('btn_100', (ctx) => {
  if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.replyWithHTML('Перезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅')
  }
  else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0"){
  ctx.reply ((nameman[(nameman.findIndex(item => item.id == ctx.from.id))].nameman) +' '+ 
  (ageman[(ageman.findIndex(item => item.id == ctx.from.id))].ageman) +'\n'+ 
  (countryman[(countryman.findIndex(item => item.id == ctx.from.id))].countryman) +' '+ 
  (cityman[(cityman.findIndex(item => item.id == ctx.from.id))].cityman) +'\nПол: '+ 
  (sexman[(sexman.findIndex(item => item.id == ctx.from.id))].sexman) +'\n'+ 'Интересы: '+ 
  (interes[(interes.findIndex(item => item.id == ctx.from.id))].interes)+'\n'+ 'Я хочу найти: '+ 
  (whofind[(whofind.findIndex(item => item.id == ctx.from.id))].whofind) +'\n'+ 'About me: '+ 
  (infiwords[(infiwords.findIndex(item => item.id == ctx.from.id))].infiwords) +'\n@'+ 
  (username1[(username1.findIndex(item => item.id == ctx.from.id))].username1),


  Markup.inlineKeyboard(
    [
         [Markup.button.callback('Изменить информацию', 'btn_1')],
         [Markup.button.callback('Опубликовать анкету', 'btn_101')]
         
    ]))
    info[([(info.findIndex(item => item.id == ctx.from.id))])] =
    ({id: ctx.from.id, info: (nameman[(nameman.findIndex(item => item.id == ctx.from.id))].nameman) +' '+ 
    (ageman[(ageman.findIndex(item => item.id == ctx.from.id))].ageman) +'\n\n'+ 
    (countryman[(countryman.findIndex(item => item.id == ctx.from.id))].countryman) +' '+ 
    (cityman[(cityman.findIndex(item => item.id == ctx.from.id))].cityman) +'\nПол: '+ 
    (sexman[(sexman.findIndex(item => item.id == ctx.from.id))].sexman) +'\n'+ 'Интересы: '+ 
    (interes[(interes.findIndex(item => item.id == ctx.from.id))].interes)+'\n'+ 'Я хочу найти: '+ 
    (whofind[(whofind.findIndex(item => item.id == ctx.from.id))].whofind) +'\n'+ 'About me: '+ 
    (infiwords[(infiwords.findIndex(item => item.id == ctx.from.id))].infiwords) +'\n@'+ 
    (username1[(username1.findIndex(item => item.id == ctx.from.id))].username1)})

    prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'})}
 else { 
} }}
)

bot.action ('btn_101', async (ctx) => {
  bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Bel.findOne({id: ctx.from.id})
  if ((post.find(item => item.post == 1)) == undefined){
    await ctx.replyWithHTML('Перезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅')
  }  
  else if ((bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profile) == 'ok'){
    ctx.replyWithHTML("У тебя уже есть анкета!\n\nПерезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅")
}
  else if ((bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profile) == 'delete', (post[(post.findIndex(item => item.id == ctx.from.id))].post) == "1") {
  let mes = []
  mes = await ctx.telegram.sendMessage(-1001670234693, (info[(info.findIndex(item => item.id == ctx.from.id))].info), Markup.inlineKeyboard(
    [
       [Markup.button.callback('Message', 'btn_150'), Markup.button.callback('Message', '150'), Markup.button.callback('Message', '150')]
    ])), 
  await Bel.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
          profile: 'ok',
            idmes: mes.message_id,
      profiledata: mes.text
          })
  await ctx.replyWithHTML("Анкета добавлена!✅\n\nПосле публикации перезапустите бот для изменения или удаления!.\nПерезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅")
  end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 1})
  post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 0})
}
else { if ((post[(post.findIndex(item => item.id == ctx.from.id))].post) == "1") {
    let mes = []
    mes = await ctx.telegram.sendMessage(-1001670234693, (info[(info.findIndex(item => item.id == ctx.from.id))].info)), 
    await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
            profile: 'ok',
              idmes: mes.message_id,
        profiledata: mes.text
            })
    await ctx.replyWithHTML("Анкета добавлена!✅\n\nПосле публикации перезапустите бот для изменения или удаления!.\nПерезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅")
    end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 1})
    post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 0})
  }}} 
)


bot.action ('btn_200', async (ctx) => {
  username1[([(username1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, username1: ctx.from.username})
  del1[([(del1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, del1: 0})
  if ((del1.find(item => item.del1 == 0)) == undefined){ 
    ctx.replyWithHTML('Перезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅')
  }
  else {if ((del1[(del1.findIndex(item => item.id == ctx.from.id))].del1) == "0") {
    let dell2 = []
    dell2 = await Bel.find({profiledating: 'profiledating', id: ctx.from.id});
    await Bel.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
          profile: 'deleted'
      })
  await ctx.telegram.deleteMessage(-1001670234693, dell2[0].idmes)  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  await ctx.replyWithHTML("Анкета удалена! ❌\n\nПерезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅")
  await Bel.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
     profiledata: 'Вы удалили вашу анкету',
     idmes: false
    })
  del1[([(del1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, del1: 1})}
}})

bot.on('message', async(ctx) => {
  prev_action.push({id: ctx.from.id, prev_action: 'step_0'})
  if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == undefined) {
    ctx.replyWithHTML('Перезапустите бот.\n\nПерезапуск ➡️ <b>/start</b> ✅')};

  if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_1") {
    await ctx.reply(`Ваше имя : ${ctx.message.text}`,
    (Markup.inlineKeyboard(
      [
           [Markup.button.callback('Изменить', 'btn_1')],
           [Markup.button.callback('Далее 2/8', 'btn_2')]
      ])))
  
    nameman[([(nameman.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, nameman: ctx.message.text})
    }; 
     if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_2") {
      await ctx.reply(`Твой пол : ${ctx.message.text}`,
      (Markup.inlineKeyboard(
        [
             [Markup.button.callback('Изменить', 'btn_2')],
             [Markup.button.callback('Далее 3/8', 'btn_3')]
        ])))
    sexman[([(sexman.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, sexman: ctx.message.text})
      };
      if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_3") { if (ctx.message.text > '17') {
        await ctx.reply(`Возраст : ${ctx.message.text}`,
        (Markup.inlineKeyboard(
          [
               [Markup.button.callback('Изменить', 'btn_3')],
               [Markup.button.callback('Далее 4/8', 'btn_4')]
          ])))
        ageman[([(ageman.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, ageman: ctx.message.text})}
        else {await ctx.reply(`Возраст : ${ctx.message.text}\nТебе должно быть более 18 лет для регистрации анкеты.\nИзвините, вы не можете сделать анкету\nЕсли вы сделали ошибку:`,
         (Markup.inlineKeyboard(
           [
                [Markup.button.callback('Edit', 'btn_3')],
           ]))), 
           ageman[([(ageman.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, ageman: ctx.message.text})}
        }
        if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_4") {
          await ctx.reply(`Страна : ${ctx.message.text}`,
          (Markup.inlineKeyboard(
            [
                 [Markup.button.callback('Изменить', 'btn_4')],
                 [Markup.button.callback('Далее 5/8', 'btn_5')]
            ])))
          countryman[([(countryman.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, countryman: ctx.message.text})};


          if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_5") {
            await ctx.reply(`Твой город: ${ctx.message.text}`,
            (Markup.inlineKeyboard(
              [
                   [Markup.button.callback('Изменить', 'btn_5')],
                   [Markup.button.callback('Далее 6/8', 'btn_6')]
              ])))
            cityman[([(cityman.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, cityman: ctx.message.text})
            };

          if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_6") {
            await ctx.reply(`Твои интересы: ${ctx.message.text}`,
            (Markup.inlineKeyboard(
              [
                   [Markup.button.callback('Изменить', 'btn_6')],
                   [Markup.button.callback('Далее 7/8', 'btn_7')]
              ])))
            interes[([(interes.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, interes: ctx.message.text})
            };

            if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_7") {
              await ctx.reply(`Ты ищешь: ${ctx.message.text}`,
              (Markup.inlineKeyboard(
                [
                     [Markup.button.callback('Изменить', 'btn_7')],
                     [Markup.button.callback('Почти конец', 'btn_8')]
                ])))
             whofind[([(whofind.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, whofind: ctx.message.text})
              };        
  if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_8") {
    await ctx.reply(`О тебе: ${ctx.message.text}`,
    (Markup.inlineKeyboard(
      [
           [Markup.button.callback('Edit', 'btn_8')],
           [Markup.button.callback('Посмотрите как будет выглядеть ваша анкета', 'btn_100')]
      ])))
    infiwords[([(infiwords.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, infiwords: ctx.message.text});


if (username1[([(username1.findIndex(item => item.id == ctx.from.id))])] != undefined) {
    username1[([(username1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, username1: ctx.from.username})}
else {username1[([(username1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, username1:' '})}
  }

  
//   if ((emailon.find(item => item.emailon == 1)) == undefined){ 
//     emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
//   }
//  if ((emailon[(emailon.findIndex(item => item.id == ctx.from.id))].emailon) == "1") {
//     await ctx.reply(`Is your patreon email?\n${ctx.message.text}`,
//     (Markup.inlineKeyboard(
//       [
//            [Markup.button.callback('Edit', 'btn_400')],
//            [Markup.button.callback('Email is correct', 'btn_401')]
//       ])))
//     email1 = [{id: ctx.from.id, email1: 'нет'}]
//     email1[([(email1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, email1: ctx.message.text.toLowerCase()})
//     emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})  
//    }
   }) 
 bot.launch()
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))