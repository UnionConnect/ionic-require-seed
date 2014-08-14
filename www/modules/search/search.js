define(['angular'], function (angular) {
	angular.module('Search', [])
			.config(function ($stateProvider, $urlRouterProvider) {
				$stateProvider
						.state('app.search', {
							url: "/search",
							views: {
								'menuContent': {
									templateUrl: "modules/search/templates/search.html"
								}
							}
						});
			});
});
