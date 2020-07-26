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
    })
});