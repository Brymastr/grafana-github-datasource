'use strict';

System.register(['./datasource', './config_ctrl', './query_ctrl'], function (_export, _context) {
  "use strict";

  var GitHubDatasource, GitHubConfigCtrl, GenericDatasourceQueryCtrl, GenericQueryOptionsCtrl, GenericAnnotationsQueryCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_datasource) {
      GitHubDatasource = _datasource.GitHubDatasource;
    }, function (_config_ctrl) {
      GitHubConfigCtrl = _config_ctrl.GitHubConfigCtrl;
    }, function (_query_ctrl) {
      GenericDatasourceQueryCtrl = _query_ctrl.GenericDatasourceQueryCtrl;
    }],
    execute: function () {
      _export('QueryOptionsCtrl', GenericQueryOptionsCtrl = function GenericQueryOptionsCtrl() {
        _classCallCheck(this, GenericQueryOptionsCtrl);
      });

      GenericQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

      _export('AnnotationsQueryCtrl', GenericAnnotationsQueryCtrl = function GenericAnnotationsQueryCtrl() {
        _classCallCheck(this, GenericAnnotationsQueryCtrl);
      });

      GenericAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';

      GitHubConfigCtrl.templateUrl = 'partials/config.html';

      _export('Datasource', GitHubDatasource);

      _export('QueryCtrl', GenericDatasourceQueryCtrl);

      _export('ConfigCtrl', GitHubConfigCtrl);

      _export('QueryOptionsCtrl', GenericQueryOptionsCtrl);

      _export('AnnotationsQueryCtrl', GenericAnnotationsQueryCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
