const track = require("./../models/track");

const getTrack = (req, res) => {
    track.find({}, (err, data) => {
        if (err) throw err;
        if (req.query.username != null) {
            res.render("track-list", {
                tracks: data,
                title: "Product List",
                username: req.query.username,
            });
        } else {
            res.render("track-list", {
                tracks: data,
                title: "Product List",
                username: "",
            });
        }
    });
};

const getTrackList = (req, res) => {
    track.find({}, (err, data) => {
        if (err) throw err;
        if (req.query.username != null) {
            res.render("track-list", {
                tracks: data,
                title: "Product List",
                username: req.query.username,
            });
        } else {
            res.render("track-list", {
                tracks: data,
                title: "Product List",
                username: "",
            });
        }
    });
};

const getTrackAdd = (req, res) => {
    track.find({}, (err, data) => {
        if (err) throw err;
        if (req.query.username != null) {
            res.render("track-add", {
                tracks: data,
                title: "Add Track",
                username: req.query.username,
            });
        } else {
            res.render("track-add", {
                tracks: data,
                title: "Add Track",
                username: "",
            });
        }
    });
};

const deleteTrack = (req, res) => {
    track.find({_id: req.params._id}).remove((err, data) => {
        if (err) throw err;
        if (req.query.username != null) {
            res.render("track-add", {
                tracks: data,
                title: "Add Track",
                username: req.query.username,
            });
        } else {
            res.render("track-add", {
                tracks: data,
                title: "Add Track",
                username: "",
            });
        }
    });
};

const postAddTrack = (req, res) => {
    track(req.body).save((err, data) => {
        if (err) throw err;
        if (req.query.username != null) {
            res.render("track-add", {
                tracks: data,
                title: "Track",
                username: req.query.username,
            });
        } else {
            res.render("track-add", {tracks: data, title: "Track", username: ""});
        }
    });
};

module.exports = {
    getTrack,
    getTrackList,
    getTrackAdd,
    deleteTrack,
    postAddTrack
};
