console.log('the bot is starting')
var Twit = require('twit');
var https = require('https');
var config = require('./config.js');

// console.log(config)
//API CALL TO CALL RANDOM WORDS
var randomNounURL = "https://api.wordnik.com/v4/words.json/randomWord?" +
  "&excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&" +
  "&includePartOfSpeech=noun" +
  "&minLength=5&maxLength=-1" +
  "&api_key=327024a205c77c21e0a47194bc0226ec31d3fe713780479f4";


// A random Adjective
var randomAdjURL = "https://api.wordnik.com/v4/words.json/randomWord?" +
  "&includePartOfSpeech=adjective" +
  "&minLength=5&maxLength=-1" +
  "&api_key=327024a205c77c21e0a47194bc0226ec31d3fe713780479f4";


//
//
//
// https.get(randomNounURL, res => {
//
// var randomNoun = '';
//
//   res.on('data', data => {
//     console.log(data)
//     body += data;
//   })
//
//   res.on('end', () => console.log(randomNoun))
// }).on('error', error => console.error(error.message));
//
// console.log(randomNoun)


var T = new Twit(config);
//GET TWEET
// var params = { q: 'eggforlunch', count: 5 };
//
// T.get('search/tweets', params, gotData);
//
//
// function gotData(err, data, response) {
//   var tweets = data.statuses;
//   for (var i = 0; i < tweets.length; i++) {
//     console.log(tweets[i].text);
//   }
// }


//Setting up a user stream

var stream = T.stream('user');

//Anytime someone follows me

stream.on('follow', followed);

function followed(event) {
  var name = event.source.name;
  var screenName = event.source.screen_name;

  tweetReply('@' + screenName + " what's your aesthetic?")

}

var ramNoun = https.get(randomNounURL, function(response) {
  console.log(response);
});


function getJSON(url, gotData) {
  https.get(randomAdjURL, function(response) {
    var body = '';

    response.on('data', function(data){
      console.log(data);
    })
  })
}

//
// function getJSON(url, gotData) {
//   https.get(url, res => {
//
//     var body = '';
//
//     res.on('data', function data() {
//       console.log(data)
//       body += data;
//     })
//
//     res.on('end', console.log(body))
//   }).on('error', error => console.error(error.message));
// }
//
//
// getJSON(randomNounURL, gotData())
//
//
// function gotData(data) {
//   console.log(data)
// }
//
// function wordnik(where, url) {
//   getJSON(url, gotData);
//   function gotData(data) {
//     var word = data.word;
//   }
// }
//
// function randomWord() {
//   wordnik('words', randomNounURL);
// }
//
// var noun = randomWord();
//
//  console.log(noun, 'NOUN')

//
// function gotData(data){
//   console.log(data);
// }
//
// console.log(gotData())

// var nounRes=  getJSON(randomNounURL);
//   console.log(nounRes, "BOTRESULT")



// tweetIt();

// setInterval(tweetIt, 1000*60*30)

function tweetIt() {

  var tweet = {
    status: 'My aesthetic?' + Adj + Noun
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log('something went wrong');
    } else {
      console.log('WORKS')
    }
    console.log(data)
  }
}

//REPLY TO FOLLOWS

function tweetReply(txt) {
  var tweet = {
    status: txt
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log('something went wrong');
    } else {
      console.log('FOLLOWED ME')
    }
    console.log(data)
  }
}
