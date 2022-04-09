const express = require('express');
const asyncHandler = require('express-async-handler');
const { Comment, User } = require("../../db/models");
const router = express.Router();

const productNotFoundError = (id) => {
  const err = Error('Comment not found');
  err.errors = [`Comment with id of ${id} could not be found.`];
  err.title = 'Comment not found.';
  err.status = 404;
  return err;
};

router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
  // const comment = await Comment.findByPk(req.params.id)
  const comment = await Comment.findOne({
    where: {
      id: req.params.id,
    },
    include: User
  })

  comment.content = req.body.content || comment.content;

  await comment.save();
  res.json({ comment })
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);

  if (comment) {
    await comment.destroy();
    res.status(204).end();
  } else {
    next(productNotFoundError(req.params.id))
  }
})
);

module.exports = router;
