const shortid = require("shortid");
const URL = require('../models/url');

async function handlegetAnalytics(req, res) {
  const shortId = req.params.shortId;

  const result = await URL.findOne({ shortId });

  if (!result) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  const history = result.visitedHistory || [];  

  return res.json({
    totalClicks: history.length,
    analytics: history,
  });
}


async function handlegeneratenewShortURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "url is required"})
const shortId = shortid();
await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitedHistory: [],
});
return res.json({id: shortId});
}
module.exports = {
    handlegeneratenewShortURL,
    handlegetAnalytics,
}