$(function () {
  var mq = matchMedia("(max-width: 1080px)");
  if (mq.matches) {
    $("figure").css("display", "inline-block");
    var insertBreak = /*$("<div></div>").append*/ $("<br />");
    $("#layout-Tablet").append(insertBreak);
    $("#logo")
      .removeClass("brand-logo center")
      .css({ position: "relative", left: "33.5%", fontSize: "2rem" });
    $("ul").addClass("col m2").css({ position: "relative", left: "42%" });
    $("li").css("margin-bottom", "-10px");
    $("hr").remove();
  }
});
