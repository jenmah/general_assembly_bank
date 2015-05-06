var total1 = 0;
var total2 = 0;
var balance1 = 0;
var balance2 = 0;


$(document).ready(function() {

// logs the input when the deposit button is clicked, and adds new deposit amounts to the chequing account
  $('#deposit1').on('click', function(event) {
    var deposit = parseInt($('#amount1').val());
    total1 = total1 + deposit;
    $('#balance1').html('$' + total1);
  }); 
  $('#deposit2').on('click', function(event) {
    var deposit = parseInt($('#amount2').val());
    total2 = total2 + deposit;
    $('#balance2').html('$' + total2);
  });

// logs the input when the withdraw button is clicked, and takes away the withdrawl amount from the chequing account
 $('#withdraw1').on('click', function(event) {
    var deposit = parseInt($('#amount1').val());
    total1 = total1 - deposit;
    $('#balance1').html('$' + total1);
  }); 
  $('#withdraw2').on('click', function(event) {
    var deposit = parseInt($('#amount2').val());
    total2 = total2 - deposit;
    $('#balance2').html('$' + total2);
  });

})



// attempt at trying to combine the two totals so that chequing can interact with the savings account
var totalBalance = total1 + total2;


if (total1 <= -1 && totalBalance >= amountBorrowed) {
    var amountBorrowed = 
    alert('I do not know how to make this change!');
}







// $('.account').css("border", "pink");


