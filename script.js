$(document).ready(function(){
	var classOfClicked;

	$("a").click(function(){
		//Gets the first class item of anchor tag element that has been clicked.
		//hides the content of the current section (which has the class "section") class.
		//shows the content of the class that has been clicked after 0.5sec
		$('.loadingScreen').show(500);
		$('body').addClass('loading');
		classOfClicked = $(this).attr("class").split(' ')[1];
		$('.section').slideUp().hide(200);
		setTimeout(function(){$('.'+classOfClicked).eq(1).slideDown().show(400)}, 2000);
		setTimeout(function(){

			$('.loadingScreen').slideUp().hide(800)
			$('body').removeClass('loading');
		}, 1300);
		$('#navUl').removeClass('show');
		$('#nav-container').removeClass('show');
		$('#burgerMenuIcon').removeClass('show');
	});

	$('.grid-item').hover(function(){
		$(this).find('pre').addClass('showCode');
	}, function(){
		$(this).find('pre').removeClass('showCode');
	});

	$('#burgerMenu').click(function(){
		if(!$('#nav-container').hasClass('show')){
			$('#nav-container').addClass('show');
			$('#navUl').addClass('show');
			$('#burgerMenuIcon').addClass('show');
		} else if ($('#nav-container').hasClass('show')){
			$('#nav-container').removeClass('show');
			$('#navUl').removeClass('show');
			$('#burgerMenuIcon').removeClass('show');

		}
	})

});


