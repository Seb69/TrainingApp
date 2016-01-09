'use strict';

angular.module('gaeTrainingApp').controller('TrainingCreateCtrl',
		TrainingCreateCtrlFnt);

TrainingCreateCtrlFnt.$inject = [ '$scope', '$log', 'commPost', 'factory'];

function TrainingCreateCtrlFnt($scope, $log, commPost,  factory) {

	$scope.show = {};
	$scope.show.exoForm;
	$scope.training = {};
	$scope.training.exercices = [];
	$scope.training.domaine = 0;

	$scope.addTraining = function(){

		var newTraining = factory.trainingCreation($scope.training.title, $scope.training.description, $scope.training.exercices, $scope.training.domaine);

		
		//post the training
		commPost.postTraining(newTraining).then(
			function(data){
				console.log("comm success");
				
			},
			function(err){
				console.log("error");
			}
		);
		
	}
	
	

}
