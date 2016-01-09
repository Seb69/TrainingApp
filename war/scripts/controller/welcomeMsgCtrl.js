'use strict';

angular.module('gaeTrainingApp').controller('welcomeMsgCtrl',
		welcomeCtrlFnt);

welcomeCtrlFnt.$inject = [ '$scope','$log', '$timeout', '$location', 'commGet', 'factory'];

function welcomeCtrlFnt($scope, $log, $timeout, $location, commGet, factory) {
	
	$scope.onLoadWelcomeMsg = function() {
		
		commGet.getWelcomeMsg().then(
				function(data){
					
					$scope.msg =data;
					
				},
				function(err){
					console.log("error");
				}
			);
		
		$timeout(function() {
	        $location.path('/searchScreen.html');
	    }, 3000);

	}
	
}

