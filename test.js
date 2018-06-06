const params = {
  client_id: 'h9nwy78a0ny74xm8whmap',
  allow_signup: 'false',
  state: 'abc123randomstringgnirtsmodnar321cba'
};

const url = `${this.url}/login/oauth/authorize?${Object.keys(params).map(p => `&${p}=${params[p]}`).join('')}`;

console.log(url)