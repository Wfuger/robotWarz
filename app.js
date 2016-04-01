$(function(){

  $('#branding').css({backgroundPosition: 'center 40%'});
  $('#content').css({backgroundPosition: 'center -100%'});
  $('#sec-content').css({backgroundPosition: 'center 120%'});
  $('#footer').css({backgroundPosition: 'center 87%'});
  $('#wrapper').css({overflow: "hidden"});



  var num = 1;

  function startHim() {
    num++;
    $("#sec-content").animate({top: "-=5px"}, 150).animate({top: "+=5px"}, 150);
    $("#content,#branding").animate({top: "-=" + num + "px"}, 150).animate({top: "+=" + num + "px"}, 150);
    if (num < 4) {
      setTimeout(startHim, 300);
    } else {
      setTimeout(bounceHim, 300);
    }
  }

  function bounceHim() {
    $("#sec-content,#branding,#footer").animate({top: "-=25px"}, 10).animate({top: "+=25px"}, 150);
    $("#content").animate({top: "-=10px"}, 150).animate({top: "+=10px"}, 150);
    setTimeout(bounceHim, 300);
  }

  function startHim2() {
    num++;
    $("#sec-content2").animate({top: "-=5px"}, 150).animate({top: "+=5px"}, 150);
    $("#content2,#branding2").animate({top: "-=" + num + "px"}, 200).animate({top: "+=" + num + "px"}, 150);
    if (num < 4) {
      setTimeout(startHim2, 300);
    } else {
      setTimeout(bounceHim2, 300);
    }
  }

  function bounceHim2() {
    $("#sec-content2,#branding2,#footer2").animate({top: "-=15px"}, 150).animate({top: "+=15px"}, 150);
    $("#content2").animate({top: "-=10px"}, 150).animate({top: "+=10px"}, 150);
    setTimeout(bounceHim2, 300);
  }

function randomMovement(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var playerOneMovement = parseFloat(randomMovement(1000, 2000));
var playerTwoMovement = parseFloat(randomMovement(1000, 2000));

  $('#start').on('click', function() {
    $("#full-robot").animate({
      left: "-5%",
      marginLeft: "400px"
    }, 1500);
    $("#full-robot2").animate({
      right: "30%",
      marginRight: "500%"
    }, 1500);
    setTimeout(startHim, playerOneMovement);
    setTimeout(startHim2, playerTwoMovement);
  });
});
