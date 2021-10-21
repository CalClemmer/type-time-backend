// I need to... regex to break it into lines first.
// Then add each line to mongoose database
// Then get back the json file from mongoose
let beeScript = require("./models/text_data/beeMovie");
const { Text } = require("./models");

// regexing the data into submission

// replace line breaks, remove excess spaces, remove -'s
beeScript = beeScript.replace(/(\r\n|\n|\r)/gm, " ");
beeScript = beeScript.replace(/\s\s+/g, " ");
beeScript = beeScript.replace(/-/g, "");

// break on . ? and !, using special care to preserve ...

beeScript = beeScript.replace(/\.{3}/g, "|@");
beeScript = beeScript.replace(/\./g, ".@");
beeScript = beeScript.replace(/\|/g, "...");
beeScript = beeScript.replaceAll("!", "!@");
beeScript = beeScript.replaceAll("?", "?@");

beeScript = beeScript.split(/@/g); // has quotes at beginning an end and a weird space. Need to fix.
//Delete everything before the first letter, delete the last quote
for (let i = 0; i < beeScript.length; i++) {
  //   beeScript[i] = beeScript[i].replace(/^\s+/, "");
  //   beeScript[i].replace(/[', "]$/, ""); // i'm not sure the quotes at the end actually exists
}

// console.log(beeScript);

// combine sentences that are too small
// console.log("Beginning length", beeScript.length);
for (let i = 0; i < beeScript.length; i++) {
  // joining together sentences until they're greater than 140 chars worth of text
  beeScript[i] = beeScript[i].replace(/^\s+/, "");
  beeScript[i] = beeScript[i].replace(/\s{2}/, " ");
  if (beeScript[i].length < 140) {
    beeScript[i] = beeScript[i] + beeScript[i + 1];
    beeScript.splice(i + 1, 1);
    i--;
  }
}
// lazy way to fix the trail of undefined left by the for loop

beeScript[312] =
  "All right. Take ten, everybody. Wrap it up, guys. I had virtually no rehearsal for that.";
// console.log("End Length", beeScript.length);

// console.log(beeScript[312]);

// convert to JSON
for (let i = 0; i < beeScript.length; i++) {
  beeScript[i] = { text: beeScript[i], genre: "bee" };
}

console.log(beeScript[312]);
// Insert, careful!
// \/ ONLY RUN ONCE TO AVOID DUPLICATES \/

// Text.insertMany(beeScript, function (err, result) {
//   if (err) {
//     console.log("Error: No worky");
//     console.log(err);
//   } else {
//     console.log("Sun's shining on you, inserted successfully");
//   }
// });
