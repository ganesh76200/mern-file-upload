const { addAvatar, getAllAvatars, addToGallery, destroyUsers, getAllUsers } = require("../controller/userController")

const router = require("express").Router()
router.get("/", getAllAvatars)
router.get("/fetch", getAllUsers)
router.delete("/destroy", destroyUsers)
router.post("/add", addAvatar)
router.post("/add-to-gallery", addToGallery)

module.exports = router