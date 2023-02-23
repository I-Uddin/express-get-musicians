const express = require("express");
const { Musician } = require("../Musician");
const router = express.Router();

router.get("/", async (req, res) => {
    const result = await Musician.findAll();
    res.json(result);
});

router.get("/:id", async (req, res) => {
    const result = await Musician.findByPk(req.params.id);
    res.json(result);
});

router.post("/", async (req, res) => {
    const result = await Musician.create(req.body);
    res.json(result);
});

router.put("/:id", async (req, res) => {
    const result = await Musician.findByPk(req.params.id);
    let temp = await result.update({
        name: req.body.name,
        instrument: req.body.instrument
    });
    res.json("Put Success!");
})

router.delete("/:id", async (req, res) => {
    const result = await Musician.findByPk(req.params.id);
    await result.destroy();
    res.json("Delete Success!");
});





module.exports = router;