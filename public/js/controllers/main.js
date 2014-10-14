angular.module('app').controller('mainController', [ '$scope','$state','$rootScope', function ($scope, $state, $rootScope) {
	

}]); // end mainController


//  Modals ======================================================================	


angular.module('app').controller('myModal', ['$scope', function ($scope) {
  
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };

}]);


var involvedModal = function($scope, $modal) {
	
	$scope.open = function () {
	  var modalInstance = $modal.open({
      templateUrl: 'involved-modal.html',
      controller: ModalInstanceCtrl
    });
  };

};

var sponsorModal = function($scope, $modal) {
	
	$scope.open = function () {
	  var modalInstance = $modal.open({
      templateUrl: 'sponsor-modal.html',
      controller: ModalInstanceCtrl
    });
  };

};

var donateModal = function($scope, $modal) {
	
	$scope.open = function () {
	  var modalInstance = $modal.open({
      templateUrl: 'donate-modal.html',
      controller: ModalInstanceCtrl
    });
  };

};

var supportersModal = function($scope, $modal) {
	
	$scope.open = function () {
	  var modalInstance = $modal.open({
      templateUrl: 'supporters-modal.html',
      controller: ModalInstanceCtrl
    });
  };

};

var teamModal = function($scope, $modal) {
	
	$scope.open = function () {
	  var modalInstance = $modal.open({
      templateUrl: 'team-modal.html',
      controller: ModalInstanceCtrl
    });
  };

};

var thankyouModal = function($scope, $modal) {
	
	$scope.open = function () {
	  var modalInstance = $modal.open({
      templateUrl: 'thankyou-modal.html',
      controller: ModalInstanceCtrl
    });
  };

};

var ModalInstanceCtrl = function ($scope, $modalInstance) {

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};


// search accordions
var searchAccordion = function ($scope) {
  $scope.oneAtATime = true;
}