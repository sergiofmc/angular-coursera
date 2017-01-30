(function () {
'use strict';

angular.module('Lunch-App', [])

.controller('LunchAppController', function ($scope) {
  $scope.text = "";
  $scope.totalComidas = 0;
  $scope.mensaje = "";

  $scope.CheckIfTooMuch = function () {
    if($scope.text == ""){
      $scope.mensaje = "Please enter data first";
    }
    else{
      var totalComidas = calcularNumeroDeComidas($scope.text);
      $scope.totalComidas = totalComidas;
      if($scope.totalComidas > 0 && $scope.totalComidas<=3){
        $scope.mensaje = "Enjoy!";
      }
      else{
        $scope.mensaje = "Too much!";
      }
    }
  };


  function calcularNumeroDeComidas(string) {
    var arrayOfLunch = string.split(',');
    var largo = parseInt(arrayOfLunch.length);
    console.log("largo = " + largo);
    var contador =0;
    for(var i = 0 ; i< largo;i++){
      if(arrayOfLunch[i]!=undefined && arrayOfLunch[i]=="" ){
        contador++;
      }
    }
    console.log("contador = " + contador);
    return contador;    //largo;
  }
});
})();
