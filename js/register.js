function showHidePassword() {
	var x = document.getElementById("password");
	console.log(x);
	if (x.type === "password") {
	x.type = "text";
	document.querySelector(".fa").classList.remove("fa-eye-slash");
	document.querySelector(".fa").classList.add("fa-eye");
	} else {
	x.type = "password";
	document.querySelector(".fa").classList.remove("fa-eye");
	document.querySelector(".fa").classList.add("fa-eye-slash");
	}
}
function showHiderePassword() {
	var x = document.getElementById("repassword");
	console.log(x);
	if (x.type === "password") {
	x.type = "text";
	document.querySelector("#retype").classList.remove("fa-eye-slash");
	document.querySelector("#retype").classList.add("fa-eye");
	} else {
	x.type = "password";
	document.querySelector("#retype").classList.remove("fa-eye");
	document.querySelector("#retype").classList.add("fa-eye-slash");
	}
}
