$(document).ready(function() {
  $("button").on("click", function(e) {
    var colClicked = e.currentTarget.name.slice(-1);
    var color = "red";
    var rowNum = addPiece(colClicked, color);
    $("#col" + colClicked + " #" + rowNum).addClass(color);
  })
});
