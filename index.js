const group = -1001639457688 // test
const group1 = -1001623077893 //test1
const group2 = -1001622222769 //test2
const group3 = -1001773316805 //test3
const group4 = -1001718400708 //test4
const group5 = -1001533172251 //test5
const chanel =  -1001666894195 //test1


const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)
const db = (process.env.BD_TOKEN)
const pt = (process.env.PATREON_TOKEN)
const mongoose = require('mongoose')
const Post = require('./models/post')
const Patreon = require('./models/post')
const { hydrate } = require('./models/post')
const { patreon, jsonApiURL } = require('patreon')
const patreonAPIClient = patreon(pt)


mongoose
.connect(db, {useNewUrlParser: true})
.then((res)=> console.log('connect to DB'))
.catch((error) => console.log(error))

const timewait = 15000
const timewaitstart = 0
const timewaitfull = 3600000

let bdinfo = []
let info = []
let info3 = []
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

let bazaall = []
let bazashcf1 = []
let bazashcf2 = []


 


function patreonstart() {patreonAPIClient(`/campaigns/6763510/pledges?page%5Bcount%5D=10000&json-api-use-default-includes=true`) // обновление партреона
  .then (async({ store }) => {
      const pledges = store.findAll("pledge");
      for (let x of pledges) {
        await Patreon.updateOne ({patron_email: x.patron.email}, {patron_full_name: x.patron.full_name,
                                                                      ptreonclient: 'patron',
                                                                    declined_since: x.declined_since,
                                                                      reward_title: x.reward.title}, {upsert: true})
      }
           let top1 = []
           top1 = await Patreon.find({reward_title:[
            "!NEW! ShibaripandaClub XL",
            "!NEW! ShibaripandaClub XXL",
            "Live shibari lessons #1",
            "Shibari course for beginners 2022.2",
            "Cookies and tea for Fat Panda!))",
            "Live shibari lessons #2",
            "Shibari course for beginners 2022.2",
            "Shibari course for beginners 2022.2",
            "Shibari course for beginners LSHL#3",
            "Shibari course for beginners2022.2",
            "VIP Patron",
            "Let`s make shibari course",
            "Your rope fantasies."], declined_since: null}, {patron_email: 1, _id: 0})
           bazaall = top1.map(item => item.patron_email)
           console.log(bazaall.length)

           let top2 = []
           top2 = await Patreon.find({reward_title:[
            "Live shibari lessons #1",
            "Live shibari lessons #2",
            "Shibari course for beginners LSHL#3",
            "VIP Patron",
            "Your rope fantasies."], declined_since: null}, {patron_email: 1, _id: 0})
           bazashcf1 = top2.map(item => item.patron_email)
           console.log(bazashcf1.length) 

           let top3 = []
           top3 = await Patreon.find({reward_title:[
            "Shibari course for beginners 2022.2", 
            "Shibari course for beginners 2022.2",
            "Shibari course for beginners 2022.2",
            "Shibari course for beginners2022.2",
            "VIP Patron",
            "Your rope fantasies."], declined_since: null}, {patron_email: 1, _id: 0})
           bazashcf2 = top3.map(item => item.patron_email)
           console.log(bazashcf2.length)
                               
  })
  .catch(err => {
      console.log("caught");
      console.error("error!", err);
      response.end(err);
  });}

  patreonstart()
  setInterval(patreonstart, timewaitfull)

