'use strict';

angular.module('usUser').factory('User', ['$resource',
	function($resource) {
		return $resource(AppConfig.serverUrl + '/user/:id', {
			id: '@id'
		}, {
			update: {method: 'PUT'},
			get: {method: 'GET'},
			remove: {method:'DELETE'},
			query:  {method:'GET', isArray:true}
		});
	}
]);