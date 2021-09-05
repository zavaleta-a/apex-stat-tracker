$(function () {
  var mq = matchMedia("(max-width: 1200px)");
  if (mq.matches) {
    $("figure").css("display", "block");
    var insertBreak = $("<div></div>").append("<br />");
    $("#layout-Tablet").append(insertBreak);
  }
});
