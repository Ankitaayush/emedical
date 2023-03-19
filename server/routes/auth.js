const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    return res.send('auth is listening');
});

module.exports = router;