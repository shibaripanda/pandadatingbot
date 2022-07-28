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
const { Console } = require('console')
const patreonAPIClient = patreon(pt)

const group = -1001451309256 //xl
const group1 = -1001608755158 //dating
const group2 = -1001584007834 //live
const group3 = -1001558239696 //chat
const group4 = -1001771841588 //course1 
const group5 = -1001756174074 //course2 
const chanel = -1001316209146 //free 
const group6 = -1001674072830 //course3
const group7 = -1001535559239 //shop

const intervalpublish = 84600 // время через которое можно добавить следующий листинг
const timewait = 9000 // время загрузки базы при входе, кнопка логин
const timewaitstart = 0
const timewaitfull = 3600000 // время обновления базы в автоматическом режиме
const pricenow = 1 // цена подписки
const mainchanelbtnname = `ShibaripandaClub Free` //главный канал
const paymainchanel = `ShibaripandaClub XL 🐼`// главный платный канал
const group1btn = `ShibaripandaDating 🐼`
const group2btn = `ShibaripandaLive 🐼`
const group3btn = `ShibaripandaChat 🐼`
const btnAddListing = `Add listing to Panda shop`
const yourlist = `Your listings`
const nameoftype = `Your listing`
const allavaiablecount = `/5`
const btnaddprofile = `Add dating profile ✅`
const btnsubscribe = `Subscribe $${pricenow}💵`
const btnlogin = `Login`
const btnlogintoadlist = `Login to add listing`
const btndelprofile = `Delete or edit my dating profile ❌`
const viewprofile = `View my profile`
const loadingmes1 = `Please wait...\nPanda update the data for you...)`
const loadingmes2 = `a little bit more...)`
const logginalreadi = `You are already logged in!`
const editemailbtn = `Edit email`
const enterpatreonemail = `Enter your patreon email`
const listgoodies = `Welcome!\nGoodies available for you, enjoy :`
const restartbtn = `Restart ➡️ <b>/start</b> ✅ to continue` // обработка ошибок и конец действий
const dellhelllomes = 10000 // время удаления приветственного сообщения при входе в платные группы
const nousername = `You don't have a username set, people can't find you.\nSet the username in the telegram settings. After, restart /start the bot and try again.`
const hellomesXL = `<b>ShibaripandaClub XL</b>\nExclusive content, dating\ncommunity, chat, trainings, shop admin\n/help       /start`
const hello1mes = `<b>Hi, `
const hello2mes = ` </b>!\n<b>Welcome to ShibaripandaClub!</b>`
const errorcatch = `❗️ Error!
❗️ Something went wrong
❗️ Some information will be lost
Possible reasons:\n- a problem on the server
- you used buttons from history
- a problem with the Internet connection
✅ restart the bot /start`
const meserrorenter = `You cannot login
- Perhaps you are not subscribed to the paid section
- There may be a problem with the last payment
- You may have entered your email incorrectly
Check if everything is in order by subscription and payment
Restart ➡️ /start ✅ to continue`
const meserrorenter2 = `The email is already in use.\nYou cannot log in twice with the same subscription`
const helpmain = `<b>BOT</b>
- Using the bot is only allowed if you are 18 or older, or older if the law in your country says so.
- If you have not worked with the bot for some time, then do not use the old buttons, restart the bot.
- When using a bot, it is best to start with a restart each time.
- Use the buttons offered by the bot.
- Do not use the buttons above, this will result in an error.
- If something went wrong, then restart the bot.

<b>SHOP</b>
  - You will need 4 photos to publish the listing.
  - Upload the photo as a photo, not as a file (there should be a checkmark to compress the image).
  - You can add a new listing once every 24 or 48 or 72 hours.
  - In Telegram, listings are published immediately, on Instagram within a few days.
  - Please do not post indecent photos, Panda reserves the right to remove photos that may be inappropriate.
  - If you use photos with prohibited content (inappropriate erotica, violence, drugs, etc.) you will be banned permanently without warning.
  - If you have doubts about your photo and want to avoid glare, send the photo for preliminary moderation @ShibaripandaClubBot. 
  - You can add up to 5 listings in total. You can delete listings and create new ones or update old ones.
  - You will be able to delete listings even if the subscription is not renewed.
  - After the listing is published, you can delete it, but you can make a new one only after a while.
  - It is forbidden to sell prohibited items and services!
  - Listings will be published in Shibaripandaclub and Panda shop.
  - Listings can be posted on Panda's Instagram as a bonus.
  - Listings may be removed if you do not renew your subscription.

<b>DATING PROFILE</b>
  - You can add and remove a profile to find friends.
  - You can add a profile for free.
  - You can delete your profile at any time free of charge.
  - Profiles with open information can be viewed with a paid subscription of $${pricenow}.
  - The threshold of $${pricenow} allows you to cut off inadequate people and helps the panda a little).
  - Please do not post indecent photos, Panda reserves the right to remove photos that may be inappropriate.
  - For security reasons, please do not provide any personal information.
  - You must be 18 years of age to participate, or another age that allows you to participate in your country.

<b>SUBSCRIBE</b>
  - To subscribe, go to <a href="https://www.patreon.com/shibaripanda">Patreon</a>.
  - After subscribing use your patreon email to login.
  - One subscription can be linked to only one telegram account.
  - Transferring a subscription after logging in to another telegram account is not possible, please contact us.
  - Subscription will open new and old profiles for you.
  - Subscription costs only $${pricenow} now.
  - The subscription price increases once a month by $1, but this does not change the subscription of those who are already subscribed.

Please restart the bot to continue.
Restart ➡️ <b>/start</b> ✅

🐼 If you need help @ShibaripandaClubBot`

mongoose
.connect(db, {useNewUrlParser: true})
.then((res)=> console.log('connect to DB'))
.catch((error) => console.log(error)) 

let picshop = []
let textshop = []
let description = []
let delivery = []
let price = []
let allphotos = []
let pathjpg4 = []
let pathjpg3 = []
let pathjpg2 = []
let pathjpg1 = []
let bdinfo = []
let info = []
let info3 = []
let prev_action = []
let prev_shop_action = []
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
           console.log('Count level_1: '+ bazaall.length)

           let top2 = []
           top2 = await Patreon.find({reward_title:[
            "Live shibari lessons #1",
            "Live shibari lessons #2",
            "Shibari course for beginners LSHL#3"], declined_since: null}, {patron_email: 1, _id: 0})
           bazashcf1 = top2.map(item => item.patron_email)
           console.log('Count level_2: '+ bazashcf1.length) 

           let top3 = []
           top3 = await Patreon.find({reward_title:[
            "Shibari course for beginners 2022.2", 
            "Shibari course for beginners 2022.2",
            "Shibari course for beginners 2022.2",
            "Shibari course for beginners2022.2"], declined_since: null}, {patron_email: 1, _id: 0})
           bazashcf2 = top3.map(item => item.patron_email)
           console.log('Count level_3: '+ bazashcf2.length)   
         
           let top4 = []
           top4 = await Patreon.find({reward_title:[
            "Shibari course for beginners 3"], declined_since: null}, {patron_email: 1, _id: 0})
           bazashcf3 = top4.map(item => item.patron_email)
           console.log('Count level_4: '+ bazashcf3.length)   
  })
  .catch(err => {
      console.log("caught");
      console.error("error!", err);
      response.end(err);
})}
  patreonstart()
  setInterval(patreonstart, timewaitfull)
