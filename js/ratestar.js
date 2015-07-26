var ratestar = {
	stars: 5,
	rating: 0,
	updateStars: function(rating, elementID){
		this.rating = rating;
		$('#' + elementID + ' .star').removeClass('active');
		$('#' + elementID + ' .star[data-rating=' + this.rating + ']').addClass('active').prevAll().addClass('active');
	},
	getRating: function(){
		return this.rating;
	},
	init: function(stars, rating, elementID){
		//add the initial values to the obj
		this.stars = stars;
		this.rating = rating;

		//get the container
		var starContainer = $("#" + elementID).addClass('starContainer');

		//create some stars inside the starContainer
		for (i = 1; i <= this.stars; i++){
			starContainer.append('<span class="star star-' + i + '" data-rating=' + i + '></span>');
		};
		this.updateStars(rating, elementID);
	}
}

$(function(){
	ratestar.init(5, 0, 'ratestar');
	//hover behavior for the stars themselves.
	$('.star').hover(
		function(){
			$(this).prevAll().addClass('hover');
		},
		function(){
			$(this).prevAll().removeClass('hover');
		}
	);
	$('.star').click(function(){
		ratestar.updateStars($(this).attr('data-rating'), 'ratestar');
	});
});
