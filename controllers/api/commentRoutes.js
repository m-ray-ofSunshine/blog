const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  let postUrl = req.headers.referer
  let postId = postUrl.slice(27);
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      post_id : postId
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;