const express = require('express');
const router = express.Router();
const trackController = require('./../controllers/trackController');

router.get('/track', trackController.getTrack);
router.get('/track-list', trackController.getTrackList);
router.get('/track-add', trackController.getTrackAdd);
router.delete('/track/:_id', trackController.deleteTrack);
router.post('/track-add',trackController.postAddTrack);

module.exports = router;