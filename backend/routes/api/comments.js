const express = require('express');
const asyncHandler = require('express-async-handler');
const { Comment } = require("../../db/models");

const router = express.Router();

router.put('/:id(\\d+)/comments', asyncHandler( async (res, req) => {
  const commentId = req.body.id;
  delete req.body.id;

  console.log(req.body)
  await Comment.update(req.body, {
    where: { id: commentId},
    returning: true,
    plain: true,
  });

  const comment = await Comment.findByPk(commentId);

  return res.json(comment);
}))

module.exports = router;
