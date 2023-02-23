const express = require("express");
const { Musician } = require("../Musician");
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await Musician.findAll();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const result = await Musician.findByPk(req.params.id);
  res.json(result);
});

router.post(
  "/",
  [
    check("name").not().isEmpty().trim(),
    check("instrument").not().isEmpty().trim(),
    check("name").isLength({min:2, max:20})
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.array() });
    } else {
      const result = await Musician.create(req.body);
      res.json(result);
    }
  }
);

router.put("/:id", async (req, res) => {
  const result = await Musician.findByPk(req.params.id);
  let temp = await result.update({
    name: req.body.name,
    instrument: req.body.instrument,
  });
  res.json("Put Success!");
});

router.delete("/:id", async (req, res) => {
  const result = await Musician.findByPk(req.params.id);
  await result.destroy();
  res.json("Delete Success!");
});

module.exports = router;
