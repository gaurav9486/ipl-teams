$(document).ready(function () {
  var teamsInfo = JSON.parse(localStorage.getItem("team-data"));

  var teamId = window.location.search.split("=")[1];
  var requiredData = teamsInfo[teamId - 1];
  console.log(requiredData);

  var theTeam = $("#the-team");
  var teamData = $("<div>").attr("id", "team-data");
  theTeam.append(teamData);

  var teamLogo = $("<img>").attr({
    class: "team-logo",
    src: requiredData.teamIcon,
  });
  teamData.append(teamLogo);

  var teamDetails = $("<div>").addClass("team-details");
  teamData.append(teamDetails);

  var divTitle = $("<h2>").addClass("div-title").text("LIST OF PLAYERS");
  teamDetails.append(divTitle);

  for (i=0; i<requiredData.players.length; i++){
      var playerName = $("<h3>").addClass("player-name").text(i+1 +". "+ requiredData.players[i].name);
      teamDetails.append(playerName);
  }
});
