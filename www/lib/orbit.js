var Orbit = function(name, options) {
	this.requireInjections = ['angular', 'angularIonic', 'controllers'];
	this.angularInjections = ['ionic', 'ionicrequireseed.controllers' ];
	this.name = name;
	this.options = options;
	this.defaultUrl = options.defaultUrl || '/';
};

Orbit.prototype = {
	addRequireInjection: function (injection) {
		this.requireInjections.push(injection);
	},
	addAngularInjection: function (injection) {
		this.angularInjections.push(injection);
	},
	addModule: function (injection) {
		function titlecase(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}

		var requireInjection = '../modules/'+injection+'/index',
				angularInjection = titlecase(injection);

		this.addRequireInjection(requireInjection);
		this.addAngularInjection(angularInjection);
	},
	application: function() {
		var that = this;

		return function (angular) {
			angular.module(that.name, that.angularInjections)

					.run(function ($ionicPlatform) {
						$ionicPlatform.ready(function () {

							// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
							// for form inputs)
							if (window.cordova && window.cordova.plugins.Keyboard) {
								cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
							}

							if (window.StatusBar) {
								// org.apache.cordova.statusbar required
								StatusBar.styleDefault();
							}
						});
					})

					.config(function ($stateProvider, $urlRouterProvider) {

						// if none of the above states are matched, use this as the fallback
						$urlRouterProvider.otherwise(that.defaultUrl);

					});
		}
	},
	create: function() {
		return define(this.requireInjections, this.application());
	}
};