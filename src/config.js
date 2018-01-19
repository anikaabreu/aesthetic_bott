require('dotenv').config()

module.exports = {
  // consumer_key: 'XxvDaUTOj8elgrRIAUtxWgKJi',
  // consumer_secret:'uzYNK704mfq6G3zHtVQwSvOnLBbC9SlVP9IdGUtJhId08l9u6n',
  // access_token: '787649233599995904-tQoKD4j49e3TfbpnidKbwYoF2wEmkRH',
  // access_token_secret: 'yTXlASSIi5EwP9yQ4wCa1a5XNyGcFrcCPhGFtT8tBtVDT',
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  api_key: process.env.DICTIONARY_KEY
}
