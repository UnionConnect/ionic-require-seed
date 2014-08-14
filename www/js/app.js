(function() {
	var orbit = new Orbit('ionicrequireseed', {defaultUrl: '/app/playlists'});

	orbit.addModule('playlist');
	orbit.addModule('menu');
	orbit.addModule('search');
	orbit.addModule('browse');
	orbit.create();
})();