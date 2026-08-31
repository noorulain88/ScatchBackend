const express = require('express');
const router = express.Router();
const upload = require('../config/multer-config');
router.post('/create', upload.single('image'), async function (req, res) {
    // imgae is ur image name and must have multipart in post
    res.send(req.file);
});

module.exports = router;
