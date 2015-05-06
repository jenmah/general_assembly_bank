var total1 = 0;
var total2 = 0;
var balance1 = 0;
var balance2 = 0;


// logs the information that is typed into both input boxes
//  $(document).ready(function() {
//   $('#amount1').on('keyup', function(event) {
//     amount1 = $(this).val();
//     console.log(amount1);
//   });
//   $('#amount2').on('keyup', function(event) {
//     amount2 = $(this).val();
//     console.log(amount2);
//   });




// displays updating values when the deposit button is clicked
$(document).ready(function() {
  $('#deposit1').on('click', function(event) {
    var deposit = parseInt($('#amount1').val());
    total1 = total1 + deposit;
    $('#balance1').html('$' + total1);
  }); 
  $('#deposit2').on('click', function(event) {
    var deposit = parseInt($('#amount2').val());
    total2 = total2 + deposit;
    $('#balance1').html('$' + total2);
  });

  // $('#deposit2').on('click', function(event) {
  //   $('#balance2').text('$' + amount2);
  // });


})








// $(document).ready(function() {
//   $('#deposit1').on('click', function(event) {
//     $('#balance1').text('$' + amount1);
//   });
//   $('#deposit2').on('click', function(event) {
//     $('#balance2').text('$' + amount2);
//   });
// })


  // $('#deposit2').on('click', function(event) {
  //   $('#balance2').text(parseInt($('#balance2').text()[1]) + parseInt(amount2));
//   });
// })



