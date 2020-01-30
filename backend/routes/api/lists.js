const express = require("express");
const router = express.Router();

// Load List model
const List = require("../../models/List");

//Load authentication middleware
const auth = require("../../middleware/auth");

// @route GET api/lists/test
// @description tests lists route
// @access Public
router.get("/test", (req, res) => res.send("testing list route!"));

// @route GET api/lists
// @description Get all lists
// @access Public
router.get("/", auth, (req, res) => {
  List.find({ owner: req.user.username })
    .then(lists => res.json(lists))
    .catch(err => res.status(404).json({ nolistsfound: "No Lists found" }));
});

// @route GET api/lists/:id
// @description Get single list by id
// @access Public
router.get("/:id", auth, (req, res) => {
  List.findOne({ owner: req.user.username, _id: req.params.id })
    .then(list => res.json(list))
    .catch(err => res.status(404).json({ nolistfound: "No List found" }));
});

// @route GET api/list
// @description add/save list
// @access Public
router.post("/", auth, (req, res) => {
  const owner = req.user.username;
  req.body.owner = owner;
  List.create(req.body)
    .then(list => res.json({ list: list, msg: "List added successfully" }))
    .catch(err => res.status(400).json({ error: "Unable to add this list" }));
});

// @route GET api/lists/:id
// @description Update list
// @access Public
router.put("/:id", auth, (req, res) => {
  List.findOneAndUpdate(
    { _id: req.params.id, owner: req.user.username },
    req.body
  )
    .then(list => res.json({ msg: "Updated successfully" }))
    .catch(err =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/lists/:id
// @description Delete list by id
// @access Public
router.delete("/:id", auth, (req, res) => {
  List.findOneAndRemove(
    { owner: req.user.username, _id: req.params.id },
    req.body
  )
    .then(list => res.json({ mgs: "List entry deleted successfully" }))
    .catch(err => res.status(404).json({ error: "No such a list" }));
});

module.exports = router;
