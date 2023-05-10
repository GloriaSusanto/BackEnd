var express = require('express');
var router = express.Router();
const {index, getKode, getName, postLecture, putLecture, deleteLecture} = require('./controller')

/* GET home page. */
router.get("/matakuliah", index);
router.get("/matakuliah/:kode", getKode);
router.get("/matakuliah", getName);
router.post("/matakuliah", postLecture);
router.put("/matakuliah/:kode", putLecture);
router.delete("/matakuliah/:kode", deleteLecture);

module.exports = router;