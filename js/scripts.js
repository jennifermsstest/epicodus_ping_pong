
// Business Logic

//var number = $("#number").val();

//var numbers = []

var listNumber = function(number) {
  for (var i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      //numbers.push('ping');
    $(".array").append("<li>" + 'ping');
    } else if (i % 5 === 0) {
    $(".array").append("<li>" + 'pong');
      //numbers.push('pong');
    } else if (i % 15 === 0) {
    $(".array").append("<li>" + 'pingpong');
    //  numbers.push('pingpong');
    } else {
    $(".array").append("<li>" + (i));
      //numbers.push(i);
      }
  }
  };

// User Interface Logic

$(document).ready(function() {
  $("form#ping").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = listNumber(number)

$("#result").show();
$("#ping")[0].reset();
//$(".reset")[0].reset();

});
});
