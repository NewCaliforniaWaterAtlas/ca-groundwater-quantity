angular.module('app').controller('mapController', ['$scope', 'wellService', '$filter', function ($scope, wellService, $filter){

	// GET =====================================================================
	// when landing on the page, get all records and show them
	// use the service to get all the records
	wellService.get()
		.success(function(data) {

			$scope.records = data;
			$scope.counted = $scope.records.length;
			
      $scope.$watch("searchrecords", function (query) {
        $scope.filteredRecords = $filter("filter")($scope.records, query);
      	
      	// agency records counter
			  $scope.record = 0;
			  
			  // loop through $scope.filteredRecords
			  angular.forEach($scope.filteredRecords, function(record, key){
			  	// console.log(entry);	
			    if (record) {	
			      $scope.record++;
			    } else {
			      return;
			    }
			  });	
      });


			// var agencyArr = [];

		 //  // loop through scope.data
		 //  angular.forEach(data, function(d, key){

		 //  	angular.forEach(d.features, function(entry, key){
		 //  		agencyArr.push(entry.properties);	
		 //  	});
		  
		 //  });
		 //  $scope.records_parsed = agencyArr;

		})
		.error(function (data, status, headers, config){
       console.log('API CALL ERROR ' +status);
    });

}]);