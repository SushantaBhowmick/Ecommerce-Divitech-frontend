const cloudinary = require('cloudinary');


cloudinary.config({
    cloud_name: process.env.API_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

exports.cloudinaryUploadingImg = async (fileToUploads) => {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(fileToUploads, (result) => {
            resolve({
                url: result.secure_url,
            }, {
                resourse_type: "auto",
            })
        })
    })
}