// старт
bot.start(async (ctx) => {
  try {
  setTimeout(async () => {
  await Patreon.updateOne ({id: ctx.from.id}, {profiledating: 'profiledating', username: ctx.from.username, chat: 'off', chatstatus: 'free', chatclient: 'no' 
  //  ,shop: 0
  //  ,idmesshoppic1: false, idmesshoppic2: false, idmesshoppic3: false, idmesshoppic4: false, idmesshoppic5: false
  }, {upsert: true})
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
  let g1 = prev_shop_action.findIndex(item => item.id == ctx.from.id)
  if (g1 != -1) {prev_shop_action.splice(prev_shop_action.findIndex(item => item.id == ctx.from.id),1)};
  prev_shop_action.push({id: ctx.from.id, prev_shop_action: 'step_0'})
  let h = del1.findIndex(item => item.id == ctx.from.id)
  if (h != -1) {del1.splice(del1.findIndex(item => item.id == ctx.from.id),1)};
  del1.push({id: ctx.from.id})
  let put1 = pathjpg1.findIndex(item => item.id == ctx.from.id)
  if (put1 != -1) {pathjpg1.splice(pathjpg1.findIndex(item => item.id == ctx.from.id),1)};
  pathjpg1.push({id: ctx.from.id})
  let put2 = pathjpg2.findIndex(item => item.id == ctx.from.id)
  if (put2 != -1) {pathjpg2.splice(pathjpg2.findIndex(item => item.id == ctx.from.id),1)};
  pathjpg2.push({id: ctx.from.id})
  let put3 = pathjpg3.findIndex(item => item.id == ctx.from.id)
  if (put3 != -1) {pathjpg3.splice(pathjpg3.findIndex(item => item.id == ctx.from.id),1)};
  pathjpg3.push({id: ctx.from.id})
  let put4 = pathjpg1.findIndex(item => item.id == ctx.from.id)
  if (put4 != -1) {pathjpg4.splice(pathjpg4.findIndex(item => item.id == ctx.from.id),1)};
  pathjpg4.push({id: ctx.from.id})
  let allph = allphotos.findIndex(item => item.id == ctx.from.id)
  if (allph != -1) {allphotos.splice(allphotos.findIndex(item => item.id == ctx.from.id),1)};
  allphotos.push({id: ctx.from.id})
  let des = description.findIndex(item => item.id == ctx.from.id)
  if (des != -1) {description.splice(description.findIndex(item => item.id == ctx.from.id),1)};
  description.push({id: ctx.from.id})
  let deliv = delivery.findIndex(item => item.id == ctx.from.id)
  if (deliv != -1) {delivery.splice(delivery.findIndex(item => item.id == ctx.from.id),1)};
  delivery.push({id: ctx.from.id})
  let pri = price.findIndex(item => item.id == ctx.from.id)
  if (pri != -1) {price.splice(price.findIndex(item => item.id == ctx.from.id),1)};
  price.push({id: ctx.from.id})
  let pic = picshop.findIndex(item => item.id == ctx.from.id)
  if (pic != -1) {picshop.splice(picshop.findIndex(item => item.id == ctx.from.id),1)};
  picshop.push({id: ctx.from.id})
  let tex = textshop.findIndex(item => item.id == ctx.from.id)
  if (tex != -1) {textshop.splice(textshop.findIndex(item => item.id == ctx.from.id),1)};
  textshop.push({id: ctx.from.id})

console.log('Start: ' + ctx.from.username, ctx.from.id, nameman.length)

bdinfo = [{id: ctx.from.id}]
bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Patreon.findOne({id: ctx.from.id})

 let btnenterunreg = 'no'
 let shop1 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop
 if (shop1 == -1 || shop1 == undefined){btnenterunreg = `${yourlist} 0${allavaiablecount}`}
 else{btnenterunreg = `${yourlist} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop}${allavaiablecount}`}

  if ((bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profile) == 'deleted') {
  await ctx.replyWithHTML(hello1mes + `${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}` + hello2mes,
  Markup.inlineKeyboard(
[
     [Markup.button.callback(btnaddprofile, 'btn_1')],
     [Markup.button.callback(btnenterunreg, 'list_listing_unreg')],
     [Markup.button.callback(mainchanelbtnname, 'btn_201')]
]) 
),
await ctx.replyWithHTML(hellomesXL,
Markup.inlineKeyboard(
[
   [Markup.button.callback(btnlogin, 'btn_400')],
   [Markup.button.callback(btnsubscribe, 'btn_204')]
   
]))}

else if ((bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profile) == 'ok') {
  await ctx.replyWithHTML(hello1mes + `${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}` + hello2mes,
  Markup.inlineKeyboard(
[
     [Markup.button.callback(viewprofile, 'btn_250')],
     [Markup.button.callback(btndelprofile, 'btn_200')],
     [Markup.button.callback(btnenterunreg, 'list_listing_unreg')],
     [Markup.button.callback(mainchanelbtnname, 'btn_201')]    
]) 
),
await ctx.replyWithHTML(hellomesXL,
Markup.inlineKeyboard(
[
   [Markup.button.callback(btnlogin, 'btn_400')],
   [Markup.button.callback(btnsubscribe, 'btn_204')]
]))}

else{
  await ctx.replyWithHTML(hello1mes + `${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}` + hello2mes,
  Markup.inlineKeyboard(
[
     [Markup.button.callback(btnaddprofile, 'btn_1')],
     [Markup.button.callback(btnenterunreg, 'list_listing_unreg')],
     [Markup.button.callback(mainchanelbtnname, 'btn_201')]
]) 
),
await ctx.replyWithHTML(hellomesXL,
Markup.inlineKeyboard(
[
   [Markup.button.callback(btnlogin, 'btn_400')],
   [Markup.button.callback(btnsubscribe, 'btn_204')]
   
]))}},timewaitstart)}
catch(e){console.log('Start error :' + e)
await ctx.replyWithHTML(errorcatch)
}
})
bot.help( async (ctx) => {
  try {
    await ctx.replyWithHTML(helpmain)} 
    catch(e) {console.log('del users command: ' + e)
    await ctx.replyWithHTML(errorcatch)}
})
bot.command('del', async (ctx) => {
  try{
  let memberlevel = []
            memberlevel = await Patreon.find({profiledating: 'profiledating', level: ['level_1', 'level_2', 'level_3', 'level_4']}, {email: 1, id: 1, _id: 0})      
            for (let em of memberlevel) {
            if (bazaall.includes(em.email)) { 

              if (bazashcf1.includes(em.email)){
                await ctx.telegram.banChatMember(group5, em.id, false, true)
                await ctx.telegram.banChatMember(group6, em.id, false, true)
                await ctx.telegram.unbanChatMember(group5, em.id)
                await ctx.telegram.unbanChatMember(group6, em.id)
                await Patreon.updateOne({profiledating: 'profiledating', id: em.id}, {group5: false, group6: false, level: 'level_2'})
          
            }

              else if (bazashcf2.includes(em.email)) {
                await ctx.telegram.banChatMember(group4, em.id, false, true) 
                await ctx.telegram.banChatMember(group6, em.id, false, true)
                await ctx.telegram.unbanChatMember(group4, em.id)
                await ctx.telegram.unbanChatMember(group6, em.id) 
                await Patreon.updateOne({profiledating: 'profiledating', id: em.id}, {group4: false, group6: false, level: 'level_3'})
               
                }

                else if (bazashcf3.includes(em.email)) {
                  await ctx.telegram.banChatMember(group4, em.id, false, true) 
                  await ctx.telegram.banChatMember(group5, em.id, false, true)
                  await ctx.telegram.unbanChatMember(group4, em.id)
                  await ctx.telegram.unbanChatMember(group5, em.id) 
                  await Patreon.updateOne({profiledating: 'profiledating', id: em.id}, {group4: false, group5: false, level: 'level_4'})
                
                  }

                  else{
                    await ctx.telegram.banChatMember(group4, em.id, false, true) 
                    await ctx.telegram.banChatMember(group5, em.id, false, true)
                    await ctx.telegram.banChatMember(group6, em.id, false, true)
                    await ctx.telegram.unbanChatMember(group4, em.id)
                    await ctx.telegram.unbanChatMember(group5, em.id)
                    await ctx.telegram.unbanChatMember(group6, em.id) 
                    await Patreon.updateOne({profiledating: 'profiledating', id: em.id}, {group4: false,  group5: false, group6: false, level: 'level_1'})
                  
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
            await Patreon.updateOne({profiledating: 'profiledating', id: em.id}, {group: false, group1: false, group2: false, group3: false, group4: false, group5: false, group6: false, level: 'level_0'})
            }
            }}}
catch(e) {console.log('del users command: ' + e)
await ctx.replyWithHTML(errorcatch)}
})
// вывод анкеты в бот
bot.action ('btn_250', async (ctx) => {
  try{
  let c = bdinfo.findIndex(item => item.id == ctx.from.id)
  if (c == -1) {ctx.replyWithHTML(restartbtn)}
  else{
    await ctx.reply(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profiledata,
    Markup.inlineKeyboard(
  [
       [Markup.button.callback(btndelprofile, 'btn_200')]   
  ]) )
  await ctx.replyWithHTML(restartbtn)
}}
catch(e){console.log('profile show error: ' + e)
await ctx.replyWithHTML(errorcatch)}
})
bot.action ('btn_400', async (ctx) => {
  try{
  ctx.reply(loadingmes1)
  
  setTimeout(async () => ctx.reply(loadingmes2),5000)
  patreonstart(),
  setTimeout(async () => {bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Patreon.findOne({id: ctx.from.id})
  if (bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email == undefined) { 
  ctx.reply(enterpatreonemail)
  emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 1})
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'})
  prev_shop_action[([(prev_shop_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_shop_action: 'step_0'})
    }
  else {ctx.reply(logginalreadi,
    (Markup.inlineKeyboard(
      [
           [Markup.button.callback(`Click to enter ${bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email}`, 'btn_405')]
      ])))
       prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'})
       prev_shop_action[([(prev_shop_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_shop_action: 'step_0'}) 
       emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0}) } },timewait)
    }
       catch(e){console.log('Enter error: ' + e)
       await ctx.replyWithHTML(errorcatch)}
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
      await ctx.replyWithHTML(restartbtn) 
    } 
    catch(e){console.log('free enter error: ' + e)
    await ctx.replyWithHTML(errorcatch)}
})
bot.action ('btn_301', async (ctx) => {
  try{
  await ctx.replyWithHTML(`How to Open Blocked or Banned Telegram Channels <a href="https://www.followchain.org/open-banned-blocked-telegram-channels">Detailed instructions</a>.`)
await ctx.replyWithHTML(restartbtn)}
catch(e){console.log('free enter error: ' + e)
await ctx.replyWithHTML(errorcatch)}
})
bot.action ('btn_300', async (ctx) => {
  try{await ctx.replyWithHTML(`<a href="https://web.telegram.org/">Web telegram</a>.`)
await ctx.replyWithHTML(restartbtn)}
catch(e){console.log('free enter error: ' + e)
await ctx.replyWithHTML(errorcatch)}     
})
bot.action ('btn_204', async (ctx) => {
  try{
  await ctx.replyWithHTML(`<b>To subscribe, go to <a href="https://www.patreon.com/shibaripanda">Patreon</a>.</b>\n\n${restartbtn}`)}  
  catch(e){console.log('free enter error: ' + e)
  await ctx.replyWithHTML(errorcatch)}  
})
bot.action ('btn_401', async (ctx) => {
  try{

  let n = email1.findIndex(item => item == ctx.from.id)
  if (n != -1) {
    ctx.replyWithHTML(restartbtn)
  }
  else {  
    
    let logon1 = []
    logon1 = await Patreon.find({profiledating: 'profiledating', email: email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1})
    console.log('ENTER unregistered email '+ logon1.length)
    let logonlength1 = logon1.length

    if(logonlength1 < 1){

  
  if ((emailon.find(item => item.emailon == 0)) == undefined){ 
    ctx.replyWithHTML(restartbtn)
  }
    else {
        if (bazaall.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)) { 
    
      if (bazaall.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)) {

        bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

    
        let link = await ctx.telegram.createChatInviteLink(group,{member_limit: 1})
        let link1 = await ctx.telegram.createChatInviteLink(group1,{member_limit: 1})
        let link2 = await ctx.telegram.createChatInviteLink(group2,{member_limit: 1})
        let link3 = await ctx.telegram.createChatInviteLink(group3,{member_limit: 1})
        await ctx.replyWithHTML(listgoodies,
        Markup.inlineKeyboard(
          [
             [Markup.button.url(paymainchanel, url = link.invite_link)],
             [Markup.button.url(group1btn, url = link1.invite_link)],
             [Markup.button.url(group2btn, url = link2.invite_link)],
             [Markup.button.url(group3btn, url = link3.invite_link)],
             [Markup.button.callback(btnAddListing, 'btn_startPhotoAdd')],
             [Markup.button.callback(`${yourlist} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop}${allavaiablecount}`, 'list_listing')]
          ]) )
          await Patreon.updateOne ({id: ctx.from.id}, {email: email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1, level: 'level_1'})}

      if (bazashcf1.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)){
        let link4 = await ctx.telegram.createChatInviteLink(group4,{member_limit: 1})
        await ctx.reply('Your learning class:',
  Markup.inlineKeyboard(
    [
       [Markup.button.url('Shibari course for beginners 2022', url = link4.invite_link)]
    ]))
    await Patreon.updateOne ({id: ctx.from.id}, {level: 'level_2'})
      }    
    if (bazashcf2.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)){
      let link5 = await ctx.telegram.createChatInviteLink(group5,{member_limit: 1})
      await ctx.reply('Your learning class:',
      Markup.inlineKeyboard(
        [
           [Markup.button.url('Shibari course for beginners 2022.2 📚', url = link5.invite_link)]
        ]) )
        await Patreon.updateOne ({id: ctx.from.id}, {level: 'level_3'})
      } 
      if (bazashcf3.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)){
        let link6 = await ctx.telegram.createChatInviteLink(group6,{member_limit: 1})
        await ctx.reply('Your learning class:',
        Markup.inlineKeyboard(
          [
             [Markup.button.url('Shibari course for beginners 3 📚', url = link6.invite_link)]
          ]) )
          await Patreon.updateOne ({id: ctx.from.id}, {level: 'level_4'})
        } 


  }
    if (!bazaall.includes(email1[([(email1.findIndex(item => item.id == ctx.from.id))])].email1)) {
  ctx.reply(meserrorenter,
  Markup.inlineKeyboard(
    [ 
      [Markup.button.callback(editemailbtn, 'btn_400')],
      [Markup.button.callback(btnsubscribe, 'btn_204')]
    ]))
   
  } 
    }
  
  }

    else {
      await ctx.reply(meserrorenter2,
      Markup.inlineKeyboard(
        [
          [Markup.button.callback(editemailbtn, 'btn_400')],
          [Markup.button.callback(btnsubscribe, 'btn_204')]
        ]))
        await ctx.replyWithHTML(restartbtn)
    }
}}

