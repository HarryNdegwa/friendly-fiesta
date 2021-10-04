const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

const {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} = require("../constants");

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

exports.uploadFile = async (req, res) => {
  try {
    let streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        let stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    async function upload(req) {
      return await streamUpload(req);
    }

    const data = await upload(req);

    res.status(200).send({ ...data });
  } catch (error) {
    console.log(`error`, error);
    res.status(400).send("Something is wrong");
  }
};
