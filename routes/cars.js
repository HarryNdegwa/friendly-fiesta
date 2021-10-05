const express = require("express");
const multer = require("multer");

const { uploadFile, addCar, updateCar } = require("../controllers/cars");
const verifyCarOwner = require("../middlewares/verifyCarOwner");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();
const upload = multer();

router.post("/add-car", [verifyToken], async (req, res) => {
  await addCar(req, res);
});
router.post("/add-image", upload.single("file"), async (req, res) => {
  await uploadFile(req, res);
});
router.put(
  "/update-car/:id",
  [verifyToken, verifyCarOwner],
  async (req, res) => {
    await updateCar(req, res);
  }
);
router.get("/", async (req, res) => {});

module.exports = router;
