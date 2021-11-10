$(document).ready(function () {
	$('.navbar-text').click(function() {
		$('#loginModal').modal('show');
	})
	$('.close').click(function() {
		$('#loginModal').modal('hide');
	})
})