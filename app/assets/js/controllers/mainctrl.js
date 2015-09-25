angular.module('YoutubeRemote').controller('MainController', function($scope, socket) {
	socket.on('play', function(data) {
		console.log(data);
	});
	var video = {
		url: 'https://www.youtube.com/watch?v=tFIXXfSs_w0'
	};
	$scope.video = video;
	$scope.connect = function() {
		socket.emit('join', video);
	};
});
