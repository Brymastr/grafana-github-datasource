'use strict';

System.register(['./css/github-login.css!'], function (_export, _context) {
  "use strict";

  var _createClass, GitHubConfigCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_cssGithubLoginCss) {}],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('GitHubConfigCtrl', GitHubConfigCtrl = function () {

        /** @ngInject */
        function GitHubConfigCtrl($scope, $window) {
          var _this = this;

          _classCallCheck(this, GitHubConfigCtrl);

          this.url = 'https://github.com';
          this.username = this.current.jsonData.username;
          this.clientId = this.current.jsonData.clientId || '511f57f0dc004d529286';
          this.clientSecret = this.current.jsonData.clientSecret || '56da6358190eddc7100f2e3519a1b0d841fb6b38';
          this.state = 'abc123randomstringgnirtsmodnar321cba';

          var params = {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            allow_signup: 'false',
            state: this.state,
            scope: 'repo'
          };

          $scope.login = async function () {
            params.code = await _this.openOauthWindow($scope, $window, params);
            var result = await _this.getAccessToken(params);
            _this.current.jsonData.oauthToken = result;
            console.log(result);
          };
        }

        _createClass(GitHubConfigCtrl, [{
          key: 'openOauthWindow',
          value: function openOauthWindow($scope, $window, allParams) {
            var _this2 = this;

            var params = Object.assign({}, allParams);
            delete params.client_secret;

            return new Promise(function (resolve, reject) {
              var url = _this2.url + '/login/oauth/authorize?' + Object.keys(params).map(function (p) {
                return '&' + p + '=' + params[p];
              }).join('');
              var opened = $window.open(url, 'GitHub', 'width=600, height=600');

              var timer = setInterval(function () {
                try {
                  var code = opened.location.search.match(/code=(.*)&/)[1];
                  clearInterval(timer);
                  opened.close();
                  resolve(code);
                } catch (err) {/* I don't feel like checking everything */}
              }, 500);
            });
          }
        }, {
          key: 'getAccessToken',
          value: async function getAccessToken(params) {
            var url = 'https://us-central1-grafana-github-datasource.cloudfunctions.net/http';
            var response = await fetch(url, {
              body: JSON.stringify(params),
              headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
              },
              method: 'POST',
              mode: 'cors'
            });
            var json = await response.json();
            return json.access_token;
          }
        }]);

        return GitHubConfigCtrl;
      }());

      _export('GitHubConfigCtrl', GitHubConfigCtrl);
    }
  };
});
//# sourceMappingURL=config_ctrl.js.map
