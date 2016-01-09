'use strict';

angular.module('gaeTrainingApp').controller('SearchCtrl',
		SearchCtrlFnt);

SearchCtrlFnt.$inject = [ '$scope', '$log', 'commGet', 'factory'];

function SearchCtrlFnt($scope, $log, commGet, factory) {
	
	
	$scope.trainings = [];
	$scope.exercices = [];
	$scope.rss = [];
	$scope.displayResult=false;
	
	
	$scope.onSearch = function() {

		if($scope.search != undefined){
			commGet.getSearchTrainingByTitle($scope.search).then(
				function(data){
				
					$scope.trainings = data;
					$scope.displayResult=true;
			
				},
				function(err){
					console.log("ERROR");
				}
			);
			commGet.getSearchExerciceByTitle($scope.search).then(
					function(data){
					
						$scope.exercices = data;
						console.log(data);
						$scope.displayResult=true;
				
					},
					function(err){
						console.log("ERROR");
					}
				);

		}
	
	};
	
	$scope.onLoadDashboard = function() {

		
			commGet.getTrainings().then(
				function(data){
				
					$scope.trainings = data;
			
				},
				function(err){
					console.log("ERROR");
					
				}
			);
			
			commGet.getExercices().then(
					function(data){
					
						$scope.exercices = data;
					

					},
					function(err){
						console.log("ERROR");
						
					}
				);
			
//			commGet.getSearchRSS().then(
//					function(data){
//					
//						$scope.rss = data;
//					
//
//					},
//					function(err){
//						console.log("ERROR");
//						
//					}
//				);
	
	};
	
}