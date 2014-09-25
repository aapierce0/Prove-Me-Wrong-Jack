var proveItControllers = angular.module('ProveItControllers', ['ngSanitize']);




proveItControllers.controller('ProveItSearchController', function($scope) {

	window.$scope = $scope;

	$scope.stealthMode = false || JSON.parse(localStorage['stealthMode']);
	$scope.toggleStealthMode = function() {
		$scope.stealthMode = !$scope.stealthMode;

		// Cache the result in localstorage.
		localStorage['stealthMode'] = JSON.stringify($scope.stealthMode);
	};


	



	$scope.templateURL;
	$scope.setTemplateURL = function(filename) {
		$scope.templateURL = "templates/"+filename;
	};
	$scope.setTemplateURL("blank.html");
	var knownTemplates = ["news1.html"];








	$scope.htmlSearchString = "";
	$scope.submitSearch = function(presetResult) {

		$scope.setTemplateURL("news1.html");

		if (presetResult)
			$scope.searchInput = presetResult;

		// If the search term is empty, switch to the blank template...
		$scope.htmlSearchString = "";
		if (!$scope.searchInput || $scope.searchInput.length == 0) {
			$scope.setTemplateURL("blank.html");
			return;
		}

		var unimportantWords = ["the", "for"];

		// Parse the search input string.
		// Split the query into words
		var searchWords = $scope.searchInput.split(" ");

		for (var i = searchWords.length - 1; i >= 0; i--) {

			// Short words (< 3 letters) should not be bold
			if (searchWords[i].length <= 2) {
				searchWords[i] = "</strong>"+searchWords[i]+"<strong>";
			}

			// The word "The" should not be bold
			if (_.contains(unimportantWords, searchWords[i].toLowerCase())) {
				searchWords[i] = "</strong>"+searchWords[i]+"<strong>";
			}
		};

		$scope.htmlSearchString = "<strong>"+searchWords.join(" ")+"</strong>";
	};
});