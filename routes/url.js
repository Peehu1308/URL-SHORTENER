const express=require('express');
const {handleGenerateNewShortURL,getanalytics}=require('../controllers/url')
const router=express.Router();

router.post('/',handleGenerateNewShortURL);
router.get('/analytics/:shortId',getanalytics);

module.exports=router;