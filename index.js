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

const group = -1001451309256 //xl
const group1 = -1001608755158 //dating
const group2 = -1001584007834 //live
const group3 = -1001558239696 //chat
const group4 = -1001771841588 //course1 
const group5 = -1001756174074 //course2 
const chanel = -1001316209146 //free 
const group6 = -1001674072830 //course3

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
let bazashcf3 = []

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
            "Shibari course for beginners 3"], declined_since: null}, {patron_email: 1, _id: 0})
           bazaall = top1.map(item => item.patron_email)
           console.log(bazaall.length)

           let top2 = []
           top2 = await Patreon.find({reward_title:[
            "Live shibari lessons #1",
            "Live shibari lessons #2",
            "Shibari course for beginners LSHL#3"], declined_since: null}, {patron_email: 1, _id: 0})
           bazashcf1 = top2.map(item => item.patron_email)
           console.log(bazashcf1.length) 

           let top3 = []
           top3 = await Patreon.find({reward_title:[
            "Shibari course for beginners 2022.2", 
            "Shibari course for beginners 2022.2",
            "Shibari course for beginners 2022.2",
            "Shibari course for beginners2022.2"], declined_since: null}, {patron_email: 1, _id: 0})
           bazashcf2 = top3.map(item => item.patron_email)
           console.log(bazashcf2.length)   
         
           let top4 = []
           top4 = await Patreon.find({reward_title:[
            "Shibari course for beginners 3"], declined_since: null}, {patron_email: 1, _id: 0})
           bazashcf3 = top4.map(item => item.patron_email)
           console.log(bazashcf3.length)   
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
  try {
  // ctx.reply("Please wait while we update the data for you...")
  // setTimeout(async () => ctx.reply("A couple more seconds..."),5000)
  // patreonstart(),
  setTimeout(async () => {
  await Post.updateOne ({id: ctx.from.id}, {profiledating: 'profiledating', username: ctx.from.username, chat: 'off', chatstatus: 'free', chatclient: 'no'}, {upsert: true})
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
   
]))}},timewaitstart)}
catch(e){console.log('Start error :' + e)}
}
)


bot.help((ctx) => ctx.reply('help'))


bot.command('del', async (ctx) => {
  try{
  let memberlevel = []
            memberlevel = await Post.find({profiledating: 'profiledating', level: ['level_1', 'level_2', 'level_3', 'level_4']}, {email: 1, id: 1, _id: 0})
            console.log("count level users: "+ memberlevel.length)
            console.log(memberlevel)
            for (let em of memberlevel) {
            if (bazaall.includes(em.email)) { 

              if (bazashcf1.includes(em.email)){
                await ctx.telegram.banChatMember(group5, em.id, false, true)
                await ctx.telegram.banChatMember(group6, em.id, false, true)
                await ctx.telegram.unbanChatMember(group5, em.id)
                await ctx.telegram.unbanChatMember(group6, em.id)
                await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group5: false, group6: false, level: 'level_2'})
          
            console.log('ok1: '+ em.id)}

              else if (bazashcf2.includes(em.email)) {
                await ctx.telegram.banChatMember(group4, em.id, false, true) 
                await ctx.telegram.banChatMember(group6, em.id, false, true)
                await ctx.telegram.unbanChatMember(group4, em.id)
                await ctx.telegram.unbanChatMember(group6, em.id) 
                await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group4: false, group6: false, level: 'level_3'})
               
                console.log('ok2: '+ em.id)}

                else if (bazashcf3.includes(em.email)) {
                  await ctx.telegram.banChatMember(group4, em.id, false, true) 
                  await ctx.telegram.banChatMember(group5, em.id, false, true)
                  await ctx.telegram.unbanChatMember(group4, em.id)
                  await ctx.telegram.unbanChatMember(group5, em.id) 
                  await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group4: false, group5: false, level: 'level_4'})
                
                  console.log('ok3: '+ em.id)}

                  else{
                    await ctx.telegram.banChatMember(group4, em.id, false, true) 
                    await ctx.telegram.banChatMember(group5, em.id, false, true)
                    await ctx.telegram.banChatMember(group6, em.id, false, true)
                    await ctx.telegram.unbanChatMember(group4, em.id)
                    await ctx.telegram.unbanChatMember(group5, em.id)
                    await ctx.telegram.unbanChatMember(group6, em.id) 
                    await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group4: false,  group5: false, group6: false, level: 'level_1'})
                    console.log('ok4: '+ em.id)
                  }
  
              }


            else {
            if (memberlevel.id == 599773731 || memberlevel.id == 2123157583) {
            console.log('admin')}
            else {
            console.log('delete: '+ em.id)
            await ctx.telegram.banChatMember(group, em.id, false, true)
            await ctx.telegram.unbanChatMember(group, em.id) 
            await ctx.telegram.banChatMember(group1, em.id, false, true)
            await ctx.telegram.unbanChatMember(group1, em.id) 
            await ctx.telegram.banChatMember(group2, em.id, false, true)
            await ctx.telegram.unbanChatMember(group2, em.id) 
            await ctx.telegram.banChatMember(group3, em.id, false, true)
            await ctx.telegram.unbanChatMember(group3, em.id) 
            await ctx.telegram.banChatMember(group4, em.id, false, true)
            await ctx.telegram.unbanChatMember(group4, em.id) 
            await ctx.telegram.banChatMember(group5, em.id, false, true)
            await ctx.telegram.unbanChatMember(group5, em.id) 
            await ctx.telegram.banChatMember(group6, em.id, false, true)
            await ctx.telegram.unbanChatMember(group6, em.id) 
            await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group: false, group1: false, group2: false, group3: false, group4: false, group5: false, group6: false, level: 'level_0'})
            }
            }}}