catch(e) {console.log('unregistered enter error:' + e)
await ctx.replyWithHTML(errorcatch)}
})
bot.action ('btn_405', async (ctx) => {
try {
  emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
  bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Patreon.findOne({id: ctx.from.id})
  if ((emailon.find(item => item.emailon == 0)) == undefined){ 
    ctx.replyWithHTML(restartbtn)
  }
    else{
      let logon = await Patreon.find({profiledating: 'profiledating', email:  bdinfo[([( bdinfo.findIndex(item => item.id == ctx.from.id))])].email})
      console.log('ENTER registered email '+ logon.length)
      let logonlength = logon.length
      if (logonlength == 1) {
        if (bazaall.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email))
    
    { 
         if (bazaall.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)) {
          bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})
  let link = await ctx.telegram.createChatInviteLink(group,{member_limit: 1})
  let link1 = await ctx.telegram.createChatInviteLink(group1,{member_limit: 1})
  let link2 = await ctx.telegram.createChatInviteLink(group2,{member_limit: 1})
  let link3 = await ctx.telegram.createChatInviteLink(group3,{member_limit: 1})
  await ctx.replyWithHTML(listgoodies,
  Markup.inlineKeyboard(
    [
       [Markup.button.url(paymainchanel, url = link.invite_link)],
       [Markup.button.url(group1btn, url = link1.invite_link)],
       [Markup.button.url(group2btn, url = link2.invite_link)],
       [Markup.button.url(group3btn, url = link3.invite_link)],
       [Markup.button.callback(btnAddListing, 'btn_startPhotoAdd')],
       [Markup.button.callback(`${yourlist} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop}${allavaiablecount}`, 'list_listing')]
    ]) )
    await Patreon.updateOne ({id: ctx.from.id}, {level: 'level_1'})
  }

      if (bazashcf1.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)){
        let link4 = await ctx.telegram.createChatInviteLink(group4,{member_limit: 1})
        await ctx.reply('Your learning class:',
  Markup.inlineKeyboard(
    [
       [Markup.button.url('Shibari course for beginners 2022 📚', url = link4.invite_link)]
    ]))
    await Patreon.updateOne ({id: ctx.from.id}, {level: 'level_2'})
      }  

    if (bazashcf2.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)){
      let link5 = await ctx.telegram.createChatInviteLink(group5,{member_limit: 1})
      await ctx.reply('Your learning class:',
      Markup.inlineKeyboard(
        [
           [Markup.button.url('Shibari course for beginners 2022.2 📚', url = link5.invite_link)]
        ]) )
        await Patreon.updateOne ({id: ctx.from.id}, {level: 'level_3'})
      } 

      if (bazashcf3.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)){
        let link6 = await ctx.telegram.createChatInviteLink(group6,{member_limit: 1})
        await ctx.reply('Your learning class:',
        Markup.inlineKeyboard(
          [
             [Markup.button.url('Shibari course for beginners 3 📚', url = link6.invite_link)]
          ]) )
          await Patreon.updateOne ({id: ctx.from.id}, {level: 'level_4'})
        } 


  }
    if (!bazaall.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)) {
  await ctx.reply(meserrorenter,
  Markup.inlineKeyboard(
    [ 
      [Markup.button.callback(btnsubscribe, 'btn_204')]
    ]))
   await ctx.replyWithHTML(restartbtn)
  
  } 
    } 
    
    else {
      await ctx.reply(meserrorenter2,
  Markup.inlineKeyboard(
    [
      [Markup.button.callback(editemailbtn, 'btn_400')],
      [Markup.button.callback(btnsubscribe, 'btn_204')]
    ]))
    await ctx.replyWithHTML(restartbtn)
    }
    }}
    catch(e) {console.log('registered enter error:' + e)
    await ctx.replyWithHTML(errorcatch)}
})
bot.action ('btn_1', async (ctx) => {
  try{
  let m = username1.findIndex(item => item.id == ctx.from.id)
  if (m != -1) {username1.splice(username1.findIndex(item => item.id == ctx.from.id),1)};
  username1.push({id: ctx.from.id, username1: ctx.from.username})

  emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
  end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 0})

  if (username1[([(username1.findIndex(item => item.id == ctx.from.id))])].username1 == undefined){
    await ctx.reply(nousername)
  }
else{
  if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0"){ 
    await ctx.reply("What is your name?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_1'})
  }
 else {
  }}}
  catch(e) {console.log('start profile add error1 :' + e)
  await ctx.replyWithHTML(errorcatch)}
})
bot.action ('btn_2', async (ctx) => {
  try{
  if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.replyWithHTML(restartbtn)
  }
  else {if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
  ctx.reply("What's your gender?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_2'})}
  else {
  } 
  }}
  catch(e) {console.log('start profile add error2 :' + e)
  await ctx.replyWithHTML(errorcatch)}
})
bot.action ('btn_3', async (ctx) => {
  try{
   if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.replyWithHTML(restartbtn)
  }
  
  else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
  ctx.reply("How old are you?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_3'})}
  }}
  catch(e) {console.log('old error:' + e)
  await ctx.replyWithHTML(errorcatch)}
})
bot.action ('btn_4', (ctx) => {
  try{
  if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.replyWithHTML(restartbtn)
  }
  
  else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
  ctx.reply("What country are you from?")
  prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_4'})
  post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})}
  }}
  catch(e) {console.log('country error:' + e)}
})
bot.action ('btn_5', async (ctx) => {
    try{
    if ((end1.find(item => item.end1 == 0)) == undefined){ 
      ctx.replyWithHTML(restartbtn)
    }
    
    else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
    ctx.reply("Which city are you from?")
    prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_5'})
    post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})}
    }}
    catch(e) {console.log('city  error:' + e)
    await ctx.replyWithHTML(errorcatch)}
})
bot.action ('btn_6', async (ctx) => {
      try{
      if ((end1.find(item => item.end1 == 0)) == undefined){ 
        ctx.replyWithHTML(restartbtn)
      }
      
      else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
      ctx.reply("What interests do you have?")
      prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_6'})
      post[([(post.findIndex(item => item.id == ctx.from.id.id))])] = ({id: ctx.from.id, post: 1})}
      }}
      catch(e) {console.log('interes enter error:' + e)
      await ctx.replyWithHTML(errorcatch)}
})
bot.action ('btn_7', async (ctx) => {
        try{
        if ((end1.find(item => item.end1 == 0)) == undefined){ 
          ctx.replyWithHTML(restartbtn)
        }
        
        else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
        ctx.reply("Who would you like to find?")
        prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_7'})
        post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})}
        }}
        catch(e) {console.log('what find error:' + e)
        await ctx.replyWithHTML(errorcatch)}
})
bot.action ('btn_8', async (ctx) => {
          try{
          if ((end1.find(item => item.end1 == 0)) == undefined){ 
            ctx.replyWithHTML(restartbtn)
          }
          
          else {if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0") {
          ctx.reply("That tell about yourself?")
          prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_8'})
          post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 1})} 
          }}
          catch(e) {console.log('about yourself error:' + e)
          await ctx.replyWithHTML(errorcatch)}
})  
// сбор анкеты и подготовка к публикации
bot.action ('btn_100', async (ctx) => {
  try{
  if ((end1.find(item => item.end1 == 0)) == undefined){ 
    ctx.replyWithHTML(restartbtn)
  }
  else { if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0"){
  ctx.reply ((nameman[(nameman.findIndex(item => item.id == ctx.from.id))].nameman) +' '+ 
  (ageman[(ageman.findIndex(item => item.id == ctx.from.id))].ageman) +'\n'+ 
  (countryman[(countryman.findIndex(item => item.id == ctx.from.id))].countryman) +' '+ 
  (cityman[(cityman.findIndex(item => item.id == ctx.from.id))].cityman) +'\nGender: '+ 
  (sexman[(sexman.findIndex(item => item.id == ctx.from.id))].sexman) +'\n'+ 'My interests: \n'+ 
  (interes[(interes.findIndex(item => item.id == ctx.from.id))].interes)+'\n'+ 'Who I want to find: \n'+ 
  (whofind[(whofind.findIndex(item => item.id == ctx.from.id))].whofind) +'\n'+ 'About me: \n'+ 
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
    (sexman[(sexman.findIndex(item => item.id == ctx.from.id))].sexman) +'\n'+ 'My interests: \n'+ 
    (interes[(interes.findIndex(item => item.id == ctx.from.id))].interes)+'\n'+ 'Who I want to find: \n'+ 
    (whofind[(whofind.findIndex(item => item.id == ctx.from.id))].whofind) +'\n'+ 'About me: \n'+ 
    (infiwords[(infiwords.findIndex(item => item.id == ctx.from.id))].infiwords) +'\n@'+ 
    (username1[(username1.findIndex(item => item.id == ctx.from.id))].username1)})

    info3[([(info3.findIndex(item => item.id == ctx.from.id))])] =
    ({id: ctx.from.id, info3: `Contact details\navailable in subscription $${pricenow}\nAge:`+ 
    (ageman[(ageman.findIndex(item => item.id == ctx.from.id))].ageman) +'\n'+ 
    (countryman[(countryman.findIndex(item => item.id == ctx.from.id))].countryman) +' '+ 
    (cityman[(cityman.findIndex(item => item.id == ctx.from.id))].cityman) +'\nGender: '+ 
    (sexman[(sexman.findIndex(item => item.id == ctx.from.id))].sexman) +'\n'+ 'My interests: \n'+ 
    (interes[(interes.findIndex(item => item.id == ctx.from.id))].interes)+'\n'+ 'Who I want to find: \n'+ 
    (whofind[(whofind.findIndex(item => item.id == ctx.from.id))].whofind) +'\n'+ 'About me: \n'+ 
    (infiwords[(infiwords.findIndex(item => item.id == ctx.from.id))].infiwords) +'\n@ShibaripandaBot'})

    prev_action[([(prev_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_action: 'step_0'})}
 else { 
} }}
catch(e) {console.log('forming profile error:' + e)
await ctx.replyWithHTML(errorcatch)}
})
bot.action ('btn_101', async (ctx) => {
  try{
  bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])] = await Post.findOne({id: ctx.from.id})
  if ((post.find(item => item.post == 1)) == undefined){
    await ctx.replyWithHTML(restartbtn)
  }  
  else if ((bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profile) == 'ok'){
    ctx.replyWithHTML(`You already have a dating profile!\n${restartbtn}`)
}
  else if ((bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].profile) == 'delete', (post[(post.findIndex(item => item.id == ctx.from.id))].post) == "1") {
  let mes1 = []
  mes1 = await ctx.telegram.sendMessage(chanel, (info3[(info3.findIndex(item => item.id == ctx.from.id))].info3), {disable_notification: true})
  await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
       idmeschanel: mes1.message_id
    })
  let mes = []                                              //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  mes = await ctx.telegram.sendMessage(group1, (info[(info.findIndex(item => item.id == ctx.from.id))].info), {disable_notification: true})
  
  await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
          profile: 'ok',
            idmes: mes.message_id,
      profiledata: mes.text
          })
  await ctx.replyWithHTML(`Your profile has been published!✅\nAfter publishing the profile, restart the bot to edit information!.\n${restartbtn}`)
  end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 1})
  post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 0})
}
else { if ((post[(post.findIndex(item => item.id == ctx.from.id))].post) == "1") {
  let mes1 = []
  mes1 = await ctx.telegram.sendMessage(chanel, (info3[(info3.findIndex(item => item.id == ctx.from.id))].info3), {disable_notification: true})
  await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
idmeschanel: mes1.message_id
    })
    let mes = []                                                                             //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    mes = await ctx.telegram.sendMessage(group1, (info[(info.findIndex(item => item.id == ctx.from.id))].info), {disable_notification: true}), 
    await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
            profile: 'ok',
              idmes: mes.message_id,
        profiledata: mes.text
            })
    await ctx.replyWithHTML(`Your profile has been published!✅\nAfter publishing the profile, restart the bot to edit information!.\n${restartbtn}`)
    end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 1})
    post[([(post.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, post: 0})
  }}}
  catch(e) {console.log('delete1 error:' + e)
  await ctx.replyWithHTML(errorcatch)}
}) 
bot.action ('btn_200', async (ctx) => {
  try{
  let dell3 = []
  dell3 = await Patreon.find({profiledating: 'profiledating', id: ctx.from.id})
if (dell3[0].profile == 'ok') {
  username1[([(username1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, username1: ctx.from.username})
  del1[([(del1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, del1: 0})
  if ((del1.find(item => item.del1 == 0)) == undefined){ 
    ctx.replyWithHTML(restartbtn)
  }
  else {if ((del1[(del1.findIndex(item => item.id == ctx.from.id))].del1) == "0") {
    let dell2 = []
    dell2 = await Patreon.find({profiledating: 'profiledating', id: ctx.from.id});
  await ctx.telegram.deleteMessage(group1, dell2[0].idmes)
  await ctx.telegram.deleteMessage(chanel, dell2[0].idmeschanel)
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  await ctx.replyWithHTML(`Your dating profile has been deleted! ❌\n${restartbtn}`)
  await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
     profiledata: 'You have deleted your profile',
          idmes: false,
        profile: 'deleted',
    idmeschanel: false
    })
  del1[([(del1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, del1: 1})}
}}
else {await ctx.replyWithHTML("You don't have a profile.\nRestart ➡️ <b>/start</b> ✅")}
  }
  catch(e) {console.log('delete2 error:' + e)
  await ctx.replyWithHTML(errorcatch)}
})
// bot.on('new_chat_members', async(ctx) =>{
//   try {
//   ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id)
//   console.log('new user' + ctx.from.id)
//   let entergroup = []
//   entergroup = await Patreon.find({profiledating: 'profiledating', id: ctx.from.id})
//   let levelv = entergroup.findIndex(item => item.id = 'level')
 
//   if (ctx.from.id == 599773731 || ctx.from.id ==  2123157583){console.log('Admin enter')}
//   else {
//   if (levelv == -1) {
//      ctx.telegram.banChatMember(ctx.chat.id, ctx.from.id, false, true)
//      ctx.telegram.unbanChatMember(ctx.chat.id, ctx.from.id)
//      console.log('level unfineded')
//      }

//   else if  (entergroup[0].level == 'level_1' && (ctx.chat.id == group || ctx.chat.id ==  group1 || ctx.chat.id == group2 || ctx.chat.id == group3)) {
//       let delmes = await ctx.telegram.sendMessage(ctx.chat.id,`Hello ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}!`,{disable_notification: true});
//       setTimeout(async () => await ctx.telegram.deleteMessage(ctx.chat.id, delmes.message_id), dellhelllomes)
//              if (ctx.chat.id == group) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group: 'true'})}
//       else if (ctx.chat.id == group1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group1: 'true'})}
//       else if (ctx.chat.id == group2) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group2: 'true'})}
//       else if (ctx.chat.id == group3) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group3: 'true'})}   
//       console.log('level_1')}

//      else if (entergroup[0].level == 'level_2' && (ctx.chat.id == group || ctx.chat.id == group1 || ctx.chat.id == group2 || ctx.chat.id == group3 || ctx.chat.id == group4)) {
//      let delmes1 = await ctx.telegram.sendMessage(ctx.chat.id, `Hello ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}!`,{disable_notification: true});
//      setTimeout(async () => await ctx.telegram.deleteMessage(ctx.chat.id, delmes1.message_id), dellhelllomes)
//             if (ctx.chat.id == group) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group: 'true'})}
//      else if (ctx.chat.id == group1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group1: 'true'})}
//      else if (ctx.chat.id == group2) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group2: 'true'})}
//      else if (ctx.chat.id == group3) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group3: 'true'})}   
//      else if (ctx.chat.id == group4) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group4: 'true'})} 
//      console.log('level_2')}

//      else if (entergroup[0].level == 'level_3' && (ctx.chat.id == group || ctx.chat.id == group1 || ctx.chat.id == group2 || ctx.chat.id == group3 || ctx.chat.id == group5)) {
//      let delmes2 = await ctx.telegram.sendMessage(ctx.chat.id, `Hello ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}!`,{disable_notification: true});
//      setTimeout(async () => await ctx.telegram.deleteMessage(ctx.chat.id, delmes2.message_id), dellhelllomes)
//              if (ctx.chat.id == group) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group: 'true'})}
//       else if (ctx.chat.id == group1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group1: 'true'})}
//       else if (ctx.chat.id == group2) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group2: 'true'})}
//       else if (ctx.chat.id == group3) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group3: 'true'})}   
//       else if (ctx.chat.id == group5) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group5: 'true'})}
//      console.log('level_3')}

//      else if (entergroup[0].level == 'level_4' && (ctx.chat.id == group || ctx.chat.id == group1 || ctx.chat.id == group2 || ctx.chat.id == group3 || ctx.chat.id == group6)) {
//        let delmes2 = await ctx.telegram.sendMessage(ctx.chat.id, `Hello ${ctx.message.from.first_name ? ctx.message.from.first_name : 'noname'}!`,{disable_notification: true});
//        setTimeout(async () => await ctx.telegram.deleteMessage(ctx.chat.id, delmes2.message_id), dellhelllomes)
//                if (ctx.chat.id == group) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group: 'true'})}
//         else if (ctx.chat.id == group1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group1: 'true'})}
//         else if (ctx.chat.id == group2) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group2: 'true'})}
//         else if (ctx.chat.id == group3) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group3: 'true'})}   
//         else if (ctx.chat.id == group6) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group6: 'true'})}
//        console.log('level_4')}

//   else {
//     ctx.telegram.banChatMember(ctx.chat.id, ctx.from.id, false, true)
//     ctx.telegram.unbanChatMember(ctx.chat.id, ctx.from.id)
//     console.log('level false delete: '+ ctx.from.id)

// }

//             // let memberlevel = []
//             // memberlevel = await Post.find({profiledating: 'profiledating', group: true}, {email: 1, id: 1, _id: 0})
//             // console.log("Длинна массива тру участников "+ memberlevel.length)
//             // console.log(memberlevel)
//             // for (let em of memberlevel) {
//             // if (bazaall.includes(em.email)) { 
//             // console.log('ok: '+ em.id)}
//             // else {
//             // if (memberlevel.id == 599773731) {
//             // console.log('admin')}
//             // else {
//             // console.log('delete: '+ em.id)
//             // await ctx.telegram.banChatMember(group, em.id, false, true)
//             // await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group: false, level: 'level_0'})
//             // ctx.telegram.unbanChatMember}
//             // }}

//             // let memberlevel = []
//             // memberlevel = await Post.find({profiledating: 'profiledating', level: ['level_1', 'level_2', 'level_3', 'level_4']}, {email: 1, id: 1, _id: 0})
//             // console.log("count level users: "+ memberlevel.length)
//             // console.log(memberlevel)
//             // for (let em of memberlevel) {
//             // if (bazaall.includes(em.email)) { 

//             //   if (bazashcf1.includes(em.email)){
//             //     await ctx.telegram.banChatMember(group5, em.id, false, true)
//             //     await ctx.telegram.banChatMember(group6, em.id, false, true)
//             //     await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group5: false, group6: false, level: 'level_2'})
          
//             // console.log('ok1: '+ em.id)}

//             //   else if (bazashcf2.includes(em.email)) {
//             //     await ctx.telegram.banChatMember(group4, em.id, false, true) 
//             //     await ctx.telegram.banChatMember(group6, em.id, false, true) 
//             //     await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group4: false, group6: false, level: 'level_3'})
               
//             //     console.log('ok2: '+ em.id)}

//             //     else if (bazashcf3.includes(em.email)) {
//             //       await ctx.telegram.banChatMember(group4, em.id, false, true) 
//             //       await ctx.telegram.banChatMember(group5, em.id, false, true) 
//             //       await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group4: false, group5: false, level: 'level_4'})
                
//             //       console.log('ok3: '+ em.id)}

//             //       else{
//             //         await ctx.telegram.banChatMember(group4, em.id, false, true) 
//             //         await ctx.telegram.banChatMember(group5, em.id, false, true)
//             //         await ctx.telegram.banChatMember(group6, em.id, false, true) 
//             //         await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group4: false,  group5: false, group6: false, level: 'level_1'})
//             //         console.log('ok4: '+ em.id)
//             //       }
  
//             //   }


//             // else {
//             // if (memberlevel.id == 599773731) {
//             // console.log('admin')}
//             // else {
//             // console.log('delete: '+ em.id)
//             // await ctx.telegram.banChatMember(group, em.id, false, true)
            
//             // await ctx.telegram.banChatMember(group1, em.id, false, true)
            
//             // await ctx.telegram.banChatMember(group2, em.id, false, true)
            
//             // await ctx.telegram.banChatMember(group3, em.id, false, true)
            
//             // await ctx.telegram.banChatMember(group4, em.id, false, true)
            
//             // await ctx.telegram.banChatMember(group5, em.id, false, true)
            
//             // await ctx.telegram.banChatMember(group6, em.id, false, true)
            
//             // await Post.updateOne({profiledating: 'profiledating', id: em.id}, {group: false, group1: false, group2: false, group3: false, group4: false, group5: false, group6: false, level: 'level_0'})
//             // }
//             // }}
// }}
// catch(e) {console.log('new chat member error: ' + e)
// await ctx.replyWithHTML(errorcatch)}
// })
// bot.on('left_chat_member', async(ctx) =>{
//   try {
//   ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id)
  
//       if  (ctx.chat.id == group || ctx.chat.id ==  group1 || ctx.chat.id == group2 || ctx.chat.id == group3 || ctx.chat.id == group4 || ctx.chat.id == group5 || ctx.chat.id == group6) {

//             if (ctx.chat.id == group) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group: 'false'})
//       console.log('false 0')}
//       else if (ctx.chat.id == group1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group1: 'false'})
//       console.log('false 1')}
//       else if (ctx.chat.id == group2) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group2: 'false'})
//       console.log('false 2')}
//       else if (ctx.chat.id == group3) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group3: 'false'})
//       console.log('false 3')}
//       else if (ctx.chat.id == group4) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group4: 'false'})
//       console.log('false 4')}
//       else if (ctx.chat.id == group5) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group5: 'false'})
//       console.log('false 5')}
//       else if (ctx.chat.id == group6) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {group6: 'false'})
//       console.log('false 6')}   
//       }
//   else {
//     console.log('not delete users')
// }}
// catch(e) {console.log('left chat member error: ' + e)
// await ctx.replyWithHTML(errorcatch)}
// })
bot.on('text', async(ctx) => {
  try{
  prev_action.push({id: ctx.from.id, prev_action: 'step_0'})
  if ((prev_action[(prev_action.findIndex(item => item.id == ctx.from.id))].prev_action) == undefined) {
    ctx.replyWithHTML(restartbtn)};

    if ((prev_shop_action[(prev_shop_action.findIndex(item => item.id == ctx.from.id))].prev_shop_action) == "step_5") {
      description = [{id: ctx.from.id}] 
      description[description.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, description: ctx.message.text
      })
  
           await ctx.reply(`Name : ${ctx.message.text}`,
           (Markup.inlineKeyboard(
             [
                  [Markup.button.callback('Edit', 'btn_infoProduct1')],
                  [Markup.button.callback('Next step', 'btn_infoProduct2')]
             ])))
      }

      if ((prev_shop_action[(prev_shop_action.findIndex(item => item.id == ctx.from.id))].prev_shop_action) == "step_6") {
      
        delivery = [{id: ctx.from.id}] 
        delivery[delivery.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, delivery: ctx.message.text
        })
    
             await ctx.reply(`Info  : ${ctx.message.text}`,
             (Markup.inlineKeyboard(
               [
                    [Markup.button.callback('Edit', 'btn_infoProduct2')],
                    [Markup.button.callback('Next step', 'btn_infoProduct3')]
               ])))
        }

        if ((prev_shop_action[(prev_shop_action.findIndex(item => item.id == ctx.from.id))].prev_shop_action) == "step_7") {
      
          price = [{id: ctx.from.id}] 
          price[price.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, price: ctx.message.text
          })
      
               await ctx.reply(`Price $: ${ctx.message.text}`,
               (Markup.inlineKeyboard(
                 [
                      [Markup.button.callback('Edit', 'btn_infoProduct4')],
                      [Markup.button.callback('Next step', 'showAd')]
                 ])))
          }


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
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   
  
  
  }
   catch(e) {console.log('steps : ' + e)
   await ctx.replyWithHTML(errorcatch)}
})
   bot.on('photo', async(ctx) => {
    try{
  
  if ((prev_shop_action[(prev_shop_action.findIndex(item => item.id == ctx.from.id))].prev_shop_action) == "step_1") {
     pathjpg1 = [{id: ctx.from.id}]
     pathjpg1[pathjpg1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, photo: ctx.message.photo[0].file_id
      })
    await ctx.telegram.sendPhoto(ctx.chat.id, ctx.message.photo[0].file_id,
    (Markup.inlineKeyboard(
      [
           [Markup.button.callback('Edit', 'btn_startPhotoAdd')],
           [Markup.button.callback('Next photo', 'btn_photo_add_1')]
      ])), {disable_notification: true}
      )
    }

  if ((prev_shop_action[(prev_shop_action.findIndex(item => item.id == ctx.from.id))].prev_shop_action) == "step_2") {
      pathjpg2 = [{id: ctx.from.id}]
         pathjpg2[pathjpg1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, photo: ctx.message.photo[0].file_id
          })
         
        await ctx.telegram.sendPhoto(ctx.chat.id, ctx.message.photo[0].file_id,
        (Markup.inlineKeyboard(
          [
               [Markup.button.callback('Edit', 'btn_photo_add_1')],
               [Markup.button.callback('Next photo', 'btn_photo_add_2')]
          ])), {disable_notification: true}
          )
    }

    if ((prev_shop_action[(prev_shop_action.findIndex(item => item.id == ctx.from.id))].prev_shop_action) == "step_3") {
      pathjpg3 = [{id: ctx.from.id}]
         pathjpg3[pathjpg3.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, photo: ctx.message.photo[0].file_id
          })
         
        await ctx.telegram.sendPhoto(ctx.chat.id, ctx.message.photo[0].file_id,
        (Markup.inlineKeyboard(
          [
               [Markup.button.callback('Edit', 'btn_photo_add_2')],
               [Markup.button.callback('Next photo', 'btn_photo_add_3')]
          ])), {disable_notification: true}
          )
    }

    // if ((prev_shop_action[(prev_shop_action.findIndex(item => item.id == ctx.from.id))].prev_shop_action) == "step_4") {
    //   pathjpg4 = [{id: ctx.from.id}]
    //      pathjpg4[pathjpg4.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, photo: ctx.message.photo[0].file_id
    //       })
         
    //     await ctx.telegram.sendPhoto(ctx.chat.id, ctx.message.photo[0].file_id,
    //     (Markup.inlineKeyboard(
    //       [
    //            [Markup.button.callback('Edit', 'btn_photo_add_3')],
    //            [Markup.button.callback('Next step', 'btn_photo_add_4')]
    //       ]))
    //       )
    // }

  if ((prev_shop_action[(prev_shop_action.findIndex(item => item.id == ctx.from.id))].prev_shop_action) == "step_4") {
         pathjpg4 = [{id: ctx.from.id}]
         pathjpg4[pathjpg4.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, photo: ctx.message.photo[0].file_id
          })
         
      await ctx.telegram.sendMediaGroup(ctx.chat.id, [{type: 'photo', media: pathjpg1[pathjpg1.findIndex(item => item.id == ctx.from.id)].photo}, 
      {type: 'photo', media: pathjpg2[pathjpg2.findIndex(item => item.id == ctx.from.id)].photo},{type: 'photo', media: pathjpg3[pathjpg3.findIndex(item => item.id == ctx.from.id)].photo},
      {type: 'photo', media: pathjpg4[pathjpg4.findIndex(item => item.id == ctx.from.id)].photo}], {disable_notification: true})
      await ctx.telegram.sendMessage(ctx.chat.id, `${nameoftype} will look like this, continue or edit`,
      (Markup.inlineKeyboard(
        [
             [Markup.button.callback('Edit last photo', 'btn_photo_add_3')],
             [Markup.button.callback('Replace all photo', 'btn_startPhotoAdd')],
             [Markup.button.callback('Go to listing information section', 'btn_infoProduct1')]
        ])),{disable_notification: true}
        )
    }}
    catch(e) {console.log('add listing error:' + e)
    await ctx.replyWithHTML(errorcatch)}
})
  bot.action ('btn_publishshop', async (ctx) => {
    try{
    bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})
    let ad1 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic1
      if (ad1 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
      idmesshoppic1: 'false'})}
      let ad2 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic2
      if (ad2 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
      idmesshoppic2: 'false'})}
      let ad3 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic3
      if (ad3 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
      idmesshoppic3: 'false'})}
      let ad4 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic4
      if (ad4 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
      idmesshoppic4: 'false'})}
      let ad5 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic5
      if (ad5 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
      idmesshoppic5: 'false'})}

    let noshop = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop
    if (noshop == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {shop: 0}) 
        
   bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})}

   if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop >= 5){
      ctx.replyWithHTML(`You already have 5 listing! If you need more contact us @ShibaripandaClubBot\n${restartbtn}`)
  }
    else { 
    
   

         let mes2 = String((await ctx.telegram.sendMediaGroup(chanel, picshop[picshop.findIndex(item => item.id == ctx.from.id)].pic, {disable_notification: true})).map(item => item.message_id))
         let mes3 = await ctx.telegram.sendMessage(chanel, textshop[textshop.findIndex(item => item.id == ctx.from.id)].tex, {disable_notification: true})
         let mes4 = String((await ctx.telegram.sendMediaGroup(group7, picshop[picshop.findIndex(item => item.id == ctx.from.id)].pic, {disable_notification: true})).map(item => item.message_id))
         let mes5 = await ctx.telegram.sendMessage(group7, textshop[textshop.findIndex(item => item.id == ctx.from.id)].tex, {disable_notification: true})

       let shopcount = Number(bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop)
       shopcount = shopcount + 1
       


   let mass1 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic1
   let mass2 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic2
   let mass3 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic3
   let mass4 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic4
   let mass5 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic5
   let mass6 = []
   mass6.push(mass1)
   mass6.push(mass2)
   mass6.push(mass3)
   mass6.push(mass4)
   mass6.push(mass5)
   let mass = mass6.indexOf('false')
 
if (mass == 0) {
  await Patreon.updateOne({id: ctx.from.id}, { 
               shop: shopcount,
      idmesshoppic1: mes2,
      idmesshoptex1: mes3.message_id,
 idmesshoppicgroup1: mes4,
 idmesshoptexgroup1: mes5.message_id,
       namelisting1: description[description.findIndex(item => item.id == ctx.from.id)].description,
        publishtime: mes3.date
            })
                 
}

else if (mass == 1) {
  await Patreon.updateOne({id: ctx.from.id}, { 
              shop: shopcount,
     idmesshoppic2: mes2,
     idmesshoptex2: mes3.message_id,
idmesshoppicgroup2: mes4,
idmesshoptexgroup2: mes5.message_id,
      namelisting2: description[description.findIndex(item => item.id == ctx.from.id)].description,
       publishtime: mes3.date
          })
          
}
else if (mass == 2) {
  await Patreon.updateOne({id: ctx.from.id}, { 
              shop: shopcount,
     idmesshoppic3: mes2,
     idmesshoptex3: mes3.message_id,
idmesshoppicgroup3: mes4,
idmesshoptexgroup3: mes5.message_id,
      namelisting3: description[description.findIndex(item => item.id == ctx.from.id)].description,
       publishtime: mes3.date
          })
          
}
else if (mass == 3) {
  await Patreon.updateOne({id: ctx.from.id}, { 
              shop: shopcount,
     idmesshoppic4: mes2,
     idmesshoptex4: mes3.message_id,
idmesshoppicgroup4: mes4,
idmesshoptexgroup4: mes5.message_id,
      namelisting4: description[description.findIndex(item => item.id == ctx.from.id)].description,
       publishtime: mes3.date
          })
          
}
else if (mass == 4) {
  await Patreon.updateOne({id: ctx.from.id}, { 
              shop: shopcount,
     idmesshoppic5: mes2,
     idmesshoptex5: mes3.message_id,
idmesshoppicgroup5: mes4,
idmesshoptexgroup5: mes5.message_id,
      namelisting5: description[description.findIndex(item => item.id == ctx.from.id)].description,
       publishtime: mes3.date
          })
          
}
    bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

    if (shopcount < 5) {
    await ctx.replyWithHTML(`${nameoftype} has been published!✅\n${restartbtn}`,
    Markup.inlineKeyboard(
      [
         [Markup.button.callback(btnAddListing, 'btn_startPhotoAdd')],
         [Markup.button.callback(`${yourlist} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop}${allavaiablecount}`, 'list_listing')]
      ]) )
    end1[end1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, end1: 1})
    post[post.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, post: 0})

    bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})
    }

    else {await ctx.replyWithHTML(`${nameoftype} has been published!✅\n${restartbtn}`,
    Markup.inlineKeyboard(
      [
         [Markup.button.callback(`${yourlist} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop}${allavaiablecount}`, 'list_listing')]
      ]) )
    end1[end1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, end1: 1})
    post[post.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, post: 0})

   
} 
console.log('time0: ' + mes3.date)

}}
    catch(e) {console.log('add listing error:' + e)
    await ctx.replyWithHTML(errorcatch)}
})  
  bot.action ('btn_dell_1', async (ctx) => {
    try{
    bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

    let noshop1 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop
    if (noshop1 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {shop: 0}) 
        
   bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})}

   if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop <= 0){
      ctx.replyWithHTML(`You have 0 listings!\n${restartbtn}`)
  }
    else { 
    
       
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic1) + "]"))[0])
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic1) + "]"))[1])
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic1) + "]"))[2])
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic1) + "]"))[3])

        await ctx.telegram.deleteMessage(chanel, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptex1)
  
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup1) + "]"))[0])
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup1) + "]"))[1])
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup1) + "]"))[2])
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup1) + "]"))[3])

        await ctx.telegram.deleteMessage(group7, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptexgroup1)

       let shopcount = Number(bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop)
       shopcount = shopcount - 1

  await Patreon.updateOne({id: ctx.from.id}, { 
              shop: shopcount,
     idmesshoppic1: 'false',
     idmesshoptex1: 'false',
idmesshoppicgroup1: 'false',
idmesshoptexgroup1: 'false',
      namelisting1: 'false'
          })
}
    let spc = await Patreon.findOne({id: ctx.from.id})
    await ctx.replyWithHTML(`${nameoftype} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting1} has been deleted!✅\n${restartbtn}`,
    Markup.inlineKeyboard(
      [
         [Markup.button.callback(btnAddListing, 'btn_startPhotoAdd')],
         [Markup.button.callback(`${yourlist} ${spc.shop}${allavaiablecount}`, 'list_listing')]
      ]) )
    end1[end1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, end1: 1})
    post[post.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, post: 0})
  }
    catch(e) {console.log('dell 1 listing error:' + e)
    await ctx.replyWithHTML(errorcatch)}
}) 
  bot.action ('btn_dell_2', async (ctx) => {
    try{
    bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

    let noshop1 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop
    if (noshop1 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {shop: 0}) 
        
   bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})}

   if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop <= 0){
      ctx.replyWithHTML(`You have 0 listing!\n${restartbtn}`)
  }
    else { 
    
      

        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic2) + "]"))[0])
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic2) + "]"))[1])
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic2) + "]"))[2])
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic2) + "]"))[3])

        await ctx.telegram.deleteMessage(chanel, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptex2)
  
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup2) + "]"))[0])
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup2) + "]"))[1])
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup2) + "]"))[2])
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup2) + "]"))[3])

        await ctx.telegram.deleteMessage(group7, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptexgroup2)

       let shopcount = Number(bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop)
       shopcount = shopcount - 1
       

  await Patreon.updateOne({id: ctx.from.id}, { 
              shop: shopcount,
     idmesshoppic2: 'false',
     idmesshoptex2: 'false',
idmesshoppicgroup2: 'false',
idmesshoptexgroup2: 'false',
      namelisting2: 'false'
          })
}
    let spc = await Patreon.findOne({id: ctx.from.id})
    await ctx.replyWithHTML(`${nameoftype} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting2} has been deleted!✅\n${restartbtn}`,
    Markup.inlineKeyboard(
      [
         [Markup.button.callback(btnAddListing, 'btn_startPhotoAdd')],
         [Markup.button.callback(`${yourlist} ${spc.shop}${allavaiablecount}`, 'list_listing')]
      ]) )
    
    end1[end1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, end1: 1})
    post[post.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, post: 0})
  }
    catch(e) {console.log('dell 2 listing error:' + e)
    await ctx.replyWithHTML(errorcatch)}
}) 
  bot.action ('btn_dell_3', async (ctx) => {
    try{
    bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

    let noshop1 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop
    if (noshop1 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {shop: 0}) 
        
   bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})}

   if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop <= 0){
      ctx.replyWithHTML(`You have 0 listings!\n${restartbtn}`)
  }
    else { 
    
      
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic3) + "]"))[0])
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic3) + "]"))[1])
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic3) + "]"))[2])
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic3) + "]"))[3])

        await ctx.telegram.deleteMessage(chanel, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptex3)
  
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup3) + "]"))[0])
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup3) + "]"))[1])
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup3) + "]"))[2])
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup3) + "]"))[3])

        await ctx.telegram.deleteMessage(group7, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptexgroup3)

       let shopcount = Number(bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop)
       shopcount = shopcount - 1
    

  await Patreon.updateOne({id: ctx.from.id}, { 
              shop: shopcount,
     idmesshoppic3: 'false',
     idmesshoptex3: 'false',
idmesshoppicgroup3: 'false',
idmesshoptexgroup3: 'false',
      namelisting3: 'false'
          })
}
    let spc = await Patreon.findOne({id: ctx.from.id})
    await ctx.replyWithHTML(`${nameoftype} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting3} has been deleted!✅\n${restartbtn}`,
    Markup.inlineKeyboard(
      [
         [Markup.button.callback(btnAddListing, 'btn_startPhotoAdd')],
         [Markup.button.callback(`${yourlist} ${spc.shop}${allavaiablecount}`, 'list_listing')]
      ]) )
    end1[end1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, end1: 1})
    post[post.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, post: 0})
  }
    catch(e) {console.log('dell 3 listing error:' + e)
    await ctx.replyWithHTML(errorcatch)}
}) 
  bot.action ('btn_dell_4', async (ctx) => {
    try{
    bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

    let noshop1 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop
    if (noshop1 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {shop: 0}) 
        
   bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})}

   if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop <= 0){
      ctx.replyWithHTML(`You have 0 listings!\n${restartbtn}`)
  }
    else { 
    
       

        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic4) + "]"))[0])
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic4) + "]"))[1])
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic4) + "]"))[2])
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic4) + "]"))[3])

        await ctx.telegram.deleteMessage(chanel, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptex4)
  
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup4) + "]"))[0])
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup4) + "]"))[1])
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup4) + "]"))[2])
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup4) + "]"))[3])

        await ctx.telegram.deleteMessage(group7, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptexgroup4)

       let shopcount = Number(bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop)
       shopcount = shopcount - 1
    

  await Patreon.updateOne({id: ctx.from.id}, { 
              shop: shopcount,
     idmesshoppic4: 'false',
     idmesshoptex4: 'false',
idmesshoppicgroup4: 'false',
idmesshoptexgroup4: 'false',
      namelisting4: 'false'
          })
}
    let spc = await Patreon.findOne({id: ctx.from.id})
    await ctx.replyWithHTML(`${nameoftype} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting3} has been deleted!✅\n${restartbtn}`,
    Markup.inlineKeyboard(
      [
         [Markup.button.callback(btnAddListing, 'btn_startPhotoAdd')],
         [Markup.button.callback(`${yourlist} ${spc.shop}${allavaiablecount}`, 'list_listing')]
      ]) )
    end1[end1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, end1: 1})
    post[post.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, post: 0})
  }
    catch(e) {console.log('dell 4 listing error:' + e)
    await ctx.replyWithHTML(errorcatch)}
}) 
  bot.action ('btn_dell_5', async (ctx) => {
    try{
    bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

    let noshop1 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop
    if (noshop1 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {shop: 0}) 
        
   bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})}

   if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop <= 0){
      ctx.replyWithHTML(`You have 0 listing!\n${restartbtn}`)
  }
    else { 
    
   
     

        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic5) + "]"))[0])
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic5) + "]"))[1])
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic5) + "]"))[2])
        await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic5) + "]"))[3])

        await ctx.telegram.deleteMessage(chanel, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptex5)
  
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup5) + "]"))[0])
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup5) + "]"))[1])
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup5) + "]"))[2])
        await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup5) + "]"))[3])

        await ctx.telegram.deleteMessage(group7, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptexgroup5)

       let shopcount = Number(bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop) 
       shopcount = shopcount - 1
       

  await Patreon.updateOne({id: ctx.from.id}, { 
              shop: shopcount,
     idmesshoppic5: 'false',
     idmesshoptex5: 'false',
idmesshoppicgroup5: 'false',
idmesshoptexgroup5: 'false',
      namelisting5: 'false'
          })
}
    let spc = await Patreon.findOne({id: ctx.from.id})
    await ctx.replyWithHTML(`${nameoftype} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting3} has been deleted!✅\n${restartbtn}`,
    Markup.inlineKeyboard(
      [
         [Markup.button.callback(btnAddListing, 'btn_startPhotoAdd')],
         [Markup.button.callback(`${yourlist} ${spc.shop}${allavaiablecount}`, 'list_listing')]
      ]) )
    end1[end1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, end1: 1})
    post[post.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, post: 0})
  }
    catch(e) {console.log('dell 5 listing error:' + e)
    await ctx.replyWithHTML(errorcatch)}
}) 
bot.action ('btn_dell_1_unreg', async (ctx) => {
  try{
  bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

  let noshop1 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop
  if (noshop1 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {shop: 0}) 
      
 bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})}

 if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop <= 0){
    ctx.replyWithHTML(`You have 0 listings!\n${restartbtn}`)
}
  else { 
  
     
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic1) + "]"))[0])
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic1) + "]"))[1])
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic1) + "]"))[2])
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic1) + "]"))[3])

      await ctx.telegram.deleteMessage(chanel, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptex1)

      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup1) + "]"))[0])
      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup1) + "]"))[1])
      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup1) + "]"))[2])
      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup1) + "]"))[3])

      await ctx.telegram.deleteMessage(group7, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptexgroup1)

     let shopcount = Number(bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop)
     shopcount = shopcount - 1

