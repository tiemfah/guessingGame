const express = require("express");

const StageCtrl = require("../controllers/stage-ctrl");

const router = express.Router();

router.get("/stage", StageCtrl.getStages);
router.get("/stage/:id", StageCtrl.getStageById)
router.post("/stage", StageCtrl.createStage);

module.exports = router;
