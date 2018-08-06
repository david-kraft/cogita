const MongoClient = require('mongodb').MongoClient;
let url = "mongodb://heroku_12345678:random_password@ds029017.mLab.com:29017/heroku_12345678";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});