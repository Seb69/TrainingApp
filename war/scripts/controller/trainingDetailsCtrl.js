'use strict';

angular.module('gaeTrainingApp').controller('trainingDetailsCtrl',
		trainingDetailsCtrlFnt);

trainingDetailsCtrlFnt.$inject = [ '$scope', '$log','$location', 'commGet', 'factory'];

function trainingDetailsCtrlFnt($scope, $log, $location, commGet,  factory) {

	$scope.trainings = [];
	$scope.exercices = [];
	$scope.displayResult=false;
	
	$scope.onSearchTraining = function() {
		
		var trainingTitle = $location.path().split('/').pop();
		
			commGet.getSearchTrainingByTitle(trainingTitle).then(
				function(data){
				
					$scope.trainings = data;
					console.log("data : " + data);
					
				},
				function(err){
					console.log("ERROR");
				}
			);
			
			commGet.getSearchExerciceByParentTitle(trainingTitle).then(
					function(data){
					
						$scope.exercices = data;
						console.log("exercice : " + $scope.exercices.titleExe);
				
					},
					function(err){
						console.log("ERROR");
					}
				);
			
			$scope.displayResult=true;
	};	

}