'use strict';

angular.module('gaeTrainingApp').controller('ExerciceCreateCtrl',
		ExerciceCreateCtrlFnt);

ExerciceCreateCtrlFnt.$inject = [ '$scope', '$log','$window', 'factory'];

function ExerciceCreateCtrlFnt($scope, $log,$window,  factory) {

	$scope.addExercice = function(exercice){

		if (exercice.title== null || exercice.description ==null || exercice.time== null  )
		{
		$window.alert("Please, fill the empty fields")
		}
	else
		{
		
		var newExo = factory.exoCreation(exercice.title, exercice.description, exercice.time);
		$scope.training.exercices.push(newExo);

		}
	}

}
