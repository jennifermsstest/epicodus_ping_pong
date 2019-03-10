// Business Logic

var listNumber = function(number) {
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      //numbers.push('ping');
      $("#array").append("<li>" + 'pingpong');
      //$(".array").innerHTML("<li>" + 'pingpong');
      //return "<li>" + 'pingpong';
    } else if (i % 3 === 0) {
      //$(".array").print("<li>" + 'ping');
      $("#array").append("<li>" + 'ping');
      //numbers.push('pong');
      //return "<li>" + 'ping';
    } else if (i % 5 === 0) {
      //$(".array").print("<li>" + 'pong');
      $("#array").append("<li>" + 'pong');
      //return "<li>" + 'pong';
    //  numbers.push('pingpong');
    } else {
      //$(".array").print("<li>" + (i));
      $("#array").append("<li>" + (i));
      //numbers.push(i);
      //return "<li>" + (i);
      }
  } //$("#array")[0].reload();
  };

// User Interface Logic
$(document).ready(function() {
  $("form#ping").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = listNumber(number)

$("#result").show();
$("#ping")[0].reset();
$(".array").remove();
//onSubmit="window.location.reload();"
//$(".reset")[0].reset();

//window.location.reload();
})
});
