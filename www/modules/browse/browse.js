define(['angular'], function (angular) {
	angular.module('Browse', [])
			.config(function ($stateProvider, $urlRouterProvider) {
				$stateProvider
						.state('app.browse', {
							url: "/browse",
							views: {
								'menuContent': {
									templateUrl: "modules/browse/templates/browse.html"
								}
							}
						})
			});
});
