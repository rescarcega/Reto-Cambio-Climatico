$(function(){
	console.log('jajajaja')
})

	$('.tab__menu a').click(function(e){
		e.preventDefault()

		tab = $(this).attr('href')

		$(tab).addClass('active').siblings().removeClass('active')

		$(this).addClass('active')

	})


	$('.impacto__menu a').click(function(e){
		e.preventDefault()

		tab = $(this).attr('href')

		$(tab).addClass('active').siblings().removeClass('active')

		$(this).parent().addClass('active').siblings().removeClass('active')

	})


