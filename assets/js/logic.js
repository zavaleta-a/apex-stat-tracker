$(function () {
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
  var dropDownList = $("#dropDown-list");
  // Handle on dynamically created HTML elements //

  var favoritePlayersNames = [];

  renderFavorites();
  // Array of favorite players

  function renderFavorites() {
    // Get the list from local storage and store in local variable
    favoritePlayersNames = JSON.parse(localStorage.getItem("fav"));
    if (!favoritePlayersNames) {
      favoritePlayersNames = [];
    }
    // Clear the container (ul)
    dropDownList.empty();
    // Loop through the list from localStorage and append to ul
    for (let i = 0; i < favoritePlayersNames.length; i++) {
      var listItem = $("<li></li>");
      var listItemLinks = $("<a></a>");
      listItem.append(listItemLinks);
      listItemLinks.html(
        favoritePlayersNames[i].playerName +
          " (" +
          favoritePlayersNames[i].platform +
          ")"
      );
      dropDownList.append(listItem);
    }
  }

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

    if ($("#PSN").is(":checked")) {
      var psbChildren = playerSearchBox.children().detach();
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
      var psbChildren = playerSearchBox.children().detach();
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
      var psbChildren = playerSearchBox.children().detach();
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
        playerSearchBox.empty();
        playerSearchBox.removeClass("center-align");
        playerSearchBox.append(psbChildren);
      } else if ($("h6").html() === "Xbox Database") {
        playerSearchBox.empty();
        playerSearchBox.removeClass("center-align");
        playerSearchBox.append(psbChildren);
      } else {
        playerSearchBox.empty();
        playerSearchBox.removeClass("center-align");
        playerSearchBox.append(psbChildren);
      }
    });
    // IF BACK BUTTON IS CLICKED //

    playerSearchButton.on("click", function () {
      // Facebook Share Button Dynamic Styling //
      $("#share-cont").css("display", "block");
      // Facebook Share Button Dynamic Styling //
      var url =
        "https://apex-legends.p.rapidapi.com/stats/" +
        playerNameInputPSN.val() +
        "/PS4";
      var targetInput = playerNameInputPSN;
      var platform = "Playstation";
      if ($("h6").html() === "Xbox Database") {
        url =
          "https://apex-legends.p.rapidapi.com/stats/" +
          playerNameInputXbox.val() +
          "/X1";
        platform = "Xbox";
        targetInput = playerNameInputXbox;
      } else if ($("h6").html() === "PC Database") {
        url =
          "https://apex-legends.p.rapidapi.com/stats/" +
          playerNameInputPc.val() +
          "/PC";
        targetInput = playerNameInputPc;
        platform = "PC";
      }
      // fetch
      fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "apex-legends.p.rapidapi.com",
          "x-rapidapi-key":
            "02893924bfmshe946457e53f4bc1p1d45c5jsncc9393577c87",
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
            var addToFav = $(
              "<div id='Faves' class='col s12 center-align'><button>Add To Favorites</button></div>"
            );
            statBox.append(addToFav);
            addToFav.on("click", function () {
              var newfav = {
                playerName: targetInput.val(),
                platform: platform,
              };
              // Add list items to the array to an array
              favoritePlayersNames.push(newfav);

              // Save that list of items to local storage
              localStorage.setItem("fav", JSON.stringify(favoritePlayersNames));
              // Call render method (Reads from localstorage loops through localStorage and creates list items)
              renderFavorites();
            });
          } else {
            error.css("visibility", "visible");
          }
        });
      });
    });
    // End Of PlayerSearchButton //
  });
  // End Of Continue Button //
  $("#favorites-Container").on("click", function (event) {
    if (
      event.target.matches("#favorites") ||
      event.target.matches("#favorites-Text")
    ) {
      $("#dropDown").toggleClass("toggleList");
    }
  });
});
