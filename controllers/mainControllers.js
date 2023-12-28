
const getAllFeatures = (req, res) => {
    res.send('All Features');
}
const getFeature = (req, res) => {
    res.send('All Features');
}
const createFeature = (req, res) => {
    res.send('createFeature');
}
const updateFeature = (req, res) => {
    res.send('updateFeatures');
}
const deleteFeature = (req, res) => {
    res.send('deleteFeature');
}


module.exports = {
    getAllFeatures,
    createFeature,
    updateFeature,
    deleteFeature,
    getFeature
}