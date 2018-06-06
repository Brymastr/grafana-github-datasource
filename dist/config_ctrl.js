'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var _createClass, GitHubConfigCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
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
          this.clientId = this.current.jsonData.clientId || '511f57f0dc004d529286';
          this.state = 'abc123randomstringgnirtsmodnar321cba';

          var params = {
            client_id: this.clientId,
            allow_signup: 'false',
            state: this.state
          };

          $scope.login = async function () {
            params.code = await _this.openOauthWindow($scope, $window, params);
            var result = await _this.getAccessToken(params);
            console.log(result);
          };
        }

        _createClass(GitHubConfigCtrl, [{
          key: 'openOauthWindow',
          value: function openOauthWindow($scope, $window, params) {
            var _this2 = this;

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
            // console.log(response)
            // return response;
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
