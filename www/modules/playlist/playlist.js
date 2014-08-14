define(['angular'], function (angular) {
	angular.module('Playlist', [])
			.config(function ($stateProvider, $urlRouterProvider) {
				$stateProvider
						.state('app.playlists', {
							url: "/playlists",
							views: {
								'menuContent': {
									templateUrl: "modules/playlist/templates/playlists.html",
									controller: 'Playlist.PlaylistsCtrl'
								}
							}
						})

						.state('app.single', {
							url: "/playlists/:playlistId",
							views: {
								'menuContent': {
									templateUrl: "modules/playlist/templates/playlist.html",
									controller: 'Playlist.PlaylistCtrl'
								}
							}
						});

			});
});
