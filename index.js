const express = require("express");
const router = require("./router");
const PORT = 8080;
const app = express();
const moongose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

moongose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});
app.use(router);