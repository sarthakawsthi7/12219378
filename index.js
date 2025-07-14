const express = require("express");
const {connectToMongoDB} = require("./connect");
const path = require("path");
const urlRoute = require('./routes/url');
const URL = require('./models/url');

const app = express();
const PORT = 8001;
connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(() => console.log('Mongo DB connected'));

app.set("view engine", "ejs");
app.set('views', path.resolve("./view"));

app.get("/test", async(req,res) => {
    const allUrls = await URL.find({});
    return res.render('home');
})


app.use(express.json());
app.use("/url", urlRoute);
app.get('/:shortId', async(req,res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndDelete({
        shortId
    
    }, {$push:{
        visitHistory: {
            timestamp: Date.now(),
        },
    },}
);

res.redirect(entry.redirectURL);
})
app.listen(PORT, () => console.log(`Server Started:${PORT}`));

