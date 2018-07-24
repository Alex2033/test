$(function() {

	var goodsItem = $(".goods__item").length;

	if ((goodsItem - 1) % 2 == 0) {
		$(".goods__button").css({
			"grid-column-start": "1",
			"grid-column-end": "3"
		});
	} 

});