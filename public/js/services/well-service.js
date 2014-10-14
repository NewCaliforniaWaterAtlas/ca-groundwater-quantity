'use strict';

angular.module('app').factory('wellService', ['$http', function($http) {
	return {
		get : function() {
			return $http.get('http://23.23.213.246:8000/api/v1/gwl_rates_merged/geometry', {cache: true});
		}
	}
}]);