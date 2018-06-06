import { GitHubDatasource } from './datasource';
import { GitHubConfigCtrl } from './config_ctrl';
import { GenericDatasourceQueryCtrl } from './query_ctrl';

class GenericQueryOptionsCtrl {}
GenericQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

class GenericAnnotationsQueryCtrl {}
GenericAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html'

GitHubConfigCtrl.templateUrl = 'partials/config.html';

export {
  GitHubDatasource as Datasource,
  GenericDatasourceQueryCtrl as QueryCtrl,
  GitHubConfigCtrl as ConfigCtrl,
  GenericQueryOptionsCtrl as QueryOptionsCtrl,
  GenericAnnotationsQueryCtrl as AnnotationsQueryCtrl
};
