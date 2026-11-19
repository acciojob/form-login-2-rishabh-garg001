//your JS code here. If required.
// let form = document.getElementById("myForm")
function handleSubmit(event) {
	event.preventDeafult()

	let firstName = document.getElementById("firstName").value
	let lastName = document.getElementById("lastName").value
	let phoneNumber = document.getElementById("phoneNumber").value
	let email = document.getElementById("email").value

	alert(
		"First Name: " + firstName +
		" Last Name: " + lastName +
		" Phone Number: " + phoneNumber + 
		" Email ID: " + email
	);
})