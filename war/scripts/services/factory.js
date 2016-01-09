'use strict';



angular.module('factoryProvider', []).factory('factory',factoryFnc);

function factoryFnc(){

	var factory = {
		trainingCreation: trainingCreation,
		exoCreation: exoCreation
	};

	function trainingCreation(title,description, exerciceArray, domaine){

		var training = {};
		training.title = title;
		training.description = description;
		training.exercices = exerciceArray;
		training.domaine = domaine;
		return training;
		

	};

	function exoCreation(title,description,time){

		var exo = {};
		exo.description = description;
		exo.title = title;
		exo.time = time;
		return exo;

	};



	return factory;
};