await Patreon.updateOne({id: ctx.from.id}, { 
            shop: shopcount,
   idmesshoppic1: 'false',
   idmesshoptex1: 'false',
idmesshoppicgroup1: 'false',
idmesshoptexgroup1: 'false',
    namelisting1: 'false'
        })
}
  let spc = await Patreon.findOne({id: ctx.from.id})
  await ctx.replyWithHTML(`${nameoftype} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting1} has been deleted!✅\n${restartbtn}`,
  Markup.inlineKeyboard(
    [
       [Markup.button.callback(btnlogintoadlist, 'btn_400')],
       [Markup.button.callback(`${yourlist} ${spc.shop}${allavaiablecount}`, 'list_listing_unreg')]
    ]) )
  end1[end1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, end1: 1})
  post[post.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, post: 0})
}
  catch(e) {console.log('dell 1 listing error:' + e)
  await ctx.replyWithHTML(errorcatch)}
}) 
bot.action ('btn_dell_2_unreg', async (ctx) => {
  try{
  bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

  let noshop1 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop
  if (noshop1 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {shop: 0}) 
      
 bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})}

 if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop <= 0){
    ctx.replyWithHTML(`You have 0 listing!\n${restartbtn}`)
}
  else { 
  
    

      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic2) + "]"))[0])
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic2) + "]"))[1])
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic2) + "]"))[2])
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic2) + "]"))[3])

      await ctx.telegram.deleteMessage(chanel, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptex2)

      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup2) + "]"))[0])
      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup2) + "]"))[1])
      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup2) + "]"))[2])
      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup2) + "]"))[3])

      await ctx.telegram.deleteMessage(group7, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptexgroup2)

     let shopcount = Number(bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop)
     shopcount = shopcount - 1
     