catch(e) {console.log('del users command: ' + e)}
})


// вывод анкеты в бот
bot.action ('btn_250', async (ctx) => {
  try{
  let c = bdinfo.findIndex(item => item.id == ctx.from.id)
  if (c == -1) {ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')}
  else{
    await ctx.reply(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profiledata)
  await ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
}}
catch(e){console.log('profile show error: ' + e)}
  })


bot.action ('btn_400', async (ctx) => {
  try{
  ctx.reply("Please wait while we update the data for you...")
  
  setTimeout(async () => ctx.reply("A couple more seconds..."),5000)
  patreonstart(),
  setTimeout(async () => {bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Post.findOne({id: ctx.from.id})
  if (bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email == undefined) { 
  ctx.reply("Enter your patreon email")
  emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 1})
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'})
    }
  else {ctx.reply("You are already registered!",
    (Markup.inlineKeyboard(
      [
           [Markup.button.callback(`Click to enter ${bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email}`, 'btn_405')]
      ])))
       prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'}) 
       emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0}) } },timewait)
    }
       catch(e){console.log('Enter error: ' + e)}
      }) 
      

  bot.action ('btn_789', (ctx) => {
    ctx.replyWithHTML(`Q`,
    email1[([(email1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, email1: ctx.message.text.toLowerCase()}),
    emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0}) )    
})

// free chanal enter
bot.action ('btn_201', async (ctx) => {
  try{
  await ctx.replyWithPhoto({ source: "./img/alerteng.jpg" })
  await ctx.replyWithHTML(`To enter the channel, use this link <a href="https://t.me/+Ap62Lp2sjdM3NDYy">ShibaripandaClub</a>.\n\n<b> If, when you try to log in, you see a message like in the photo above. You need to enable “Disable filtering” in the settingsin the web or computer version of the telegram application.</b>`, {
    disable_web_page_preview: true})
  await ctx.reply (`These links will help you!`,
    Markup.inlineKeyboard(
      [
         [Markup.button.callback('Web telegram', 'btn_300'), Markup.button.callback('Detailed instructions', 'btn_301')]
      ]) 
      ) 
      await ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅') 
    } 
    catch(e){console.log('free enter error: ' + e)}
})