// старт
bot.start(async (ctx) => {
  // ctx.reply("Please wait while we update the data for you...")
  // setTimeout(async () => ctx.reply("A couple more seconds..."),5000)
  // patreonstart(),
  setTimeout(async () => {
  await Post.updateOne ({id: ctx.from.id}, {profiledating: 'profiledating', username: ctx.from.username, chat: 'off', chatstatus: 'free', chatclient: 'no', level: 'level_0'}, {upsert: true})
  let vv = info3.findIndex(item => item.id == ctx.from.id)
  if (vv != -1) {info3.splice(info3.findIndex(item => item.id == ctx.from.id),1)};
  info3.push({id: ctx.from.id})
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

console.log(ctx.from.id, ctx.from.username, nameman.length, ctx.chat.id)

bdinfo = [{id: ctx.from.id}]
bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Post.findOne({id: ctx.from.id})
  if ((bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profile) == 'deleted') {
  await ctx.replyWithHTML(`<b>Hi, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}</b>!\n<b>Welcome to ShibaripandaClub!</b>`,
  Markup.inlineKeyboard(
[
     [Markup.button.callback('Add dating profile ✅', 'btn_1')],
    //  [Markup.button.callback('Rollet', 'btn_170')],
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
     //[Markup.button.callback('Rollet', 'btn_170')],
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
     //[Markup.button.callback('Rollet', 'btn_170')],
     [Markup.button.callback('ShibaripandaClub Free', 'btn_201')]
]) 
),
await ctx.replyWithHTML(`<b>ShibaripandaClub XL</b>\nExclusive content\nDating, community, chat, trainings`,
Markup.inlineKeyboard(
[
   [Markup.button.callback('Login', 'btn_400')],
   [Markup.button.callback('Subscribe 💵', 'btn_204')]
   
]))}},timewaitstart)
}
)

// function pop() 
// {(ctx) => ctx.reply('hello')}

// bot.action ('btn_170', setInterval(pop, 100))
// bot.action ('btn_170', async (ctx) => { 
//   await ctx.answerCbQuery();
//   let rollet = [];
//   await Post.updateOne({id: ctx.from.id}, {chat: 'on', chatstatus: 'free', chatclient: 'no'});
//   ctx.reply('Write a greeting and Panda will connect you with a random person!');
//   setInterval(pop, 100)
//   })

  
  

// bot.action('message', async(ctx) =>{
//    let q = []
//    q = await Post.find({id: ctx.from.id}) 
// if (q[0].chat = 'on') {console.log('yes')}
// })


// bot.action(setInterval()(async(ctx) => {
//   let w = []
//   w = await Post.find({id: ctx.from.id})
//   if (w[0].chat = 'on') {ctx.reply(w[0].mesfyou)}}, 100))

// let rollet = []
// bot.action ('btn_170', async (ctx) => { await ctx.answerCbQuery()
  
//   console.log('*** Cтарт: ' + rollet + '***')
//   //await Post.updateOne({id: ctx.from.id}, {chat: 'on', chatstatus: 'free', chatclient: 'no'})

//   let a = rollet.findIndex(item => item == ctx.from.username)
//   if (a != -1) {rollet.splice(rollet.findIndex(item => item ==  ctx.from.username),1)};
//   rollet.push(ctx.from.username)

//   await ctx.reply('Panda is seaching friend for you...')
//   let rand = Math.floor(Math.random()*rollet.length)
//   let rand1 = rollet[rand] 
//   if (rand != rollet.findIndex(item => item == ctx.from.username)) await Post.updateOne({username: rand1}, {mesfyou: 'Hello, 55555'}) 
//   let mesbd = []
//   mesbd = await Post.find({id: ctx.from.id})
//   await ctx.reply('srart dialog, say hello')
//   await ctx.replyWithHTML('<b>anonumus</b>\n' + mesbd[0].mesfyou)
//   console.log(mesbd[0].mesfyou)
//   console.log('***** Kонец: ' + rollet +' *****')
//   })

