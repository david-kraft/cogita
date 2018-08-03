const MongoClient = require('mongodb').MongoClient;
let url = "mongodb://heroku_w0c4bk8c:33mgcrchcjs2oaiffek5js2o8j@ds111082.mlab.com:11082/heroku_w0c4bk8c";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});