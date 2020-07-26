$(document).ready(function () {
    $('#design').click(function () {
      $('.des_p').toggle();
      $('#design').toggle();
    });
    $('#dev').click(function () {
      $('#dev').toggle();
      $('.dev_p').toggle();
    });
    $('#prod').click(function () {
      $('#prod').toggle();
      $('.prod_p').toggle();
    });
    $('.des_p').click(function () {
      $('.des_p').toggle();
      $('#design').toggle();
    });
    $('.dev_p').click(function () {
      $('#dev').toggle();
      $('.dev_p').toggle();
    });
    $('.prod_p').click(function () {
      $('#prod').toggle();
      $('.prod_p').toggle();
    });

    $(".port div").hover(function(){
      $(this).find('img').css("background-color", "white");
      }, function(){
      $(this).find('img').css("background-color", "inherit");
    });
   
});

function myForm() {
  var name = document.getElementById("name").value
  var email =document.getElementById("email").value
  var message =document.getElementById("myTextarea").value
    alert (name + ' ' + 'your message has beeen received')
  
  }