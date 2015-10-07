angular.module('YoutubeRemote').controller('RemoteControlController', function($scope, youtubevideo, socket) {
	$scope.video = youtubevideo;
	$scope.play = function() {
		socket.emit('play');
	};
	$scope.stop = function() {
		socket.emit('stop');
	};
});