// вывод анкеты в бот
bot.action ('btn_250', async (ctx) => {
  let c = bdinfo.findIndex(item => item.id == ctx.from.id)
  if (c == -1) {ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')}
  else{
    await ctx.reply(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profiledata)
  await ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
}
  })


//   bot.action ('btn_400', (ctx) => {
//     const prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       ctx.reply("..................");
//        patreonstart()
//      resolve()
//     }, 5000);})  
   
//     prom.then(() => {
// bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = Post.findOne({id: ctx.from.id})
//     if (bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email == undefined) { 
//     ctx.reply("Enter your patreon email")
//     emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 1})
//     prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'})
//       }
//     else {ctx.reply("Hello, you are already registered!",
//       (Markup.inlineKeyboard(
//         [
//              [Markup.button.callback(`Click to enter ${bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email}`, 'btn_405')]
//         ])))
//          prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'}) 
//          emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})  }  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
//     })})
        




bot.action ('btn_400', async (ctx) => { 
  ctx.reply("Please wait while we update the data for you...")
  setTimeout(async () => ctx.reply("A couple more seconds..."),5000)
  patreonstart(),
  setTimeout(async () => {bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Post.findOne({id: ctx.from.id})
  if (bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email == undefined) { 
  ctx.reply("Enter your patreon email")
  emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 1})
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'})
    }
  else {ctx.reply("Hello, you are already registered!",
    (Markup.inlineKeyboard(
      [
           [Markup.button.callback(`Click to enter ${bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email}`, 'btn_405')]
      ])))
       prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'}) 
       emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0}) } },timewait)
      }) 
      




  bot.action ('btn_789', (ctx) => {
    ctx.replyWithHTML(`Q`,
    email1[([(email1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, email1: ctx.message.text.toLowerCase()}),
    emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0}) )    
})

// free chanal enter
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
  let n = email1.findIndex(item => item == ctx.from.id)
  if (n != -1) {
    console.log(n)
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }
  else {  
    
    let logon1 = []
    logon1 = await Patreon.find({profiledating: 'profiledating', email: email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1})
    console.log('enter1 '+ logon1.length)
    let logonlength1 = logon1.length
    console.log('1l ' + logonlength1)

    if(logonlength1 < 1){

  
  if ((emailon.find(item => item.emailon == 0)) == undefined){ 
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }
    else {
        if (bazaall.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)) { 
    
      if (bazaall.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)) {
        let link = await ctx.telegram.createChatInviteLink(group,{member_limit: 1})
        let link1 = await ctx.telegram.createChatInviteLink(group1,{member_limit: 1})
        let link2 = await ctx.telegram.createChatInviteLink(group2,{member_limit: 1})
        let link3 = await ctx.telegram.createChatInviteLink(group3,{member_limit: 1})
        await ctx.replyWithHTML(`Welcome!\nGoodies available for you, enjoy :`,
        Markup.inlineKeyboard(
          [
             [Markup.button.url('ShibaripandaClub XL 🐼', url = link.invite_link)],
             [Markup.button.url('ShibaripandaDating 🐼', url = link1.invite_link)],
             [Markup.button.url('ShibaripandaLive 🐼', url = link2.invite_link)],
             [Markup.button.url('ShibaripandaChat 🐼', url = link3.invite_link)]
          ]) )
          await Post.updateOne ({id: ctx.from.id}, {email: email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1, level: 'level_1'})}

      if (bazashcf1.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)){
        let link4 = await ctx.telegram.createChatInviteLink(group4,{member_limit: 1})
        await ctx.reply('Your learning class:',
  Markup.inlineKeyboard(
    [
       [Markup.button.url('Shibari course for beginners 2022', url = link4.invite_link)]
    ]))
    await Post.updateOne ({id: ctx.from.id}, {level: 'level_2'})
      }    
    if (bazashcf2.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)){
      let link5 = await ctx.telegram.createChatInviteLink(group5,{member_limit: 1})
      await ctx.reply('Your learning class:',
      Markup.inlineKeyboard(
        [
           [Markup.button.url('Shibari course for beginners 2022.2 📚', url = link5.invite_link)]
        ]) )
        await Post.updateOne ({id: ctx.from.id}, {level: 'level_3'})
      } 
  }
    if (!bazaall.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)) {
  ctx.reply(`You cannot login\n
  Perhaps you are not subscribed to the paid section\n
  There may be a problem with the last payment\n
  You may have entered your email incorrectly\n\n
  Check if everything is in order by subscription and payment`,
  Markup.inlineKeyboard(
    [ 
      [Markup.button.callback('Edit email', 'btn_400')],
      [Markup.button.callback('Subscribe 💵', 'btn_204')]
    ]))
   
  } 
    }
  
  }

    else {
      await ctx.reply('The email is already in use.\nYou cannot log in twice with the same subscription',
      Markup.inlineKeyboard(
        [
          [Markup.button.callback('Edit email', 'btn_400')],
          [Markup.button.callback('Subscribe 💵', 'btn_204')]
        ]))
        await ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
    }
}
})


