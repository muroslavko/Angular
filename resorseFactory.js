angular
	.module('app')
	.factory('resorseFactory', resorseFactory);

function resorseFactory($resource) {
	var posts = [];
	var Source = $resource('http://jsonplaceholder.typicode.com/photos');
	var source = Source.query(null,function(data){
		data.forEach(function (postsss) {
        posts.push(postsss);
		})
	});
	return{
		posts : posts
	}
};