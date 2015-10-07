angular.module('YoutubeRemote').controller('MainController', function($scope, youtubevideo, socket) {
	$scope.video = youtubevideo;
	$scope.connect = function() {
		socket.emit('join', $scope.video);
	};

	socket.on('play', function() {
		$scope.video.player.playVideo();
	});
	socket.on('stop', function() {
		$scope.video.player.stopVideo();
	});
});