bot.action ('btn_405', async (ctx) => {
  emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
  bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Post.findOne({id: ctx.from.id})
  if ((emailon.find(item => item.emailon == 0)) == undefined){ 
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }
    else{
      let logon = await Patreon.find({profiledating: 'profiledating', email:  bdinfo[([( bdinfo.findIndex(item => item.id == ctx.from.id))])].email})
      console.log('enter2 '+ logon.length)
      let logonlength = logon.length
      console.log('2l '+ logonlength)
      if (logonlength == 1) {
        if (bazaall.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email))
    
    { 
         if (bazaall.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)) {
  let link = await ctx.telegram.createChatInviteLink(group,{member_limit: 1})
  let link1 = await ctx.telegram.createChatInviteLink(group1,{member_limit: 1})
  let link2 = await ctx.telegram.createChatInviteLink(group2,{member_limit: 1})
  let link3 = await ctx.telegram.createChatInviteLink(group3,{member_limit: 1})
  await ctx.replyWithHTML(`Welcome!\nGoodies available for you, enjoy :`,
  Markup.inlineKeyboard(
    [
       [Markup.button.url('ShibaripandaClub XL 🐼', url = link.invite_link)],
       [Markup.button.url('ShibaripandaDating 🐼', url = link1.invite_link)],
       [Markup.button.url('ShibaripandaLive 🐼', url = link2.invite_link)],
       [Markup.button.url('ShibaripandaChat 🐼', url = link3.invite_link)]
    ]) )
    await Post.updateOne ({id: ctx.from.id}, {level: 'level_1'})
  }

      if (bazashcf1.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)){
        let link4 = await ctx.telegram.createChatInviteLink(group4,{member_limit: 1})
        await ctx.reply('Your learning class:',
  Markup.inlineKeyboard(
    [
       [Markup.button.url('Shibari course for beginners 2022 📚', url = link4.invite_link)]
    ]))
    await Post.updateOne ({id: ctx.from.id}, {level: 'level_2'})
      }    
    if (bazashcf2.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)){
      let link5 = await ctx.telegram.createChatInviteLink(group5,{member_limit: 1})
      await ctx.reply('Your learning class:',
      Markup.inlineKeyboard(
        [
           [Markup.button.url('Shibari course for beginners 2022.2 📚', url = link5.invite_link)]
        ]) )
        await Post.updateOne ({id: ctx.from.id}, {level: 'level_3'})
      } 
  }
    if (!bazaall.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)) {
  await ctx.reply(`You cannot login\n
  There may be a problem with the last payment\n\n
  Check if everything is in order by subscription and payment`,
  Markup.inlineKeyboard(
    [ 
      [Markup.button.callback('Subscribe 💵', 'btn_204')]
    ]))
   await ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  
  } 
    } 
    
    else {
      await ctx.reply('The email is already in use.\nYou cannot log in twice with the same subscription',
  Markup.inlineKeyboard(
    [
      [Markup.button.callback('Edit email', 'btn_400')],
      [Markup.button.callback('Subscribe 💵', 'btn_204')]
    ]))
    await ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
    }
    }
})









bot.action ('btn_1', async (ctx) => {
  let m = username1.findIndex(item => item.id == ctx.from.id)
  if (m != -1) {username1.splice(username1.findIndex(item => item.id == ctx.from.id),1)};
  username1.push({id: ctx.from.id, username1: ctx.from.username})

  emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
  end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 0})

  if (username1[([(username1.findIndex(item => item.id == ctx.from.id))])].username1 == undefined){
    await ctx.reply("You don't have a username set, people can't find you.\nSet the username in the telegram settings. After, restart the bot and try again.\nThank you for your attention!")
  }
