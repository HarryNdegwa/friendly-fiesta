const express = require("express");
const multer = require("multer");

const { uploadFile, addCar } = require("../controllers/cars");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();
const upload = multer();

router.post("/add-car", [verifyToken], async (req, res) => {
  await addCar(req, res);
});
router.post("/add-image", upload.single("file"), async (req, res) => {
  await uploadFile(req, res);
});
router.put("/update-car", async (req, res) => {});
router.get("/", async (req, res) => {});

module.exports = router;
