$(document).ready(function () {
  $("img").click(function () {
    console.log(this);
    $(this).hide();
  });

  $("#restore").click(function () {
    $("img").show();
  });
});
