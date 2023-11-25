$(function(){
	console.log('All Document Loaded');


	$('.login_button').on('click', function(){
		console.log('Login button is clicked')
		var username = $(this).siblings().find('.username');
		var password = $(this).siblings().find('.password');
		if ($(username).val() == ''){
			alert('Please input your username');
			username.focus();
		}
		else if ($(password).val() == ''){
			alert('Please input your password');
		}
		else {
			alert ('Form Submission Successful')
		}
	})

});