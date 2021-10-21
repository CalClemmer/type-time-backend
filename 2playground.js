const { Text } = require("./models"); // import text

// Text.remove({}, function (err) {
//   console.log("Text Database Dropped");
// });

async function findBee() {
  let bee = await Text.find({});
  console.log(bee);
}

findBee();