else{
  if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0"){ 
    await ctx.reply("What is your name?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_1'})
  }
 else {
  }}
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



// сбор анкеты и подготовка к публикации
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
    (ageman[(ageman.findIndex(item => item.id == ctx.from.id))].ageman) +'\n'+ 
    (countryman[(countryman.findIndex(item => item.id == ctx.from.id))].countryman) +' '+ 
    (cityman[(cityman.findIndex(item => item.id == ctx.from.id))].cityman) +'\nGender: '+ 
    (sexman[(sexman.findIndex(item => item.id == ctx.from.id))].sexman) +'\n'+ 'My interests: '+ 
    (interes[(interes.findIndex(item => item.id == ctx.from.id))].interes)+'\n'+ 'Who I want to find: '+ 
    (whofind[(whofind.findIndex(item => item.id == ctx.from.id))].whofind) +'\n'+ 'About me: '+ 
    (infiwords[(infiwords.findIndex(item => item.id == ctx.from.id))].infiwords) +'\n@'+ 
    (username1[(username1.findIndex(item => item.id == ctx.from.id))].username1)})

    info3[([(info3.findIndex(item => item.id == ctx.from.id))])] =
    ({id: ctx.from.id, info3: 'Name available in XL subscription $1 age '+ 
    (ageman[(ageman.findIndex(item => item.id == ctx.from.id))].ageman) +'\n'+ 
    (countryman[(countryman.findIndex(item => item.id == ctx.from.id))].countryman) +' '+ 
    (cityman[(cityman.findIndex(item => item.id == ctx.from.id))].cityman) +'\nGender: '+ 
    (sexman[(sexman.findIndex(item => item.id == ctx.from.id))].sexman) +'\n'+ '<b>My interests:</b> '+ 
    (interes[(interes.findIndex(item => item.id == ctx.from.id))].interes)+'\n'+ 'Who I want to find: '+ 
    (whofind[(whofind.findIndex(item => item.id == ctx.from.id))].whofind) +'\n'+ 'About me: '+ 
    (infiwords[(infiwords.findIndex(item => item.id == ctx.from.id))].infiwords) +'\nContact details available in XL subscription $1'})

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
  let mes1 = []
  mes1 = await ctx.telegram.sendMessage(chanel, (info3[(info3.findIndex(item => item.id == ctx.from.id))].info3))
  await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
       idmeschanel: mes1.message_id
    })
  let mes = []                                              //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  mes = await ctx.telegram.sendMessage(group, (info[(info.findIndex(item => item.id == ctx.from.id))].info), Markup.inlineKeyboard(
    [
       [Markup.button.callback('Message', 'btn_150')]
    ])), 
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
  let mes1 = []
  mes1 = await ctx.telegram.sendMessage(chanel, (info3[(info3.findIndex(item => item.id == ctx.from.id))].info3))
  await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
idmeschanel: mes1.message_id
    })
    let mes = []                                                                             //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    mes = await ctx.telegram.sendMessage(group, (info[(info.findIndex(item => item.id == ctx.from.id))].info)), 
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
  let dell3 = []
  dell3 = await Post.find({profiledating: 'profiledating', id: ctx.from.id})
