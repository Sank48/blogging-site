$(document).ready(function () {
	$('.login').click(function() {
		$('#loginModal').modal('show');
	});
	$('.signup').click(function(){
		$('#signupModal').modal('show');
	});
	$('.close').click(function() {
		$('#loginModal').modal('hide');
		$('#signupModal').modal('hide');
	});
})