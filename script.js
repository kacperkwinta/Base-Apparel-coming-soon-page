"use strict";

const email = document.querySelector('input[type="email"]');
const form = document.querySelector("form");
const error = document.querySelector(".error");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", function (event) {
	if (email.value === "" || email.value == null) {
		error.classList.remove("hidden");
		email.classList.add("input-invalid");
		errorIcon.classList.remove("hidden");
	}
});
