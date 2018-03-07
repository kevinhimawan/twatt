const express = require('express')
const Router = express.Router()

const { getAllTimeLine, searchTimeLine, postTweet } = require('../controllers/oath.controller')

Router.get('/', getAllTimeLine)
Router.post('/search', searchTimeLine)
Router.post('/post',postTweet)

module.exports = Router
