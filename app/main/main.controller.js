angular.module('pipeline')
	.controller('mainController', mainController);

mainController.$inject = ['$timeout', '$scope'];

function mainController($timeout, $scope){
	
	var vm = this;
	
	this.formValues = {
		name:'',
		email:'',
		password:'',
		origin:''
	}

	this.submitForm = function(invalid){
		
		if(!invalid){
			vm.loading = true;
			$timeout(function(){
				vm.loading = false;
				vm.submitted = true;
			},5000);
		}else{
			
			vm.validationFailed = true;
			
		}
	}
	
}	