await Patreon.updateOne({id: ctx.from.id}, { 
            shop: shopcount,
   idmesshoppic2: 'false',
   idmesshoptex2: 'false',
idmesshoppicgroup2: 'false',
idmesshoptexgroup2: 'false',
    namelisting2: 'false'
        })
}
  let spc = await Patreon.findOne({id: ctx.from.id})
  await ctx.replyWithHTML(`${nameoftype} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting2} has been deleted!✅\n${restartbtn}`,
  Markup.inlineKeyboard(
    [
       [Markup.button.callback(btnlogintoadlist, 'btn_400')],
       [Markup.button.callback(`${yourlist} ${spc.shop}${allavaiablecount}`, 'list_listing_unreg')]
    ]) )
  
  end1[end1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, end1: 1})
  post[post.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, post: 0})
}
  catch(e) {console.log('dell 2 listing error:' + e)
  await ctx.replyWithHTML(errorcatch)}
}) 
bot.action ('btn_dell_3_unreg', async (ctx) => {
  try{
  bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

  let noshop1 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop
  if (noshop1 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {shop: 0}) 
      
 bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})}

 if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop <= 0){
    ctx.replyWithHTML(`You have 0 listings!\n${restartbtn}`)
}
  else { 
  
    
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic3) + "]"))[0])
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic3) + "]"))[1])
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic3) + "]"))[2])
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic3) + "]"))[3])

      await ctx.telegram.deleteMessage(chanel, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptex3)

      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup3) + "]"))[0])
      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup3) + "]"))[1])
      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup3) + "]"))[2])
      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup3) + "]"))[3])

      await ctx.telegram.deleteMessage(group7, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptexgroup3)

     let shopcount = Number(bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop)
     shopcount = shopcount - 1
  

