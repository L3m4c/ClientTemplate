var LoginCtrl = module.exports = function ($scope, $filter) {
    $scope.email = "";
    $scope.password = "";
    $scope.rememberMe = false;
    $scope.errormsg = "";

    $scope.connexion = function () {
        $scope.errormsg = $filter('translate')('login.message.error');
    }
}