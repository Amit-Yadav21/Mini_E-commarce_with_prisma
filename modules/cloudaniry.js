const cloudinary = require("cloudinary").v2;

const cloud = cloudinary.config({
    cloud_name: process.env.CLOUD_NAME || "amitcloudinary",
    api_key: process.env.CLOUDINERY_API_KEY || 823599843918524,
    api_secret: process.env.CLOUDINERY_SECREAT_KEY || "-DY4K2DHuH18sE0zuhwEz8qQhIQ",
    secure: true
})


module.exports = cloudinary;