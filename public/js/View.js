
$(document).ready(function() {

  var theView = new View();
  theView.bindEventListeners();
});

function View() {
  this.clickCount = 0;
}

View.prototype.bindEventListeners = function() {
  var self = this;

    $("button").on("click", function(e) {
      var colClicked = e.currentTarget.name.slice(-1);
      self.incrementClickCount();
      self.addNextMove(colClicked);
    })
};

View.prototype.addNextMove = function(colClicked) {
  var rowNum = placePiece(colClicked, this.currentColor);
  $piece = $('<p class="' + this.currentColor + '"></p>');
  $('#col' + colClicked + ' #row0').innerHTML($piece);

  // $("#col" + colClicked + " #row" + rowNum).addClass(this.currentColor);  ?? Needed?
};

View.prototype.currentColor = function() {
  return (this.clickCount % 2 === 0) ?  "black" : "red"
};

View.prototype.incrementClickCount = function() {
  this.clickCount += 1;
};
