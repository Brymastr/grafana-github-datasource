import './css/github-login.css!';

export class GitHubConfigCtrl {

  /** @ngInject */
  constructor($scope, $window) {
    this.url = 'https://github.com';
    this.username = this.current.jsonData.username;
    this.clientId = this.current.jsonData.clientId || '511f57f0dc004d529286';
    this.clientSecret = this.current.jsonData.clientSecret || '56da6358190eddc7100f2e3519a1b0d841fb6b38';
    this.state = 'abc123randomstringgnirtsmodnar321cba';

    const params = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      allow_signup: 'false',
      state: this.state,
      scope: 'repo'
    };

    $scope.login = async () => {
      params.code = await this.openOauthWindow($scope, $window, params);
      const result = await this.getAccessToken(params);
      this.current.jsonData.oauthToken = result;
      console.log(result)
    };
    
  }

  openOauthWindow($scope, $window, allParams) {
    const params = Object.assign({}, allParams);
    delete params.client_secret;

    return new Promise((resolve, reject) => {
      const url = `${this.url}/login/oauth/authorize?${Object.keys(params).map(p => `&${p}=${params[p]}`).join('')}`;
      const opened = $window.open(url, 'GitHub', 'width=600, height=600');

      const timer = setInterval(() => {
        try {
          const code = opened.location.search.match(/code=(.*)&/)[1];
          clearInterval(timer);
          opened.close();
          resolve(code);
        } catch(err) { /* I don't feel like checking everything */ }
      }, 500);

    });
  }

  async getAccessToken(params) {
    const url = 'https://us-central1-grafana-github-datasource.cloudfunctions.net/http';
    const response = await fetch(url, {
      body: JSON.stringify(params),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      method: 'POST',
      mode: 'cors'
    });
    const json = await response.json();
    return json.access_token;
  }

}