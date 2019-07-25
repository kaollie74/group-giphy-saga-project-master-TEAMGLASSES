const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

require('dotenv').config();

const GIPHY_API_KEY = process.env.GIPHY_API_KEY;


router.get('/', (req,res) => {
    console.log('hitting search pull router');
    
    axios.get(`api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${GIPHY_API_KEY}`)
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