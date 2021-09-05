$(function () {
  var mq = matchMedia("(max-width: 1200px)");
  if (mq.matches) {
    $("figure").css("display", "inline-block");
    $("#logo")
      .removeClass("brand-logo center")
      .css({ position: "relative", left: "33.5%", fontSize: "2rem" });
    $("#ul-Background").css("background-color", "green");
    $("ul").addClass("col m2").css({ position: "relative", left: "42%" });
    $("li").css("margin-bottom", "-10px");
    $("hr").remove();
  } else {
    $("ul").css({ display: "flex", position: "relative", left: "82%" });
  }
});
