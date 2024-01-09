const mongoose = require('mongoose');
const CommentSchema = require('../models/commentSchema')
const FeatureSchema = require('../models/featureSchema')
const Comment = new mongoose.model("Comment", CommentSchema);
const Feature = new mongoose.model("Feature", FeatureSchema);


// Create a new comment and associate it with a feature
const createComment = async (req, res) => {
    const { featureId } = req.body;
    const newComment = new Comment({
        ...req.body,
        feature: featureId
    });

    try {
        // Save the new comment to the database
        const comment = await newComment.save();

        // Update the associated feature with the new comment ID
        await Feature.updateOne({
            _id: featureId,
        }, {
            $push: {
                comments: comment._id
            }
        });

        // Respond with a success message and the newly created comment
        res.status(200).json({
            message: "Comment was Created successfully!",
            comment: newComment
        });
    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
}


// Get comments by a specific feature ID
const getCommentsByFeatureId = async (req, res) => {
    try {
        const commentsFilter = { featureId: req.query.featureId };

        // Fetch all comments that match the given featureId
        const comments = await Comment.find(commentsFilter);

        // Respond with the fetched comments
        res.status(200).json({ comments });
    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
}


// Update a comment by its ID
const updateComment = async (req, res) => {
    try {
        const { commentId } = req.params;

        // Find and update the comment by the provided commentId with the new data from the request body
        const comment = await Comment.findOneAndUpdate({ _id: commentId }, req.body, {
            new: true,
            runValidators: true,
        })

        // Respond with the updated comment
        res.status(200).json({ comment });
    } catch {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
}

// Delete a comment by its ID and remove its association from the associated feature
const deleteComment = async (req, res) => {
    const { featureId, commentId } = req.params;

    try {
        // Find and delete the comment by the provided commentId
        const comment = await Comment.findOneAndDelete({ _id: commentId });

        // Remove the comment ID from the associated feature's comments array
        await Feature.updateOne({
            _id: featureId,
        }, {
            $pull: {
                comments: commentId
            }
        });

        // Respond with the deleted comment
        res.status(200).json({ comment });
    } catch (err) {
        // Handle any server-side errors and respond with an error message
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