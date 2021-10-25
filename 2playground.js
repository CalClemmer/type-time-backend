const { Text } = require("./models"); // import text

const beeMovieJson = require("./models/text_data/beeMovie.json");

// Text.remove({}, function (err) {
//   console.log("Text Database Dropped");
// });

async function findBee() {
  let bee = await Text.find({});
  console.log(bee);
}

// Text.insertMany(beeMovieJson, function (err, result) {
//   if (err) {
//     console.log(err);
//     console.log("It didn't insert...");
//   } else {
//     console.log("We got the bee, we got the bee (successfully inserted)");
//   }
// });

findBee();
