angular.module('MyApp', [])
.filter('reverse',[function(){
    return function(string){
        return string.split('').reverse().join('');
    }
}])

(function(){
	angular.module('demoApp', [])
		.value('version', '0.0.1');
}())