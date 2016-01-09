'use strict';

angular.module('commPost', []).service('commPost',commPostFnt);

commPostFnt.$inject=['$q', '$http','$log', '$window'];

function commPostFnt($q, $http,$log,$window){

	var commPost = {
		postTraining: postTraining,
		postExercice: postExercice,
		postScore: postScore,

	};

	//function post the new created training
	function postTraining(training){
		var deferred = $q.defer();
		
		if (training.title == null || training.description ==null || training.domaine == null )
			{
			$window.alert("Fill all fields");
			}
		else
			{
				var req ={
					method:'POST',
					url:'/addTraining',
					dataType: 'json',
					headers: {'Content-Type': 'application/x-www-form-urlencoded'},
					data:training
				}
		
				$http(req).success(function(data, status, headers, config) {
					deferred.resolve(data);
				}).
				error(function(data, status, headers, config) {
					deferred.reject(status);
				});
				return deferred.promise;
		
			}
	};

	//function post the new created exercices
	function postExercice(exercice){
		var deferred = $q.defer();

		var req ={
			method:'GET',
			url:'/exercices',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data:exercice
		}

		$http(req).success(function(data, status, headers, config) {
			
			deferred.resolve(data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;
	};

	//function post the score for the done exercices
	function postScore(score){
		var deferred = $q.defer();

		var req ={
			method:'POST',
			url:'/scores',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data:score
		}

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;
	};

	

	return commPost;
};
