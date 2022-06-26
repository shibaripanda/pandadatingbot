const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)
const baza = require('./const')
const mongoose = require('mongoose')
const db = (process.env.BD_TOKEN)
const Post = require('./models/post')
const { hydrate } = require('./models/post')
const pt = (process.env.PATREON_TOKEN)

mongoose
.connect(db, {useNewUrlParser: true})
.then((res)=> console.log('connect to DB'))
.catch((error) => console.log(error))

// var url = require('url')
// var patreon = require('patreon')
// var patreonAPI = patreon.patreon
// var patreonOAuth = patreon.oauth

// Use the client id and secret you received when setting up your OAuth account
//var CLIENT_ID = 'iVSDuHMfr8_yibe1haipBMihmoT9awjzekoLIZTInojaqqI1QT7SgGvT_mByrCya'
//var CLIENT_SECRET = 'GdXX-AywSj0F4pbFWQo3B8NMWkvLs7uYvnMheO0LFRfoQzRy4E1lqUZqL3RibuG2'
//var patreonOAuthClient = patreonOAuth(CLIENT_ID, CLIENT_SECRET)

// This should be one of the fully qualified redirect_uri you used when setting up your oauth account
//var redirectURL = 'http://mypatreonapp.com/oauth/redirect'

//function handleOAuthRedirectRequest(request, response) {
 //   var oauthGrantCode = url.parse(request.url, true).query.code

 //   patreonOAuthClient
  //      .getTokens(oauthGrantCode, redirectURL)
  //      .then(function(tokensResponse) {
  //          var patreonAPIClient = patreonAPI(tokensResponse.access_token)
  //          return patreonAPIClient('/current_user')
  //      })
  //      .then(function(result) {
  //          var store = result.store
  //          // store is a [JsonApiDataStore](https://github.com/beauby/jsonapi-datastore)
            // You can also ask for result.rawJson if you'd like to work with unparsed data
  //          response.end(store.findAll('user').map(user => user.serialize()))
   //     })
   //     .catch(function(err) {
   //         console.error('error!', err)
    //        response.end(err)
   //     })
//}


//const { patreon, jsonApiURL } = require('patreon')
//const patreonAPIClient = patreon(pt)
//const rewards = patreonAPIClient('/current_user/campaigns')
//.then(function(result) {
 // var store = result.store
  // store is a [JsonApiDataStore](https://github.com/beauby/jsonapi-datastore)
  // You can also ask for result.rawJson if you'd like to work with unparsed data
//  response.end(store.findAll('user').map(user => user.serialize())
//)

//console.log(rewards)

let sec = 1
let sec1 = sec + 1
function www()
{console.log(sec1 = sec + 1), sec = sec1}
setInterval(www, 10000)


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
  await Post.updateOne ({id: ctx.from.id}, {profiledating: 'profiledating', username: ctx.from.username}, {upsert: true})
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

bdinfo = [{id: ctx.from.id}]
bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Post.findOne({id: ctx.from.id})

 //  Post.create({
 // profiledating: 'profiledating',
 //            id: ctx.from.id,
 //      username: ctx.from.username,
//        profile: false,
 //         idmes: false,
 //         email: false
 //       }),

  if ((bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profile) == 'deleted') {
  await ctx.replyWithHTML(`<b>Hi, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}</b>!\n<b>Welcome to ShibaripandaClub!</b>`,
  Markup.inlineKeyboard(
[
     [Markup.button.callback('Add dating profile ✅', 'btn_1')],
     [Markup.button.callback('ShibaripandaClub Free', 'btn_201')]
]) 
),
await ctx.replyWithHTML(`<b>ShibaripandaClub XL</b>\nExclusive content\nDating, community, chat, trainings`,
Markup.inlineKeyboard(
[
   [Markup.button.callback('Login', 'btn_400')],
   [Markup.button.callback('Subscribe 💵', 'btn_204')]
   
]))}

