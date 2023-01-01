const express = require('express')
const router = express.Router()
const { uuid }= require('uuidv4')

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.data.messages))
})

router.get('/:messageId', (req, res) => {
    return res.send(req.context.data.messages[req.params.messageId])
})

router.post('/', (req, res) => {
    const id = uuid()
    const message = {
        id,
        text: req.body.text,
        userId: req.context.me.id
    }

    req.context.data.messages[id] = message

    return res.send(message)
})


router.delete('/:messageId', (req, res) => {
	const {
	  [req.params.messageId]: message,
	    ...otherMessages
	} = req.context.data.messages;

	req.context.data.messages = otherMessages;

	return res.send(message);

});

module.exports = router