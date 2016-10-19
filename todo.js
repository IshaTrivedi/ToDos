var myApp = angular.module("myApp",[])
			.controller("todoCtrl", function($scope,$http){
 				$scope.list = [];
 				$scope.chkall = false;
 				$scope.editmode = false;
      
      			$scope.submit = function() {
        		if ($scope.text) {
        			var obj = {"name":$scope.text,done:false}
          			$scope.list.push(obj);
          			$scope.text = '';
        		}
      		};
      		/*$scope.edit = function(){
      			 $scope.editmode = $scope.editmode === false ? true: false;
      		}*/
      		  $scope.edit = function(){
      		  	$scope.editmode = $scope.editmode === false ? true: false;
      			/*$(event.target).closest('li').toggleClass('editing');*/
  			};
  			$scope.editOnEnter = function(mylist){
      			if(event.keyCode == 13 && mylist.text){
          			$scope.edit();
      			}
  			};
      		$scope.delete = function(i){
				$scope.list.splice(i,1);
			}
			$scope.leftitems = function(){
				var count = 0;
				angular.forEach($scope.list, function(mylist) {
        		count += mylist.done ? 0 : 1;
      		});
     		 return count;
    		};
    		$scope.data = false;

  				$scope.showdata = function(){
    			$scope.data = true;  
  			};
  			$scope.chkAllfn = function() {
     			 angular.forEach($scope.list, function(mylist) {
        			mylist.done =$scope.chkall;
      			});
  			};	
			
			$scope.completed = function(){
				var oldlist = $scope.list;
				$scope.list = [];
				angular.forEach(oldlist, function(mylist) {
					if(!mylist.done)
						$scope.list.push(mylist);
		});
		};

			$scope.showbtn = function  (mylist) {
    			if ($scope.show === "All") {
        			return true;
    			}else if(mylist.done && $scope.show === "Complete"){
        			return true;
    			}else if(!mylist.done && $scope.show === "Active"){
        			return true;
    			}else{
        			return false;
   			}
		};
			/*$scope.init = function  () {
 			if (localStorageService.get("todoList")===null) {
  				$scope.list = [
   					{ name : "Create an Angular-js TodoList" , done : false }
  				];
 			}else{
  				 $scope.list = localStorageService.get("todoList");
 				}
			};
 
			$scope.$watch("list",function  (newVal,oldVal) {
 			if (newVal !== null &amp;&amp; angular.isDefined(newVal) &amp;&amp; newVal!==oldVal) {
 				 localStorageService.add("todoList",angular.toJson(newVal));
 			}
		},true);*/
	});