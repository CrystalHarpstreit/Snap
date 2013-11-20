$(document).ready(function() {
  var s = Snap(800, 600);
      
  var bigCircle = s.circle(100, 100, 50);
  bigCircle.attr({
    fill: "#ff452c",
    stroke: "#333",
    strokeWidth: 2
  });
        
  var smallCircle = s.circle(70, 100, 40);
	  
  smallCircle.attr({
    fill: "#fff"
  });

  smallCircle.animate({r: 50}, 1000);

  var smallerCircle = s.circle(60, 80, 30);
	      
  smallerCircle.attr({
    fill: "#35ff5c",
    stroke: "#333",
    strokewidth: 3
  });

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var cb = function() {
    smallerCircle.animate({
      fill: "rgb(" + randomNumber(0, 255) +
        ", " + randomNumber(0, 255) + ", " + randomNumber(0, 255) + ")"
    }, 300);
  };

  setInterval(cb, 1000);

  var smallestCircle = s.circle(160, 165, 190);

  smallestCircle.attr({ 
    fill: "#333",
    class: 'animate'
  });

  smallestCircle.animate({
    r: 40
  }, 1000);
 
   $('.animate').on('mouseover', function(){
    $(this).attr('fill', 'yellow');
  });
});
