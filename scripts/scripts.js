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

function validate() {
	var p1 = document.getElementById("Password");
	var p2 = document.getElementById("CPassword");
	if(p1.value!=p2.value){
		alert("Password didn't match!!");
		return false;
	}else return true;
	
}