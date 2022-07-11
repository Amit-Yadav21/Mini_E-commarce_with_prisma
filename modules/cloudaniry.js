const cloudinary = require("cloudinary").v2;

const cloud = cloudinary.config({
    cloud_name: process.env.CLOUD_NAME || "here",
    api_key: process.env.CLOUDINERY_API_KEY || here,
    api_secret: process.env.CLOUDINERY_SECREAT_KEY || "here",
    secure: true
})


module.exports = cloudinary;
