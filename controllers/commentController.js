const mongoose = require('mongoose');
const CommentSchema = require('../models/commentSchema')
const FeatureSchema = require('../models/featureSchema')
const Comment = new mongoose.model("Comment", CommentSchema);
const Feature = new mongoose.model("Feature", FeatureSchema);

const createComment = async (req, res) => {
    const { featureId } = req.body;
    const newComment = new Comment({
        ...req.body,
        feature: featureId
    });

    try {
        const comment = await newComment.save();
        await Feature.updateOne({
            _id: featureId,
        }, {
            $push: {
                comments: comment._id
            }
        });
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

        res.status(200).json({ comments });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
}

const updateComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        console.log(req.params);
        const comment = await Comment.findOneAndUpdate({ _id: commentId }, req.body, {
            new: true,
            runValidators: true,
        })

        res.status(200).json({ comment })
    } catch {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
}

const deleteComment = async (req, res) => {
    const { featureId, commentId } = req.params;
    try {
        const comment = await Comment.findOneAndDelete({ _id: commentId });
        await Feature.updateOne({
            _id: featureId,
        }, {
            $pull: {
                comments: commentId
            }
        });
        res.status(200).json({ comment });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
}

module.exports = {
    createComment,
    getCommentsByFeatureId,
    deleteComment,
    updateComment
}