if (dell3[0].profile == 'ok') {
  username1[([(username1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, username1: ctx.from.username})
  del1[([(del1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, del1: 0})
  if ((del1.find(item => item.del1 == 0)) == undefined){ 
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }
  else {if ((del1[(del1.findIndex(item => item.id == ctx.from.id))].del1) == "0") {
    let dell2 = []
    dell2 = await Post.find({profiledating: 'profiledating', id: ctx.from.id});
  await ctx.telegram.deleteMessage(group, dell2[0].idmes)
  await ctx.telegram.deleteMessage(chanel, dell2[0].idmeschanel)
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  await ctx.replyWithHTML("Your dating profile has been deleted! ❌\n\nPlease restart the bot to continue.\nRestart ➡️ <b>/start</b> ✅")
  await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
     profiledata: 'You have deleted your profile',
          idmes: false,
        profile: 'deleted',
    idmeschanel: false
    })
  del1[([(del1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, del1: 1})}
}}
else {await ctx.replyWithHTML("У вас нет анкеты.\n\nПерезапуск ➡️ <b>/start</b> ✅")}
})


bot.on('new_chat_members', async(ctx) =>{
  let entergroup = []
  entergroup = await Post.find({profiledating: 'profiledating', id: ctx.from.id})
  let levelv = entergroup.findIndex(item => item.id = 'level')
  console.log(levelv)
  if (ctx.from.id == 599773731){ console.log('Admin')}
  else {
  if (levelv == -1) {
     let ads = ctx.telegram.banChatMember(ctx.chat.id, ctx.from.id, false, true);
     ctx.telegram.unbanChatMember(ctx.chat.id, ctx.from.id)
     console.log('0')
     console.log(ads)}

     else if  (entergroup[0].level == 'level_1' && ctx.chat.id == group || group1 || group2 || group3) {
      let delmes = await ctx.telegram.sendMessage(ctx.chat.id,`Hello1! ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}`);
      setTimeout(async () => await ctx.telegram.deleteMessage(ctx.chat.id, delmes.message_id), 10000)
      console.log('1')}

     else if (entergroup[0].level == 'level_2' && ctx.chat.id == group || group1 || group2 || group3 || group4) {
     let delmes1 = await ctx.telegram.sendMessage(ctx.chat.id, `Hello2! ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}`);
     setTimeout(async () => await ctx.telegram.deleteMessage(ctx.chat.id, delmes1.message_id), 10000)
     console.log('2')}

     else if (entergroup[0].level == 'level_3' && ctx.chat.id == group || group1 || group2 || group3 || group5) {
     let delmes2 = await ctx.telegram.sendMessage(ctx.chat.id, `Hello3! ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}`);
     setTimeout(async () => await ctx.telegram.deleteMessage(ctx.chat.id, delmes2.message_id), 10000)
     console.log('3')}
  else {
    ctx.telegram.banChatMember(ctx.chat.id, ctx.from.id, false, true)
    ctx.telegram.unbanChatMember(ctx.chat.id, ctx.from.id)
    console.log('4')
  // console.log(hh)
  // console.log(hh.from.id)
}
}})

// {
//   message_id: 692,
//   from: {
//     id: 5466664209,
//     is_bot: true,
//     first_name: 'test1',
//     username: 'testpanda1bot'
//   },-1001639457688
//   chat: { id: -1001639457688, title: 'testbulbagroup', type: 'supergroup' },
//   date: 1657125667,
//   text: 'Hello!',
//   has_protected_content: true
// }

bot.on('message', async(ctx) => {
  prev_action.push({id: ctx.from.id, prev_action: 'step_0'})
  if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == undefined) {
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')};

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
      if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == "step_3") { if (ctx.message.text > 17) {
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
    infiwords[([(infiwords.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, infiwords: ctx.message.text});


if (username1[([(username1.findIndex(item => item.id == ctx.from.id))])].username1 == undefined) {
    username1[([(username1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, username1:' '})}
else {username1[([(username1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, username1: ctx.from.username})}
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
    email1 = [{id: ctx.from.id, email1: 'not found'}]
    email1[([(email1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, email1: ctx.message.text.toLowerCase()})
    emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})  
   }



  // if (ctx.message.new_chat_member.id == true) {async (ctx) => {
  //  ctx.reply('Welcome')}}


   })


   
   
 

//    bot.on('new_chat_members', async (ctx) => {
//     console.log(ctx.message.new_chat_members)
//    await ctx.reply(`@${ctx.message.from.username}, вы не можете писать в данный чат 
// //Обратитесь к администратору`) 
    
//     for(let i = -1; i <= -1; i++){ 
//                setTimeout(() => {
//                ctx.deleteMessage(ctx.message.message_id-i) 
                
//             },1000 * 15)
//           }
   
// })
  



 bot.launch()
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))