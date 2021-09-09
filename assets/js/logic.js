$(function () {
  // If screen reaches large desktop or higher, add a class to center logo and adjust width //
  var mq = matchMedia("(min-width: 992px)");
  if (mq.matches) {
    $(".flex-Container").addClass("brand-logo center");
    $("#brand-Logo").css("width", "23%");
  }

  var mq1 = matchMedia("(min-width: 993px)");
  if (mq1.matches) {
    $(".console-Container").addClass("col l4 center-align");
  }

  

});
