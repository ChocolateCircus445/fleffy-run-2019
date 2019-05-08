//The credits library for Fleffy (is not used)
var videoPlaying = false;
var scrn = 1;
goToTitle = function() {
  scrn = 1;
}

var Credit = function(role, people, size, font, color) {
  var creditCanvas = document.createElement("canvas")
  var context = creditCanvas.getContext("2d");
  context.font = `${size}px ${font}`
  var stringles = [role].concat(people);
  var lengths = [];
  var height = size * 1.15;
  for (var i = 0; i < stringles.length; i++) {
    lengths.push(context.measureText(stringles[i]).width);
  }
  creditCanvas.width = eval(`(Math.max(${lengths.join(",")}) * 3)`);
  creditCanvas.height = (stringles.length * height) + (size / 2) + 15;
  context.font = `bold ${size}px ${font}`
  context.fillStyle = color;
  var printLoc = 15;
  var printCred = function(text) {
    context.fillText(text, /*(creditCanvas.width / 2) - (context.measureText(text).width / 2)*/10, printLoc);
    printLoc += height;
  }
  printCred(role);
  context.font = `${size}px ${font}`
  printLoc += (size / 2);
  for (var i = 0; i < people.length; i++) {
    printCred(people[i]);
  }
  return creditCanvas;

}