await Patreon.updateOne({id: ctx.from.id}, { 
            shop: shopcount,
   idmesshoppic3: 'false',
   idmesshoptex3: 'false',
idmesshoppicgroup3: 'false',
idmesshoptexgroup3: 'false',
    namelisting3: 'false'
        })
}
  let spc = await Patreon.findOne({id: ctx.from.id})
  await ctx.replyWithHTML(`${nameoftype} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting3} has been deleted!✅\n${restartbtn}`,
  Markup.inlineKeyboard(
    [
       [Markup.button.callback(btnlogintoadlist, 'btn_400')],
       [Markup.button.callback(`${yourlist} ${spc.shop}${allavaiablecount}`, 'list_listing_unreg')]
    ]) )
  end1[end1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, end1: 1})
  post[post.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, post: 0})
}
  catch(e) {console.log('dell 3 listing error:' + e)
  await ctx.replyWithHTML(errorcatch)}
}) 
bot.action ('btn_dell_4_unreg', async (ctx) => {
  try{
  bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

  let noshop1 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop
  if (noshop1 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {shop: 0}) 
      
 bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})}

 if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop <= 0){
    ctx.replyWithHTML(`You have 0 listings!\n${restartbtn}`)
}
  else { 
  
     

      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic4) + "]"))[0])
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic4) + "]"))[1])
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic4) + "]"))[2])
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic4) + "]"))[3])

      await ctx.telegram.deleteMessage(chanel, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptex4)

      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup4) + "]"))[0])
      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup4) + "]"))[1])
      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup4) + "]"))[2])
      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup4) + "]"))[3])

      await ctx.telegram.deleteMessage(group7, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptexgroup4)

     let shopcount = Number(bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop)
     shopcount = shopcount - 1
  

