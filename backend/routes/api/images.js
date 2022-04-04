const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const db = require('../../db/models');
const { Image } = db;

const productNotFoundError = (id) => {
  const err = Error('Image not found');
  err.errors = [`Image with id of ${id} could not be found.`];
  err.title = 'Image not found.';
  err.status = 404;
  return err;
};

const handleValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array().map((error) => error.msg);

    const err = Error('Bad request.');
    err.errors = errors;
    err.status = 400;
    err.title = 'Bad request.';
    return next(err);
  }
  next();
};

// const validateImage = [
//   check('image')
//     .notEmpty()
//     .isURL({ require_protocol: false, require_host: false }),
//   check('name').not().isEmpty(),
//   check('price').isInt(),
//   handleValidationErrors
// ];

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


module.exports = router;