else if ((bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profile) == 'ok') {
  await ctx.replyWithHTML(`<b>Hi, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}</b>!\n<b>Welcome to ShibaripandaClub!</b>`,
  
  Markup.inlineKeyboard(
[
     [Markup.button.callback('View my profile', 'btn_250')],
     [Markup.button.callback('Delete or edit my dating profile ❌', 'btn_200')],
     [Markup.button.callback('ShibaripandaClub Free', 'btn_201')]
]) 
),
await ctx.replyWithHTML(`<b>ShibaripandaClub XL</b>\nExclusive content\nDating, community, chat, trainings`,
Markup.inlineKeyboard(
[
   [Markup.button.callback('Login', 'btn_400')],
   [Markup.button.callback('Subscribe 💵', 'btn_204')]
]))}

else{
  await ctx.replyWithHTML(`<b>Hi, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}</b>!\n<b>Welcome to ShibaripandaClub!</b>`,
  Markup.inlineKeyboard(
[
     [Markup.button.callback('Add dating profile ✅', 'btn_1')],
     
     [Markup.button.callback('ShibaripandaClub Free', 'btn_201')]
]) 
),
await ctx.replyWithHTML(`<b>ShibaripandaClub XL</b>\nExclusive content\nDating, community, chat, trainings`,
Markup.inlineKeyboard(
[
   [Markup.button.callback('Login', 'btn_400')],
   [Markup.button.callback('Subscribe 💵', 'btn_204')]
   
]))}
}
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

bot.action ('btn_250', (ctx) => {
  ctx.reply(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profiledata)
  })

bot.action ('btn_400', async (ctx) => {
  
  if (bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email == undefined) {
  ctx.reply("Enter your patreon email")
  emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 1})
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'})
    }
  else {ctx.reply("Enter your new patreon email:",
    (Markup.inlineKeyboard(
      [
           [Markup.button.callback(`Or click to use it: ${bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email}`, 'btn_405')]
      ])))
       prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'}) 
       emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 1})  }  
  })

  bot.action ('btn_789', (ctx) => {
    ctx.replyWithHTML(`Q`,
    email1[([(email1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, email1: ctx.message.text.toLowerCase()}),
    emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0}) )    
})

bot.action ('btn_201', async (ctx) => {
  await ctx.replyWithPhoto({ source: "./img/alerteng.jpg" })
  await ctx.replyWithHTML(`To enter the channel, use this link <a href="https://t.me/+Ap62Lp2sjdM3NDYy">ShibaripandaClub</a>.\n\n<b> If, when you try to log in, you see a message like in the photo above. You need to enable “Disable filtering” in the settingsin the web or computer version of the telegram application.</b>`, {
    disable_web_page_preview: true})
  await ctx.reply (`These links will help you!`,
    Markup.inlineKeyboard(
      [
         [Markup.button.callback('Web telegram', 'btn_300'), Markup.button.callback('Detailed instructions', 'btn_301')]
      ]) 
      ) 
      ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')  
})

bot.action ('btn_301', (ctx) => {ctx.replyWithHTML(`How to Open Blocked or Banned Telegram Channels <a href="https://www.followchain.org/open-banned-blocked-telegram-channels">Detailed instructions</a>.`)    
})

bot.action ('btn_300', (ctx) => {ctx.replyWithHTML(`<a href="https://web.telegram.org/">Web telegram</a>.`)    
})


bot.action ('btn_204', (ctx) => {
  ctx.replyWithHTML(`<b>To subscribe, go to <a href="https://www.patreon.com/shibaripanda">Patreon</a>.</b>\n\nPlease restart the bot to continue.\nRestart ➡️ <b>/start</b> ✅`)    
})


bot.action ('btn_401', async (ctx) => {
  await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
      email: email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1
    }) 
  if ((emailon.find(item => item.emailon == 0)) == undefined){ 
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }
    else{
        if (bazaall.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1))
    
    { 
         if (bazaall.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)) {
  await ctx.replyWithHTML(`Welcome!\nGoodies available for you, enjoy :`,
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
  ctx.reply(`You didn't subscribe or entered your email incorrectly`,
  Markup.inlineKeyboard(
    [ 
      [Markup.button.callback('Edit email', 'btn_400')],
      [Markup.button.callback('Subscribe 💵', 'btn_204')]
    ]))} 
    }
})

