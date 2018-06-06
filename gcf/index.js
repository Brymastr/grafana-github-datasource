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

    const body = Object.assign({}, req.body, {
      client_secret: process.env.CLIENT_SECRET || '56da6358190eddc7100f2e3519a1b0d841fb6b38'
    });

    const url = `https://github.com/login/oauth/access_token`;

    axios.post(url, body, { headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }}).then(result => {
      res.status(200).json(result.data);
    });

  });
};