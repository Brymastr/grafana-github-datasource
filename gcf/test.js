const axios = require('axios');

const url = `https://github.com/login/oauth/access_token`;

const body = {
	"client_id": "511f57f0dc004d529286",
	"client_secret": "56da6358190eddc7100f2e3519a1b0d841fb6b38",
	"allow_signup": false,
	"state": "abc123randomstringgnirtsmodnar321cba",
	"code": "057af0ff80bfabb5902b"
}

const request = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  data: body
}

axios.post(url, body, { headers: {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}}).then(result => {
  console.log(result.data);
});