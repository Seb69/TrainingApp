'use strict';

angular.module('commGet', []).service('commGet',commGetFnc);

commGetFnc.$inject=['$q', '$http','$log', '$window'];

function commGetFnc($q, $http,$log,$window){

	var commGet = {
			
		getWelcomeMsg: getWelcomeMsg, 
		getTrainings: getTrainings,
		getExercices: getExercices,
		getSearchTrainingByDomain: getSearchTrainingByDomain,
		getSearchTrainingByTitle: getSearchTrainingByTitle,
		getSearchExerciceByTitle: getSearchExerciceByTitle,
		getSearchExerciceByParentTitle: getSearchExerciceByParentTitle,
		getSearchRSS: getSearchRSS,
		getScores: getScores
		
	};

	//Get all trainings
	function getWelcomeMsg(){

		var deferred = $q.defer();
	
			var req = {
				method:'GET',
				url:'/checkwelcome',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}
		

		$http(req).success(function(data, status, headers, config) {
			
			deferred.resolve(data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;

	};

	//Get all trainings
	function getTrainings(){

		var deferred = $q.defer();
	
			var req = {
				method:'GET',
				url:'/trainings',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}
		

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data.data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;

	};

	//Get all exercices
	function getExercices(){

		var deferred = $q.defer();

		var req = {
			method:'GET',
			url:'/exercices',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data.data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;

	};
	
	
	//Get all exercices
	function getSearchTrainingByDomain(domain){

		var deferred = $q.defer();

		var req = {
			method:'GET',
			url:'/trainingDomain?search=' + domain,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data.data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;

	};

	//function gets all exercices associated with a given training
	function getSearchTrainingByTitle(trainingTitle){

		var deferred = $q.defer();

		var req = {
			method:'GET',
			url:'/searchTraining?search=' + trainingTitle,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data.data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;

	};
	
	//function gets all exercices associated with a given training
	function getSearchExerciceByTitle(exerciceTitle){

		var deferred = $q.defer();

		var req = {
			method:'GET',
			url:'/searchExercice?search=' + exerciceTitle,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data.data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;

	};
	
	//function gets all exercices associated with a given training
	function getSearchRSS(){

		var deferred = $q.defer();

		var req = {
			method:'GET',
			url:'/searchRSS',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data.data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;

	};
	
	//function gets all exercices associated with a given training
	function getSearchExerciceByParentTitle(parentExerciceTitle){

		var deferred = $q.defer();

		var req = {
			method:'GET',
			url:'/searchExerciceByParentTitle?search=' + parentExerciceTitle,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data.data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;

	};

	//function gets all the user's scores
	function getScores(){

		var deferred = $q.defer();

		var req = {
			method:'GET',
			url:'/scores',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data.data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;

	};
	
	return commGet;
};
