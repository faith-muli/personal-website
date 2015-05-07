$(document).ready(function(){
  $('#triangle').fadeOut(2000);
  $('#square').slideDown(2000);
  $('#circle').slideDown(2000);
  $('#rounded-rectangle').fadeIn(2000);
  $('.shape').css('display', 'inline-block');
  $('li').css('color','green');

  $("#triangle").click(function(){
   $('#triangle').fadeOut(); 

  });
   $("#square").mouseenter(function(){
   	$('#square').css('background-color', 'brown');
  });

   	$("#circle").mouseenter(function(){
   	$("#circle").animate({
   	   height: '+=50px',
   	   width: '+=50px'
   		
   	});
	});
	$("#circle").mouseleave(function(){
	$("#circle").animate({
		height: '-=50px',
   	   width: '-=50px'
   	 });
	});
   		$("#rounded-rectangle").click(function(){
		$("#rounded-rectangle").animate({
			//opacity: 0.7,
			left: "+=50px",
			height:"toggle"
		}, 5000, function (){
		});

	});

});
