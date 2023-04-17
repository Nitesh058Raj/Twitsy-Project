import express from 'express';
import { createTweet, getTweet, getTweets } from '../controller/tweet.controller.js';
import { createUser } from '../controller/user.controller.js';

const Router = express.Router();

Router.route('/tweet')
    .post(createTweet)
    .get(getTweet);

Router.route('/tweet/:id')
    .get(getTweets);

Router.route('/user')
    .post(createUser);

export default Router;