await Patreon.updateOne({id: ctx.from.id}, { 
            shop: shopcount,
   idmesshoppic4: 'false',
   idmesshoptex4: 'false',
idmesshoppicgroup4: 'false',
idmesshoptexgroup4: 'false',
    namelisting4: 'false'
        })
}
  let spc = await Patreon.findOne({id: ctx.from.id})
  await ctx.replyWithHTML(`${nameoftype} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting3} has been deleted!✅\n${restartbtn}`,
  Markup.inlineKeyboard(
    [
       [Markup.button.callback(btnlogintoadlist, 'btn_400')],
       [Markup.button.callback(`${yourlist} ${spc.shop}${allavaiablecount}`, 'list_listing_unreg')]
    ]) )
  end1[end1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, end1: 1})
  post[post.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, post: 0})
}
  catch(e) {console.log('dell 4 listing error:' + e)
  await ctx.replyWithHTML(errorcatch)}
}) 
bot.action ('btn_dell_5_unreg', async (ctx) => {
  try{
  bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

  let noshop1 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop
  if (noshop1 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {shop: 0}) 
      
 bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})}

 if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop <= 0){
    ctx.replyWithHTML(`You have 0 listing!\n${restartbtn}`)
}
  else { 
  
 
   

      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic5) + "]"))[0])
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic5) + "]"))[1])
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic5) + "]"))[2])
      await ctx.telegram.deleteMessage(chanel, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic5) + "]"))[3])

      await ctx.telegram.deleteMessage(chanel, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptex5)

      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup5) + "]"))[0])
      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup5) + "]"))[1])
      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup5) + "]"))[2])
      await ctx.telegram.deleteMessage(group7, (JSON.parse("[" + (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppicgroup5) + "]"))[3])

      await ctx.telegram.deleteMessage(group7, bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoptexgroup5)

     let shopcount = Number(bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop) 
     shopcount = shopcount - 1
     

