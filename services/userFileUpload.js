// services/userFileUpload.js
const path = require("node:path");
const crypto = require("node:crypto");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = path.join(__dirname, "../public/img/users");
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const randomString = crypto.randomBytes(8).toString("hex");
    const extension = path.extname(file.originalname);
    const filename = "user-" + randomString + extension;
    cb(null, filename);
  },
});

const userFileUpload = multer({ storage });

module.exports = userFileUpload;