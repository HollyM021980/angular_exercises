// initialize the app
angular.module('Demo', []);

// custom filter
angular.module('Demo').filter('capitalize', function() {
    return function(param) { //Param is whatever comes before the bar ({{ 'angular is fun' | capitalize }})
        if (param) { // param = 'angular is fun'
           // return param[0].toUpperCase() + param.slice(1);
            var array = param.split(" ")
            var newArray = [];
            for(var i=0; i<array.length; i++){
              var upCaseString = array[i][0].toUpperCase() + param.slice(1);
              newArray.push(upCaseString)

            }
            return newArray.join(". ");

        }
    };
});

angular.module('Demo').controller('DafCtrl', function($scope){
  $scope.AngSting = "";


});

 angular.module('Demo').filter('daffy', function(){
    return function(param){
      if(param){
        var result = param.replace(/s/g, "th");
        return result.replace(/S/g, "Th");
      };

    };
  });



