await Patreon.updateOne({id: ctx.from.id}, { 
            shop: shopcount,
   idmesshoppic5: 'false',
   idmesshoptex5: 'false',
idmesshoppicgroup5: 'false',
idmesshoptexgroup5: 'false',
    namelisting5: 'false'
        })
}
  let spc = await Patreon.findOne({id: ctx.from.id})
  await ctx.replyWithHTML(`${nameoftype} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting3} has been deleted!✅\n${restartbtn}`,
  Markup.inlineKeyboard(
    [
       [Markup.button.callback(btnlogintoadlist, 'btn_400')],
       [Markup.button.callback(`${yourlist} ${spc.shop}${allavaiablecount}`, 'list_listing_unreg')]
    ]) )
  end1[end1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, end1: 1})
  post[post.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, post: 0})
}
  catch(e) {console.log('dell 5 listing error:' + e)
  await ctx.replyWithHTML(errorcatch)}
}) 
  bot.action ('list_listing', async (ctx) => {
    try{
  
      bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})


      ctx.reply(`You have ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop ? bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop : '0'}  listings`)
      let ad1 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic1
      if (ad1 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
      idmesshoppic1: 'false'})}
      let ad2 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic2
      if (ad2 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
      idmesshoppic2: 'false'})}
      let ad3 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic3
      if (ad3 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
      idmesshoppic3: 'false'})}
      let ad4 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic4
      if (ad4 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
      idmesshoppic4: 'false'})}
      let ad5 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic5
      if (ad5 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
      idmesshoppic5: 'false'})}
    
     bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

     if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic1 == 'false') {}
     else {await ctx.telegram.sendMessage(ctx.chat.id, `Listing: ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting1}`,
     (Markup.inlineKeyboard([[Markup.button.callback('Delete', 'btn_dell_1')]])),{disable_notification: true})}

     if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic2 == 'false') {}
     else {await ctx.telegram.sendMessage(ctx.chat.id, `Listing: ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting2}`,
     (Markup.inlineKeyboard([[Markup.button.callback('Delete', 'btn_dell_2')]])),{disable_notification: true})}

     if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic3 == 'false') {}
     else {await ctx.telegram.sendMessage(ctx.chat.id, `Listing: ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting3}`,
     (Markup.inlineKeyboard([[Markup.button.callback('Delete', 'btn_dell_3')]])),{disable_notification: true})}

     if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic4 == 'false') {}
     else {await ctx.telegram.sendMessage(ctx.chat.id, `Listing: ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting4}`,
     (Markup.inlineKeyboard([[Markup.button.callback('Delete', 'btn_dell_4')]])),{disable_notification: true})}

     if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic5 == 'false') {}
     else {await ctx.telegram.sendMessage(ctx.chat.id, `Listing: ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting5}`,
     (Markup.inlineKeyboard([[Markup.button.callback('Delete', 'btn_dell_5')]])),{disable_notification: true})}
      
     
     bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

     if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop < 5) {
     await ctx.replyWithHTML(restartbtn,
     Markup.inlineKeyboard(
       [
          [Markup.button.callback(btnAddListing, 'btn_startPhotoAdd')],
          [Markup.button.callback(`${yourlist} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop}${allavaiablecount}`, 'list_listing')]
       ]) )
     end1[end1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, end1: 1})
     post[post.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, post: 0})
 
     bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})
     }
 
     else {await ctx.replyWithHTML(restartbtn,
     Markup.inlineKeyboard(
       [
          [Markup.button.callback(`${yourlist} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop}${allavaiablecount}`, 'list_listing')]
       ]) )
     end1[end1.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, end1: 1})
     post[post.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id, post: 0})
 }
    }
    catch(e) {console.log('delete list:' + e)
    await ctx.replyWithHTML(errorcatch)}
})
bot.action ('list_listing_unreg', async (ctx) => {
  try{

    bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})
    let shop11 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop
if (shop11 == -1 || shop11 == undefined){ 
  await ctx.replyWithHTML(`${restartbtn}`,
Markup.inlineKeyboard(
  [
    [Markup.button.callback(btnlogintoadlist, 'btn_400')]
  ]))}
else {
    ctx.reply(`You have ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop ? bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop : '0'}  listings`)
    let ad1 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic1
    if (ad1 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
    idmesshoppic1: 'false'})}
    let ad2 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic2
    if (ad2 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
    idmesshoppic2: 'false'})}
    let ad3 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic3
    if (ad3 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
    idmesshoppic3: 'false'})}
    let ad4 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic4
    if (ad4 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
    idmesshoppic4: 'false'})}
    let ad5 = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic5
    if (ad5 == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, { 
    idmesshoppic5: 'false'})}
  
   bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

   if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic1 == 'false') {}
   else {await ctx.telegram.sendMessage(ctx.chat.id, `Listing: ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting1}`,
   (Markup.inlineKeyboard([[Markup.button.callback('Delete', 'btn_dell_1_unreg')]])),{disable_notification: true})}

   if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic2 == 'false') {}
   else {await ctx.telegram.sendMessage(ctx.chat.id, `Listing: ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting2}`,
   (Markup.inlineKeyboard([[Markup.button.callback('Delete', 'btn_dell_2_unreg')]])),{disable_notification: true})}

   if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic3 == 'false') {}
   else {await ctx.telegram.sendMessage(ctx.chat.id, `Listing: ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting3}`,
   (Markup.inlineKeyboard([[Markup.button.callback('Delete', 'btn_dell_3_unreg')]])),{disable_notification: true})}

   if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic4 == 'false') {}
   else {await ctx.telegram.sendMessage(ctx.chat.id, `Listing: ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting4}`,
   (Markup.inlineKeyboard([[Markup.button.callback('Delete', 'btn_dell_4_unreg')]])),{disable_notification: true})}

   if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].idmesshoppic5 == 'false') {}
   else {await ctx.telegram.sendMessage(ctx.chat.id, `Listing: ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].namelisting5}`,
   (Markup.inlineKeyboard([[Markup.button.callback('Delete', 'btn_dell_5_unreg')]])),{disable_notification: true})}
    
   await ctx.replyWithHTML(`${restartbtn}`,
    Markup.inlineKeyboard(
      [
        [Markup.button.callback(btnlogintoadlist, 'btn_400')]
      ]))
  }}
  catch(e) {console.log('delete list:' + e)
  await ctx.replyWithHTML(errorcatch)}
})
  bot.action ('showAd', async (ctx) => {
    try{
    let m = username1.findIndex(item => item.id == ctx.from.id)
    if (m != -1) {username1.splice(username1.findIndex(item => item.id == ctx.from.id),1)};
    username1.push({id: ctx.from.id, username1: ctx.from.username})
  
    emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
    end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 0})
  
    if (username1[([(username1.findIndex(item => item.id == ctx.from.id))])].username1 == undefined){
      await ctx.reply(nousername)
    }
  else{
    if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0"){ 
      picshop = [{id: ctx.from.id}]
      textshop = [{id: ctx.from.id}]
      await ctx.telegram.sendMediaGroup(ctx.chat.id, [{type: 'photo', media: pathjpg1[pathjpg1.findIndex(item => item.id == ctx.from.id)].photo}, 
      {type: 'photo', media: pathjpg2[pathjpg2.findIndex(item => item.id == ctx.from.id)].photo},{type: 'photo', media: pathjpg3[pathjpg3.findIndex(item => item.id == ctx.from.id)].photo},
      {type: 'photo', media: pathjpg4[pathjpg4.findIndex(item => item.id == ctx.from.id)].photo}],{disable_notification: true})

let picshop1 = [{type: 'photo', media: pathjpg1[pathjpg1.findIndex(item => item.id == ctx.from.id)].photo}, 
{type: 'photo', media: pathjpg2[pathjpg2.findIndex(item => item.id == ctx.from.id)].photo},{type: 'photo', media: pathjpg3[pathjpg3.findIndex(item => item.id == ctx.from.id)].photo},
{type: 'photo', media: pathjpg4[pathjpg4.findIndex(item => item.id == ctx.from.id)].photo}]

      await ctx.telegram.sendMessage(ctx.chat.id, description[description.findIndex(item => item.id == ctx.from.id)].description + '\nInfo:\n' +
      delivery[delivery.findIndex(item => item.id == ctx.from.id)].delivery + '\nSeller: @' + ctx.from.username + '\n💵 Price: $' + price[price.findIndex(item => item.id == ctx.from.id)].price,
      (Markup.inlineKeyboard(
        [
             [Markup.button.callback('Delete and start over', 'btn_startPhotoAdd')],
             [Markup.button.callback('Publish', 'btn_publishshop')]
        ])),{disable_notification: true}
        )

        let textshop1 = description[description.findIndex(item => item.id == ctx.from.id)].description + '\nInfo:\n' +
        delivery[delivery.findIndex(item => item.id == ctx.from.id)].delivery + '\nSeller: @' + ctx.from.username + '\n💵 Price: $' + price[price.findIndex(item => item.id == ctx.from.id)].price 

        picshop[picshop.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id,  pic: picshop1})
        textshop[textshop.findIndex(item => item.id == ctx.from.id)] = ({id: ctx.from.id,  tex: textshop1})
       

      prev_shop_action[([(prev_shop_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_shop_action: 'step_0'})
    }
   else {
    }}}
    catch(e) {console.log('shop add error2 :' + e)
    await ctx.replyWithHTML(errorcatch)}
})
  bot.action ('btn_infoProduct3', async (ctx) => {
    try{
    let m = username1.findIndex(item => item.id == ctx.from.id)
    if (m != -1) {username1.splice(username1.findIndex(item => item.id == ctx.from.id),1)};
    username1.push({id: ctx.from.id, username1: ctx.from.username})
  
    emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
    end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 0})
  
    if (username1[([(username1.findIndex(item => item.id == ctx.from.id))])].username1 == undefined){
      await ctx.reply(nousername)
    }
  else{
    if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0"){ 
      await ctx.reply(`The cost of ${nameoftype} $`)
      prev_shop_action[([(prev_shop_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_shop_action: 'step_7'})
    }
   else {
    }}}
    catch(e) {console.log('shop add error2 :' + e)
    await ctx.replyWithHTML(errorcatch)}
})
  bot.action ('btn_infoProduct2', async (ctx) => {
    try{
    let m = username1.findIndex(item => item.id == ctx.from.id)
    if (m != -1) {username1.splice(username1.findIndex(item => item.id == ctx.from.id),1)};
    username1.push({id: ctx.from.id, username1: ctx.from.username})
  
    emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
    end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 0})
  
    if (username1[([(username1.findIndex(item => item.id == ctx.from.id))])].username1 == undefined){
      await ctx.reply(nousername)
    }
  else{
    if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0"){ 
      await ctx.reply(`${nameoftype} information, material, production time, dimensions, delivery options and something else if necessary`)
      prev_shop_action[([(prev_shop_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_shop_action: 'step_6'})
    }
   else {
    }}}
    catch(e) {console.log('shop add error2 :' + e)
    await ctx.replyWithHTML(errorcatch)}
})
  bot.action ('btn_infoProduct1', async (ctx) => {
    try{
    let m = username1.findIndex(item => item.id == ctx.from.id)
    if (m != -1) {username1.splice(username1.findIndex(item => item.id == ctx.from.id),1)};
    username1.push({id: ctx.from.id, username1: ctx.from.username})
  
    emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
    end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 0})
  
    if (username1[([(username1.findIndex(item => item.id == ctx.from.id))])].username1 == undefined){
      await ctx.reply(nousername)
    }
  else{
    if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0"){ 
      await ctx.reply(`Name of ${nameoftype}`)
      prev_shop_action[([(prev_shop_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_shop_action: 'step_5'})
    }
   else {
    }}}
    catch(e) {console.log('shop add error2 :' + e)
    await ctx.replyWithHTML(errorcatch)}
    
})
  bot.action ('btn_photo_add_3', async (ctx) => {
    try{
    let m = username1.findIndex(item => item.id == ctx.from.id)
    if (m != -1) {username1.splice(username1.findIndex(item => item.id == ctx.from.id),1)};
    username1.push({id: ctx.from.id, username1: ctx.from.username})
  
    emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
    end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 0})
  
    if (username1[([(username1.findIndex(item => item.id == ctx.from.id))])].username1 == undefined){
      await ctx.reply(nousername)
    }
  else{
    if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0"){ 
      await ctx.reply(`Choose a photo for ${nameoftype} 4/4`)
      prev_shop_action[([(prev_shop_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_shop_action: 'step_4'})
    }
   else {
    }}}
    catch(e) {console.log('shop add error2 :' + e)
    await ctx.replyWithHTML(errorcatch)}
})
  bot.action ('btn_photo_add_2', async (ctx) => {
    try{
    let m = username1.findIndex(item => item.id == ctx.from.id)
    if (m != -1) {username1.splice(username1.findIndex(item => item.id == ctx.from.id),1)};
    username1.push({id: ctx.from.id, username1: ctx.from.username})
  
    emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
    end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 0})
  
    if (username1[([(username1.findIndex(item => item.id == ctx.from.id))])].username1 == undefined){
      await ctx.reply(nousername)
    }
  else{
    if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0"){ 
      await ctx.reply(`Choose a photo for ${nameoftype} 3/4`)
      prev_shop_action[([(prev_shop_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_shop_action: 'step_3'})
    }
   else {
    }}}
    catch(e) {console.log('shop add error2 :' + e)
    await ctx.replyWithHTML(errorcatch)}
})
  bot.action ('btn_photo_add_1', async (ctx) => {
    try{
    let m = username1.findIndex(item => item.id == ctx.from.id)
    if (m != -1) {username1.splice(username1.findIndex(item => item.id == ctx.from.id),1)};
    username1.push({id: ctx.from.id, username1: ctx.from.username})
  
    emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
    end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 0})
  
    if (username1[([(username1.findIndex(item => item.id == ctx.from.id))])].username1 == undefined){
      await ctx.reply(nousername)
    }
  else{
    if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0"){ 
      await ctx.reply(`Choose a photo for ${nameoftype} 2/4`)
      prev_shop_action[([(prev_shop_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_shop_action: 'step_2'})
    }
   else {
    }}}
    catch(e) {console.log('shop add error2 :' + e)
    await ctx.replyWithHTML(errorcatch)}
})
  bot.action ('btn_startPhotoAdd', async (ctx) => {
    try{

      let logonad = await Patreon.find({profiledating: 'profiledating', email:  bdinfo[([( bdinfo.findIndex(item => item.id == ctx.from.id))])].email})
      console.log('ENTER registered email '+ logonad.length)
      let logonadlength = logonad.length
      if (logonadlength == 1) {
        if (bazaall.includes(bdinfo[([(bdinfo.findIndex(item => item.id == ctx.from.id))])].email)){

      let timenow = ((Date.now())/1000).toFixed(0)
      
      console.log('timenow : '+ timenow)

      bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

      let timechek = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].publishtime
      if (timechek == -1) {await Patreon.updateOne({profiledating: 'profiledating', id: ctx.from.id}, {publishtime: (Number(timenow) - Number(intervalpublish))})} 
      
      bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)] = await Patreon.findOne({id: ctx.from.id})

      let time = bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].publishtime
      console.log('time: '+ time)

      let time1 = Number(time) + Number(intervalpublish)
      console.log('time1: '+ time1)
      let timeend = ((Number(time1) - Number(timenow))/3600).toFixed(0)
      console.log('timeend : '+ timeend)

      if (bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop < 5) {
        if(Number(timenow) - Number(time1) > intervalpublish){

    let m = username1.findIndex(item => item.id == ctx.from.id)
    if (m != -1) {username1.splice(username1.findIndex(item => item.id == ctx.from.id),1)};
    username1.push({id: ctx.from.id, username1: ctx.from.username})
  
    emailon[([(emailon.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, emailon: 0})
    end1[([(end1.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, end1: 0})
  
    if (username1[([(username1.findIndex(item => item.id == ctx.from.id))])].username1 == undefined){
      await ctx.reply(nousername)
    }
  else{
    if ((end1[(end1.findIndex(item => item.id == ctx.from.id))].end1) == "0"){ 
      await ctx.reply(`Choose a main photo for ${nameoftype}`)
      prev_shop_action[([(prev_shop_action.findIndex(item => item.id == ctx.from.id))])] = ({id: ctx.from.id, prev_shop_action: 'step_1'})
    }
   else {
    }}}
    else {ctx.replyWithHTML(`You can post the next listing in ${timeend} hours\n${restartbtn}`,
    Markup.inlineKeyboard(
      [
         [Markup.button.callback(`${yourlist} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop}${allavaiablecount}`, 'list_listing')]
      ]))}
  }
  else {ctx.replyWithHTML(`You already have 5 listings! If you need more contact us @ShibaripandaClubBot\n${restartbtn}`,
  Markup.inlineKeyboard(
    [
       [Markup.button.callback(`${yourlist} ${bdinfo[bdinfo.findIndex(item => item.id == ctx.from.id)].shop}${allavaiablecount}`, 'list_listing')]
    ]))}
  }
else {ctx.replyWithHTML(`${meserrorenter}\n${restartbtn}`)}
}
else {ctx.replyWithHTML(`${meserrorenter2}\n${restartbtn}`)}
}

    catch(e) {console.log('shop add error1 :' + e)
    await ctx.replyWithHTML(errorcatch)}
})
bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))