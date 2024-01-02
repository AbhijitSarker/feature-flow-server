const mongoose = require('mongoose');
const CommentSchema = require('../models/commentSchema')
const Comment = new mongoose.model("Comment", CommentSchema);

const createComment = async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        console.log(newComment)
        await newComment.save();

        res.status(200).json({
            message: "Comment was Created successfully!",
            comment: newComment
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
}

const getCommentsByFeatureId = async (req, res) => {
    try {

        const commentsFilter = { featureId: req.query.featureId }
        // Fetch all comments that match the given featureId
        const comments = await Comment.find(commentsFilter);

        res.status(200).json({
            message: "Comment retrieved successfully!",
            comments: comments
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
}

module.exports = {
    createComment,
    getCommentsByFeatureId
}