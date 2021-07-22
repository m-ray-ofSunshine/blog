const router = require('express').Router();
const { Post, User } = require('../models');

router.get("/", async (req, res)=> {
    try {
        const postData = await Post.findAll({
            include:[{model: User,}]
        })

        const posts = postData.map((post)=>post.get({plain:true}));
        console.log(posts);
        res.render("homepage", {posts})

    } catch (err) {
        res.status(404).json(err)
        
    }
})

module.exports = router;