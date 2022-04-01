const { Router } = require('express');
const { check } = require('express-validator');
const UploadController = require('../controllers/upload.controller');
const { allowedCollections } = require('../helpers/db.validators');
const { validateFields } = require('../middlewares');

const router = new Router();

router.post('/', UploadController.uploadDoc);

router.put('/:collection/:id', [
    check('id', 'invalid id').isMongoId(),
    check('collection').custom(c => allowedCollections(c, ['users', 'product'])),
    validateFields
], UploadController.updateImg);

module.exports = router;