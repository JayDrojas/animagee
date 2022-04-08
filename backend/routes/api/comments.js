const express = require('express');
const asyncHandler = require('express-async-handler');
const { Comment } = require("../../db/models");

const router = express.Router();

router.put('/:id(\\d+)', asyncHandler( async (req, res) => {
  const comment = await Comment.findByPk(req.params.id)

  comment.content = req.body.content || comment.content;

  await comment.save();
  res.json({ comment })
}))

module.exports = router;
