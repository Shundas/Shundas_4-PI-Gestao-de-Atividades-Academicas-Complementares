$(function () {
  $('[data-toggle="popover"]').popover();
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus');
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$('#element').toast('show');

$('#element').toast('hide');

$('#element').toast('dispose');

$('.alert').alert();

$('.alert').alert('close');

$().alert('dispose');
