attlApp.controller("ContactController", function($scope, $http) {
  $scope.formData = {
    apikey:'testapikey'
  };
  $scope.processForm = function() {
    $http({
    method  : 'POST',
    url     : '/email',
    apikey  : 'testapikey',
    data    : $scope.formData,
    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
   })
    .success(function(data) {
      console.log(data);

      if (!data.success) {
        // if not successful, bind errors to error variables
        $scope.errorName = data.errors.name;
        $scope.errorSuperhero = data.errors.superheroAlias;
      } else {
        // if successful, bind success message to message
        $scope.message = data.message;
      }
    });
  };
})
