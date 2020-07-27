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

    //$('.img-fluid').css('opacity', 0.4)

    $('.im1').hover(function () {
      $('#image1').css({"opacity":"30%","transition":"2s"});
      $('#w1').show();
    },
    function () {
      $('#image1').css({"opacity":"100%"});
      $('#w1').hide();
    });

    $('.im2').hover(function () {
      $('#image2').css({"opacity":"30%","transition":"2s"});
      $('#w2').show();
    },
    function () {
      $('#image2').css({"opacity":"100%"});
      $('#w2').hide();
    });

    $('.im3').hover(function () {
      $('#image3').css({"opacity":"30%","transition":"2s"});
      $('#w3').show();
    },
    function () {
      $('#image3').css({"opacity":"100%"});
      $('#w3').hide();
    });

    $('.im4').hover(function () {
      $('#image4').css({"opacity":"30%","transition":"2s"});
      $('#w4').show();
    },
    function () {
      $('#image4').css({"opacity":"100%"});
      $('#w4').hide();
    });

    $('.im5').hover(function () {
      $('#image5').css({"opacity":"30%","transition":"2s"});
      $('#w1').show();
    },
    function () {
      $('#image5').css({"opacity":"100%"});
      $('#w5').hide();
    });

    $('.im6').hover(function () {
      $('#image6').css({"opacity":"30%","transition":"2s"});
      $('#w6').show();
    },
    function () {
      $('#image6').css({"opacity":"100%"});
      $('#w6').hide();
    });

    $('.im7').hover(function () {
      $('#image7').css({"opacity":"30%","transition":"2s"});
      $('#w7').show();
    },
    function () {
      $('#image7').css({"opacity":"100%"});
      $('#w7').hide();
    });

    $('.im8').hover(function () {
      $('#image8').css({"opacity":"30%","transition":"2s"});
      $('#w8').show();
    },
    function () {
      $('#image8').css({"opacity":"100%"});
      $('#w8').hide();
    });















  });
   


function myForm() {
  var name = document.getElementById("name").value;
  var email =document.getElementById("email").value;
  var message =document.getElementById("myTextarea").value;

   alert (name + ' ' + 'your message has beeen received')
  
  }