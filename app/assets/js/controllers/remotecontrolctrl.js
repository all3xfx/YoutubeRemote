angular.module('YoutubeRemote').controller('RemoteControlController', function($scope, socket) {
	var video = {
		url: 'https://www.youtube.com/watch?v=tFIXXfSs_w0'
	};
	$scope.video = video;
	$scope.play = function() {
		socket.emit('play');
	};
});
