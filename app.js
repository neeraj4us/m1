(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkDishes = function () {
    var nos = countDishes($scope.dishes);
    $scope.message = generateMessage(nos);
  };

  function countDishes(dishes) {
    var count = 0;
    if (dishes) {
      var array = dishes.split(',');
      for (var ids in array) {
        if (array[ids].trim().length != 0) {
          count++;
        }
      }
    }
    return count;
  }

  function generateMessage(nos) {
    if (nos === 0) {
      return 'Please enter data first';
    }
    else if (nos <= 3) {
      return 'Enjoy!';
    } else {
      return 'Too much!';
    }
  }
}

})();
