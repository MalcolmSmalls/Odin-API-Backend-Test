const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.data.users))
})

router.get('/:userId', (req, res) => {
    return res.send(req.context.data.users[req.params.userId])
})

module.exports = router