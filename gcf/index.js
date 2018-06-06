'use strict';
const axios = require('axios');
const cors = require('cors');

const corsHandler = cors({ origin: true });

exports.http = (req, res) => {

  corsHandler(req, res, () => {

    if(req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    const url = `https://github.com/login/oauth/access_token`;

    axios.post(url, req.body, { headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }}).then(result => {
      res.status(200).json(result.data);
    });

  });
};