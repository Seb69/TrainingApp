'use strict';

angular.module('gaeTrainingApp').controller('exerciceDetailsCtrl',
		exerciceDetailsCtrlFnt);

exerciceDetailsCtrlFnt.$inject = [ '$scope', '$log','$location', 'commGet', 'factory'];

function exerciceDetailsCtrlFnt($scope, $log, $location, commGet,  factory) {



	$scope.trainings = [];
	$scope.exercices = [];
	$scope.displayResult=false;
	
	
	$scope.onSearchExercice = function() {
		
		var exerciceTitle = $location.path().split('/').pop();
		
		
			
			commGet.getSearchExerciceByTitle(exerciceTitle).then(
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
