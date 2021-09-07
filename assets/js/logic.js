$(function () {
  var mq = matchMedia("(max-width: 1200px)");
  if (mq.matches) {
    $("#logo").removeClass("brand-logo center");
    $("ul").addClass("col md3");
    $("hr").remove();
  } else {
    $("ul").css({ display: "flex", position: "relative", left: "73%" });
    $("ul").addClass("col l3.5");
  }
});