bot.action ('btn_301', async (ctx) => {await ctx.replyWithHTML(`How to Open Blocked or Banned Telegram Channels <a href="https://www.followchain.org/open-banned-blocked-telegram-channels">Detailed instructions</a>.`)
await ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')     
})

bot.action ('btn_300', async (ctx) => {await ctx.replyWithHTML(`<a href="https://web.telegram.org/">Web telegram</a>.`)
await ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')     
})


bot.action ('btn_204', async (ctx) => {
  await ctx.replyWithHTML(`<b>To subscribe, go to <a href="https://www.patreon.com/shibaripanda">Patreon</a>.</b>\n\nPlease restart the bot to continue.\nRestart ➡️ <b>/start</b> ✅`)    
})


bot.action ('btn_401', async (ctx) => {
  try{

  let n = email1.findIndex(item => item == ctx.from.id)
  if (n != -1) {
    console.log(n)
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }
  else {  
    
    let logon1 = []
    logon1 = await Patreon.find({profiledating: 'profiledating', email: email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1})
    console.log('Unregistered email '+ logon1.length)
    let logonlength1 = logon1.length

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
      if (bazashcf3.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)){
        let link6 = await ctx.telegram.createChatInviteLink(group6,{member_limit: 1})
        await ctx.reply('Your learning class:',
        Markup.inlineKeyboard(
          [
             [Markup.button.url('Shibari course for beginners 3 📚', url = link6.invite_link)]
          ]) )
          await Post.updateOne ({id: ctx.from.id}, {level: 'level_4'})
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
}}

catch(e) {console.log('unregistered enter error:' + e)}
})


bot.action ('btn_405', async (ctx) => {
try {
  emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
  bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Post.findOne({id: ctx.from.id})
  if ((emailon.find(item => item.emailon == 0)) == undefined){ 
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }
    else{
      let logon = await Patreon.find({profiledating: 'profiledating', email:  bdinfo[([( bdinfo.findIndex(item => item.id == ctx.from.id))])].email})
      console.log('registered email '+ logon.length)
      let logonlength = logon.length
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

      if (bazashcf3.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)){
        let link6 = await ctx.telegram.createChatInviteLink(group6,{member_limit: 1})
        await ctx.reply('Your learning class:',
        Markup.inlineKeyboard(
          [
             [Markup.button.url('Shibari course for beginners 3 📚', url = link6.invite_link)]
          ]) )
          await Post.updateOne ({id: ctx.from.id}, {level: 'level_4'})
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
    }}
    catch(e) {console.log('registered enter error:' + e)}
})


bot.action ('btn_1', async (ctx) => {
  try{
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
  }}}
  catch(e) {console.log('start profile add error1 :' + e)}
})


bot.action ('btn_2', (ctx) => {
  try{
  if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }
  else {if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
  ctx.reply("What's your gender?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_2'})}
  else {
  } 
  }}
  catch(e) {console.log('start profile add error2 :' + e)}
})


bot.action ('btn_3', (ctx) => {
  try{
   if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }
  
  else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
  ctx.reply("How old are you?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_3'})}
  }}
  catch(e) {console.log('old error:' + e)}
})

