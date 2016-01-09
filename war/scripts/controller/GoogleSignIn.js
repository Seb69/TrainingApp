'use strict';

angular.module('gaeTrainingApp').controller('signInGoogle',
		signInGoogleFnt);

signInGoogleFnt.$inject = [ '$scope', '$log'];

function signInGoogleFnt($scope, $log) {
	


	$scope.onSignIn = function() {
    	  var profile = googleUser.getBasicProfile();
    	  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    	  console.log('Name: ' + profile.getName());
    	  console.log('Image URL: ' + profile.getImageUrl());
    	  console.log('Email: ' + profile.getEmail());

    	}
}

