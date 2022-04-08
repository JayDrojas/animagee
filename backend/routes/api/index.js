const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const imageRouter = require('./images');
const commentRouter = require('./comments')

router.use('/session', sessionRouter);
router.use('/images', imageRouter);
router.use('/users', usersRouter);
router.use('/comments', commentRouter);

// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