bot.action ('btn_4', (ctx) => {
  try{
  if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
  }
  
  else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
  ctx.reply("What country are you from?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_4'})
  post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})}
  }}
  catch(e) {console.log('country error:' + e)}
})

  bot.action ('btn_5', (ctx) => {
    try{
    if ((end1.find(item => item.end1 == 0)) == undefined){ 
      ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
    }
    
    else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
    ctx.reply("Which city are you from?")
    prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_5'})
    post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})}
    }}
    catch(e) {console.log('city  error:' + e)}
  })

    bot.action ('btn_6', (ctx) => {
      try{
      if ((end1.find(item => item.end1 == 0)) == undefined){ 
        ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
      }
      
      else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
      ctx.reply("What interests do you have?")
      prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_6'})
      post[([(post.findIndex(item => item.id == ctx.from.id.id))])] = ({id: ctx.from.id, post: 1})}
      }}
      catch(e) {console.log('interes enter error:' + e)}
    })

      bot.action ('btn_7', (ctx) => {
        try{
        if ((end1.find(item => item.end1 == 0)) == undefined){ 
          ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
        }
        
        else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
        ctx.reply("Who would you like to find?")
        prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_7'})
        post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})}
        }}
        catch(e) {console.log('what find error:' + e)}
      })

        bot.action ('btn_8', (ctx) => {
          try{
          if ((end1.find(item => item.end1 == 0)) == undefined){ 
            ctx.replyWithHTML('Please restart the bot to continue.\n\nRestart ➡️ <b>/start</b> ✅')
          }
          
          else {if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
          ctx.reply("That tell about yourself?")
          prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_8'})
          post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})} 
          }}
          catch(e) {console.log('about yourself error:' + e)}
        })  


// сбор анкеты и подготовка к публикации
bot.action ('btn_100', (ctx) => {
  try{
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
    ({id: ctx.from.id, info3: 'Name and contact details\navailable in XL subscription $1\nAge:'+ 
    (ageman[(ageman.findIndex(item => item.id == ctx.from.id))].ageman) +'\n'+ 
    (countryman[(countryman.findIndex(item => item.id == ctx.from.id))].countryman) +' '+ 
    (cityman[(cityman.findIndex(item => item.id == ctx.from.id))].cityman) +'\nGender: '+ 
    (sexman[(sexman.findIndex(item => item.id == ctx.from.id))].sexman) +'\n'+ 'My interests: '+ 
    (interes[(interes.findIndex(item => item.id == ctx.from.id))].interes)+'\n'+ 'Who I want to find: '+ 
    (whofind[(whofind.findIndex(item => item.id == ctx.from.id))].whofind) +'\n'+ 'About me: '+ 
    (infiwords[(infiwords.findIndex(item => item.id == ctx.from.id))].infiwords) +'\n@ShibaripandaBot'})

    prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'})}
 else { 
} }}
catch(e) {console.log('forming profile error:' + e)}
}
)

bot.action ('btn_101', async (ctx) => {
  try{
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
  mes = await ctx.telegram.sendMessage(group1, (info[(info.findIndex(item => item.id == ctx.from.id))].info)
  // , Markup.inlineKeyboard(
  //   [
  //      [Markup.button.callback('Message', 'btn_150')]
  //   ])
    ), 
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
    mes = await ctx.telegram.sendMessage(group1, (info[(info.findIndex(item => item.id == ctx.from.id))].info)), 
    await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
            profile: 'ok',
              idmes: mes.message_id,
        profiledata: mes.text
            })
    await ctx.replyWithHTML("Your profile has been published!✅\n\nAfter publishing the profile, restart the bot to edit information!.\nPlease restart the bot to continue.\nRestart ➡️ <b>/start</b> ✅")
    end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 1})
    post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 0})
  }}}
  catch(e) {console.log('delete1 error:' + e)}
} 
)

bot.action ('btn_200', async (ctx) => {
  try{
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
  await ctx.telegram.deleteMessage(group1, dell2[0].idmes)
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
  }
  catch(e) {console.log('delete2 error:' + e)}
})



