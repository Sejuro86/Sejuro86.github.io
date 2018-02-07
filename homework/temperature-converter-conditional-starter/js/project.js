$('#clickCelsius').click( function (){
    var celsius = $('#celsius1').val();
    var resultFahrenheit = (celsius * 9) / 5 +32;
    $('#fahrenheit1').val(resultFahrenheit);
  
})

$('#clickFahrenheit').click( function (){
    var fahrenheit = $('#fahrenheit2').val();
    var resultCelsius = ((fahrenheit -32) * 5) / 9;
    $('#celsius2').val(resultCelsius);
  
})

