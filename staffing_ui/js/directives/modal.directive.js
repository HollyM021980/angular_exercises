angular.module('StaffingUI').directive('hmModal', function() {
    return {
        restrict: 'E',

        transclude: true,

        templateUrl: 'templates/partials/modal.html',

        scope: {
            title: '@',
            modalid: '@'
        }
    };
});
