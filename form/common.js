// $(document).ready(function() {

// 	$("#form").submit(function() {
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			$(this).find("input").val("");
// 			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
// 			$("#form").trigger("reset");
// 		});
// 		return false;
// 	});
	
// });

const sendBtn = document.querySelector('.send_btn');
sendBtn.addEventListener('click', e => {
	e.preventDefault();
	sendMail();
});

function sendMail() {
	Email.send({
		SecureToken : "2e612b14-6b7d-4642-bdbe-e5c4302ed2c1",
		To : 'kolumb.vk@gmail.com',
		From : "you@isp.com",
		Subject : "This is the subject",
		Body : "And this is the body"
	}).then(
	message => alert(message)
	);
}
