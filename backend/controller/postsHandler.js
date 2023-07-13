const thePostSchema = require ('../model/postsModel.js');

const getAllPosts = async (req, res) => {
    try {
        let posts = await thePostSchema.find({});
        res.status(200).json(posts);     
    } catch (error) {
        res.status(400).json(error);        
    }
}

const createNewPost = async (req, res) => {
    try {
        await thePostSchema.create(req.body);
        res.status(200).json("Post added successfully");
    } catch (error) {
        res.status(400).json(error);        
    }
}

const deletePost = async (req, res) => {
    try {
        await thePostSchema.findOneAndDelete({_id: req.params.id});
        res.status(200).json(`post with id # ${req.params.id} deleted successfully`);
    } catch (error) {
        res.status(400).json(error);        
    }
}

module.exports = {
    getAllPosts,
    createNewPost,
    deletePost,
}