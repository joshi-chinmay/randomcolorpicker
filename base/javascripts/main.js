$(document).ready(function(){
  document.globalFlag = true;
});

// disabling scroll for every device
$(document).keydown(function(event) {
  var keyEvents = (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189')
  if ( (event.ctrlKey == true) && keyEvents ) {
    event.preventDefault();
  }
});

$(window).bind('mousewheel DOMMouseScroll', function (event) {
  if (event.ctrlKey == true) {
    event.preventDefault();
  }
});

$(document).keypress(function(event) {
  if(event.which == '13'){
    if(document.globalFlag){
      document.globalFlag = false;
      $(".colorful-awesomeness").hide();
    }

    $(".single-color-awesomeness").removeClass("invisible").addClass("visible");

    var awesomeColor = color();
    var awesomeContrastColor = contrastColor(awesomeColor);

    if( awesomeColor != undefined || awesomeContrastColor != undefined ){
      $(".change-background").css("background-color", awesomeColor);
      $(".color-name").css("color", awesomeContrastColor).text(awesomeColor);
    } else {
      $(".colorful-awesomeness").show();
      $(".single-color-awesomeness").removeClass("visible").addClass("invisible");
    }
  }
});

var color = function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var contrastColor = function getContrastColor(hexcolor){
  var r = parseInt(hexcolor.substr(0,2),16);
  var g = parseInt(hexcolor.substr(2,2),16);
  var b = parseInt(hexcolor.substr(4,2),16);
  var yiq = ((r*299)+(g*587)+(b*114))/1000;
  return (yiq >= 128) ? 'black' : 'white';
}
