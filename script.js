//your JS code here. If required.
// let form = document.getElementById("myForm")
function handleSubmit(event) {
	event.preventDefault()

	let firstName = document.getElementById("First Name").value
	let lastName = document.getElementById("Last Name").value
	let phoneNumber = document.getElementById("Phone Number").value
	let email = document.getElementById("Email ID").value

	alert(
		"First Name: " + firstName +
		" Last Name: " + lastName +
		" Phone Number: " + phoneNumber + 
		" Email ID: " + email
	);
})