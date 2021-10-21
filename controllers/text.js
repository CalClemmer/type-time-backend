const express = require("express");
const router = express.Router();

const { Text } = require("../models"); // import stuff

// return All reviews
router.get("/test/", async (req, res) => {
  try {
    res.status(200).json({
      reviews: "Text Test Pass",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "There was an error. Please try again.",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    let allText = await Text.find({});

    res.status(200).json({
      text: allText,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "There was an error. Please try again.",
    });
  }
});

module.exports = router;

// router.get("/index/:idx", async (req, res) => {
//   let text = await Text.find({ gameId: req.params.idx });
//   try {
//     res.status(200).json({
//       review: review,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "There was an error. Please try again.",
//     });
//   }
// });
