require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"RouteService":[function(require,module,exports){
module.exports=require('6YVD1J');
},{}],"6YVD1J":[function(require,module,exports){
var RouteService = module.exports = function () {
    return 'http://localhost:8080/';
};
},{}],3:[function(require,module,exports){
var app =  angular.module('app', ['ui.router', 'pascalprecht.translate', 'app.controllers', 'app.services']);

app.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('login', {
            url: "/",
            templateUrl: "views/login.html",
            controller: 'LoginCtrl'
        }).state('main', {
            url: "/main",
            templateUrl: "views/main.html"
        })
}).config(['$translateProvider', function($translateProvider) {
    $translateProvider.preferredLanguage('fr');
    $translateProvider.useStaticFilesLoader({
        prefix: 'languages/',
        suffix: '.json'
    });
}]);
},{}],4:[function(require,module,exports){
'user strict';

var moduleController = angular.module('app.controllers', []);

moduleController.controller("LoginCtrl", require('./controllers/LoginCtrl'));
},{"./controllers/LoginCtrl":5}],5:[function(require,module,exports){
var LoginCtrl = module.exports = function ($scope, $filter) {
    $scope.email = "";
    $scope.password = "";
    $scope.rememberMe = false;
    $scope.errormsg = "";

    $scope.connexion = function () {
        $scope.errormsg = $filter('translate')('login.message.error');
    }
}
},{}],6:[function(require,module,exports){
'user strict';
var RouteService = require('RouteService');

var moduleService = angular.module('app.services', []);

moduleService.constant('SERVER_ROOT', RouteService());
},{"RouteService":"6YVD1J"}],7:[function(require,module,exports){
var SpringUserService = module.exports = function (SERVER_ROOT, $http, $q, $cacheFactory) {
    this._user = null;
    this.$cacheFactory = $cacheFactory;
    this._userRights = null;
    this.$http = $http;
    this.SERVER_ROOT = SERVER_ROOT;
    this.$q = $q;
};
},{}]},{},[3,4,5,6,7])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2FtdWVsXFxXZWJzdG9ybVByb2plY3RzXFxDbGllbnRUZW1wbGF0ZVxcbm9kZV9tb2R1bGVzXFxncnVudC1icm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL0NsaWVudFRlbXBsYXRlL2FwcC9qcy9jb25maWcvZGV2L1JvdXRlU2VydmljZS5qcyIsIkM6L1VzZXJzL1NhbXVlbC9XZWJzdG9ybVByb2plY3RzL0NsaWVudFRlbXBsYXRlL2FwcC9qcy9zcmMvYXBwbGljYXRpb24uanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9DbGllbnRUZW1wbGF0ZS9hcHAvanMvc3JjL2NvbnRyb2xsZXJzLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvQ2xpZW50VGVtcGxhdGUvYXBwL2pzL3NyYy9jb250cm9sbGVycy9Mb2dpbkN0cmwuanMiLCJDOi9Vc2Vycy9TYW11ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9DbGllbnRUZW1wbGF0ZS9hcHAvanMvc3JjL3NlcnZpY2VzLmpzIiwiQzovVXNlcnMvU2FtdWVsL1dlYnN0b3JtUHJvamVjdHMvQ2xpZW50VGVtcGxhdGUvYXBwL2pzL3NyYy9zZXJ2aWNlcy9Mb2dpblNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSb3V0ZVNlcnZpY2UgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwLyc7XHJcbn07IiwidmFyIGFwcCA9ICBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd1aS5yb3V0ZXInLCAncGFzY2FscHJlY2h0LnRyYW5zbGF0ZScsICdhcHAuY29udHJvbGxlcnMnLCAnYXBwLnNlcnZpY2VzJ10pO1xyXG5cclxuYXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAvLyBGb3IgYW55IHVubWF0Y2hlZCB1cmwsIHJlZGlyZWN0IHRvIC9zdGF0ZTFcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvXCIpO1xyXG4gICAgLy9cclxuICAgIC8vIE5vdyBzZXQgdXAgdGhlIHN0YXRlc1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2xvZ2luJywge1xyXG4gICAgICAgICAgICB1cmw6IFwiL1wiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9sb2dpbi5odG1sXCIsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwnXHJcbiAgICAgICAgfSkuc3RhdGUoJ21haW4nLCB7XHJcbiAgICAgICAgICAgIHVybDogXCIvbWFpblwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9tYWluLmh0bWxcIlxyXG4gICAgICAgIH0pXHJcbn0pLmNvbmZpZyhbJyR0cmFuc2xhdGVQcm92aWRlcicsIGZ1bmN0aW9uKCR0cmFuc2xhdGVQcm92aWRlcikge1xyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnByZWZlcnJlZExhbmd1YWdlKCdmcicpO1xyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnVzZVN0YXRpY0ZpbGVzTG9hZGVyKHtcclxuICAgICAgICBwcmVmaXg6ICdsYW5ndWFnZXMvJyxcclxuICAgICAgICBzdWZmaXg6ICcuanNvbidcclxuICAgIH0pO1xyXG59XSk7IiwiJ3VzZXIgc3RyaWN0JztcclxuXHJcbnZhciBtb2R1bGVDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKTtcclxuXHJcbm1vZHVsZUNvbnRyb2xsZXIuY29udHJvbGxlcihcIkxvZ2luQ3RybFwiLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL0xvZ2luQ3RybCcpKTsiLCJ2YXIgTG9naW5DdHJsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHNjb3BlLCAkZmlsdGVyKSB7XHJcbiAgICAkc2NvcGUuZW1haWwgPSBcIlwiO1xyXG4gICAgJHNjb3BlLnBhc3N3b3JkID0gXCJcIjtcclxuICAgICRzY29wZS5yZW1lbWJlck1lID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuZXJyb3Jtc2cgPSBcIlwiO1xyXG5cclxuICAgICRzY29wZS5jb25uZXhpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLmVycm9ybXNnID0gJGZpbHRlcigndHJhbnNsYXRlJykoJ2xvZ2luLm1lc3NhZ2UuZXJyb3InKTtcclxuICAgIH1cclxufSIsIid1c2VyIHN0cmljdCc7XHJcbnZhciBSb3V0ZVNlcnZpY2UgPSByZXF1aXJlKCdSb3V0ZVNlcnZpY2UnKTtcclxuXHJcbnZhciBtb2R1bGVTZXJ2aWNlID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtdKTtcclxuXHJcbm1vZHVsZVNlcnZpY2UuY29uc3RhbnQoJ1NFUlZFUl9ST09UJywgUm91dGVTZXJ2aWNlKCkpOyIsInZhciBTcHJpbmdVc2VyU2VydmljZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFNFUlZFUl9ST09ULCAkaHR0cCwgJHEsICRjYWNoZUZhY3RvcnkpIHtcclxuICAgIHRoaXMuX3VzZXIgPSBudWxsO1xyXG4gICAgdGhpcy4kY2FjaGVGYWN0b3J5ID0gJGNhY2hlRmFjdG9yeTtcclxuICAgIHRoaXMuX3VzZXJSaWdodHMgPSBudWxsO1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5TRVJWRVJfUk9PVCA9IFNFUlZFUl9ST09UO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG59OyJdfQ==
