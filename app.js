$(function(){
  $('#branding').css({backgroundPosition: 'center 0'});
  $('#content').css({backgroundPosition: 'center 0'});
  $('#sec-content').css({backgroundPosition: 'center 0'});
  $('#footer').css({backgroundPosition: 'center 0'});
  $('#wrapper').css({overflow: "hidden"});


var num = 1;

function startHim(){
	num++;
	$("#sec-content").animate({top:"-=5px"},150).animate({top:"+=5px"},150);
	$("#content,#branding").animate({top:"-="+num+"px"},150).animate({top:"+="+num+"px"},150);
	if(num<4){
		setTimeout("startHim()",300);
	} else {
		setTimeout("bounceHim()",300);
	}
}

function bounceHim(){
	$("#sec-content,#branding").animate({top:"-=4px"},150).animate({top:"+=4px"},150);
		$("#content").animate({top:"-=8px"},150).animate({top:"+=8px"},150);
	setTimeout("bounceHim()",300);
}

  });
