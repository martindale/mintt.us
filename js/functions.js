$(document).ready(function(){
	$(".btn.left").click(function(){
		$("#about").addClass("move");
		$("#blank").css("display", "block").animate({
			opacity: 1
		});
	});
	$(".btn.right").click(function(){
		$("#joinus").addClass("move");
		$("#blank").css("display", "block").animate({
			opacity: 1
		});
	});
	$("#blank").click(function(){
		$(this).animate({
			opacity: 0
		}).css("display", "none");
		$("#about").removeClass("move");
		$("#joinus").removeClass("move");
	});

	$(".highlight.apply").click(function(){
		$("#about").removeClass("move");
		$("#joinus").addClass("move");
	});
	$(".closebutton").click(function(){
		$("#blank").animate({
			opacity: 0
		}).css("display", "none");
		$("#about").removeClass("move");
		$("#joinus").removeClass("move");
	});
});