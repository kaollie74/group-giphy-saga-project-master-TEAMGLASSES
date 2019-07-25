const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

require('dotenv').config();

const GIPHY_API_KEY = process.env.GIPHY_API_KEY;


router.post('/', (req,res) => {

    
    console.log('hitting search pull router' , req.body.searchValue);
    
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.body.searchValue}&api_key=${GIPHY_API_KEY}`)
    .then ((response) => {
        console.log('back from giphy');
        res.send(response.data)
    })
    .catch( (error) => {
        console.log('error with getting gifs from giphy...', error);
        resSendStatus(500);
        
    })
});

module.exports = router;