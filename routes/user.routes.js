const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'get API'
    })
});
router.put('/', (req, res) => {
    res.status(200).json({
        msg: 'put API'
    })
});
router.post('/', (req, res) => {
    res.status(200).json({
        msg: 'post API'
    })
});
router.delete('/', (req, res) => {
    res.status(200).json({
        msg: 'delete API'
    })
});

module.exports = router;