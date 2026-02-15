const express = require("express")
const postRouter = express.Router()
const postController = require("../controller/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })


/**
 * Post /api/posts
 */

postRouter.post('/', upload.single("image") ,postController.createPostController)

/**
 * GET/ api/posts
 */

postRouter.get("/",postController.getPostController)


module.exports = postRouter