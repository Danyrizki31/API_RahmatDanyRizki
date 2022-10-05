var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).json(
    { 
      Nama:"Rahmat Dany Rizki",
      NIM:"1957301027",
      Kelas: "TI- 4B"
    }
  );
});

module.exports = router;
