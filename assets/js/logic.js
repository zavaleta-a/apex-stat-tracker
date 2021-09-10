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

  $("#complete-Button").on("click", function (event) {
    event.preventDefault();

    var playerSearchBox = $("#player-SearchBox");
    var insertBreak = $("<br />");

    if ($("#PSN").is(":checked")) {
      playerSearchBox.empty();
      playerSearchBox.addClass("center-align");
      var playstationSearch = $("<h6></h6>")
        .html("Playstation Database")
        .addClass("center-align");
      playerSearchBox.append(playstationSearch);
      playerSearchBox.append(insertBreak);
      var playerNameLabel = $("<label id='PSN-ID'>PSN ID: </label>");
      var playerNameInput = $("<input id='PSN-Search' type='username' />");
      playerSearchBox.append(playerNameLabel);
      playerSearchBox.append(playerNameInput);
      var playerSearchButton = $("<button>search</button>");
      playerSearchBox.append(insertBreak);
      playerSearchBox.append(playerSearchButton);
    } else if ($("#XBOX").is(":checked")) {
      playerSearchBox.empty();
      var xboxSearch = $("<h6></h6>")
        .html("Xbox Database")
        .addClass("center-align");
      playerSearchBox.append(xboxSearch);
    } else {
      playerSearchBox.empty();
      var pcSearch = $("<h6></h6>")
        .html("PC Database")
        .addClass("center-align");
      playerSearchBox.append(pcSearch);
    }
  });
});
