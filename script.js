/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
	"use strict";
	$(".playButton").hover(function () {
		$(this).attr("src", "media/photo/playButtonDark.png");
	}, function () {
		$(this).attr("src", "media/photo/playButton.png");
	});

	$(".infoButton").hover(function () {
		$(this).attr("src", "media/photo/infoButtonDark.svg");
	}, function () {
		$(this).attr("src", "media/photo/infoButton.svg");
	});

	$(".exitButton").hover(function () {
		$(this).attr("src", "media/photo/exitButtonDark.png");
	}, function () {
		$(this).attr("src", "media/photo/exitButton.png");
	});

	$(".leftButton").hover(function () {
		$(this).attr("src", "media/photo/leftButtonDark.png");
	}, function () {
		$(this).attr("src", "media/photo/leftButton.png");
	});

	$(".rightButton").hover(function () {
		$(this).attr("src", "media/photo/rightButtonDark.png");
	}, function () {
		$(this).attr("src", "media/photo/rightButton.png");
	});


	$(".button").click(function () {
		$(".backdrop").fadeIn("slow");
		$(".exitButton").fadeIn("slow");
	});



	$(".play1").click(function () {
		$("h1").fadeOut("fast");
		$(".clip1").fadeIn("slow");
		$(".clip1").get(0).play();
	});

	$(".play2").click(function () {
		$("h1").fadeOut("fast");
		$(".clip2").fadeIn("slow");
		$(".clip2").get(0).play();
	});
	
	
	$(".exitButton").click(function () {
		$("h1").fadeIn("fast");
		$("video").each(function () {
			$(this).get(0).pause();
			$(this).currentTime = 0;
			$(this).load();
		});
		$(".backdrop").fadeOut("slow");
		$("video").fadeOut("slow");
		$(".exitButton").fadeOut("slow");
	});
	
});
    