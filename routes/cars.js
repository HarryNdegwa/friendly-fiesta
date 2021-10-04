const express = require("express");
const multer = require("multer");

const { uploadFile } = require("../controllers/cars");

const router = express.Router();
const upload = multer();

router.post("/add-car", async (req, res) => {});
router.post("/add-image", upload.single("file"), async (req, res) => {
  await uploadFile(req, res);
});
router.put("/update-car", async (req, res) => {});
router.get("/", async (req, res) => {});

module.exports = router;
