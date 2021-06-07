$(document).ready(function () {
  var teamsInfo = JSON.parse(localStorage.getItem("team-data"));
  console.log(teamsInfo);

  var searchList = $("#search-options");

  for (i = 0; i < teamsInfo.length; i++) {

    var teamRow = $("<a>")
      .attr({
        class: "team-row",
        id: teamsInfo.key,
        href: "./searchresult.html?p=" + teamsInfo[i].id,
      })
      .text(teamsInfo[i].fullName);
    searchList.append(teamRow);
  }

  $(".team-row").css("display", "none");

  $("#search-input").on("focus", function() {
    $(".team-row").css("display", "block");
  })



  function renderTeamInfo(teamsInfo) {
    var teamsWrapper = $("#teams-wrapper");
    var anchor = $("<a>").attr({
      href: "./teams.html?p=" + teamsInfo.id,
      class: "card-anchor",
    });
    teamsWrapper.append(anchor);

    var teamCard = $("<div>").addClass("team-card");
    anchor.append(teamCard);

    var teamImage = $("<img>").attr({
      class: "team-image",
      src: teamsInfo.teamIcon,
    });
    teamCard.append(teamImage);

    var teamTitle = $("<h2>").addClass("team-title").text(teamsInfo.fullName);
    teamCard.append(teamTitle);
  }

  for (i=0; i<teamsInfo.length; i++) {
    renderTeamInfo(teamsInfo[i]);
  }
});