bot.on('new_chat_members', async(ctx) =>{
  try {
  ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id)
  console.log('new user' + ctx.from.id)
  let entergroup = []
  entergroup = await Post.find({profiledating: 'profiledating', id: ctx.from.id})
  let levelv = entergroup.findIndex(item => item.id = 'level')
  console.log('level detected ' + levelv)
  if (ctx.from.id == 599773731 || ctx.from.id ==  2123157583){console.log('Admin enter')}
  else {
  if (levelv == -1) {
     ctx.telegram.banChatMember(ctx.chat.id, ctx.from.id, false, true)
     ctx.telegram.unbanChatMember(ctx.chat.id, ctx.from.id)
     console.log('level unfineded')
     }

  else if  (entergroup[0].level == 'level_1' && (ctx.chat.id == group || ctx.chat.id ==  group1 || ctx.chat.id == group2 || ctx.chat.id == group3)) {
      let delmes = await ctx.telegram.sendMessage(ctx.chat.id,`Hello ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}!`);
      setTimeout(async () => await ctx.telegram.deleteMessage(ctx.chat.id, delmes.message_id), 15000)
             if (ctx.chat.id == group) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group: 'true'})}
      else if (ctx.chat.id == group1) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group1: 'true'})}
      else if (ctx.chat.id == group2) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group2: 'true'})}
      else if (ctx.chat.id == group3) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group3: 'true'})}   
      console.log('level_1')}

     else if (entergroup[0].level == 'level_2' && (ctx.chat.id == group || ctx.chat.id == group1 || ctx.chat.id == group2 || ctx.chat.id == group3 || ctx.chat.id == group4)) {
     let delmes1 = await ctx.telegram.sendMessage(ctx.chat.id, `Hello ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}!`);
     setTimeout(async () => await ctx.telegram.deleteMessage(ctx.chat.id, delmes1.message_id), 15000)
            if (ctx.chat.id == group) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group: 'true'})}
     else if (ctx.chat.id == group1) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group1: 'true'})}
     else if (ctx.chat.id == group2) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group2: 'true'})}
     else if (ctx.chat.id == group3) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group3: 'true'})}   
     else if (ctx.chat.id == group4) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group4: 'true'})} 
     console.log('level_2')}

     else if (entergroup[0].level == 'level_3' && (ctx.chat.id == group || ctx.chat.id == group1 || ctx.chat.id == group2 || ctx.chat.id == group3 || ctx.chat.id == group5)) {
     let delmes2 = await ctx.telegram.sendMessage(ctx.chat.id, `Hello ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}!`);
     setTimeout(async () => await ctx.telegram.deleteMessage(ctx.chat.id, delmes2.message_id), 15000)
             if (ctx.chat.id == group) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group: 'true'})}
      else if (ctx.chat.id == group1) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group1: 'true'})}
      else if (ctx.chat.id == group2) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group2: 'true'})}
      else if (ctx.chat.id == group3) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group3: 'true'})}   
      else if (ctx.chat.id == group5) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group5: 'true'})}
     console.log('level_3')}

     else if (entergroup[0].level == 'level_4' && (ctx.chat.id == group || ctx.chat.id == group1 || ctx.chat.id == group2 || ctx.chat.id == group3 || ctx.chat.id == group6)) {
       let delmes2 = await ctx.telegram.sendMessage(ctx.chat.id, `Hello ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}!`);
       setTimeout(async () => await ctx.telegram.deleteMessage(ctx.chat.id, delmes2.message_id), 15000)
               if (ctx.chat.id == group) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group: 'true'})}
        else if (ctx.chat.id == group1) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group1: 'true'})}
        else if (ctx.chat.id == group2) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group2: 'true'})}
        else if (ctx.chat.id == group3) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group3: 'true'})}   
        else if (ctx.chat.id == group6) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group6: 'true'})}
       console.log('level_4')}

  else {
    ctx.telegram.banChatMember(ctx.chat.id, ctx.from.id, false, true)
    ctx.telegram.unbanChatMember(ctx.chat.id, ctx.from.id)
    console.log('level false delete: '+ ctx.from.id)

}

            // let memberlevel = []
            // memberlevel = await Post.find({profiledating: 'profiledating', group: true}, {email: 1, id: 1, _id: 0})
            // console.log("Длинна массива тру участников "+ memberlevel.length)
            // console.log(memberlevel)
            // for (let em of memberlevel) {
            // if (bazaall.includes(em.email)) { 
            // console.log('ok: '+ em.id)}
            // else {
            // if (memberlevel.id == 599773731) {
            // console.log('admin')}
            // else {
            // console.log('delete: '+ em.id)
            // await ctx.telegram.banChatMember(group, em.id, false, true)
            // await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group: false, level: 'level_0'})
            // ctx.telegram.unbanChatMember}
            // }}

            // let memberlevel = []
            // memberlevel = await Post.find({profiledating: 'profiledating', level: ['level_1', 'level_2', 'level_3', 'level_4']}, {email: 1, id: 1, _id: 0})
            // console.log("count level users: "+ memberlevel.length)
            // console.log(memberlevel)
            // for (let em of memberlevel) {
            // if (bazaall.includes(em.email)) { 

            //   if (bazashcf1.includes(em.email)){
            //     await ctx.telegram.banChatMember(group5, em.id, false, true)
            //     await ctx.telegram.banChatMember(group6, em.id, false, true)
            //     await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group5: false, group6: false, level: 'level_2'})
          
            // console.log('ok1: '+ em.id)}

            //   else if (bazashcf2.includes(em.email)) {
            //     await ctx.telegram.banChatMember(group4, em.id, false, true) 
            //     await ctx.telegram.banChatMember(group6, em.id, false, true) 
            //     await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group4: false, group6: false, level: 'level_3'})
               
            //     console.log('ok2: '+ em.id)}

            //     else if (bazashcf3.includes(em.email)) {
            //       await ctx.telegram.banChatMember(group4, em.id, false, true) 
            //       await ctx.telegram.banChatMember(group5, em.id, false, true) 
            //       await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group4: false, group5: false, level: 'level_4'})
                
            //       console.log('ok3: '+ em.id)}

            //       else{
            //         await ctx.telegram.banChatMember(group4, em.id, false, true) 
            //         await ctx.telegram.banChatMember(group5, em.id, false, true)
            //         await ctx.telegram.banChatMember(group6, em.id, false, true) 
            //         await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group4: false,  group5: false, group6: false, level: 'level_1'})
            //         console.log('ok4: '+ em.id)
            //       }
  
            //   }


            // else {
            // if (memberlevel.id == 599773731) {
            // console.log('admin')}
            // else {
            // console.log('delete: '+ em.id)
            // await ctx.telegram.banChatMember(group, em.id, false, true)
            
            // await ctx.telegram.banChatMember(group1, em.id, false, true)
            
            // await ctx.telegram.banChatMember(group2, em.id, false, true)
            
            // await ctx.telegram.banChatMember(group3, em.id, false, true)
            
            // await ctx.telegram.banChatMember(group4, em.id, false, true)
            
            // await ctx.telegram.banChatMember(group5, em.id, false, true)
            
            // await ctx.telegram.banChatMember(group6, em.id, false, true)
            
            // await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group: false, group1: false, group2: false, group3: false, group4: false, group5: false, group6: false, level: 'level_0'})
            // }
            // }}
}}
catch(e) {console.log('new chat member error: ' + e)}
})



bot.on('left_chat_member', async(ctx) =>{
  try {
  ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id)
  
      if  (ctx.chat.id == group || ctx.chat.id ==  group1 || ctx.chat.id == group2 || ctx.chat.id == group3 || ctx.chat.id == group4 || ctx.chat.id == group5 || ctx.chat.id == group6) {

            if (ctx.chat.id == group) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group: 'false'})
      console.log('false 0')}
      else if (ctx.chat.id == group1) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group1: 'false'})
      console.log('false 1')}
      else if (ctx.chat.id == group2) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group2: 'false'})
      console.log('false 2')}
      else if (ctx.chat.id == group3) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group3: 'false'})
      console.log('false 3')}
      else if (ctx.chat.id == group4) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group4: 'false'})
      console.log('false 4')}
      else if (ctx.chat.id == group5) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group5: 'false'})
      console.log('false 5')}
      else if (ctx.chat.id == group6) {await Post.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group6: 'false'})
      console.log('false 6')}   
      }
  else {
    console.log('not delete users')
}}
catch(e) {console.log('left chat member error: ' + e)}
})

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
  try{
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
   }}
   catch(e) {console.log('steps : ' + e)}
  })
  



 bot.launch()
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))