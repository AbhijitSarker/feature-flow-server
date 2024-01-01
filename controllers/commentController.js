const mongoose = require('mongoose');
const commentSchema = require('../models/commentSchema');
const Comment = new mongoose.model("Comment", commentSchema);

const createComment = async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        await newComment.save(); // Use await with save() directly

        res.status(200).json({
            message: "Comment was Created successfully!",
        });
    } catch (err) {
        res.status(200).json({
            error: "There was a server side error!",
        });
    }

}

module.exports = {
    createComment
}