const express = require("express");
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;
const app = express();
app.use(express.json());

const musicianRouter = require("./routes/musicians");
app.use("/musicians", musicianRouter);

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})