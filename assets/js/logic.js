$(function () {
  var mq = matchMedia("(max-width: 1080px)");
  if (mq.matches) {
    $("figure").css("display", "inline-block");
    var insertBreak = /*$("<div></div>").append*/ $("<br />");
    $("#layout-Tablet").append(insertBreak);
    $("#logo")
      .removeClass("brand-logo center")
      .css({ position: "relative", left: "33%", fontSize: "2rem" });
    $("ul").addClass("col m2").css({ position: "relative", left: "40%" });

    $("#about-Li").css({ position: "relative", right: "15px" });
    $("hr").remove();
  }
});