bot.action ('btn_405', async (ctx) => {
  emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
  bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Post.findOne({id: ctx.from.id})
  if ((emailon.find(item => item.emailon == 0)) == undefined){ 
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }
    else{
        if (bazaall.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email))
    
    { 
         if (bazaall.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)) {
  await ctx.replyWithHTML(`Welcome!\nGoodies available for you, enjoy :`,
  Markup.inlineKeyboard(
    [
       [Markup.button.callback('ShibaripandaClub XL 🐼', 'btn_900')],
       [Markup.button.callback('ShibaripandaDating 🐼', 'btn_901')],
       [Markup.button.callback('ShibaripandaLive 🐼', 'btn_902')],
       [Markup.button.callback('ShibaripandaChat 🐼', 'btn_903')]
    ]) )}

      if (bazashcf1.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)){
        await ctx.reply('Your learning class:',
  Markup.inlineKeyboard(
    [
       [Markup.button.callback('Shibari course for beginners 📚', 'btn_904')]
    ]))
      }    
    if (bazashcf2.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)){
      await ctx.reply('Your learning class:',
      Markup.inlineKeyboard(
        [
           [Markup.button.callback('Shibari course for beginners2 📚', 'btn_905')]
        ]) )} 
  }
    if (!bazaall.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)) {
  ctx.reply(`You didn't subscribe or entered your email incorrectly`,
  Markup.inlineKeyboard(
    [ 
      [Markup.button.callback('Edit email', 'btn_400')],
      [Markup.button.callback('Subscribe 💵', 'btn_204')]
    ]))} 
    }
})




bot.action ('btn_900')

bot.action ('btn_1', async (ctx) => {
  emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
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
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }
  else {if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
  ctx.reply("What's your gender?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_2'})}
  else {
  } 
  }})


bot.action ('btn_3', (ctx) => {
   if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }
  
  else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
  ctx.reply("How old are you?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_3'})}
  }})

bot.action ('btn_4', (ctx) => {
  if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }
  
  else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
  ctx.reply("What country are you from?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_4'})
  post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})}
  }})

  bot.action ('btn_5', (ctx) => {
    if ((end1.find(item => item.end1 == 0)) == undefined){ 
      ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
    }
    
    else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
    ctx.reply("Which city are you from?")
    prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_5'})
    post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})}
    }})

    bot.action ('btn_6', (ctx) => {
      if ((end1.find(item => item.end1 == 0)) == undefined){ 
        ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
      }
      
      else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
      ctx.reply("What interests do you have?")
      prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_6'})
      post[([(post.findIndex(item => item.id == ctx.from.id.id))])] = ({id: ctx.from.id, post: 1})}
      }})

      bot.action ('btn_7', (ctx) => {
        if ((end1.find(item => item.end1 == 0)) == undefined){ 
          ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
        }
        
        else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
        ctx.reply("Who would you like to find?")
        prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_7'})
        post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})}
        }})

        bot.action ('btn_8', (ctx) => {
          if ((end1.find(item => item.end1 == 0)) == undefined){ 
            ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
          }
          
          else {if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
          ctx.reply("That tell about yourself?")
          prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_8'})
          post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})} 
          }})  




bot.action ('btn_100', (ctx) => {
  if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
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
  bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Post.findOne({id: ctx.from.id})
  if ((post.find(item => item.post == 1)) == undefined){
    await ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }  
  else if ((bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profile) == 'ok'){
    ctx.replyWithHTML("You already have a dating profile!\n\nPlease restart the bot to continue.\nRestart ➡️ <b>/start</b> ✅")
}
  else if ((bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profile) == 'delete', (post[(post.findIndex(item => item.id == ctx.from.id))].post) == "1") {
  let mes = []
  mes = await ctx.telegram.sendMessage(-1001738151348, (info[(info.findIndex(item => item.id == ctx.from.id))].info)), 
  await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
          profile: 'ok',
            idmes: mes.message_id,
      profiledata: mes.text
          })
  await ctx.replyWithHTML("Your profile has been published!✅\n\nAfter publishing the profile, restart the bot to edit information!.\nPlease restart the bot to continue.\nRestart ➡️ <b>/start</b> ✅")
  end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 1})
  post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 0})
}
else { if ((post[(post.findIndex(item => item.id == ctx.from.id))].post) == "1") {
    let mes = []
    mes = await ctx.telegram.sendMessage(-1001738151348, (info[(info.findIndex(item => item.id == ctx.from.id))].info)), 
    await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
            profile: 'ok',
              idmes: mes.message_id,
        profiledata: mes.text
            })
    await ctx.replyWithHTML("Your profile has been published!✅\n\nAfter publishing the profile, restart the bot to edit information!.\nPlease restart the bot to continue.\nRestart ➡️ <b>/start</b> ✅")
    end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 1})
    post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 0})
  }}} 
)



