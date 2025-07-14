const express = require("express");
const {
  handlegeneratenewShortURL,
  handlegetAnalytics
} = require("../controllers/url");

const router = express.Router();

router.post("/", handlegeneratenewShortURL);
router.get("/analytics/:shortId", handlegetAnalytics);

module.exports = router;
