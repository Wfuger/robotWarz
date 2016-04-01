
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
    $("#sec-content,#branding").animate({top: "-=5px"}, 150).animate({top: "+=5px"}, 150);
    $("#content").animate({top: "-=10px"}, 150).animate({top: "+=10px"}, 150);
    setTimeout(bounceHim, 300);
  }

  $('#start').on('click', function() {
    $("#full-robot").animate({
      left: "50%",
      marginLeft: "400px"
    }, 2000);
    setTimeout(startHim, 2000);
  });
});
