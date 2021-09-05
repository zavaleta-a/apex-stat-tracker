$(function () {
  var mq = matchMedia("(max-width: 1200px)");
  if (mq.matches) {
    $("figure").css("display", "block");
    var insertBreak = /*$("<div></div>").append*/ $("<br />");
    $("#layout-Tablet").append(insertBreak);
    $("#logo")
      .removeClass("brand-logo center")
      .css({ position: "relative", left: "265px", fontSize: "2rem" });
    $("ul").css({ position: "relative", left: "32%" });
    $("hr").remove();
  }
});
