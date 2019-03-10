// Business Logic

var listNumber = function(number) {
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      //numbers.push('ping');
      $(".array").append("<li>" + 'pingpong');
    } else if (i % 3 === 0) {
      $(".array").append("<li>" + 'ping');
      //numbers.push('pong');
    } else if (i % 5 === 0) {
      $(".array").append("<li>" + 'pong');
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
    var number = parseInt($("input#number").val());
    var result = listNumber(number)
    textfield1 = result

$("#result").show();
$("#ping")[0].reset();
onSubmit="window.location.reload();"
//$(".reset")[0].reset();
  event.preventDefault();

});
});
