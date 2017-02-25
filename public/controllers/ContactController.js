attlApp.controller("ContactController", function($scope, $http, FormService) {
  $scope.formData = {};
  $scope.serializeData = function(data){

    // If this is not an object, defer to native stringification.
    if ( ! angular.isObject( data ) ) {
        return( ( data == null ) ? "" : data.toString() );
    }

    var buffer = [];

    // Serialize each key in the object.
    for ( var name in data ) {
        if ( ! data.hasOwnProperty( name ) ) {
            continue;
        }

        var value = data[ name ];

        buffer.push(
            encodeURIComponent( name ) + "=" + encodeURIComponent( ( value == null ) ? "" : value )
        );
    }

    // Serialize the buffer and clean it up for transportation.
    var source = buffer.join( "&" ).replace( /%20/g, "+" );
    return( source );

  };

  $scope.processForm = function() {
    $http({
    method  : 'POST',
    url     : '/email',
    data    : $scope.serializeData($scope.formData),
    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
   })
    .success(function(data) {
      console.log("THIS IS THE DATA FROM THE FORM", data);

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
