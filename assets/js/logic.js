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

  $("#continue-Button").on("click", function (event) {
    event.preventDefault();

    // Handle on dynamically created HTML elements //
    var playerSearchBox = $("#player-SearchBox");
    var insertBreak = $("<br />");
    var error = $("<p>PSN ID Must Contain A Value!</p>").css({
      color: "red",
      visibility: "hidden",
    });

    var playstationSearch = $("<h6></h6>")
      .html("Playstation Database")
      .addClass("center-align");
    var xboxSearch = $("<h6></h6>")
      .html("Xbox Database")
      .addClass("center-align");
    var pcSearch = $("<h6></h6>").html("PC Database").addClass("center-align");
    var playerSearchButton = $("<button id='checkPlayerData'>search</button>");
    var playerSearchBack = $("<button id='consoleSelect'>back</button>");
    var playerNameLabelPSN = $("<label>PSN ID: </label>");
    var playerNameInputPSN = $("<input type='username' />");
    var playerNameLabelXbox = $("<label>GamerTag: </label>");
    var playerNameInputXbox = $("<input type='username' />");
    var playerNameLabelPc = $("<label>Username: </label>");
    var playerNameInputPc = $("<input type='username' />");
    // Handle on dynamically created HTML elements //
    if ($("#PSN").is(":checked")) {
      playerSearchBox.empty();
      // TESTING //

      // TESTING //
      playerSearchBox.addClass("center-align");
      playerSearchBox.append(playstationSearch);
      playerSearchBox.append(insertBreak);
      playerSearchBox.append(playerNameLabelPSN);
      playerSearchBox.append(playerNameInputPSN);
      playerSearchBox.append(insertBreak);
      playerSearchBox.append(playerSearchButton);
      playerSearchBox.append(playerSearchBack);
      playerSearchBox.append(error);
    } else if ($("#XBOX").is(":checked")) {
      playerSearchBox.empty();
      playerSearchBox.addClass("center-align");
      playerSearchBox.append(xboxSearch);
      playerSearchBox.append(playerNameLabelXbox);
      playerSearchBox.append(playerNameInputXbox);
      playerSearchBox.append(insertBreak);
      playerSearchBox.append(playerSearchButton);
      playerSearchBox.append(playerSearchBack);
      playerSearchBox.append(error);
    } else if ($("#PC").is(":checked")) {
      playerSearchBox.empty();
      playerSearchBox.addClass("center-align");
      playerSearchBox.append(pcSearch);
      playerSearchBox.append(playerNameLabelPc);
      playerSearchBox.append(playerNameInputPc);
      playerSearchBox.append(insertBreak);
      playerSearchBox.append(playerSearchButton);
      playerSearchBox.append(playerSearchBack);
      playerSearchBox.append(error);
    } else {
      // WHAT HAPPENS IF NO CONSOLE TYPE IS SELECTED????? //
    }

    // IF BACK BUTTON IS CLICKED //
    playerSearchBack.on("click", function (event) {
      event.preventDefault();

      if ($("h6").html() === "Playstation Database") {
        console.log("back");
      }
    });
    // IF BACK BUTTON IS CLICKED //

    playerSearchButton.on("click", function (event) {
      event.preventDefault();

      // IF PLAYSTATION DATABASE IS SEARCHED //
      if ($("h6").html() === "Playstation Database") {
        var url =
          "https://apex-legends.p.rapidapi.com/stats/" +
          playerNameInputPSN.val() +
          "/PS4";
        // fetch
        fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "apex-legends.p.rapidapi.com",
            "x-rapidapi-key":
              "6669d5edcfmsh0a1b6b64e531adap1a09d1jsn0b4c7917e6bc",
          },
        }).then(function (resp) {
          return resp.json().then(function (data) {
            if (resp.ok) {
              error.css("visibility", "hidden");
              $("#empty-Vid-Container").empty();
              var statBox = $("<div id='statBox' class='row'></div>");
              statBox.css({
                height: "250px",
                borderStyle: "solid",
                borderColor: "red",
              });
              $("#empty-Vid-Container").append(statBox);
              // Current Level Box //
              var levelBox = $(
                "<div id='level' class='center-align col s6'><div style='text-Decoration: underline'>Current Level</div></div>"
              );
              levelBox.css({
                height: "110px",
                borderStyle: "solid",
                borderColor: "black",
                fontWeight: "bolder",
              });
              statBox.append(levelBox);
              levelBox
                .append(insertBreak)
                .append($("<span></span>").html(data.global.level));
              // Recently Used Legend Box //
              var legendBox = $(
                "<div id='legend' class='center-align col s6'><span style='text-Decoration: underline'>Recently Used Legend</span></div>"
              );
              legendBox.css({
                height: "110px",
                borderStyle: "solid",
                borderColor: "black",
                fontWeight: "bolder",
              });
              statBox.append(legendBox);
              legendBox
                .append(insertBreak)
                .append(
                  $("<span></span>").html(data.legends.selected.LegendName)
                );
              // Division Box //

              var divisionBox = $(
                "<div id='division' class='center-align col s6'><div style='text-Decoration: underline'>Division</div></div>"
              );
              divisionBox.css({
                height: "110px",
                borderStyle: "solid",
                borderColor: "black",
                fontWeight: "bolder",
              });
              statBox.append(divisionBox);
              divisionBox.append(
                $("<span></span>").html(data.global.rank.rankName)
              );
              // Rank Box //
              var rankBox = $(
                "<div id='legend' class='center-align col s6'><div style='text-Decoration: underline'>Division Rank</div></div>"
              );
              rankBox.css({
                height: "110px",
                borderStyle: "solid",
                borderColor: "black",
                fontWeight: "bolder",
              });
              statBox.append(rankBox);
              rankBox.append($("<span></span>").html(data.global.rank.rankDiv));
              // ADD TO FAVORITES BUTTON //
              var addToFav = $(
                "<div id='Faves' class='col s12 center-align'><button>Add To Favorites</button></div>"
              );
              statBox.append(addToFav);
            } else {
              error.css("visibility", "visible");
            }
          });
        });
        // fetch
        // IF PLAYSTATION DATABASE IS SEARCHED //

        // IF XBOX DATABASE IS SEARCHED //
      } else if ($("h6").html() === "Xbox Database") {
        var url =
          "https://apex-legends.p.rapidapi.com/stats/" +
          playerNameInputXbox.val() +
          "/X1";
        // fetch
        fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "apex-legends.p.rapidapi.com",
            "x-rapidapi-key":
              "6669d5edcfmsh0a1b6b64e531adap1a09d1jsn0b4c7917e6bc",
          },
        }).then(function (resp) {
          return resp.json().then(function (data) {
            if (resp.ok) {
              error.css("visibility", "hidden");
              $("#empty-Vid-Container").empty();
              var statBox = $("<div id='statBox' class='row'></div>");
              statBox.css({
                height: "250px",
                borderStyle: "solid",
                borderColor: "red",
              });
              $("#empty-Vid-Container").append(statBox);
              // Current Level Box //
              var levelBox = $(
                "<div id='level' class='center-align col s6'><div style='text-Decoration: underline'>Current Level</div></div>"
              );
              levelBox.css({
                height: "110px",
                borderStyle: "solid",
                borderColor: "black",
                fontWeight: "bolder",
              });
              statBox.append(levelBox);
              levelBox
                .append(insertBreak)
                .append($("<span></span>").html(data.global.level));
              // Recently Used Legend Box //
              var legendBox = $(
                "<div id='legend' class='center-align col s6'><span style='text-Decoration: underline'>Recently Used Legend</span></div>"
              );
              legendBox.css({
                height: "110px",
                borderStyle: "solid",
                borderColor: "black",
                fontWeight: "bolder",
              });
              statBox.append(legendBox);
              legendBox
                .append(insertBreak)
                .append(
                  $("<span></span>").html(data.legends.selected.LegendName)
                );
              // Division Box //

              var divisionBox = $(
                "<div id='division' class='center-align col s6'><div style='text-Decoration: underline'>Division</div></div>"
              );
              divisionBox.css({
                height: "110px",
                borderStyle: "solid",
                borderColor: "black",
                fontWeight: "bolder",
              });
              statBox.append(divisionBox);
              divisionBox.append(
                $("<span></span>").html(data.global.rank.rankName)
              );
              // Rank Box //
              var rankBox = $(
                "<div id='legend' class='center-align col s6'><div style='text-Decoration: underline'>Division Rank</div></div>"
              );
              rankBox.css({
                height: "110px",
                borderStyle: "solid",
                borderColor: "black",
                fontWeight: "bolder",
              });
              statBox.append(rankBox);
              rankBox.append($("<span></span>").html(data.global.rank.rankDiv));
              // ADD TO FAVORITES BUTTON //
              var addToFav = $(
                "<div id='Faves' class='col s12 center-align'><button>Add To Favorites</button></div>"
              );
              statBox.append(addToFav);
            } else {
              error
                .text("GamerTag Must Contain A Value!")
                .css("visibility", "visible");
            }
          });
        });
        // fetch
        // IF XBOX DATABASE IS SEARCHED //

        // IF PC DATABASE IS SEARCHED //
      } else {
        var url =
          "https://apex-legends.p.rapidapi.com/stats/" +
          playerNameInputPc.val() +
          "/PC";
        // fetch
        fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "apex-legends.p.rapidapi.com",
            "x-rapidapi-key":
              "6669d5edcfmsh0a1b6b64e531adap1a09d1jsn0b4c7917e6bc",
          },
        }).then(function (resp) {
          return resp.json().then(function (data) {
            if (resp.ok) {
              error.css("visibility", "hidden");
              $("#empty-Vid-Container").empty();
              var statBox = $("<div id='statBox' class='row'></div>");
              statBox.css({
                height: "250px",
                borderStyle: "solid",
                borderColor: "red",
              });
              $("#empty-Vid-Container").append(statBox);
              // Current Level Box //
              var levelBox = $(
                "<div id='level' class='center-align col s6'><div style='text-Decoration: underline'>Current Level</div></div>"
              );
              levelBox.css({
                height: "110px",
                borderStyle: "solid",
                borderColor: "black",
                fontWeight: "bolder",
              });
              statBox.append(levelBox);
              levelBox
                .append(insertBreak)
                .append($("<span></span>").html(data.global.level));
              // Recently Used Legend Box //
              var legendBox = $(
                "<div id='legend' class='center-align col s6'><span style='text-Decoration: underline'>Recently Used Legend</span></div>"
              );
              legendBox.css({
                height: "110px",
                borderStyle: "solid",
                borderColor: "black",
                fontWeight: "bolder",
              });
              statBox.append(legendBox);
              legendBox
                .append(insertBreak)
                .append(
                  $("<span></span>").html(data.legends.selected.LegendName)
                );
              // Division Box //

              var divisionBox = $(
                "<div id='division' class='center-align col s6'><div style='text-Decoration: underline'>Division</div></div>"
              );
              divisionBox.css({
                height: "110px",
                borderStyle: "solid",
                borderColor: "black",
                fontWeight: "bolder",
              });
              statBox.append(divisionBox);
              divisionBox.append(
                $("<span></span>").html(data.global.rank.rankName)
              );
              // Rank Box //
              var rankBox = $(
                "<div id='legend' class='center-align col s6'><div style='text-Decoration: underline'>Division Rank</div></div>"
              );
              rankBox.css({
                height: "110px",
                borderStyle: "solid",
                borderColor: "black",
                fontWeight: "bolder",
              });
              statBox.append(rankBox);
              rankBox.append($("<span></span>").html(data.global.rank.rankDiv));
              // ADD TO FAVORITES BUTTON //
              var addToFav = $(
                "<div id='Faves' class='col s12 center-align'><button>Add To Favorites</button></div>"
              );
              statBox.append(addToFav);
            } else {
              error
                .text("Username Must Contain A Value!")
                .css("visibility", "visible");
            }
            // fetch
            // IF PC DATABASE IS SEARCHED //
          });
        });
      }
    });
  });
});
