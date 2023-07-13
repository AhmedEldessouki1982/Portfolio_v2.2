const express = require('express');

const postsRoutes = express.Router();

const {getAllPosts, createNewPost, deletePost} = require('../controller/postsHandler.js');


postsRoutes.route("/").get(getAllPosts).post(createNewPost);
postsRoutes.route("/:id").delete(deletePost);

module.exports = postsRoutes;
