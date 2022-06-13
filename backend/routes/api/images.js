const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { singleMulterUpload, singlePublicFileUpload, allowed_file } = require('../../awsS3')

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


router.put('/:id(\\d+)', singleMulterUpload("image"), asyncHandler(async (req, res) => {
  let { content, userId, albumId } = req.body;
  const image = await Image.findByPk(req.params.id);

  if(!req.file) {
    if (image) {
      image.content = content;
      await image.save();
      return res.json({ image })
    }
  }

  if (!allowed_file(req.file.originalname)) {
    return res.json({ "errors": "file type not permitted" })
  }

  const imageUrlAws = await singlePublicFileUpload(req.file);

  image.content = content || image.content;
  image.imageUrl = imageUrlAws || image.imageUrl;

  await image.save();
  return res.json({ image })
}))

router.post('/', requireAuth, singleMulterUpload("image"), asyncHandler(async (req, res) => {
  let { content, userId, albumId } = req.body;

  if (!allowed_file(req.file.originalname)) {
    return res.json({ "errors": "file type not permitted" })
  }

  const imageUrlAws = await singlePublicFileUpload(req.file);

  const image = await Image.create({ content, imageUrl: imageUrlAws, userId, albumId: null });

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
