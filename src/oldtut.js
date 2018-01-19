const Twit = require('twit')
const config = require('./config')
const fs = require('fs')
const bot = new Twit(config)

//POST STATUSES
bot.post('statuses/update', {
  status: 'hello world!'
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`${data.text} tweeted!`)
  }
})

//GET STATUSES
bot.get('statuses/home_timeline', {
  count: 1
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

//RETWEET
// bot.post('statuses/retweet/:id', {
//   id: '860828247944253440'
// }, (err, data, response) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(`${data.text} retweet success!`)
//   }
// })


//DELETE A TWEET
// bot.post('statuses/destroy/:id', {
//   id: '860900437993676801'
// }, (err, data, response) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(`${data.text} tweet deleted!`)
//   }
// })

//REPLY TO A TWEET
// bot.post('statuses/update', {
//   status: '@ScottDevTweets I reply to you yes!',
//   in_reply_to_status_id: '860900406381211649'
// }, (err, data, response) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(`${data.text} tweeted!`)
//   }
// })

//EXAMPLE TO UPLOAD A PICTURE TO TWITTER

// function getPhoto() {
//   const parameters = {
//     url: 'https://api.nasa.gov/planetary/apod',
//     qs: {
//       api_key: process.env.NASA_KEY
//     },
//     encoding: 'binary'
//   }
//   request.get(parameters, (err, respone, body) => {
//     body = JSON.parse(body)
//     saveFile(body, 'nasa.jpg')
//   })
// }

// function saveFile(body, fileName) {
//   const file = fs.createWriteStream(fileName);
//   request(body).pipe(file).on('close', err => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('Media saved!')
//       const descriptionText = body.title;
//       uploadMedia(descriptionText, fileName)
//     }
//   })
// }

//Then uploadMedia to upload media to Twitter before we can post it. This had me stumped for a bit as I have my files in a srcfolder. If you have your bot files nested in folders, then you will need to do the same if you are struggling with file does not exist errors.

// Add a require to path then use join with the relevant relative file path.

// const path = require('path')
//...
// const filePath = path.join(__dirname, '../' + fileName)
//
// function uploadMedia(descriptionText, fileName) {
//   const filePath = path.join(__dirname, `../${fileName}`)
//   console.log(`file PATH ${filePath}`)
//   bot.postMediaChunked({
//     file_path: filePath
//   }, (err, data, respone) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(data)
//       const params = {
//         status: descriptionText,
//         media_ids: data.media_id_string
//       }
//       postStatus(params)
//     }
//   })
// }

// Then with the params we created in uploadMedia we can post with a straightforward .post('statuses/update'...
// function postStatus(params) {
//   bot.post('statuses/update', params, (err, data, respone) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('Status posted!')
//     }
//   })
// }
