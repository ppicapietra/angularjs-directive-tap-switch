/*! Copyright (c) 2023 Pablo Picapietra and contributors | Licensed under the MIT license */

(function (root, factory) {
  'use strict';
  if (typeof module !== 'undefined' && module.exports) {
    // CommonJS
    module.exports = factory(require('angular'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['angular'], factory);
  } else {
    // Global Variables
    factory(root.angular);
  }
}(this, function (angular) {
  'use strict';

  angular.module('tap-switch', []).directive('tapSwitch', ['$q', '$parse', '$http', '$sce', '$timeout', '$templateCache', '$interpolate', function ($q, $parse, $http, $sce, $timeout, $templateCache, $interpolate) {
    
    function link(scope, elem, attrs, ctrl) {

      if (!scope.activeColor) {
        scope.activeColor = "#8FBE00"
      }
      if (!scope.inactiveColor) {
        scope.activeColor = "#CC333F"
      }
    }

    return {
      restrict: 'E',
      templateUrl: '/tap-switch.html',
      require: ['^?form', 'ngModel'],
      scope: {
        disable: '=',
        id: '@',
        title: '@',
        name: '@',
        activeColor: '@',
        inactiveColor: '@',
        onChange: '=',
        tabindex: '@',
      },
      compile: function(tElement) {
        var startSym = $interpolate.startSymbol();
        var endSym = $interpolate.endSymbol();
        if (!(startSym === '{{' && endSym === '}}')) {
          var interpolatedHtml = tElement.html()
            .replace(/\{\{/g, startSym)
            .replace(/\}\}/g, endSym);
          tElement.html(interpolatedHtml);
        }
        return link;
      }
    };
  }]);

  return 'tap-switch';

}));
