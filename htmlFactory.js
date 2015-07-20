	angular
		.module('app')
		.factory('htmlFactory', htmlFactory);

	function htmlFactory($http) {
		var posts = [];
		$http.get('http://jsonplaceholder.typicode.com/photos').success(function (data) {
        data.forEach(function (postsss) {
            posts.push(postsss);
        })
		})
		return{
			posts : posts
		}
		};