bot.action ('btn_200', async (ctx) => {
  username1[([(username1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, username1: ctx.from.username})
  del1[([(del1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, del1: 0})
  if ((del1.find(item => item.del1 == 0)) == undefined){ 
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }
  else {if ((del1[(del1.findIndex(item => item.id == ctx.from.id))].del1) == "0") {
    let dell2 = []
    dell2 = await Post.find({profiledating: 'profiledating', id: ctx.from.id});
    await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
          profile: 'deleted'
      })
  await ctx.telegram.deleteMessage(-1001738151348, dell2[0].idmes)
  await ctx.replyWithHTML("Your dating profile has been deleted! ❌\n\nPlease restart the bot to continue.\nRestart ➡️ <b>/start</b> ✅")
  await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
     profiledata: 'You have deleted your profile',
     idmes: false
    })
  del1[([(del1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, del1: 1})}
}})

bot.on('message', async(ctx) => {
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

      if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_3") { if (ctx.message.text > '17') {
        await ctx.reply(`Your age : ${ctx.message.text}`,
        (Markup.inlineKeyboard(
          [
               [Markup.button.callback('Edit', 'btn_3')],
               [Markup.button.callback('Next step 4/8', 'btn_4')]
          ])))
        ageman[([(ageman.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, ageman: ctx.message.text})}
        else {await ctx.reply(`Your age : ${ctx.message.text}\nYou must be over 18 years of age to register.\nSorry, but you are not allowed to use these services.\nIf you made a mistake, use:`,
         (Markup.inlineKeyboard(
           [
                [Markup.button.callback('Edit', 'btn_3')],
           ]))), 
           ageman[([(ageman.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, ageman: ctx.message.text})}
        }



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
  
  if ((emailon.find(item => item.emailon == 1)) == undefined){ 
    emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
  }
 if ((emailon[(emailon.findIndex(item => item.id == ctx.from.id))].emailon) == "1") {
    await ctx.reply(`Is your patreon email?\n${ctx.message.text}`,
    (Markup.inlineKeyboard(
      [
           [Markup.button.callback('Edit', 'btn_400')],
           [Markup.button.callback('Email is correct', 'btn_401')]
      ])))
    email1[([(email1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, email1: ctx.message.text.toLowerCase()})
    emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})  
   }
   })

 //  bot.message_handler(content_types = ['new_chat_members', 'left_chat_member'])
 //  delete(message):
 //        bot.delete_message(message.chat.id, message.message_id)




//patreon

//api_client = patreon.API(pt)
//campaign_id = api_client.get_campaigns().data()[0].id()
//pledges_response = api_client.fetch_page_of_pledges(
   // campaign_id,
  //  25,


 //api_client = patreon.API(pt)
 //campaign_response = api_client.fetch_campaign
 
 //(ctx) =>  campaign_response.data()[0],
 //console.log(campaign.id()), //</YOUR> The campaign ID (or whatever object you are retrieving)
 //console.log(campaign.type()), // # Campaign, in this case
 //console.log(campaign.attributes()), //# This is most of the data you want
 //console.log(campaign.attribute('patron_count')), //# get a specific attribute
 //console.log(campaign.relationships()), //# related entities like 'creator' 'goals' and 'rewards'
 //console.log(campaign.relationship('goals')),
 //console.log(campaign.relationship_info()), 
 //# This last one one ends up returning another JSONAPIResource object with it's own method: .resource() that returns a list of more objects 
 //# for example, to print the campaign's first goal you could use:
 bot.launch()


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))