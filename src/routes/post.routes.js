const express = require("express")
const postRouter = express.Router()
const postController = require("../controller/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser = require("../middlewares/auth.middleware")


/**
 * Post /api/posts
 */

postRouter.post('/', upload.single("image"), identifyUser ,postController.createPostController)

/**
 * GET/ api/posts
 */

postRouter.get("/", identifyUser ,postController.getPostController)


/**
 * GET /api/posts/details/:postid
 * - return an detail about specifc post with the id. also check wheather the post belongs to the user that request come from
 */

postRouter.get("/details/:postId", identifyUser , postController.getPostDetailsController)


module.exports = postRouter