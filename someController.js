angular
    .module('app')
    .controller('SomeController', SomeController);

function SomeController(htmlFactory,resorseFactory) {
	var vm = this;	
	//vm.posts = htmlFactory.posts;
	vm.posts = resorseFactory.posts;
	}

