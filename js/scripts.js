$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

  if (height >= 60) {
    $('#tall').show();
  } else {
    $('#short').show();
  }
});
