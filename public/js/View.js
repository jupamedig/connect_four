function View() {
  this.buttons = $("button");
}

View.prototype.renderPiece = function(rowNum, colClicked, currentColor) {
  var pieceColor;
  if (currentColor === "B") {
    pieceColor = "black";
  } else if (currentColor === "R") {
    pieceColor = "red";
  }

  $piece = $('<p class="' + pieceColor + '"></p>');
  console.log($piece);
  console.log(colClicked);
  $('#col' + colClicked + ' #row0').innerHTML($piece);
  // $("#col" + colClicked + " #row" + rowNum).addClass(pieceColor);  // ?? adds background color style to div
}

View.prototype.renderWinner = function(winnerColor) {
  var winner;
  if (winnerColor === "B") {
    winner = "Black";
  } else if (winnerColor === "R") {
    winner = "Red";
  }
  alert(winner + " is the winner!");
}

View.prototype.columnFullError = function() {
  alert("Column's full. Pick another column.")
}
