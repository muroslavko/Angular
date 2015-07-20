angular
	.module('app')
	.directive('thumbnail', thumbnailDirective);

function thumbnailDirective(){
	return {
    restrict: 'CA',
    replace: false,
    transclude: false,
    scope: {
            index: '=index',
            item: '=itemdata'
    },
    template: '<a href="#"><img src="{{item.thumbnailUrl}}" alt="{{item.title}}" /></a><span class="text">{{item.title}}</span>',
    link: function(scope, elem, attrs) {
		elem.bind('click', function() {
		var imgFull = angular.element("<div class='overlay'></div><img class='topimg' src='"+scope.item.thumbnailUrl+"' />");
		imgFull.bind('click',function(){
			imgFull.remove()
		});
		var newdiv = document.createElement('div');
		//document.body.appendChild(imgFull);
		//document.createElement(tagName)
		//elem.parentNode.insertBefore(imgFull, elem.nextSibling);
		//elem.appendChild(newdiv);
		elem.after(imgFull);
      });
    }
  }
}