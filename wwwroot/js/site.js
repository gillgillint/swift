// const form = document.getElementById("form");
// const firstName = document.getElementById("firstName");
// const lastName = document.getElementById("lastName");
// const Username = document.getElementById("Username");
// const Password = document.getElementById("Password");
// const Password2 = document.getElementById("Password2");

// const checkInput = function (inputArray) {
//   inputArray.forEach(function (input) {
//     if (input.value.trim() === "") {
//       showError(input, "Please fill out this field");
//     } else {
//       showSuccess(input);
//     }
//   });
// };

// const checkPassword = function (Password, Password2) {
//   if (Password.value !== Password2.value) {
//     showError(Password2, "Passwords do not match");
//   }
// };

// const showError = function (input, message) {
//   const formGroup = input.parentElement;
//   input.classList.add("error");
//   const small = formGroup.querySelector("small");
//   small.classList.add("visible");
//   small.innerText = message;
// };

// const showSuccess = function (input) {
//   const formGroup = input.parentElement;
//   input.classList.remove("error");
//   const small = formGroup.querySelector("small");
//   small.classList.remove("visible");
// };

// const validateEmail = function (email) {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   checkInput([firstName, lastName, Username, Password, Password2]);

//   if (Username.value === "") {
//     showError(Username, "Please fill out this field");
//   } else if (!validateEmail(Username.value)) {
//     showError(Username, "Wrong Email");
//   } else {
//     showSuccess(Username);
//   }
//   checkPassword(Password, Password2);
// });
