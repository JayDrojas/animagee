const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const db = require('../../db/models');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Image, Comment, User } = db;

const productNotFoundError = (id) => {
  const err = Error('Image not found');
  err.errors = [`Image with id of ${id} could not be found.`];
  err.title = 'Image not found.';
  err.status = 404;
  return err;
};

const validateImage = [
  check('imageUrl')
    .exists({ checkFalsy: true })
    .withMessage('Please provid an image url.'),
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a content or title.'),
  handleValidationErrors
];

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const images = await Image.findAll();
    console.log(images)
    return res.json({ images });
  })
);

router.get(
  '/:id(\\d+)',
  asyncHandler(async (req, res, next) => {
    const image = await Image.findByPk(req.params.id);
    if (image) {
      return res.json({ image });
    } else {
      next(productNotFoundError(req.params.id));
    }
  })
);

router.get(
  '/:id(\\d+)/comments',
  asyncHandler(async function (req, res) {
    const comments = await Comment.findAll({
      where: {
        imageId: +req.params.id,
      },
      include: User
    })
    return res.json(comments);
  })
)

router.post('/:id(\\d+)/comments', asyncHandler(async function (req, res) {
  const newComment = await Comment.create({
    ...req.body,
    imageId: +req.params.id
  })
  // const comment = await Comment.findByPk(newComment.id);
  const comment = await Comment.findOne({
    where: {
      id: newComment.id,
    },
    include: User
  })

  return res.json(comment)
})
)


router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
  const image = await Image.findByPk(req.params.id);
  image.content = req.body.content || image.content;
  image.imageUrl = req.body.imageUrl || image.imageUrl;

  await image.save();
  res.json({ image })
}))

router.post('/', requireAuth, validateImage, asyncHandler(async (req, res) => {
  let { content, imageUrl, userId, albumId } = req.body;
  if (!albumId) albumId = null;
  console.log({ userId })
  const image = await Image.create({ content, imageUrl, userId, albumId });

  return res.json({
    image
  })
}))

router.delete(
  '/:id(\\d+)',
  asyncHandler(async (req, res, next) => {
    const image = await Image.findByPk(req.params.id);
    if (image) {
      await image.destroy();
      res.status(204).end();
    } else {
      next(productNotFoundError(req.params.id));
    }
  })
);


module.exports = router;
