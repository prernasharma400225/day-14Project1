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
 * get all the posts created by the user that the request come from.also
 */
postRouter.get("/", identifyUser ,postController.getPostController)


/**
 * GET /api/posts/details/:postid
 * - return an detail about specifc post with the id. also check wheather the post belongs to the user that request come from
 */
postRouter.get("/details/:postId", identifyUser , postController.getPostDetailsController)



/**
 * Post /api/posts/like/:postid
 * like a post with the id provided in the request params.
 */
postRouter.post("/like/:postId", identifyUser, postController.likePostController)


/**
 * @route Get/ /api/posts/feed
 * @description get all the created in the DB
 * @access private
 */

postRouter.get("/feed",identifyUser, postController.getFeedController)


module.exports = postRouter