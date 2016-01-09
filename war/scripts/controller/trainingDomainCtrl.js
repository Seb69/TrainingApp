'use strict';

angular.module('gaeTrainingApp').controller('trainingDomainCtrl',
		trainingDomainCtrlFnt);

trainingDomainCtrlFnt.$inject = [ '$scope', '$log','$location', 'commGet', 'factory'];

function trainingDomainCtrlFnt($scope, $log, $location, commGet,  factory) {

	$scope.trainings = [];
	$scope.exercices = [];
	$scope.displayResult=false;
	
	$scope.onSearchTrainingDomain = function() {
		
		var trainingDomain = $location.path().split('/').pop();
		console.log("domain : " + trainingDomain);
		
			commGet.getSearchTrainingByDomain(trainingDomain).then(
				function(data){
				
					$scope.trainings = data;
				
					
				},
				function(err){
					console.log("ERROR");
				}
			);
			
			$scope.displayResult=true;
	};	

}