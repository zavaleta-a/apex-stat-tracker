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
      var playerNameLabelPSN = $("<label>PSN ID: </label>");
      var playerNameInputPSN = $("<input type='username' />");
      playerSearchBox.append(playerNameLabelPSN);
      playerSearchBox.append(playerNameInputPSN);
      var playerSearchButton = $(
        "<button id='checkPlayerData'>search</button>"
      );
      playerSearchBox.append(insertBreak);
      playerSearchBox.append(playerSearchButton);
    } else if ($("#XBOX").is(":checked")) {
      playerSearchBox.empty();
      playerSearchBox.addClass("center-align");
      var xboxSearch = $("<h6></h6>")
        .html("Xbox Database")
        .addClass("center-align");
      playerSearchBox.append(xboxSearch);
      var playerNameLabelXbox = $("<label>GamerTag: </label>");
      var playerNameInputXbox = $("<input type='username' />");
      playerSearchBox.append(playerNameLabelXbox);
      playerSearchBox.append(playerNameInputXbox);
      var playerSearchButton = $(
        "<button id='checkPlayerData'>search</button>"
      );
      playerSearchBox.append(insertBreak);
      playerSearchBox.append(playerSearchButton);
    } else if ($("#PC").is(":checked")) {
      playerSearchBox.empty();
      playerSearchBox.addClass("center-align");
      var pcSearch = $("<h6></h6>")
        .html("PC Database")
        .addClass("center-align");
      playerSearchBox.append(pcSearch);
      var playerNameLabelPc = $("<label>Username: </label>");
      var playerNameInputPc = $("<input type='username' />");
      playerSearchBox.append(playerNameLabelPc);
      playerSearchBox.append(playerNameInputPc);
      var playerSearchButton = $(
        "<button id='checkPlayerData'>search</button>"
      );
      playerSearchBox.append(insertBreak);
      playerSearchBox.append(playerSearchButton);
    } else {
      // WHAT HAPPENS IF NO CONSOLE TYPE IS SELECTED????? //
    }

    $("#checkPlayerData").on("click", function (event) {
      event.preventDefault();

      var url = "https://apex-legends.p.rapidapi.com/stats/imshleepdawg/PS4";

      if (playerNameInputPSN.val() !== "") {
        url = url.slice(54);
        url =
          "https://apex-legends.p.rapidapi.com/stats/" +
          playerNameInputPSN.val() +
          "/PS4";
        fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "apex-legends.p.rapidapi.com",
            "x-rapidapi-key":
              "6669d5edcfmsh0a1b6b64e531adap1a09d1jsn0b4c7917e6bc",
          },
        })
          .then(function (resp) {
            return resp.json();
          })
          .then(function (data) {
            console.log(data);
          });
        // END OF FETCH //
      } else {
        playerNameInputPSN.css({
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "red",
        });
      }
      // End Of Else //
    });
  });
});
