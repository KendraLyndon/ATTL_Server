attlApp.controller("HomeController", function($scope, HomeService, NgMap) {

  $scope.vm = {};
  $scope.vm.showtimes = HomeService.showtimes;
  $scope.vm.photos = HomeService.photos;
  $scope.selectedPhoto = '../img/Brenda_and_Kathee-0.jpg';

  //Google Maps API key
  $scope.vm.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7YK-CrY9fCRFg7GhYoX-WpRO97zoOAYQ"

  //functions
  $scope.changeSelectedPhoto = function(url){
    $scope.selectedPhoto = url;
  }

  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });

})
