const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

//TODO

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})

app.get("/musicians", async (req, res) => {
    const result = await Musician.findAll();
    res.json(result);
});

app.get("/musicians/:id", async (req, res) => {
    const result = await Musician.findByPk(req.params.id);
    res.json(result);
});