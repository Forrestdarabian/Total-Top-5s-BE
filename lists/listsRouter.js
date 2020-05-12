const express = require("express");
const router = express.Router();

const Lists = require("./listsModel");

//GET Request
router.get("/", (req, res) => {
  Lists.find()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(500).json({
        err: err,
        message: "Couldn't Retrieve Lists!",
      });
    });
});

//GET Request with certain item
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Lists.findById(id)
    .then((item) => {
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({
          message: "The list with the specified ID does not exist.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        err: err,
        message: "The item information could not be retrieved.",
      });
    });
});

//POST Request
router.post("/", (req, res) => {
  const {
    category,
    subcategory,
    nameFive,
    descriptionFive,
    nameFour,
    descriptionFour,
    nameThree,
    descriptionThree,
    nameTwo,
    descriptionTwo,
    name,
    description,
  } = req.body;
  Lists.insert(req.body)
    .then((item) => {
      if (item) {
        res.status(201).json(item);
      } else {
        res.status(400).json({
          message: "Please provide all fields for the list.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        err: err,
        message: "There was an error saving list to the database.",
      });
    });
});

//PUT Request
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const {
    category,
    subcategory,
    nameFive,
    descriptionFive,
    nameFour,
    descriptionFour,
    nameThree,
    descriptionThree,
    nameTwo,
    descriptionTwo,
    name,
    description,
  } = req.body;
  if (
    category &&
    subcategory &&
    nameFive &&
    descriptionFive &&
    nameFour &&
    descriptionFour &&
    nameThree &&
    descriptionThree &&
    nameTwo &&
    descriptionTwo &&
    name &&
    description
  ) {
    Lists.update(id, req.body)
      .then((updateditem) => {
        if (updateditem) {
          res.status(200).json(updateditem);
        } else {
          res.status(404).json({
            message: "The list with the specified ID does not exist.",
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          err: err,
          message: "The list information could not be modified.",
        });
      });
  }
});

//DELETE Request
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Lists.remove(id)
    .then((item) => {
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({
          message: "The list with the specified ID does not exist.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        err: err,
        message: "The list could not be removed.",
      });
    });
});

module.exports = router;
