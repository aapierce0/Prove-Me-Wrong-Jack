var proveItControllers = angular.module('ProveItControllers', []);




proveItControllers.controller('ProveItSearchController', function($scope) {


	$scope.demoResults = [];
	$scope.submitDemoSearch = function() {

		$scope.demoResults = [];

		// Create 10 fake results
		for (var i = 0; i < 10; i++) {
			var newResult = {
				title: "BREAKING: "+$scope.demoSearchInput,
				domain: "example.com",
				bodyPreview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet efficitur est. Vivamus aliquam varius diam. Sed auctor molestie risus, eget sodales magna pulvinar in. Nulla molestie id risus at consectetur."
			};

			$scope.demoResults.push(newResult);
		}
	};
});